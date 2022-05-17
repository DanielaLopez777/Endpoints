CREATE TABLE "profile" (
	"id" SERIAL,
	"username" VARCHAR(20) ,
	"bio" TEXT,
	"image" VARCHAR(255),
	PRIMARY KEY("username")
);

CREATE TABLE "user" (
    "realm" TEXT,
    "username" VARCHAR(20) REFERENCES "profile"("username"),
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
	"author" VARCHAR(20) REFERENCES "profile"("username"),
	"title" VARCHAR(255) NOT NULL
);

CREATE TABLE "comment" (
	"id" SERIAL PRIMARY KEY,
	"createdAt" TIMESTAMP,
	"updatedAt" TIMESTAMP,
	"body" TEXT,
	"author" VARCHAR(20) REFERENCES "profile"("username"),
	"article" INT REFERENCES "article"("id")
);