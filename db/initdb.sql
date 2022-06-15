CREATE TABLE "profile" (
	"id" SERIAL,
	"username" VARCHAR(20) ,
	"bio" TEXT,
	"image" VARCHAR(255),
	PRIMARY KEY("id")
);

CREATE TABLE "user" (
    "realm" TEXT,
    "username" serial REFERENCES "profile"("id"),
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailverified" BOOLEAN,
    "verificationtoken" TEXT,
	"userid" SERIAL,
    "id" SERIAL PRIMARY KEY
);

CREATE TABLE "article" (
	"id" SERIAL PRIMARY KEY,
	"slug" VARCHAR(255),
	"description" TEXT,
	"body" TEXT,
	"createdAt" TIMESTAMP,
	"updatedAt" TIMESTAMP,
	"author" serial REFERENCES "profile"("id"),
	"title" VARCHAR(255) NOT NULL
);

CREATE TABLE "comment" (
	"id" SERIAL PRIMARY KEY,
	"createdAt" TIMESTAMP,
	"updatedAt" TIMESTAMP,
	"body" TEXT,
	"author" serial REFERENCES "profile"("id"),
	"article" INT REFERENCES "article"("id")
);

CREATE TABLE "follows" (
	"id" SERIAL PRIMARY KEY,
	"follower" INT REFERENCES "user"("id"),
	"following" INT REFERENCES "profile"("id")
);