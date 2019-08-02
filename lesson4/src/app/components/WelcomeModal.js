import React from 'react';

export default class WelcomeModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {display: false};
        this.closeAction = this.closeAction.bind(this);
    }

    componentDidMount(){
        console.log("componentDidMount()");
        this.setState({display: true});
    }

    closeAction(){
        this.setState({display: !this.state.display});
    }

    render(){
        let popupItem;
        console.log("Render()");
        console.log("This state: " + this.state.display);

        if(this.state.display){
            popupItem = this.props.items.map((item, index)=>{
                return(
                    <div className="popup-root" key={index}>
                        <div className="popup-wrapper">
                            <div className="popup-wrapper__content">
                                <h3 className="popup-wrapper__content-title">{item.title}</h3>
                                <div className="popup-wrapper__content-text">{item.text}</div>
                                <button onClick={this.closeAction} className="popup-wrapper__content-button">{item.btnName}</button>
                                <div onClick={this.closeAction} className="popup-wrapper__content-cross">X</div>
                            </div>
                        </div>
                    </div>
                )
            })
        }

        return(
           <div>
               {popupItem}
            </div>
        )
    }
}
