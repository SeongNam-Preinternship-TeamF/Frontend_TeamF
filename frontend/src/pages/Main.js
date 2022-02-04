import React, {useState, useEffect} from 'react';
import "../css/Main.css";
import axios from 'axios';
import Loading from '../components/Loading';
import { Route,Routes,Link} from 'react-router-dom';

const Main = () => {
    
    return(
        <div className = "background">
            <p> 이곳은 홈이에요</p>
        </div>
    );

};

export default Main;