import React from "react";
import EditToDo from "./EditToDo";
import "../styles/ToDos.css";

const ToDos = ({ taskObj, index, deleteTask, updateTask }) => {
	const handleChecked = (e) => {
		let task = {
			index: index,
			task: e.target.value,
			isCompleted: e.target.checked,
		};
		console.log(task);
		return task;
	};

	const handleDetele = () => {
		deleteTask(index);
	};

	const handleEdit = () => {
		updateTask(index);
	};

	return (
		<div className="list">
			<div className="list__Name">
				<input type="checkbox" onChange={handleChecked} className="check" />
				<li>{taskObj}</li>
			</div>
			<div className="list__edit">
				<div className="edit">
					<EditToDo onClick={handleEdit} index={index} />
				</div>
				<div className="delete">
					<button className="deleteButton" onClick={handleDetele}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default ToDos;
