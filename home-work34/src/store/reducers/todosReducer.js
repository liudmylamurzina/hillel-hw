import {
	TODOS_CREATE_TODO,
	TODOS_REMOVE_TODO,
	TODOS_SET_LIST,
	TODOS_SET_LOADING,
	TODOS_UPDATE_TODO,
} from '../actions/todoActions';

const initialValue = {
	isLoading: false,
	list: [],
};

function updateTodo(state, updatedTodo) {
	return {
			...state,
			list: state.list.map((item) =>
					item.id !== updatedTodo.id ? item : updatedTodo,
			),
	};
}

function removeTodo(state, id) {
	return {
			...state,
			list: state.list.filter((item) => item.id !== id),
	};
}

function createTodo(state, newTodo) {
	return {
			...state,
			list: [...state.list, { ...newTodo, isDone: false, id: Date.now() }],
	};
}

export default function todosReducer(state = initialValue, { type, payload }) {
	console.log('reducer', type, payload);

	switch (type) {
			case TODOS_UPDATE_TODO:
					return updateTodo(state, payload);
			case TODOS_REMOVE_TODO:
					return removeTodo(state, payload);
			case TODOS_CREATE_TODO:
					return createTodo(state, payload);
			case TODOS_SET_LIST:
					return { ...state, list: payload };
			case TODOS_SET_LOADING:
					return { ...state, isLoading: payload };
			default:
					return state;
	}
}