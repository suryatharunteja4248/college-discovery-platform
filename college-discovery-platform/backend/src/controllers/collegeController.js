const prisma = require("../prisma/prisma");

const getAllColleges = async (req, res) => {
  try {
    const {
      search,
      state,
      minFees,
      maxFees,
      minRating,
      page = 1,
    } = req.query;

    const filters = {};

    if (search) {
      filters.name = {
        contains: search,
        mode: "insensitive",
      };
    }

    if (state) {
      filters.state = {
        equals: state,
        mode: "insensitive",
      };
    }

    if (minFees || maxFees) {
      filters.fees = {};

      if (minFees) {
        filters.fees.gte = Number(minFees);
      }

      if (maxFees) {
        filters.fees.lte = Number(maxFees);
      }
    }

    if (minRating) {
      filters.rating = {
        gte: Number(minRating),
      };
    }

    const colleges = await prisma.college.findMany({
      where: filters,

      skip: (page - 1) * 100,

      take: 100,

      orderBy: {
        ranking: "asc",
      },
    });

    const total = await prisma.college.count({
      where: filters,
    });

    res.json({
      success: true,
      total,
      page: Number(page),
      data: colleges,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch colleges",
    });
  }
};

const getCollegeBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const college = await prisma.college.findUnique({
      where: { slug },

      include: {
        courses: true,
      },
    });

    if (!college) {
      return res.status(404).json({
        success: false,
        message: "College not found",
      });
    }

    res.json({
      success: true,
      data: college,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch college",
    });
  }
};

const compareColleges = async (req, res) => {
  try {
    const { collegeIds } = req.body;

    if (!collegeIds || !Array.isArray(collegeIds)) {
      return res.status(400).json({
        success: false,
        message: "collegeIds array is required",
      });
    }

    const colleges = await prisma.college.findMany({
      where: {
        id: {
          in: collegeIds,
        },
      },
    });

    res.json({
      success: true,
      data: colleges,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to compare colleges",
    });
  }
};

module.exports = {
  getAllColleges,
  getCollegeBySlug,
  compareColleges,
};