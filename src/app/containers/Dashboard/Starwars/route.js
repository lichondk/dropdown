module.exports = {
	path: 'starwars',
	getChildRoutes(location, cb) {
		require.ensure([], (require) => {
			cb(null, [
				require('./Planets/route.js'),
				require('./People/route.js')
			])
		})
	},
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./starwarsContainer.js').default)
		})
	}
}
