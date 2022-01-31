DROP TABLE IF EXISTS junior_devs CASCADE;

CREATE TABLE "junior_devs" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "first_name" VARCHAR(50) NOT NULL,
  "last_name" VARCHAR(50) NOT NULL,
  "email" VARCHAR(50) NOT NULL,
  "password" VARCHAR(500) NOT NULL,
  "phone_number" VARCHAR(25),
  "city" VARCHAR(25),
  "headline" VARCHAR(25),
  "bio" VARCHAR(225),
  "photo_url" VARCHAR(255) DEFAULT 'https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1-300x300.jpg',
  "github_url" VARCHAR(225),
  "linkedin_url" VARCHAR(225),
  "resume_url" VARCHAR(225)
  );