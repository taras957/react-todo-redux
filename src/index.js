import React from "react";
import ReactDom from "react-dom";
import Layout from './components/layout'
import {createStore,compose} from  'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/reducers/rootReducer'



const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const store = createStore(rootReducer,composeEnhancers())
function App(){
  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
    
  )
}

ReactDom.render(<App/>, document.getElementById("root"));
