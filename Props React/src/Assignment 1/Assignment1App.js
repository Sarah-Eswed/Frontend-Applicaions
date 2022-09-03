import React, { Component } from "react";
import "./App.css";
import UserInput from "./Assignment 1/UserInput";
import UserOutput from "./Assignment 1/UserOutput";

class App extends Component {
	state = {
		username: "khadeejah",
	};

	usernameChangeHandler = (event) => {
		this.setState({ username: event.target.value });
	};
	render() {
		return (
			<div className="App">
				<UserInput
					changed={this.usernameChangeHandler}
					currentName={this.state.username}
				/>
				<UserOutput userName={this.state.username} />
				<UserOutput userName={this.state.username} />
				<UserOutput userName="Sarah" />
			</div>
		);
	}
}

export default App;
