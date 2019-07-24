import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Login from './Login';


class App extends React.Component {
    render() {

        const MenuItems = [
            {title: "Main", href: "/"},
            {title: "About us", href: "/about"},
            {title: "Blog", href: "/blog"},
            {title: "Contacts", href: "/contacts"}
        ];

        const LoginFields = [
            {title: "Login", type: 'text'},
            {title: "Password", type: "text"},
            {title: "", type: "submit"},
        ];

        return (
            <div>
                <h1>Test page with menu and login form!</h1>
                <Menu items={MenuItems} titleMenu="Меню сайта"/>
                <Login items={LoginFields} method='post' action='#'/>
            </div>
        )
    }
}
ReactDOM.render(<App/>,document.querySelector('#root'));
