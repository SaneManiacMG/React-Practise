import React from "react";
import Greet from "./components/Greet";
import Counter from "./components/Counter";
import Message from "./components/Message";
import EventHandling from "./components/EventHandling";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import "./App.css";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";

function App() {
	return (
		<>
			<h1 className="error">Error</h1>
			<h1 className={styles.success}>Success</h1>
			<Stylesheet primary={true} />
			<Inline />
		</>
	);
}

export default App;
