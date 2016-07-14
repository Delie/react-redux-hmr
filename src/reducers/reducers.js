import { routerStateReducer as router } from 'redux-router'
import * as actionTypes from '../actions/actionTypes'
import { combineReducers } from 'redux'

var initialMonkeyState = {
	CurrentState: 'Relaxed'
};
export function MonkeyState(state = initialMonkeyState, action)
	{
		var newState;
		switch(action.type)
		{
			case actionTypes.MAKE_MONKEY_ANGRY:
				{
					newState = Object.assign({}, state, {
						CurrentState: 'The monkey is furious and ANGRY!'
					});
					break;
				}
			case actionTypes.MAKE_MONKEY_HAPPY:
				{
					newState = Object.assign({}, state, {
						CurrentState: 'The monkey is jovial and HAPPY!'
					});
					break;
				}
			default:{
				newState = state;
				break;
			}
		}
		return newState;
	}


export const rootReducer = combineReducers({
	router,
	MonkeyState
})

export default rootReducer