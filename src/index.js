import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import rootReducer from "./Store/Reducers/rootReducer"
import thunk from "redux-thunk"
import { reduxFirestore, getFirestore } from "redux-firestore"
import { reactReduxFirebase, getFirebase } from "react-redux-firebase"
import Config from "./Config/Config"

const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(Config),
        reactReduxFirebase(Config)
    )
)

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
