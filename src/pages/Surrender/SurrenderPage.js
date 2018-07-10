import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Form, Input, TextArea, Button } from 'semantic-ui-react'


class FormPage extends Component {
  state = {
    name: "",
    image: "",
    about: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.image && this.state.about) {
      API.saveAnimal({
        name: this.state.name,
        image: this.state.image,
        about: this.state.about
      })
        .then(res => this.())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
       <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-name'
        value={this.state.name}
        onChange={this.handleInputChange}
        control={Input}
        label='Pets Name'
        placeholder='Name (required)'
      />
      <Form.Field
        id='form-image'
        value={this.state.image}
        onChange={this.handleInputChange}
        control={Input action}
        type='file'
        label='file'
        placeholder='Search images... (required)'
      />
    </Form.Group>
    <Form.Field
      id='form-textarea'
      value={this.state.about}
      onChange={this.handleInputChange}
      control={TextArea}
      label='Information'
      placeholder='Tell others about your pet'
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'
      label='La'
    />
  </Form>
)
    );
  }
}

export default FormPage;
