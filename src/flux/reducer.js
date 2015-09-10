import Leaf from 'reducer/leaf';

export default Leaf([], {
	add: (todos, action) =>
		[{ id: todos.length === 0 ? 0 : todos[0].id + 1, text: action.text, done: false },
		...todos],
	delete: (todos, action) => todos.filter(todo => todo.id !== action.id),
	toggle: (todos, action) => todos.map(todo =>
		todo.id === action.id
			? { ...todo, done: !todo.done }
			: todo),
	edit: (todos, action) => todos.map(todo =>
		todo.id === action.id
			? { ...todo, text: action.text }
			: todo),
	clear: () => []
});
