export default (values) => {
  const errors = {}

  // @TODO: Do not remove. return it with change of version of API on login action
  //if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //  errors.email = 'Please, try to input valid Email';
  //}

  if (!_.has(values, 'email') || _.size(values.email) < 1) {
    errors.email = ' ';
  }

  if (!_.has(values, 'password') || _.size(values.password) < 1) {
    errors.password = ' ';
  }

  return errors;
};
