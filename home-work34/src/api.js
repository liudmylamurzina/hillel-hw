import { API_URL } from './config';

export function getTodoList() {
    return fetch(API_URL).then((res) => res.json());
}

export function updateTodo(updatedTodo) {
    return fetch(API_URL + updatedTodo.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTodo),
    }).then((res) => res.json());
}

export function removeTodo(id) {
    return fetch(API_URL + id, {
        method: 'DELETE',
    });
}

export function createTodo(newTodo) {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
    }).then((res) => res.json());
}