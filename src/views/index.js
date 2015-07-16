import React from 'react';
import todo from '../flux/creators';
import flux from '../flux';
import Todo from './todo';

@flux.connect()
export default class extends React.Component {
	submit() {
		flux.dispatch(todo.add(React.findDOMNode(this.refs.content).value));
	}
	clear() {
		flux.dispatch(todo.clear());
	}
	render() {
		let todos = this.state.todos.map(todo => <Todo todo={ todo } />);
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
