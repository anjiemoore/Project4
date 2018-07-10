import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

const surrenderForm = () => (
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
        label='Images'
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
      label='Label with htmlFor'
    />
  </Form>
)

export default surrenderForm;
