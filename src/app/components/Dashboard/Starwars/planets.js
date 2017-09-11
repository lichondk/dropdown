import React from 'react'
//import { Header } from 'app/styles'
const Planets = ({ planets }) => {
	return (
		<div>
			{<table style={{ border: "1px solid black" }}>
				{planets.map((planet, index) => (
					<tbody key={index}>
						<tr>
							<td>{planet.name}</td>
							<td>{planet.climate}</td>
						</tr>
					</tbody>
				))}
			</table>}
			{/*planets.map((planet, index ) => (
				<Header key={index} >{planet.name}</Header>
			))}*/}
		</div>
	)
}

export default Planets