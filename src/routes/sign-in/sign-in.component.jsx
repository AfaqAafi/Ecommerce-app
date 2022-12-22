import React, { useEffect } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
export const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>Sign In Page</h1>
      <button>
        <SignUpForm />
      </button>
    </>
  );
};
