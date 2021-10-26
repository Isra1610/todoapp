import React, { useEffect, useState } from "react";
import "../styles/EditButton.css";

const EditToDo = ({ updateTask, taskObj, index }) => {
	const [toDoName, setToDoName] = useState("");

	useEffect(() => {
		setToDoName(taskObj);
	}, []);

	const handleEdit = () => {
		let newTask = prompt("new to do name");
		if (newTask) {
			updateTask(newTask, index);
		}
	};

	return (
		<button className="editButton" onClick={handleEdit}>
			Edit
		</button>
	);
};

export default EditToDo;
