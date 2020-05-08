import React from "react";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import FootballTeamOrganiser from "./containers/FootballTeamOrganiser";
import Weather from "./containers/Weather";

const App = () => {
	return (
		<>
			<div>
				<Navbar />
				<Router>
					<FootballTeamOrganiser path='/footballteamorganiser' />
					<Weather path='/weather' />
				</Router>
			</div>
		</>
	);
};
export default App;
