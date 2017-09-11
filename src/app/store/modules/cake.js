import { getUsers } from 'app/data/cake'
import { getPlanets } from 'app/data/starwarsApi'
import { getPeople } from 'app/data/starwarsApi'
/* Action Types */
const CHANGE_TYPE = "@@CAKE/CHANGE_TYPE"
const GET_USERS = "@@CAKE/GET_USERS"
const GET_PLANETS = "@@STARWARS/GET_PLANETS"
const GET_PEOPLE = "@@STARWARS/GET_PEOPLE"
/*Actions*/
const changeCakeType = (data) => ({ type: CHANGE_TYPE, payload: data })
const setUsers = (data) => ({ type: GET_USERS, payload: data })
const setPlanets = (data) => ({ type: GET_PLANETS, payload: data })
const setPeople = (data) => ({ type: GET_PEOPLE, payload: data })
/*Middleware*/

export async function getUsersAsync() {
	return async dispatch => {
		//First we get the users
		var users = await getUsers()
		//After we receive them, we insert them into the store
		dispatch(setUsers(users))
	}
}

export async function getPlanetsAsync() {
	return async dispatch => {
		var planets = await getPlanets()
		dispatch(setPlanets(planets))
	}
}

export async function getPeopleAsync() {
	return async dispatch => {
		var people = await getPeople()
		dispatch(setPeople(people))
	}
}

export function changeCake(text) {
	return dispatch => {
		dispatch(changeCakeType(text))
	}
}
/*Reducer*/

const initState	= {
	type: 'chocolate',
	users: [],
	planets: [],
	people: []
}

function cake( state = initState, action) {
 	switch (action.type)
	 {
		case CHANGE_TYPE:
		{return { ...state,
			type: action.payload }
		}
		case GET_USERS:
		{
			return { ...state,
				users: action.payload }
		}
		case GET_PLANETS:
		{
			return { ...state,
				planets: action.payload
			}
		}
		case GET_PEOPLE:
		{
			return { ...state,
				people: action.payload
			}
		}
		default:
			return state
	}
}
export default cake