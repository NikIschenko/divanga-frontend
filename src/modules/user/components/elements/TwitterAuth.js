import React, { PropTypes, Component } from 'react';
import Api from '../../../../system/Api';

export default class TwitterAuth extends Component {

  static propTypes = {
    callback: PropTypes.func,
    oauthCallback: PropTypes.string,
    twitterRequestToken: PropTypes.string,
    children: PropTypes.array,
    cssClass: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      oauth_token: null,
      clicked: false,
    };
  }

  onBtnClick = () => {
    this.state.clicked = !this.state.clicked;
    window.open(
      "https://api.twitter.com/oauth/authenticate?oauth_token=" + this.state.oauth_token,
      "Twitter Login",
      "width=640,height=480"
    );

    window.twitterCallback = (value) => {
      if (value === null) {
        return this.setState({ clicked: true });
      }
      this.props.callback(JSON.parse(value));
    };
  };

  componentWillUpdate(nextProps, nextState) {
    if (nextState.clicked) {
      this.getRequestToken();
    }
  }

  componentDidMount() {
    this.getRequestToken();
  }

  getRequestToken() {
    const { oauthCallback, twitterRequestToken } = this.props;
    const params = [
      'oauth_callback=' + oauthCallback,
    ].join('&');

    Api
      .getJSON(twitterRequestToken + '?' + params, false)
      .then((response) => {
        this.state.oauth_token = response.oauth_token;
      });
  }

  render() {
    const { cssClass, children } = this.props;
    return (
      <button className={cssClass} onClick={this.onBtnClick}>
        {children}
      </button>
    );
  }
}
