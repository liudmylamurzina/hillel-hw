import React, {
	Component,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import {
	createTodo as apiCreateTodo,
	removeTodo as apiRemoveTodo,
	updateTodo as apiUpdateTodo,
	getTodoList,
} from '../../api';

import NewTodoForm from '../NewTodoForm/NewTodoForm';
import TodoList from '../TodoList/TodoList';

let rendersCounter = 0;

function App() {
	const counter = ++rendersCounter;
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const timeoutRef = useRef(null);

	useEffect(() => {
			// console.log('Useeffect for ', counter,);

			getTodoList()
					.then((data) => {
							console.log('List update', list, counter);
							setList(data);
					})
					.catch(() => {
							setError('Something went wrong');
					});

			timeoutRef.current = setTimeout(() => '', 10000);

			return () => {
					clearTimeout(timeoutRef.current);
			};
			// setList([{ id: 0, title: 'Hello world', isDone: true }]);
	}, []);

	function onButtonClick() {
			clearTimeout(timeoutRef.current);
	}

	function fetchList() {
			return;
	}

	function updateTodo(updatedTodo) {
			const prevTodo = list.find((item) => item.id === updatedTodo.id);

			setList(
					list.map((item) =>
							item.id === updatedTodo.id ? updatedTodo : item,
					),
			);

			return apiUpdateTodo(updatedTodo).catch(() => {
					setError('Something went wrong');

					setList(
							list.map((item) => (item.id === prevTodo.id ? prevTodo : item)),
					);
			});
	}

	function toggleTodo(id) {
			const todo = list.find((item) => item.id === id);

			return updateTodo({ ...todo, isDone: !todo.isDone });
	}

	function removeTodo(id) {
			const newList = list.filter((item) => item.id !== id);

			setList(newList);

			return apiRemoveTodo(id);
	}

	function createTodo(newTodo) {
			newTodo = {
					...newTodo,
					isDone: false,
			};

			apiCreateTodo(newTodo).then((data) => {
					setList((prevValue) => [...prevValue, data]);
			});
	}

	console.log('Rendering App', counter);
	return (
			<div className="container">
					{error ? error : null}
					<TodoList list={list} onToggle={toggleTodo} onRemove={removeTodo} />
					<NewTodoForm onSave={createTodo} />
			</div>
	);
}

export default App;

