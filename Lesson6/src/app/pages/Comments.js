import React, {Component} from 'react';
import CComments from '../components/CComments';

export default class Comments extends React.Component{
    render(){
        return(
            <div>
                {
                    (this.props.children) ?
                        this.props.children :
                        <CComments/>
                }
            </div>
        )
    }
}