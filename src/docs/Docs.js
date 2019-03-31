import React from 'react';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import componentData from '../../config/componentData';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1),
      user:{
        email: '',
        password: ''
      }
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log('Docs.handleTextChange is ' + this.handleTextChange);
  }
  handleTextChange(user) {
    console.log('Docs.handleTextChange is ' + user);
    //if (this.setState){
      this.setState({user: user});
    //}
  }

  handleSubmit(e) {
    console.log('Docs.handleSubmit - state' + this.state);
    e.preventDefault();
    if (!this.state.text.length) {
      console.log('submit - no state.text' + this.state);
      return;
    }
    console.log('state is ' + this.state.text);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({route: window.location.hash.substr(1)})
    
      if (window.location.hash === '#cool-feature') {
        console.log("You're visiting a window cool feature!");
      } else {
        console.log("You're not visiting a window cool feature!", window.location.hash);
      }
    })
  }

  render() {
    const {route} = this.state;
    const {user} = this.state;
    const component = route ? componentData.filter( component => component.name === route)[0] : componentData[0];
    component.handleTextChange = this.handleTextChange;
    component.user = user;
    return (
      <div>
        <Navigation components={componentData.map(component => component.name)} />
        <ComponentPage component={component} />
      </div>
    )
  }
}
