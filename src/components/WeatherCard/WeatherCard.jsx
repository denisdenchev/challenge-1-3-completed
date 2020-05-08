import React from "react";
import styles from "./WeatherCard.module.scss";
import { useState } from "react";
import { useEffect } from "react";

const WeatherCard = (props) => {
	const { location, image } = props;
	const [name, setName] = useState();
	const [temperature, setTemperature] = useState();
	const [humidity, setHumidity] = useState();
	const [maxTemp, setMaxTemp] = useState();
	const [minTemp, setMinTemp] = useState();
	const [feelsLike, setFeelsLike] = useState();

	useEffect(() => {
		getLocationDetails(location);
	});

	const getLocationDetails = (location) => {
		fetch(
			`http://api.openweathermap.org/data/2.5/weather?id=${location}&units=metric&appid=0f33f5c78acf44e7d38b5f6706f6f59d`
		)
			.then((result) => result.json())
			.then((result) => {
				return (
					setName(result.name),
					setTemperature(result.main.temp),
					setFeelsLike(result.main.feels_like),
					setHumidity(result.main.humidity),
					setMaxTemp(result.main.temp_max),
					setMinTemp(result.main.temp_min)
				);
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<div
				className={styles.content}
				style={{ backgroundImage: `url(${image})` }}
			>
				<div />
				<h2>{name}</h2>
				<h3>{`Temperature : ${temperature}°C`}</h3>
				<h3>{`Feels like : ${feelsLike}°C`}</h3>
				<h3>{`Humidity: ${humidity}%`}</h3>
				<h3>{`Max Temp : ${maxTemp}°C`}</h3>
				<h3>{`Min Temp: ${minTemp}°C`}</h3>
			</div>
		</>
	);
};

export default WeatherCard;
