import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tabChange } from 'framework/store/modules/tabs'
import { getPeopleAsync } from 'app/store/modules/cake'
import People from 'app/components/Dashboard/Starwars/people'

class PeopleContainer extends Component {
	async componentWillMount() {
		await this.props.onMount()
	}
	
	render() {
		const { people } = this.props
		return (
			<div>
				{people !== [] ?
					<People people={people}/> :
					<h1>Loading</h1>
				}
				
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	people: state.cake.people.results || []
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: async () => {
			dispatch(tabChange('starwars', 'People'))
			dispatch(await getPeopleAsync())
		}

	}
    
}
export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer)