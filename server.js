import webpack from 'webpack';
import DevServer from 'webpack-dev-server';
import config from './webpack.config';

new DevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true
}).listen(3000, 'localhost', err => {
	if (err) {
		console.log(err);
	}
	console.log('listening on localhost:3000');
});
