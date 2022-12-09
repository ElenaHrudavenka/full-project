import React from 'react';
import s from './App.module.css';
import './App.module.css';
import {Layout} from "./components/app/Layout";

const App = () => {
  return (
    <div className={s.App}>
        <Layout/>
    </div>
  );
};

export default App;
