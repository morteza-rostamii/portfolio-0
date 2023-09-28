import { useEffect, useMemo, useState } from "react"
//import { validate } from 'email-validator';
import {validate} from 'react-email-validator'

import toast from "react-hot-toast";
import useSendEmail from "./useSendEmail";

const notify = () => toast('Here is your toast.');

function useValidateForm() {
  const [name, setName] = useState({
    name: null,
    errors: [],
  });
  const [email, setEmail] = useState({
    email: null,
    errors: [],
  });
  const [message, setMessage] = useState({
    message: null,
    errors: [],
  });

  // email
  const [handSendEmail, loading] = useSendEmail();

  /* 
  # validate: 
    # form value changed
    # form been submited
  */

  function validateName(
    value, setValue
  ) {
    const errors = [];
    const regex = /^.{21,}$/;

    if (!value) {
      errors.push("name can't be empty")
    }

    if (regex.test(value)) {
      errors.push('name should be under 20 characters');
    }

    setValue(c => {
      const obj = {...c};
      obj.errors = errors;
      return obj;
    })

    return errors;
  }

  function validateEmail(
    value, setValue
  ) {
    const errors = [];

    if (!value) {
      errors.push("email can't be empty")
    }

    if (!validate(value)) {
      errors.push('enter a valid email!');
    }

    setValue(c => {
      const obj = {...c};
      obj.errors = errors;
      return obj;
    })

    return errors;
  }

  function validateMessage(
    value, setValue
  ) {
    const errors = [];

    if (!value) {
      errors.push("message can't be empty")
    }

    setValue(c => {
      const obj = {...c};
      obj.errors = errors;
      return obj;
    })

    return errors;
  }

  function handSubmitForm(event) {
    event.preventDefault();
    const errors = [];
    const err1 = validateName(name.name, setName);
    const err2 = validateEmail(email.email, setEmail);
    const err3 = validateMessage(message.message, setMessage);

    errors.push(...err1, ...err2, ...err3);

    if (errors.length) return; 

    // send email
    handSendEmail({
      sender: name.name,
      senderEmail: email.email,
      message: message.message,
    });
  }

  useEffect(() => {
    if (name.name === null) return;
    validateName(name.name, setName);
  }, [name.name]);

  useEffect(() => {
    if (email.email === null) return;
    validateEmail(email.email, setEmail);
  }, [email.email]);

  // validate on input change
  useEffect(() => {
    if (message.message === null) return;
    
    validateMessage(message.message, setMessage);
  }, [message.message]);

  return [
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    handSubmitForm,
    loading,
  ]
}

export default useValidateForm;