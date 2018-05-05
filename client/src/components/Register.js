import React, { Component } from 'react';
import { Header, Form, Button, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';
import * as qs from 'query-string';
import axios from 'axios'

class Register extends Component {  
  state = { email: '', password: '', passwordConfirmation: '', employee: {} };

  componentDidMount(){
    let token = qs.parse(this.props.location.search).token
    axios.get(`api/validate_invitation/${token}`)
      .then( res => {
        this.setState({employee: res.data, email: res.data.email_address})
      })
      .catch( res => {
        //KICK THEM OUT WITH INVALID TOKEN
      })
    // SEND REQUEST TO SEE IF TOKEN IS LEGIT, IF SO PROCEED, IF NOT BOOT THEM OUT
    // axios.get() 
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { dispatch, history } = this.props;
    if(password === passwordConfirmation)
      dispatch(registerUser(email, password, passwordConfirmation, history));
    else
      alert('Passwords do NOT match!');
  }

  handleChange = (e) => {
    // use e to grab the id off the element also the value and set state
    // const { id, value } = e.target;
    const id = e.target.id;
    const value = e.target.value;
    this.setState({ [id]: value });
  }

  render() {
    const { email, password, passwordConfirmation } = this.state;

    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Hello {this.state.employee.first_name}!</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Password</label>
            <input
              id='password'
              placeholder='Password'
              type='password'
              required
              value={password}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password Confirmation</label>
            <input
              id='passwordConfirmation'
              placeholder='Password Confirmation'
              type='password'
              required
              value={passwordConfirmation}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Segment basic textAlign='center'>
            <Button type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    );
  }
}

export default connect()(Register);
