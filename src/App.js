import React from "react";

import Header from "./features/header/Header";
import TodoList from "./features/todos/TodoList";
import Footer from "./features/footer/Footer";

function App() {
	return (
		<div className="App">
			<nav>
				<section>
					<h1>Quiz - 15th Sep 2022</h1>
				</section>
			</nav>
			<main>
				<section className="medium-container">
					<h2>French cuisine</h2>
					<div className="todoapp">
						<TodoList />
						<Footer />
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
