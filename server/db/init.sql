CREATE DATABASE hackathon;

\c hackathon;

CREATE TABLE users (
	id INT GENERATED ALWAYS AS IDENTITY UNIQUE,
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
	mobile_number VARCHAR(100) NOT NULL UNIQUE,
	country VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
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
    windspeed INT NOT NULL,
    temperature_2_m_above_gnd FLOAT NOT NULL,
    relative_humidity_2_m_above_gnd FLOAT NOT NULL,
    wind_speed_10_m_above_gnd FLOAT NOT NULL,
    wind_speed_80_m_above_gnd FLOAT NOT NULL,
    wind_direction_10_m_above_gnd FLOAT NOT NULL,
    wind_direction_80_m_above_gnd FLOAT NOT NULL,
    wind_speed_900_mb FLOAT NOT NULL,
    wind_gust_10_m_above_gnd FLOAT NOT NULL,
    angle_of_incidence FLOAT NOT NULL,
    zenith FLOAT NOT NULL,
    azimuth FLOAT NOT NULL,
    mean_sea_level_pressure_MSL FLOAT NOT NULL,
    total_precipitation_sfc FLOAT NOT NULL,
    snowfall_amount_sfc FLOAT NOT NULL,
    total_cloud_cover_sfc FLOAT NOT NULL,
    high_cloud_cover_high_cld_lay FLOAT NOT NULL,
    medium_cloud_cover_mid_cld_lay FLOAT NOT NULL,
    shortwave_radiation_backwards_sfc FLOAT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    fk_user INT,
    CONSTRAINT fk_user FOREIGN KEY(fk_user) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE user_location(
    id INT GENERATED ALWAYS AS IDENTITY UNIQUE,
    latitude INT NOT NULL,
    longitude INT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    fk_user INT,
    CONSTRAINT fk_user FOREIGN KEY(fk_user) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE llama_query(
    id INT GENERATED ALWAYS AS IDENTITY UNIQUE,
    query VARCHAR(255) NOT NULL,
    response VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
);
