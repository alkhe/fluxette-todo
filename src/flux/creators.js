import state from '.';

let actions = {
	add: text => ({ type: 'add', text: text.trim() }),
	delete: id => ({ type: 'delete', id }),
	toggle: id => ({ type: 'toggle', id }),
	edit: (id, text) => ({ type: 'edit', id, text }),
	clear: () => ({ type: 'clear' }),
}

export default actions;
