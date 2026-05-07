const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

const states = [
  "Telangana",
  "Tamil Nadu",
  "Karnataka",
  "Maharashtra",
  "Delhi",
  "Rajasthan",
  "Kerala",
  "Andhra Pradesh",
  "Uttar Pradesh",
  "Gujarat",
];

const cities = [
  "Hyderabad",
  "Chennai",
  "Bangalore",
  "Mumbai",
  "Delhi",
  "Jaipur",
  "Kochi",
  "Vijayawada",
  "Lucknow",
  "Ahmedabad",
];

const universityNames = [
  "IIT Hyderabad",
  "NIT Warangal",
  "BITS Pilani",
  "VIT Vellore",
  "SRM University",
  "Delhi Technological University",
  "JNTU Hyderabad",
  "Anna University",
  "Manipal Institute of Technology",
  "Osmania University",
];

const collegeImages = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
  
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1613896527026-f195d5c818ed?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1200&auto=format&fit=crop",
];

async function main() {
  await prisma.bookmark.deleteMany();
  await prisma.course.deleteMany();
  await prisma.college.deleteMany();

  for (let i = 1; i <= 100; i++) {
    const name =
      faker.helpers.arrayElement(universityNames) +
      ` ${i}`;

    const city =
      faker.helpers.arrayElement(cities);

    const state =
      faker.helpers.arrayElement(states);

    const createdCollege =
      await prisma.college.create({
        data: {
          name,

          slug:
            faker.helpers.slugify(
              name.toLowerCase()
            ) + `-${i}`,

          city,
          state,

          rating: Number(
            faker.number.float({
              min: 3.5,
              max: 5,
              fractionDigits: 1,
            })
          ),

          fees: faker.number.int({
            min: 50000,
            max: 500000,
          }),

          avgPackage: faker.number.int({
            min: 300000,
            max: 3500000,
          }),

          ranking: i,

          description:
            "A leading institution known for academic excellence, placements, innovation, and student-focused learning environment.",

          imageUrl:
            faker.helpers.arrayElement(
              collegeImages
            ),

          establishedYear:
            faker.number.int({
              min: 1950,
              max: 2020,
            }),

          courses: {
            create: [
              {
                name:
                  "B.Tech Computer Science",

                duration: "4 Years",

                fees: faker.number.int({
                  min: 80000,
                  max: 300000,
                }),
              },

              {
                name: "MBA",

                duration: "2 Years",

                fees: faker.number.int({
                  min: 100000,
                  max: 400000,
                }),
              },

              {
                name: "BBA",

                duration: "3 Years",

                fees: faker.number.int({
                  min: 50000,
                  max: 150000,
                }),
              },
            ],
          },
        },
      });

    console.log(
      `Created: ${createdCollege.name}`
    );
  }

  console.log(
    "100 colleges inserted successfully"
  );
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });