import './App.css';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CounterReducer from './Store/reducers/CounterReducer';
import ConterContainer from './Components/ConterContainer';
import DetailsPage from './Components/DetailsPage'

const store=createStore(CounterReducer)
function App() {
  return (
<>
<Provider store={store}>
<Header/>
<Router>
        <Switch>
                <Route exact path="/bots">
                  <ConterContainer/>
                </Route>

                <Route path="/bots-details/:id">  
                  <DetailsPage/>
                </Route>

        </Switch>
      </Router>
</Provider>
     
     
</>
  );
}

export default App;
