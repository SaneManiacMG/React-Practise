import React from "react";
import "./App.css";
import "./appStyles.css";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import Counter from "./components/Counter";

const App = () => {
	return (
		<>
			{/* <ClickCounterTwo />
			<HoverCounterTwo />
			<User render={(isLoggedIn) => (isLoggedIn ? "MG" : "GUEST")} /> */}
			<Counter
				render={(count, incrementCount) => (
					<ClickCounterTwo count={count} incrementCount={incrementCount} />
				)}
			/>
			<Counter
				render={(count, incrementCount) => (
					<HoverCounterTwo count={count} incrementCount={incrementCount} />
				)}
			/>
		</>
	);
};

export default App;
