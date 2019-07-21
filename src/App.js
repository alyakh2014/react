import React from 'react';
import ReactDOM from 'react-dom';
import {Developer} from './developer';

const importName = (new Developer("Alex", 27, '13.01.1980')).name;
console.log(importName);

class App extends React.Component{
    render(){
        return <div>
           <h1>Первое приложение на React</h1>
           <p>Hello React!</p>
            <p>The name of developer: <React.Fragment>{importName}</React.Fragment></p>
        </div>
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));
