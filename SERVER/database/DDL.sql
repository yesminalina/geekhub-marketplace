CREATE DATABASE geekhub;

\c geekhub;

CREATE TABLE users(
id              SERIAL          NOT NULL,
first_name      VARCHAR(35)     NOT NULL,
last_name       VARCHAR(35)     NOT NULL,
address         VARCHAR(100)    NOT NULL,
phone_number    INT             NOT NULL,
password        VARCHAR(35)     NOT NULL,
email           VARCHAR(50)     NOT NULL UNIQUE,
photo_url       VARCHAR(255),    
PRIMARY KEY (id)
);

CREATE TABLE products(
id              SERIAL          NOT NULL,
user_id         INT             NOT NULL,
title           VARCHAR(50)     NOT NULL,
price           INT             NOT NULL,
description     VARCHAR(300)    NOT NULL, 
stock           INT             NOT NULL,
image_url       VARCHAR(255)    NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE categories(
id              SERIAL          NOT NULL,
name            VARCHAR(35)     NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE orders(
id              SERIAL          NOT NULL,
user_id         INT             NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE favorites(
id              SERIAL          NOT NULL,
user_id         INT             NOT NULL,
product_id      INT             NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE scores(
id              SERIAL          NOT NULL,
user_id         INT             NOT NULL,
product_id      INT             NOT NULL,
scores          INT             NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE order_product(
id              SERIAL          NOT NULL,
order_id        INT             NOT NULL,
product_id      INT             NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (order_id) REFERENCES orders(id),
FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE product_category(
id              SERIAL          NOT NULL,
product_id      INT             NOT NULL,
category_id      INT             NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (product_id) REFERENCES products(id),
FOREIGN KEY (category_id) REFERENCES categories(id)
);