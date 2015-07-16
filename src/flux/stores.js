import { Store } from 'fluxette';
import TODO from './types';

export default {
	todos: Store([], {
		[TODO.ADD]: (todos, action) => [
			{ id: todos.length == 0 ? 0 : todos[0].id + 1, text: action.text, done: false },
			...todos
		],
		[TODO.DELETE]: (todos, action) => todos.filter(todo => todo.id != action.id),
		[TODO.TOGGLE]: (todos, action) => todos.map(todo => todo.id == action.id
				? { ...todo, done: !todo.done } : todo),
		[TODO.EDIT]: (todos, action) => todos.map(todo => todo.id == action.id
				? { ...todo, text: action.text } : todo),
		[TODO.CLEAR]: todos => []
	})
}
