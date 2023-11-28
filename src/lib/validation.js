export function registerValidation(values) {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 3) {
    errors.name = "Must be greater than 2 and less than 17";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must be greater than 8 and less than 20";
  } else if (values.password.includes(" ")) {
    errors.password = "Remove the space";
  } else if (!values.profilePicture) {
    errors.profilePicture = "";
  }

  return errors;
}

export default function loginValidation(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // validation for password
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 5 || values.password.length > 20) {
    errors.password = "Must be greater then 8 and less then 20 characters long";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  return errors;
}

export function eventsValidation(values) {
  const errors = {};

  errors.eventTitle = !values.eventTitle
    ? "add a title"
    : values.eventTitle.length < 9 || values.eventTitle.length > 25
    ? "title must be more than 9 and less than 25 characters"
    : null;

  errors.eventLocation = !values.eventLocation ? "select a location" : null;
  errors.eventDate = !values.eventDate ? "add a date" : null;
  errors.eventTime = !values.eventTime ? "add event time" : null;
  errors.eventMonth = !values.eventMonth ? "add event month" : null;
  errors.eventDay = !values.eventDay ? "add event day" : null;
  errors.eventTag = !values.eventTag ? " select a tag" : null;
  errors.eventImage = !values.eventImage ? "add an image" : null;

  return errors;
}
