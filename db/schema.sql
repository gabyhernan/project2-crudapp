DROP TABLE IF EXISTS favorites;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  username VARCHAR(255),
  password_digest VARCHAR(255)
);


CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  user_email VARCHAR REFERENCES users(email),
  pin_link VARCHAR(255),
  pin_image VARCHAR(255)
);




