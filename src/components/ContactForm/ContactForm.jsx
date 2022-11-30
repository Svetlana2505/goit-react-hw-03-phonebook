import React, { Component } from 'react';
import { Form, Input, Label, Button } from './ContactForm.styled.js';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handeleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handeleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ name: '', id: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handeleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handeleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={this.handeleChange}
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
export default ContactForm;
