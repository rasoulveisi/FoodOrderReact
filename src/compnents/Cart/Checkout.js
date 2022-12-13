import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";

const validPostalCode = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formValidation, setFormValidation] = useState({
    name: true,
    address: true,
    postalCode: true,
  });

  const nameRef = useRef("");
  const addressRef = useRef("");
  const postalCodeRef = useRef("");

  const confirmHandler = (event) => {
    event.preventDefault();

    const submitedName = nameRef.current.value;
    const submitedAddress = addressRef.current.value;
    const submitedPostalCode = postalCodeRef.current.value;

    const nameIsValid = !isEmpty(submitedName);
    const addressIsValid = !isEmpty(submitedAddress);
    const postalCodeIsValid = validPostalCode(submitedPostalCode);

    const formIsValid = nameIsValid && addressIsValid && postalCodeIsValid;

    setFormValidation({
      name: nameIsValid,
      address: addressIsValid,
      postalCode: postalCodeIsValid,
    });

    if (!formIsValid) return;

    console.log(submitedName, submitedAddress, submitedPostalCode);
  };

  const nameControlClasses = `${classes.control} ${
    formValidation.name ? "" : classes.invalid
  }`;
  const addressControlClasses = `${classes.control} ${
    formValidation.address ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formValidation.postalCode ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formValidation.name && <p>Please enter a valid name!</p>}
      </div>

      <div className={addressControlClasses}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressRef} />
        {!formValidation.address && <p>Please enter a valid address!</p>}
      </div>

      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="number" id="postal" ref={postalCodeRef} />
        {!formValidation.postalCode && <p>Please enter a valid postal code!</p>}
      </div>

      <div className={classes.actions}>
        <button className={classes.submit}>Confirm</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Checkout;
