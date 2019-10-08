import React from 'react';

class RouletteGun extends React.Component{
    state = {
        chamber: null,
        spinningTheChamber: false
    }

    handleClick = () => {

        this.setState({
            chamber: null,
            spinningTheChamber: true
        })

        let randomNumber = Math.ceil(Math.random() * 8);

        setTimeout(() => {
            console.log(randomNumber);
            this.setState({
                chamber: randomNumber,
                spinningTheChamber: false
            })    
        }
            , 2000)
        
        clearTimeout()        
    }

    render(){
        return <div>
                {this.state.spinningTheChamber === true && <p>spinning the chamber and pulling the trigger! ....</p>}
                {this.state.chamber === this.props.bulletInChamber && <p>BANG!!!!</p>}
                {this.state.chamber !== this.props.bulletInChamber && this.state.spinningTheChamber === false && <p>you're safe!!</p>}
            <button onClick={() => {
                this.handleClick()
                }}>
                    Pull the trigger!
            </button>
        </div>
    }
}

export default RouletteGun;