import React from 'react';
import Header from '../../../app/components/elements/Header';
import SocialAuth from '../../containers/common/SocialAuth';
import SignupForm from '../../containers/forms/SignupForm';

class Signup extends React.Component {
  render() {
    return (
      <div className="signup">
        <Header className="large">
          Sign up to start create your registry
        </Header>

        <SocialAuth text="Register" />
        <SignupForm />
      </div>
    );
  }
}

export default Signup;
