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
    title: "Авторизация",
    className: "medium-6 auth-form",
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
            ? <ModalMini>Авторизация...</ModalMini>
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
              <Input name="username" value={email} placeholder="Ваш логин" />
            </div>
            <div className="row column">
              <Input name="password" type="password" placeholder="Ваш пароль" />
            </div>
            <div className="row column">
              <p className="link-block">Еще не с нами? Тогда <Link to="/signup">Зарегистрируйтесь</Link></p>
            </div>
            <button type="submit" className="button big expanded align-bottom">Войти</button>
          </div>
        </div>
      </Form>
    );
  }
}

export default LoginForm
