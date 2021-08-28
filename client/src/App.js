import axios from 'axios'
import { Provider } from 'react-redux'
import store from './redux/store'
import Search from './Search'
import SuperHero from './SuperHero'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App(){
  return(
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Search}/>
            <Route exact path='/superhero' component={SuperHero}/>
          </Switch>
        </Router>
      </Provider>
    ) 
}

export default App;
