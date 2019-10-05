import React from 'react';

class RouletteGun extends React.Component{
    state = {
        chamber: null,
        spinningTheChamber: false
    }

    handleClick = () => {
        this.setState({
            spinningTheChamber: true
        })

        let randomNumber = () => {Math.ceil(Math.random() * 8)};

        setInterval(() => {
            this.setState({
                chamber: randomNumber,
                spinningTheChamber: false
            })    
        }
            , 2000)
    }
    
    // Ask Jay how to execute this 
    // componentWillUnmount() {
    //     clearTimeout()
    // }

    render(){
        return <div>
            <p>
                {this.state.spinningTheChamber === true && <span>spinning the chamber and pulling the trigger! ....</span>}
                {this.state.chamber === this.props.bulletInChamber && <span>BANG!!!!</span>}
                {<span>you're safe!!</span>}
            </p>
            <button onClick={() => {
                this.handleClick()
                }}>
                    Pull the trigger!
            </button>
        </div>
    }
}

export default RouletteGun;