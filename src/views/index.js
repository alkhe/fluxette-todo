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
		let todos = this.state.todos.map(todo => <Todo { ...todo } />);
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
