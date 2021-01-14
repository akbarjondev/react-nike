import { Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header'

import Home from './Pages/Home/Home'
import Boys from './Pages/Boys/Boys'
import Girls from './Pages/Girls/Girls'
import Customize from './Pages/Customize/Customize'

import './App.css';

function App() {
  return (
    <>
    	<div className="main">
    		<Header />

    		<div className="container">
					<Switch>
						
						<Route path='/home' component={Home} exact />

						<Route path='/boys' component={Boys} exact />
						
						<Route path='/girls' component={Girls} exact />

						<Route path='/customize' component={Customize} exact />

					</Switch>
				</div>
    	</div>	
    </>
  );
}

export default App;
