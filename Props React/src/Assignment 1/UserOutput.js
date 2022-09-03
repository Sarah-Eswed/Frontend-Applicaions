import React from "react";
import "./UserOutput.css";

const UserOutput = (props) => {
	return (
		<div className="UserOutput">
			<p>Username: {props.userName}</p>
			<p> i dont have time to think only to watch and apply, sorry</p>
		</div>
	);
};

export default UserOutput;
