import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { Form } from 'formsy-react';
import ModalMini from '../common/ModalMini';
import { redirectUser } from '../../actions/user';
import Notify from '../../../app/components/elements/Notify';
import Input from '../../../app/components/elements/Input';
import classNames from 'classnames';

class LoginForm extends Component {

  static defaultProps = {
    title: "Login with Email",
    className: "medium-4",
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    this.props.init();
    redirectUser(this.props.current);
  }

  static contextTypes = {
    user: PropTypes.object,
  };

  componentWillUpdate(nextProps) {
    this.state.isLoading = false;
    redirectUser(nextProps.current);

  }

  onSubmit = (data) => {
    this.setState({ isLoading: true });
    this.props.submitLoginForm(data);
  };

  render() {
    const { formError, title, email } = this.props;
    const { isLoading } = this.state;
    const className = classNames('column', this.props.className);

    return (
      <Form onValidSubmit={this.onSubmit} method="post">
        {
          (isLoading)
            ? <ModalMini>Authenticating...</ModalMini>
            : null
        }
        <div className="row align-center">
          <div className={className}>
            <div className="row column">
              <h4 className="text-center">{title}</h4>
              {
                (formError)
                  ? <Notify type="error">{formError}</Notify>
                  : null
              }
            </div>
            <div className="row column">
              <Input name="email" value={email} placeholder="Email" validations="isEmail" validationError="This is not a valid email" required />
            </div>
            <div className="row column">
              <Input name="password" type="password" placeholder="Password" required />
            </div>
            <div className="row column">
              <p className="link-block">New User? <Link to="/signup">Create a new account</Link></p>
            </div>
            <button type="submit" className="button big fixed align-bottom">Login</button>
          </div>
        </div>
      </Form>
    );
  }
}

export default LoginForm
