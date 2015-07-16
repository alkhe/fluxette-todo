import TODO from './types';
import state from '.';

let actions = {
	add: text => ({ type: TODO.ADD, text: text.trim() }),
	delete: id => ({ type: TODO.DELETE, id }),
	toggle: id => ({ type: TODO.TOGGLE, id }),
	edit: (id, text) => ({ type: TODO.EDIT, id, text }),
	clear: () => ({ type: TODO.CLEAR }),
}

export default actions;
