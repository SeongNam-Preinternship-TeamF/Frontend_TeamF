import React from 'reeact'
import styled from 'styled-components';
import { Route,Routes,Link} from 'react-router-dom';

const Logo=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 5vh;
    background-image: url('../../public/images/Logo.png');
`;

const Header = ()=>{
    return(
        <>
            <Link to = "../" ><Logo></Logo></Link>
        </>
    )
};

export default Header