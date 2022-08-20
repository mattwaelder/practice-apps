DROP DATABASE IF EXISTS checkout;
CREATE DATABASE checkout;

USE checkout;

CREATE TABLE userinfo (
  id integer primary key auto_increment,
  sessionid varchar(100),
  username varchar(25),
  password varchar(10)
);

CREATE TABLE shipinfo (
  id integer primary key auto_increment,
  sessionid varchar(100),
  address varchar(100),
  phone varchar(20)
);

-- YYYY-MM-DD
CREATE TABLE billinfo (
  id integer primary key auto_increment,
  sessionid varchar(100),
  cc varchar(30),
  expiration date
);