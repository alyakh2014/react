import React from 'react';
import LoginItems from './LoginItems';


export default class Login extends React.Component{
    render(){
        const items = this.props.items.map((item, index)=>{
            return <LoginItems key={index} title={item.title} type={item.type}/>
        });

        return(
            <form method="this.props.method" action={this.props.action}>
                <div>
                    {items}
                </div>
            </form>
        )
    }
}