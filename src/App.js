import React from "react";
import Header from "./Containers/Header";
import ToDoList from "./Containers/ToDoList";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<ToDoList />
		</div>
	);
}

export default App;
