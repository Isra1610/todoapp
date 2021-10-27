import React from "react";
import "../styles/ToDos.css";
import "../styles/EditButton.css";

const ToDos = ({ taskObj, index, deleteTask, updateTask, toggleTask }) => {
	const handleDetele = () => {
		deleteTask(index);
	};

	const handleEdit = () => {
		let newTask = prompt("new to do name");
		updateTask(newTask, index);
	};

	return (
		<div className="list" key={taskObj.name}>
			<div className="list__Name">
				<input
					type="checkbox"
					checked={taskObj.done}
					onChange={() => toggleTask(taskObj)}
				/>
				<li>{taskObj.name}</li>
			</div>
			<div className="list__edit">
				<div className="edit">
					<button className="editButton" onClick={handleEdit}>
						Edit
					</button>
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
