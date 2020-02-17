import './App.css';
import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from '../src/components/layout/SearchBar';
import Logs from '../src/components/logs/Logs';
import AddBtn from '../src/components/layout/AddBtn';
import AddLogModal from '../src/components/logs/AddLogModal';
import EditLogModal from '../src/components/logs/EditLogModal';
import AddTechModal from '../src/components/techs/AddTechModal';
import TechListModal from '../src/components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
