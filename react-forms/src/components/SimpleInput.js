import { useState } from "react";


const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  let isFormValid = false;

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailisValid = enteredEmail.includes('@');
  const emailInputIsValid = !enteredEmailisValid && enteredEmailTouched;


  if (enteredNameIsValid && enteredEmailisValid) {
    isFormValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    // nameInputRef.current.value='' -> NOT IDEAL, DON'T MANIPULATE DOM 
    setEnteredName('');
    setEnteredNameTouched(false);

    setEnteredEmail('')
    setEnteredEmailTouched(false);
  }



  const nameInputClass = nameInputIsInvalid ? 'form-control invalid' : 'form-control'
  const emailInputClass = emailInputIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
      </div>
      {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}


      <div className={emailInputClass}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' value={enteredEmail} onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} />
      </div>
      {emailInputIsValid && <p className="error-text">Please Enter a Valid Email</p>}

      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
