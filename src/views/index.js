import React from 'react';
import todo from '../flux/creators';
import { dispatch, connect } from '../flux';
import Todo from './todo';

@connect('todos')
export default class extends React.Component {
	submit() {
		dispatch(todo.add(React.findDOMNode(this.refs.content).value));
	}
	clear() {
		dispatch(todo.clear());
	}
	render() {
		let todos = this.state.todos.map(t =>
			<Todo
				{ ...t }
				delete={ () => dispatch(todo.delete(t.id)) }
				toggle={ () => dispatch(todo.toggle(t.id)) }
				edit={ val => dispatch(todo.edit(t.id, val)) }
			/>);
		return (
			<div>
				<input ref='content' />
				<button onClick={ ::this.submit }>Submit</button>
				<button onClick={ ::this.clear }>Clear</button>
				{ todos }
			</div>
		);
	}
}
