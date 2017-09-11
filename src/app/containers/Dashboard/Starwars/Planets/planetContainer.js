import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tabChange } from 'framework/store/modules/tabs'
import { getPlanetsAsync } from 'app/store/modules/cake'
import Planets from 'app/components/Dashboard/Starwars/planets'
import Skeleton from 'app/components/Dashboard/skeleton'

class PlanetContainer extends Component {
	async componentWillMount() {
		await this.props.onMount()
	}
	
	render() {
		const { planets } = this.props
		return (

			<div>
				{planets !== [] ?
					<Planets planets={planets}/> :
					<h1>Loading</h1>}
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	planets: state.cake.planets.results || []
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: async () => {
			dispatch(tabChange('starwars', 'Planets'))
			dispatch(await getPlanetsAsync())
		}

	}
    
}
export default connect(mapStateToProps, mapDispatchToProps)(PlanetContainer)