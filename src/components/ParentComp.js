import React, { Component } from "react";
import MemoComponent from "./MemoComponent";

class ParentComp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "MG",
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: "MG",
			});
		}, 2000);
	}

	render() {
		console.log(
			`*************************Parent Comp Render*************************`
		);
		return (
			<div>
				<h1>Parent Component</h1>
				<MemoComponent name={this.state.name} />
			</div>
		);
	}
}

export default ParentComp;
