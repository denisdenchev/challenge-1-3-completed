import React from "react";
import styles from "./FootballTeamOrganiser.module.scss";
import PlayerCard from "../../components/PlayerCard";
import data from "../../data/football-team.data.json";

const FootballTeamOrganiser = () => {
	// const players = data.map((player) => player.id);
	// console.log(players);
	let selectedPlayers = [
		{
			id: 3176,
			name: "Matthias Ginter",
			position: "Defender",
			dateOfBirth: "1994-01-03T00:00:00Z",
			countryOfBirth: "Germany",
			nationality: "Germany",
			role: "PLAYER",
		},
	];

	let player1 = {
		id: 3176,
		name: "Mat Giensien",
		position: "Defender",
		dateOfBirth: "1994-01-03T00:00:00Z",
		countryOfBirth: "Germany",
		nationality: "Germany",
		role: "PLAYER",
	};
	// selectedPlayers.push(player1);
	// console.log(selectedPlayers);

	let newPlayerObj = [];
	console.log(newPlayerObj);

	return (
		<>
			<div className={styles.body}>
				<div className={styles.players}>
					<div className={styles.instructions}>
						<h2>Choose your start 11</h2>
						<h3> You can only have: </h3>
						<p>1 Goalkeeper</p>
						<p>3 Defenders</p>
						<p>3 Attackers</p>
						<p>4 Midfielders</p>
					</div>
					<h1>List of players</h1>

					{data.map(
						(player) => (
							player.position == null ? (player.position = "Coach") : null,
							(
								<PlayerCard
									name={player.name}
									position={player.position}
									dateOfBirth={player.dateOfBirth}
									nationality={player.nationality}
									id={player.id}
									handleClick={() => {
										newPlayerObj.push(player);
									}}
								/>
							)
						)
					)}
				</div>
				<div className={styles.selectedPlayers}>
					{selectedPlayers.map((player) => (
						<PlayerCard
							name={player.name}
							position={player.position}
							dateOfBirth={player.dateOfBirth}
							nationality={player.nationality}
							id={player.id}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default FootballTeamOrganiser;
