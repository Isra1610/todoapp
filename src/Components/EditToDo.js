import React, { useEffect, useState } from "react";
import "../styles/EditButton.css";

const EditToDo = ({ updateTask, taskObj, index }) => {
	const [toDoName, setToDoName] = useState("");

	/* const handleChange = (e) => {
		const { value } = e.target;
		console.log(value);
		setToDoName(value);
	}; */

	const handleEdit = () => {
		let toDo = {};
		toDo = toDoName;
		updateTask(toDo, index);
	};

	useEffect(() => {
		setToDoName(taskObj);
	}, [taskObj]);

	return (
		<button className="editButton" onClick={handleEdit}>
			Edit
		</button>
	);
};

export default EditToDo;
