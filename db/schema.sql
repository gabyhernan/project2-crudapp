DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  username VARCHAR(255),
  password_digest VARCHAR(255)
);


CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  user VARCHAR(255) references users(username),
  pin link VARCHAR(255),
  pin image VARCHAR(255)
);




