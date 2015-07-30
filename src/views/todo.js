import React from 'react';

export default class extends React.Component {
	constructor() {
		super();
		this.state = { editing: false };
	}
	edit() {
		this.setState({ editing: false });
		this.props.edit(React.findDOMNode(this.refs.text).value);
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
				<span style={{ cursor: 'hand' }} onClick={ props.delete }>×</span>
				<input type='checkbox' checked={ props.done } onChange={ props.toggle }/>
				{ text }
			</div>
		);
	}
}
