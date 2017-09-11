import React from 'react'
import { Header } from 'app/styles'
const People = ({ people }) => {
	return (
		<div>
			{people.map((p, index ) => (
				<Header key={index} >{p.name}</Header>
			))}
		</div>
	)
}

export default People