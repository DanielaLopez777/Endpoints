CREATE TABLE "profile" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR(20) ,
	"bio" TEXT,
	"image" VARCHAR(255)
);

CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
    "username" TEXT,
    "profileId" serial REFERENCES "profile"("id"),
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailverified" BOOLEAN,
    "verificationtoken" TEXT
);

CREATE TABLE "article" (
	"id" SERIAL PRIMARY KEY,
	"description" TEXT,
	"body" TEXT,
	"createdAt" TIMESTAMP,
	"updatedAt" TIMESTAMP,
	"profileId" serial REFERENCES "profile"("id"),
	"title" VARCHAR(255) NOT NULL
);

CREATE TABLE "comment" (
	"id" SERIAL PRIMARY KEY,
	"createdAt" TIMESTAMP,
	"updatedAt" TIMESTAMP,
	"body" TEXT,
	"profileId" serial REFERENCES "profile"("id"),
	"articleId" INT REFERENCES "article"("id")
);

CREATE TABLE "follows" (
	"id" SERIAL PRIMARY KEY,
	"follower" INT REFERENCES "user"("id"),
	"following" INT REFERENCES "profile"("id")
);