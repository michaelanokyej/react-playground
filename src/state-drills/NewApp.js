import React from 'react';
import NewAccordion from './NewAccordion';


// array of objects each with a name and content
const sectionsProp = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]
  

class NewApp extends React.Component {
  render() {
    return <div>
      <NewAccordion sections={sectionsProp} />
    </div>
  }
}


export default NewApp;