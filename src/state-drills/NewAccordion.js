import React from 'react';

class NewAccordion extends React.Component{
    static defaultProps = { tabs: [] };
    state = {
        currentSectionIndex: 0
      };

      handleButtonClick(index) {
        this.setState({ currentSectionIndex: index })
      }
      renderButtons() {
        return this.props.sections.map((section, index) => (
            <li>
                <button key={index} onClick={() => this.handleButtonClick(index)}>
                {section.title}</button>
            </li>
        ))
      }
      renderContent() {
        const currentSection = this.props.sections[this.state.currentSectionIndex]
        return (
          <div>
            {currentSection.content}
          </div>
        )
      }
      render() {
        return (
          <div>
            <ul>{this.renderButtons()}</ul>
            {!!this.props.sections.length && this.renderContent()}
          </div>
        )
      }
}


export default NewAccordion;