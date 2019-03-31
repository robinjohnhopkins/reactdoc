import React from 'react';
import RegistrationForm from 'ps-react/RegistrationForm';
import PropTypes from 'prop-types';

export default class ExampleRegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    console.log('ExampleRegistrationForm props', props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (user) => {
    console.log('ExampleRegistrationForm',user);
  }

  render() {
    console.log('ExampleRegistrationForm this.state', this.state);
    
    return <RegistrationForm user={this.props.user} onSubmit={this.onSubmit} handleTextChange={this.props.handleTextChange} />
  }
}

ExampleRegistrationForm.propTypes = {
  handleTextChange: PropTypes.func.isRequired 
}