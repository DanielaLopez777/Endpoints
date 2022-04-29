CREATE TABLE "user" (
    "realm" TEXT,
    "username" VARCHAR(20) NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailverified" BOOL,
    "verificationtoken" TEXT,
    "id" SMALLSERIAL PRIMARY KEY
);

CREATE TABLE "profile" (
	"username" VARCHAR(20) REFERENCES "user"("username"),
	"bio" TEXT,
	"image" VARCHAR(255),
	PRIMARY KEY("username")
);

CREATE TABLE "article" (
	"id" SERIAL PRIMARY KEY,
	"slug" VARCHAR(255),
	"description" TEXT,
	"body" TEXT,
	"createdAt" TIMESTAMP,
	"updatedAt" TIMESTAMP,
	"author" VARCHAR(20) REFERENCES "user"("username"),
	"title" VARCHAR(255) NOT NULL
);

CREATE TABLE "comment" (
	"id" SERIAL PRIMARY KEY,
	"createdAt" TIMESTAMP,
	"updatedAt" TIMESTAMP,
	"body" TEXT,
	"author" VARCHAR(20) REFERENCES "user"("username"),
	"article" INT REFERENCES "article"("id")
);