import React from 'react';
import $todo from '../flux/creators';
import { connect } from 'fluxette';
import Todo from './todo';

let fluxof = c => c.context.flux;

@connect(todos => ({ todos }))
export default class extends React.Component {
	submit() {
		fluxof(this).dispatch($todo.add(React.findDOMNode(this.refs.title).value));
	}
	clear() {
		fluxof(this).dispatch($todo.clear());
	}
	render() {
		let { dispatch } = fluxof(this);
		let todos = this.state.todos.map(t =>
			<Todo
				{ ...t }
				delete={ () => dispatch($todo.delete(t.id)) }
				toggle={ () => dispatch($todo.toggle(t.id)) }
				edit={ val => dispatch($todo.edit(t.id, val)) }
			/>);
		return (
			<div>
				<input ref='title' />
				<button onClick={ ::this.submit }>Submit</button>
				<button onClick={ ::this.clear }>Clear</button>
				{ todos }
			</div>
		);
	}
}
