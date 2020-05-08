import React, { useState } from "react";
import styles from "./PlayerCard.module.scss";
// import data from "../../data/football-team.data.json";

const PlayerCard = (props) => {
	const { name, position, dateOfBirth, handleClick, nationality, id } = props;
	// const player1 = data[0];
	// console.log(player1.name);

	return (
		<>
			<div className={styles.playerCardContent}>
				<h2> {name}</h2>
				<h3>Position: {position}</h3>
				<h3>Date of birth: {dateOfBirth}</h3>
				<h3>Nationality: {nationality}</h3>
				<button id={id} onClick={handleClick}>
					Select Player
				</button>
			</div>
		</>
	);
};

export default PlayerCard;
