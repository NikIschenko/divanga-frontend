import React from 'react';
import Config from '../../config/config';
import FacebookAuth from '../elements/FacebookAuth';
import GooglePlusAuth from '../elements/GooglePlusAuth';
import TwitterAuth from '../elements/TwitterAuth';

class SocialAuth extends React.Component {

  callbackType = (provider, data) => {
    const { text, login, signUp } = this.props;

    return (text === 'Login')
      ? login(provider, data)
      : signUp(provider, data);
  }

  render() {
    const { text, login } = this.props;

    return (
      <div className="social-auth-block">
        <div className="row align-center">
          <div className="column large-10">
            <div className="row">
              <div className="column small-4">
                <FacebookAuth
                  cssClass="button button-facebook big expanded"
                  appId={Config.facebookAppId}
                  autoLoad={Config.facebookAutoload}
                  fields={Config.facebookFields}
                  callback={(data) => { this.callbackType(Config.facebookProvider, data); }}
                >
                  <i className="hbc-facebook"></i>
                  <span className="show-for-medium">{text} with Facebook</span>
                </FacebookAuth>
              </div>
              <div className="column small-4">
                <GooglePlusAuth
                  cssClass="button button-google-plus big expanded"
                  clientId={Config.googlePlusId}
                  callback={(data) => { this.callbackType(Config.googlePlusProvider, data); }}
                >
                  <i className="hbc-google-plus"></i>
                  <span className="show-for-medium">{text} with Google+</span>
                </GooglePlusAuth>
              </div>
              <div className="column small-4">
                <TwitterAuth
                  oauthCallback={Config.twitterOAuthCallback}
                  twitterRequestToken={Config.twitterRequestToken}
                  callback={(data) => { this.callbackType(Config.twitterProvider, data); }}
                  cssClass="button button-twitter big expanded"
                >
                  <i className="hbc-twitter-2"></i>
                  <span className="show-for-medium">{text} with Twitter</span>
                </TwitterAuth>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialAuth;
