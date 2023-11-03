import React from "react";
import "./App.css";
import "./appStyles.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

const App = () => {
	return (
		<>
			<HoverCounter />
			<ClickCounter name="MG" />
		</>
	);
};

export default App;
