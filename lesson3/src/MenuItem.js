import React from 'react';
import PropTypes from "prop-types";
import LoginItems from "./LoginItems";

class MenuItem extends React.Component{
    render(){
        return(
            <span className="menuTopItem"><a href={this.props.href}>{this.props.title}</a></span>
        )
    }
}


MenuItem.defaultProps={
    title: 'Main Page',
    href: '/'
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
}

export default MenuItem;