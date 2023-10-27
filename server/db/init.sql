CREATE DATABASE hackathon

CREATE TABLE users (
	id INT GENERATED ALWAYS AS IDENTITY UNIQUE,
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
	mobile_number VARCHAR(100) NOT NULL UNIQUE,
	country VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
	otp VARCHAR(1000),
	password VARCHAR(255) NOT NULL,
	created_at TIMESTAMP NOT NULL,
	updated_at TIMESTAMP NOT NULL
);

CREATE TABLE user_token (
	id INT GENERATED ALWAYS AS IDENTITY UNIQUE,
	token VARCHAR(255) NOT NULL,
	is_valid BOOLEAN NOT NULL,
	created_at TIMESTAMP NOT NULL,
	updated_at TIMESTAMP NOT NULL,
	fk_user INT,
	CONSTRAINT fk_user FOREIGN KEY(fk_user) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE power_consumption(
    id INT GENERATED ALWAYS AS IDENTITY UNIQUE,
    date DATE NOT NULL,
    power_consumed INT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    fk_user INT,
    CONSTRAINT fk_user FOREIGN KEY(fk_user) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE power_produced(
    id INT GENERATED ALWAYS AS IDENTITY UNIQUE,
    date DATE NOT NULL,
    power_produced INT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    fk_user INT,
    CONSTRAINT fk_user FOREIGN KEY(fk_user) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE power_consumption_prediction(
    id INT GENERATED ALWAYS AS IDENTITY UNIQUE,
    date DATE NOT NULL,
    power_consumed INT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    fk_user INT,
    CONSTRAINT fk_user FOREIGN KEY(fk_user) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE power_produced_prediction(
    id INT GENERATED ALWAYS AS IDENTITY UNIQUE,
    date DATE NOT NULL,
    power_produced INT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    fk_user INT,
    CONSTRAINT fk_user FOREIGN KEY(fk_user) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE user_weather(
    id INT GENERATED ALWAYS AS IDENTITY UNIQUE,
    date DATE NOT NULL,
    temperature INT NOT NULL,
    humidity INT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    fk_user INT,
    CONSTRAINT fk_user FOREIGN KEY(fk_user) REFERENCES users(id) ON DELETE CASCADE
)

CREATE TABLE sunlight(
    id INT GENERATED ALWAYS AS IDENTITY UNIQUE,
    date DATE NOT NULL,
    sunlight INT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    fk_user INT,
    CONSTRAINT fk_user FOREIGN KEY(fk_user) REFERENCES users(id) ON DELETE CASCADE
);