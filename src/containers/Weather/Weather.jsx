import React from "react";
import styles from "./Weather.module.scss";
import WeatherCard from "../../components/WeatherCard";
import london from "../../assets/london.jpg";
import rome from "../../assets/rome.jpg";
import bristol from "../../assets/bristol.jpg";

const Weather = () => {
	return (
		<>
			<div className={styles.displayCards}>
				<WeatherCard location={2643744} image={london} />
				<WeatherCard location={4749005} image={bristol} />
				<WeatherCard location={4219762} image={rome} />
			</div>
		</>
	);
};

export default Weather;
