import React from 'react';
import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Main from './pages/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;