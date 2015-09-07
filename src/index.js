import React from 'react';
import { Context } from 'fluxette-react';
import flux from './flux';
import App from './views/';

React.render(
	<Context flux={ flux }>
		{ () => <App /> }
	</Context>,
	document.getElementById('root')
);
