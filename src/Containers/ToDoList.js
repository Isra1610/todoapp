import React, { useEffect } from "react";
import { useState } from "react";
import CreateToDo from "../Components/CreateToDo";
import ToDos from "../Components/ToDos";
import ToDoFilters from "../Components/ToDoFilters";

import "../styles/ToDoList.css";

const ToDoList = () => {
	const [taskList, setTaskList] = useState([]);

	useEffect(() => {
		const taskList = JSON.parse(localStorage.getItem("taskList"));
		setTaskList(taskList);
	}, []);

	const addTask = (task) => {
		const tempTaskList = [...taskList];
		tempTaskList.push(task);
		localStorage.setItem("taskList", JSON.stringify(tempTaskList));
		setTaskList(tempTaskList);
	};

	const deleteTask = (index) => {
		const tempList = [...taskList];
		tempList.splice(index, 1);
		localStorage.setItem("taskList", JSON.stringify(tempList));
		setTaskList(tempList);
	};

	const updateTask = (index, task) => {
		console.log("clicked");
		const tempList = [...taskList];
		tempList[index] = task;
		localStorage.setItem("taskList", JSON.stringify(tempList));
		setTaskList(tempList);
	};

	const deleteAll = () => {
		localStorage.removeItem("taskList");
		setTaskList([]);
	};

	const allTasks = () => {
		return taskList;
	};

	const activeTasks = () => {
		return taskList.filter((task) => task.checked === false);
	};

	const completedTasks = () => {
		return taskList.filter((task) => task.checked);
	};

	return (
		<div className="ToDoContainer">
			<CreateToDo add={addTask} />
			<ToDoFilters
				allTasks={allTasks}
				activeTasks={activeTasks}
				completedTasks={completedTasks}
			/>
			<h2 className="taskRemaining">{taskList.length} tasks remaining</h2>
			<h2 className="listContainer">
				{taskList &&
					taskList.map((task, index) => (
						<ToDos
							taskObj={task}
							index={index}
							deleteTask={deleteTask}
							updateTask={updateTask}
							key={task}
						/>
					))}
			</h2>
			<button onClick={deleteAll} className="deleteAll">
				Delete all Tasks
			</button>
		</div>
	);
};

export default ToDoList;
