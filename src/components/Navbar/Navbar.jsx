import React from "react";
import styles from "./Navbar.module.scss";
import FootballTeamOrganiser from "../../containers/FootballTeamOrganiser";
import Weather from "../../containers/Weather";
import { Link } from "@reach/router";

const Navbar = () => {
	return (
		<>
			<div className={styles.navContent}>
				<div>
					<Link to='/footballteamorganiser'>Football Team Organiser</Link>
				</div>

				<div>
					<Link to='/weather'>Weather App</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
