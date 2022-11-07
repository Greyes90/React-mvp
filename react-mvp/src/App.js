import React, {Fragment} from 'react';
import InputGames from './components/InputGames';
import ListGames from './components/ListGames';
import './App.css';

function App() {
  return (
    <Fragment>
      <div className='container'>
      <InputGames />
      <ListGames />
      </div>
    </Fragment>
  );
}



export default App;
