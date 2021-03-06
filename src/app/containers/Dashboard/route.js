module.exports = {
	path: 'dashboard',
	getChildRoutes(location, cb) {
		require.ensure([], (require) => {
			cb(null, [
				require('./General/route.js'),
				require('./Cake/route.js'),
				require('./Users/route.js'),
				require('./Starwars/route.js')
			])
		})
	},
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./index.js').default)
		})
	}
}