import * as redux from "redux";
import thunk from 'redux-thunk';

import FormReducer from 'FormReducer';

export const configure = (initialState = {}) => {
	const reducer = redux.combineReducers({
		Form: FormReducer
	});

	const store = redux.createStore(
		reducer,
		initialState,
		redux.compose(
			redux.applyMiddleware(thunk),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	);

	return store;
};
