import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to <span className="spaced-block"> React Chat </span></h2>
      <img className="logo-img" src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in to continue</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;
