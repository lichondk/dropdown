import { create } from 'apisauce'

//API instance
const api = create({
	baseURL: 'https://swapi.co/api',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
})

//Async function to return data
export async function getPlanets() {
	var data = await api.get('/planets')
		.then((response) => {
			console.log(response.data)
			return response.data
		})
	return data
}

export async function getPeople() {
	var data = await api.get('/people')
		.then((response) => {
			console.log(response.data)
			return response.data
		})
	return data
}

