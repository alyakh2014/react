import React from 'react';
import PropTypes from 'prop-types';
class LoginItems extends React.Component{
    render(){
        return(
            <div><input type={this.props.type} name={this.props.title} placeholder={this.props.title}/></div>
        )
    }
}

LoginItems.defaultProps={
    type: 'text',
    title: 'Input'
}

LoginItems.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default LoginItems;