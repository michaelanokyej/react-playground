import React from 'react';

class Tabs extends React.Component{

    // handleClick = ()=> {

    // }
    
    // // This function will generate the buttons 
    // getTabs = () => this.props.tabs.map(tab =>
    //     <button onClick={() => {this.handleClick()}}>
    //     {tab.title}
    //     </button>);
  
    // render(){
    //     return <div>
    //         {this.getTabs()}
    //     </div>
    // }

      // Ask mentor about why tabs in default props are empty  
    static defaultProps = { tabs: [] };
    state = {
        currentTabIndex: 0
      };


      handleButtonClick(index) {
        this.setState({ currentTabIndex: index })
      }
      renderButtons() {
        return this.props.tabs.map((tab, index) => (
          <button key={index} onClick={() => this.handleButtonClick(index)}>
            {tab.name}
          </button>
        ))
      }
      renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
          <div className='content'>
            {currentTab.content}
          </div>
        )
      }
      render() {
        return (
          <div>
            {this.renderButtons()}
            {!!this.props.tabs.length && this.renderContent()}
          </div>
        )
      }
}

export default Tabs;