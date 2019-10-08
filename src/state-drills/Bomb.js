import React from 'react';

class Bomb extends React.Component{
    state={
        tick: 'tick',
        tock: 'tock',
        boom: 'BOOM!!!!',
        count: 0
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

  

  
    // handleMessage = ()=>{
    //     {this.state.count % 2 === 0 && this.setState({message: 'tick'})} 
    //     {this.state.count % 2 !== 0 && this.setState({message: 'tock'})}
    //     console.log(this.state.message)
    // }




    
    
    

    render(){
        if(this.state.count % 2 === 0 && this.state.count < 8){
            return(
                <div>
                    <p>{this.state.tick}</p>
                    <p>{this.state.count}</p>
                </div>
            );
        }
        else if(this.state.count === 8){
            return(
                <div>
                    <p>{this.state.boom}</p>
                    <p>{this.state.count}</p>
                </div>
            );
        }
        else if(this.state.count > 8){
            clearInterval(this.interval)
            return null;
        }
        else{
            return(
                <div>
                    <p>{this.state.tock}</p>
                    <p>{this.state.count}</p>
                </div>
            );
        }
 }
 }


export default Bomb;