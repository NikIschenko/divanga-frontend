export default {

  /**
   * Facebook auth options
   */
  facebookProvider: "facebook",
  facebookAppId: "327386820944034",
  facebookFields: "name, email, picture",
  facebookAutoload: false,

  /**
   * Twitter auth options
   */
  twitterProvider: "twitter",
  twitterRequestToken: 'api/twitter',
  twitterOAuthCallback: window.location.origin + '/api/twitter/callback',

  /**
   * GooglePlus auth options
   */
  googlePlusProvider: "google",
  googlePlusId: '305383246086-cr25bbckfu0ddn30fhqp2akb04d1750c.apps.googleusercontent.com',
};
