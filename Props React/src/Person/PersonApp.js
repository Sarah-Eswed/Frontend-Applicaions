import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
	state = {
		persons: [
			{ name: "Zeina", age: 19 },
			{ name: "Zaid", age: 15 },
			{ name: "Rama", age: 12 },
		],
	};

	switchNameHandler = (newName) => {
		// console.log("was clicked");
		// this.state.persons[0].name = "Sarah";
		this.setState({
			persons: [
				{ name: newName, age: 20 },
				{ name: "Ashraf", age: 24 },
				{ name: "Rama", age: 12 },
			],
		});
	};

	nameChangeHandler = (event) => {
		this.setState({
			persons: [
				{ name: "Max", age: 20 },
				{ name: event.target.value, age: 24 },
				{ name: "Rama", age: 12 },
			],
		});
	};
	render() {
		const style = {
			backgroundColor: "white",
			font: "inherit",
			border: "1px solid blue",
			padding: "8px",
			cursor: "pointer",
		};

		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p>This is really working !</p>
				<button style={style} onClick={() => this.switchNameHandler("Maher")}>
					Switch Name
				</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={this.switchNameHandler.bind(this, "Sarah !!")}
					changed={this.nameChangeHandler}
				>
					My Hobbies: Racing
				</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>
			</div>
		);
	}
}

export default App;
