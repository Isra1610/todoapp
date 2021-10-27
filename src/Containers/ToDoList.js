import React from "react";
import { useState } from "react";
import CreateToDo from "../Components/CreateToDo";
import ToDos from "../Components/ToDos";
import ToDoFilters from "../Components/ToDoFilters";

import "../styles/ToDoList.css";

const ToDoList = () => {
	const [taskList, setTaskList] = useState([
		{
			name: "tarea 1",
			done: false,
		},
		{
			name: "tarea 2",
			done: false,
		},
		{
			name: "tarea 3",
			done: false,
		},
		{
			name: "tarea 4",
			done: false,
		},
	]);

	//-----toggleTask------

	const toggleTask = (task) => {
		setTaskList(
			taskList.map((item) =>
				item.name === task.name ? { ...item, done: !item.done } : item
			)
		);
	};

	//-------CRUD--------

	const addTask = (taskName) => {
		if (!taskList.find((task) => task.name === taskName)) {
			setTaskList([...taskList, { name: taskName, done: false }]);
		} else {
			alert("Task already exists");
		}
	};

	const deleteTask = (index) => {
		const tempList = [...taskList];
		tempList.splice(index, 1);
		setTaskList(tempList);
	};

	const updateTask = (taskName, index) => {
		if (!taskList.find((task) => task.name === taskName)) {
			const tempList = [...taskList];
			tempList[index].name = taskName;
			setTaskList(tempList);
		} else {
			alert("Task already exists");
		}
	};

	const deleteAll = () => {
		localStorage.removeItem("taskList");
		setTaskList([]);
	};

	//-------Filters--------

	const [flag, setFlag] = useState("");

	const allTasks = (click) => {
		setFlag(click);
	};

	const activeTasks = (click) => {
		setFlag(click);
	};

	const completedTasks = (click) => {
		setFlag(click);
	};

	console.log(flag);

	//-------Maping--------

	const toDoLists = (doneValue) => {
		if (flag === "") {
			return taskList.map((task, index) => (
				<ToDos
					toggleTask={toggleTask}
					taskObj={task}
					index={index}
					deleteTask={deleteTask}
					updateTask={updateTask}
				/>
			));
		} else {
			return taskList
				.filter((task) => task.done === doneValue)
				.map((task, index) => (
					<ToDos
						toggleTask={toggleTask}
						taskObj={task}
						index={index}
						deleteTask={deleteTask}
						updateTask={updateTask}
					/>
				));
		}
	};

	console.log(flag);

	return (
		<div className="ToDoContainer">
			<CreateToDo add={addTask} />
			<ToDoFilters
				allTasks={allTasks}
				activeTasks={activeTasks}
				completedTasks={completedTasks}
			/>
			<h2 className="taskRemaining">
				{taskList.filter((t) => !t.done).length} tasks remaining
			</h2>
			<h2 className="listContainer">{taskList && toDoLists(flag)}</h2>
			<button onClick={deleteAll} className="deleteAll">
				Delete all Tasks
			</button>
		</div>
	);
};

export default ToDoList;
