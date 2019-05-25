import React from 'react';
import Btn from './components/Btn';
import Name from './components/Name';
import Picture from './components/Picture';

class App extends React.Component{
    state={
        name: "Your Bee name",
    }

    alphabet = "abcdefghijklmnopqrstuvwxyz";

    randName = () => {
        // const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const alphabetArray = [...this.alphabet];
        let nameR = "";
        // const nameLength = Math.floor((Math.random()+1)*3);
        const nameLength = Math.floor(Math.random()*5+1);
        for(let i=0; i<=nameLength; i++){
            let index = Math.floor(Math.random()*alphabetArray.length);
            nameR+=alphabetArray[index];
            // name+=alphabetArray[index];
        }
        this.setState({name:"bee"+nameR});
    }

    render(){
        return(
        <div>
            <Picture/>
            <Name
            name = {this.state.name}
            />
            <Btn
            fn = {this.randName}
            />
        </div>
        )
    }
}



export default App;