import React, {PropTypes, Component} from 'react';

class GooglePlusAuth extends Component {
  static propTypes = {
    callback: PropTypes.func.isRequired,
    clientId: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    offline: PropTypes.bool,
    scope: PropTypes.string,
    cssClass: PropTypes.string,
    redirectUri: PropTypes.string,
    cookiePolicy: PropTypes.string,
    loginHint: PropTypes.string,
    children: React.PropTypes.node,
  };

  static defaultProps = {
    scope: 'profile email',
    redirectUri: 'postmessage',
    cookiePolicy: 'single_host_origin',
  };

  constructor(props) {
    super(props);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  componentDidMount() {
    const { clientId, scope, cookiePolicy } = this.props;
    ((d, s, id, cb) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      js = d.createElement(s);
      js.id = id;
      js.src = '//apis.google.com/js/platform.js';
      fjs.parentNode.insertBefore(js, fjs);
      js.onload = cb;
    })(document, 'script', 'google-login', () => {
      const params = {
        client_id: clientId,
        cookiepolicy: cookiePolicy,
        scope,
      };
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init(params);
      });
    });
  }

  onBtnClick() {
    const auth2 = window.gapi.auth2.getAuthInstance();
    const {offline, redirectUri, callback} = this.props;
    if (offline) {
      const options = {
        'redirect_uri': redirectUri,
      };
      auth2.grantOfflineAccess(options)
        .then((data) => {
          callback(data);
        });
    } else {
      auth2.signIn()
        .then((response) => {
          var profile = response.getBasicProfile();
          const params = {
            authId: profile.getId(),
            email: profile.getEmail(),
            firstName: profile.getGivenName(),
            lastName: profile.getFamilyName(),
            image: profile.getImageUrl(),
          };
          callback(params);
        });
    }
  }

  render() {
    const { cssClass, children } = this.props;
    return (
      <button
        className={cssClass}
        onClick={this.onBtnClick}
      >
        {children}
      </button>
    );
  }
}

export default GooglePlusAuth;
