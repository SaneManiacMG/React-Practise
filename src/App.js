import React from "react";
import "./App.css";
import "./appStyles.css";
import Hero from "./components/Hero";
import ErrorBoundry from "./components/ErrorBoundry";

const App = () => {
	return (
		<>
			<p>App.js</p>
			<ErrorBoundry>
				<Hero heroName={"Batman"} />
			</ErrorBoundry>

			<ErrorBoundry>
				<Hero heroName={"Superman"} />
			</ErrorBoundry>

			<ErrorBoundry>
				<Hero heroName={"Joker"} />
			</ErrorBoundry>
		</>
	);
};

export default App;
