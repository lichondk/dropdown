import React, { Component } from 'react'

class Skeleton extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true
		}
	}

	componentdidMount() {
		console.log('test')
		this.setState({ isLoading: false })
	}

	render () {
	    console.log(this.state.isLoading)        
		return (
			this.state.isLoading ? 
				<h2>kasper</h2> :
			    <div>{this.props.children}</div>
		)  
	}
}

export default Skeleton