import React from 'react';
import todoActions from '../flux/actions';
import { connect } from 'fluxette-react';
import Todo from './todo';

@connect(todos => ({ todos }))
export default class extends React.Component {
	submit() {
		this.dispatch(todoActions.add(React.findDOMNode(this.refs.title).value));
	}
	clear() {
		this.dispatch(todoActions.clear());
	}
	render() {
		let { dispatch } = this;
		let todos = this.state.todos.map(t =>
			<Todo
				{ ...t }
				delete={ () => dispatch(todoActions.delete(t.id)) }
				toggle={ () => dispatch(todoActions.toggle(t.id)) }
				edit={ val => dispatch(todoActions.edit(t.id, val)) }
			/>
		);
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
