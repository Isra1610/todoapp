import React from "react";
import "../styles/ToDoFilters.css";

const ToDoFilters = ({ allTasks, activeTasks, completedTasks }) => {
	const handleAllTasks = () => {
		console.log("clicked");
		allTasks();
	};

	const handleActiveTasks = () => {
		console.log("clicked");
		activeTasks();
	};

	const handleCompletedTasks = () => {
		console.log("clicked");
		completedTasks();
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
