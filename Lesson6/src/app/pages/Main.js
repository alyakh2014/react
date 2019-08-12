import React from 'react';
import Menu from '../components/Menu';

export default class Main extends React.Component{
    render(){
        return(
            <>
                <div><Menu/></div>
                <h3>Это главная страница!!!</h3>
            </>
        )
    }
}
