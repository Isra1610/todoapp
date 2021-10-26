import React from "react";
import EditToDo from "./EditToDo";
import "../styles/ToDos.css";

const ToDos = ({ taskObj, id, deleteTask, updateTask }) => {
	/* const handleChecked = (e) => {
		let checkArr = [taskObj, e.target.id];
		if (taskObj.includes(e.target.id)) {
			checkArr = [taskObj.filter((item) => item !== e.target.id), e.target.id];
		}
		
	}; */

	const handleDetele = () => {
		deleteTask(id);
	};

	const handleEdit = () => {
		updateTask(id);
	};

	return (
		<div className="list">
			<div className="list__Name">
				<input
					type="checkbox"
					/* onChange={handleChecked} */ className="check"
				/>
				<li>{taskObj}</li>
			</div>
			<div className="list__edit">
				<div className="edit">
					<EditToDo onClick={handleEdit} id={id} />
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
