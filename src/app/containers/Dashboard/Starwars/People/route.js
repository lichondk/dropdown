module.exports = {
	path: 'people',
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./peopleContainer.js').default)
		})
	}
}
