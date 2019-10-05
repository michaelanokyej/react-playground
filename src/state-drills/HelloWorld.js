import React from 'react';

class HelloWorld extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         who : HelloWorld
    //     }
    // }

    handleClick = (message) => {
        this.setState({
            who: message
        })
    }

    state = {
        who : 'World'
    }


    render(){
        return <div>
          <p>Hello, {this.state.who}</p>  
          <button onClick={() => {
   this.handleClick("world!")
}}>World</button>
          <button onClick={() => {
   this.handleClick("friend!")
}}>Friend</button>
          <button onClick={() => {
   this.handleClick("React!")
}}>React</button>          
        </div>
    }
}

export default HelloWorld;