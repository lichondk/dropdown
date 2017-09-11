module.exports = {
	path: 'planets',
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./planetContainer.js').default)
		})
	}
}
