import React, { PropTypes, Component } from 'react';
import { hashHistory, Link } from 'react-router';
import { Form } from 'formsy-react';
import ModalMini from '../common/ModalMini';
import { redirectUser } from '../../actions/user';
import Notify from '../../../app/components/elements/Notify';
import Input from '../../../app/components/elements/Input';

class SignupForm extends Component {

  static propTypes = {
    handleSubmit: PropTypes.func,
    submitSignUpForm: PropTypes.func,
    init: PropTypes.func,
    formValues: PropTypes.object,
    email: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: null,
      password: null,
    };
  }

  componentWillMount() {
    const { email } = this.props;
    this.state.email = email;
  }

  componentDidMount() {
    this.props.init();
    redirectUser(this.props.current);
  }

  componentWillUpdate(nextProps) {

    this.state.isLoading = false;

    const { formValues, formError } = nextProps;
    if (formValues && formError === null) {
      const { password } = this.refs.form.getModel();
      this.state.email = formValues.email;
      this.state.password = password;
    }

    redirectUser(nextProps.current);
  }

  onSubmit = (data) => {

    const { formValues } = this.props;
    const result = { ...formValues, ...data };

    this.setState({ isLoading: true });
    this.props.submitSignUpForm(result);
  };

  render() {
    const { formError, formValues, emailFieldDisabled } = this.props;
    const { isLoading, email, password } = this.state;

    return (
      <Form onValidSubmit={this.onSubmit} ref="form" method="post">
        {
          (isLoading)
            ? <ModalMini>Регистрируем...</ModalMini>
            : null
        }
        <div className="row align-center">
          <div className="column medium-6 auth-form">
            <div className="row column">
              <h4 className="text-center">Регистрация</h4>
              {
                (formError && typeof(formError) === "object")
                  ? formError.map((error, key) => (<Notify key={key} type="error">{error}</Notify>))
                  : null
              }
              {
                (formError && typeof(formError) === "string")
                  ? <Notify type="error">{formError}</Notify>
                  : null
              }
            </div>
            <div className="row">
              <div className="medium-12 column">
                <Input
                  name="firstName"
                  type="text"
                  placeholder="Ваше имя"
                  required
                />
              </div>
              <div className="medium-12 column">
                <Input
                  name="lastName"
                  type="text"
                  placeholder="Фамилия"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="medium-12 column">
                <Input
                  name="login"
                  type="text"
                  placeholder="Придумайте ваш логин"
                  required
                />
              </div>
              <div className="medium-12 column">
                <Input
                  name="email"
                  type="text"
                  placeholder="Ваш email"
                  required
                />
              </div>
            </div>
            <div className="row column">
              <Input
                name="password"
                type="password"
                value={password}
                placeholder="Придумате пароль"
                validations="minLength:6"
                validationError="Минимальная длина пароля 6 символов"
                required
              />
            </div>
            <div className="row column">
              <p className="link-block">Уже зарегестрированы? <Link to="/login">Войдите</Link></p>
            </div>
            <button type="submit" className="button big expanded align-bottom">
              Зарегистрироваться
            </button>
          </div>
        </div>
      </Form>
    );
  }
}

export default SignupForm;
