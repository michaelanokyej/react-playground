import React from 'react';

class Bomb extends React.Component{
    state={
        message: 'tick',
        count: 0
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

      componentWillUnmount() {
        clearTimeout(this.state.count)
    }

  
    handleMessage = ()=>{
        {this.state.count % 2 === 0 && this.setState({message: 'tick'})} 
        {this.state.count % 2 !== 0 && this.setState({message: 'tock'})}
        console.log(this.state.message)
    }




    
    
    

    render(){
        return <div>
            <p>{this.state.message}</p>
        </div>
    }
}

export default Bomb;