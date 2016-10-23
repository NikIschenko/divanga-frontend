import React, {PropTypes, Component} from 'react';
import {Link}           from 'react-router';
import {Form}           from 'formsy-react';
import ModalMini        from '../common/ModalMini';
import { redirectUser } from '../../actions/user';
import Notify           from '../../../app/components/elements/Notify';
import Input            from '../../../app/components/elements/Input';
import logoImage        from '../../../app/media/images/divanga.png';

class SignupForm extends Component {

  static propTypes = {
    init:             PropTypes.func,
    email:            PropTypes.string,
    formValues:       PropTypes.object,
    handleSubmit:     PropTypes.func,
    submitSignUpForm: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email:     null,
      password:  null,
    };
  }

  componentWillMount() {
    const { email }  = this.props;
    this.state.email = email;
  }

  componentDidMount() {
    this.props.init();
    //redirectUser(this.props.current);
  }

  componentWillUpdate(nextProps) {

    this.state.isLoading = false;

    const { formValues, formError } = nextProps;
    if (formValues && formError === null) {
      const { password }  = this.refs.form.getModel();
      this.state.email    = formValues.email;
      this.state.password = password;
    }

  }

  onSubmit = (data) => {

    const { formValues } = this.props;
    const result = { ...formValues, ...data };

    this.setState({ isLoading: true });
    this.props.submitSignUpForm(result);
  };

  render() {
    const { formError } = this.props;
    const { isLoading, password } = this.state;
    const className = 'auth-form';

    return (

      <div className="container-fluid">
        {
          (isLoading)
            ? <ModalMini>Регистрация...</ModalMini>
            : null
        }
        <div className="row flex-items-xs-center">
          <Link to="/" className="logo">
            <img src={logoImage} alt="logo"/>
          </Link>
        </div>
        <div className="flex-items-xs-center text-sm-center row">
          <div className="col-md-7 col-lg-4">
            <div className={className}>
              <Form onValidSubmit={this.onSubmit} ref="form" method="post">
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
                <div className="row">
                  <div className="col-xs">
                    <Input
                      name="email"
                      type="text"
                      placeholder="Ваш email"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs">
                    <Input
                      name="login"
                      type="text"
                      placeholder="Придумайте ваш логин"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs">
                    <Input
                      name="firstName"
                      type="text"
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs">
                    <Input
                      name="lastName"
                      type="text"
                      placeholder="Фамилия"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs">
                    <Input
                      name="password"
                      type="password"
                      value={password}
                      className="reset-margin"
                      placeholder="Придумате пароль"
                      validations="minLength:6"
                      validationError="Минимальная длина пароля 6 символов"
                      required
                    />
                  </div>
                </div>
                <p className="link-block">Уже зарегистрированы? <Link to="/login">Войдите</Link></p>
                <div className="text-xs-center">
                  <button type="submit" className="btn btn-primary">
                    Зарегистрироваться
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
