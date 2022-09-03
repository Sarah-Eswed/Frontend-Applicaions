import React from "react";
import "./Person.css";

const person = (props) => {
	return (
		<div className="Person">
			<p onClick={props.click}>
				I'm {props.name} and I am {props.age} years old !
			</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	);
};

export default person;

/* import Person from './Person/Person';




class App extends Component {

state= {

  person : [

    { name:"Sarah", age: 20},
    { name:"Razan" , age: 23 },
    { name:"Osama" , age: 21},
    { name:"Monther", age: 24}


  ]
}

switchNameHandler = () => {

this.setState({person:[
  { name:"Mohammed Aljasem", age:22 },
  { name:"Mohammad Bdour" , age: 23},
  { name:"Abdallah Alhajied" , age: 18},
  { name:"Sarah Al-Eswed", age: 20}

]
})
}

render(){
return(

<div className="App">

<h1 className="title">This is state live code, enjoy 😁 </h1>

<button className="btn" onClick={this.switchNameHandler}>Switch Name and Age </button>

<Person name={this.state.person[0].name} age={this.state.person[0].age} /> 
<Person name={this.state.person[1].name} age={this.state.person[1].age} />  
<Person name={this.state.person[2].name} age={this.state.person[2].age} />
<Person name={this.state.person[3].name} age={this.state.person[3].age} /> 
</div>
);


}
}

export default App;

 */
