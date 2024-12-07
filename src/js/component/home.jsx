import React from "react";
import { TrafficLights } from "./TrafficLights";



//create your first component
const Home = () => {
	return (
		<div className="container text-center">
			<h1 className="text-center mt-5 text-primary alert alert-primary">Traffic Lights</h1>
		<TrafficLights/>
		</div>
	);
};

export default Home;
