import React from 'react';
import Header from '../../../app/components/elements/Header';
import SignupForm from '../../containers/forms/SignupForm';

class Signup extends React.Component {
  render() {
    return (
      <div className="signup">
        <Header />
        <SignupForm />
      </div>
    );
  }
}

export default Signup;
