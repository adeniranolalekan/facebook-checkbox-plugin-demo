
import React, {Component} from 'react';
import './App.css';


class App extends Component{

    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(userRef){
        console.log("received a userRef: ",userRef)
        window.FB.AppEvents.logEvent('MessengerCheckboxUserConfirmation', null, {
            'app_id': '291338738571430',
            'page_id': '104295157968460',
            'ref': 'just some values',
            'user_ref':{userRef}
        });
    }

    render()
    {
        const userRef = Math.floor((Math.random() * 10000000000000) + 1)
        console.log("user_ref is: ", userRef.toString())
        return (
            <div className="App">
                <header className="App-header">
                    <h4>Welcome to Facebook checkbox plugin</h4>
                </header>
                Click the checbox below to recieves updates on your order
                <form>
                    <div className="fb-messenger-checkbox"
                         origin="https://9bd524c3.ngrok.io/"
                         page_id="104295157968460"
                         messenger_app_id="661504924397598"
                         user_ref={userRef} >
                    </div>
                    <input type="button" onClick={(e)=>this.handleClick(userRef,e)} value="Confirm Opt-in"/>
                </form>



            </div>
        );
    }
}

export default App;