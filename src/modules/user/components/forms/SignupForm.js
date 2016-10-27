import React, {PropTypes, Component} from 'react';
import { connect }      from 'react-redux';
import { Link }         from 'react-router';
import { Form }         from 'formsy-react';
import ModalMini        from '../common/ModalMini';
import { redirectUser } from '../../actions/user';
import Notify           from '../../../app/components/elements/Notify';
import Input            from '../../../app/components/elements/Input';
import logoImage        from '../../../app/media/images/divanga.png';
import User             from '../../service/User';
import Service          from '../../../../system/Service';
import UserActions      from '../../actions/user';

export class SignupForm extends Component {

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

  static messages = {
    login:                'Войдите',
    signup:               'Зарегистрироваться',
    loading:              'Регистрация...',
    title:                'Регистрация',
    emailPlaceholder:     'Ваш email',
    loginPlaceholder:     'Придумайте ваш логин',
    passPlaceholder:      'Придумайте пароль',
    minPasswordLength:    'Минимальная длина пароля 6 символов',
    lastNamePlaceholder:  'Фамилия',
    firstNamePlaceholder: 'Ваше имя',
    alreadyForUs:         'Уже зарегистрированы? ',
  }

  componentWillMount() {
    const { email, dispatch }  = this.props;
    this.state.email = email;
    dispatch(UserActions.setErrors([]))
  }


  componentWillUpdate(nextProps) {

    this.state.isLoading = false;

    const { formValues, errors } = nextProps;
    if (formValues && errors === null) {
      const { password }  = this.refs.form.getModel();
      this.state.email    = formValues.email;
      this.state.password = password;
    }

  }

  onSubmit = (formData) => {

    const { formValues, dispatch } = this.props;
    const result = { ...formValues, ...formData };

    this.setState({ isLoading: true });
    User
      .signup(result)
      .then((status) => {
        if (status === 201) {
          User
            .login(formData)
            .then((user) => {
              dispatch(UserActions.login(user));
              Service.redirect('/signup/success');
            });
        } else {
          dispatch(UserActions.setErrors(['Что то пошло не так, попробуйте перезагрузить страницу']))
        }
      })
      .catch((errors) => dispatch(UserActions.setErrors(errors)));
  };

  render() {
    const { errors } = this.props;
    const { isLoading, password } = this.state;
    const className = 'auth-form';

    return (

      <div className="container-fluid">
        {
          (isLoading)
            ? <ModalMini>{SignupForm.message.loading}</ModalMini>
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
                <h4 className="text-center">{SignupForm.messages.title}</h4>
                {
                  (errors && typeof(errors) === "object")
                    ? errors.map((error, key) => (<Notify key={key} type="error">{error}</Notify>))
                    : null
                }
                {
                  (errors && typeof(errors) === "string")
                    ? <Notify type="error">{errors}</Notify>
                    : null
                }
                <div className="row">
                  <div className="col-xs">
                    <Input
                      name="email"
                      type="text"
                      placeholder={SignupForm.messages.emailPlaceholder}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs">
                    <Input
                      name="login"
                      type="text"
                      placeholder={SignupForm.messages.loginPlaceholder}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs">
                    <Input
                      name="firstName"
                      type="text"
                      placeholder={SignupForm.messages.firstNamePlaceholder}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs">
                    <Input
                      name="lastName"
                      type="text"
                      placeholder={SignupForm.messages.lastNamePlaceholder}
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
                      placeholder={SignupForm.messages.passPlaceholder}
                      validations="minLength:6"
                      validationError={SignupForm.messages.minPasswordLength}
                      required
                    />
                  </div>
                </div>
                <p className="link-block">{SignupForm.messages.alreadyForUs} <Link to="/login">{SignupForm.messages.login}</Link></p>
                <div className="text-xs-center">
                  <button type="submit" className="btn btn-primary">
                    {SignupForm.messages.signup}
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


const mapStateToProps = (({ user }) => {
  return { ...user };
});


export default connect(mapStateToProps, null)(SignupForm);

