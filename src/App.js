import React from 'react';
import './App.css';
import Customerlist from './components/customerlist';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Trainingslist from './components/trainingslist';
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Trainingcalendar from './Trainingcalendar';
import Stats from './tilasto';

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="secondary">
        <Toolbar color="secondary">
          <Typography variant="h5">
            Kuntokeskus Minna
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
      <div>
  <Link to="/">Asiakkaat</Link>{' '}
  <Link to="/components/trainingslist">Treenit</Link>{' '}
  <Link to="/Trainingcalendar">Kalenteri</Link>{' '}
  <Link to="/tilasto">Tilasto</Link>{' '}

  <Switch>
    <Route exact path="/" component={Customerlist} />
    <Route path ="/components/trainingslist" component={Trainingslist} />
    <Route path ="/Trainingcalendar" component={Trainingcalendar} />
    <Route path ="/tilasto" component={Stats} />
    <Route render={() => <h1> Page not found</h1>}/>
    </Switch>
    </div>
    </BrowserRouter>

      
    </div>
  );
}

export default App;
