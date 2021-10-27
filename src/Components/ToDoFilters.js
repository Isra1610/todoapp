import React from "react";
import "../styles/ToDoFilters.css";

const ToDoFilters = ({ allTasks, activeTasks, completedTasks }) => {
	const handleAllTasks = () => {
		let click = "";
		allTasks(click);
	};

	const handleActiveTasks = () => {
		let click = false;
		activeTasks(click);
	};

	const handleCompletedTasks = () => {
		let click = true;
		completedTasks(click);
	};

	return (
		<div className="filters">
			<button className="filter__button" onClick={handleAllTasks}>
				Show all tasks
			</button>
			<button className="filter__button" onClick={handleActiveTasks}>
				Show active tasks
			</button>
			<button className="filter__button" onClick={handleCompletedTasks}>
				Show completes tasks
			</button>
		</div>
	);
};

export default ToDoFilters;
