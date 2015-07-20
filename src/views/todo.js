import React from 'react';
import todo from '../flux/creators';
import { dispatch } from '../flux';

export default class extends React.Component {
	constructor() {
		super();
		this.state = { editing: false };
	}
	delete() {
		dispatch(todo.delete(this.props.id));
	}
	toggle() {
		dispatch(todo.toggle(this.props.id));
	}
	edit() {
		this.setState({ editing: false });
		dispatch(todo.edit(this.props.id, React.findDOMNode(this.refs.text).value));
	}
	editBegin() {
		this.setState({ editing: true });
	}
	render() {
		let { props, state } = this;
		let text = state.editing
			? <input ref='text' defaultValue={ props.text } onBlur={ ::this.edit } autoFocus='true'/>
			: <span onClick={ ::this.editBegin } style={{ textDecoration: props.done ? 'line-through' : 'none' }}>{ props.text }</span>;
		return (
			<div>
				<span style={{ cursor: 'hand' }} onClick={ ::this.delete }>×</span>
				<input type='checkbox' checked={ props.done } onChange={ ::this.toggle }/>
				{ text }
			</div>
		);
	}
}
