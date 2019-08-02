import React, {Component} from 'react';
import CPosts from '../components/CPosts';

export default class Posts extends React.Component{
    render(){
        return(
            <div>
                {
                    (this.props.children) ?
                        this.props.children :
                        <CPosts/>
                }
            </div>
        )
    }
}