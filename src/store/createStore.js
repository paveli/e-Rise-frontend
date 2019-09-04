import { createStore } from "redux"
import { UPDATE_WAVESADDRESS } from "./constants/action-types"

const initialState = {
	wavesAddress: "",
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_WAVESADDRESS:
			return {
				...state,
				wavesAddress: action.payload,
			}
		default:
			return state
	}
}

// preloadedState will be passed in by the plugin
export default preloadedState => {
	return createStore(
		reducer,
		preloadedState,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
}
