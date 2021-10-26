import React, { useState } from "react";
import "../styles/CreateToDo.css";

const CreateToDo = ({ add }) => {
	const [toDoName, setToDoName] = useState("");

	const handleChange = (e) => {
		const { value } = e.target;
		setToDoName(value);
	};

	const handleSave = () => {
		let toDo = {};
		toDo = toDoName;
		add(toDo);
		setToDoName("");
	};

	return (
		<div className="inputContainer">
			<input
				className="inp"
				type="text"
				placeholder="Add a ToDo"
				value={toDoName}
				onChange={handleChange}
			/>
			<button className="inputButton" onClick={handleSave}>
				Add
			</button>
		</div>
	);
};

export default CreateToDo;
