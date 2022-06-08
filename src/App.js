
import './App.css';
import Pager from './components/organisms/Pager';
import AppHeading from './components/molecules/appHeading';
import React, { useState } from 'react';
import {useLocation} from "react-router-dom";


function App() {
  const [userName, setUserName] = useState('');
  const [bearer, setBearer] = useState('');

  const search = useLocation().search;
  const userToken = new URLSearchParams(search).get('userToken');

  return (
      <div className="App">
        <AppHeading Title="George & Iris's Crop Swap"/>

        <Pager userToken={userToken} />
      
      </div>

  );
}

export default App;

