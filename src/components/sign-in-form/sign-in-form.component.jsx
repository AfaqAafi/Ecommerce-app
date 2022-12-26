import React, { useState } from "react";
import "./sign-in-form.component.scss";
import "../button/button.styles.scss";
import {
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      resetFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password for email!");
          break;

        case "auth/user-not-found":
          alert("No user associated with Email");
          break;

        default:
          console.log(error);
      }
    }
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    const { user } = await signInWithGooglePopup();
    // setCurrentUser(user);
    await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div className="sign-up-container">
        <h2>Already have an account? </h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <div className="buttons-container">
            <Button type="submit">sign In</Button>
            <button className="google" onClick={signInWithGoogle}>
              Google Signin
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
