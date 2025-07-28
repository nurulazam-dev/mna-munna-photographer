import google from "../../../images/Social Logo/google.png";
import github from "../../../images/Social Logo/github.png";
import auth from "../../../Firebase/Firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import Swal from "sweetalert2";

const SignInWithSocial = () => {
  const emailRef = useRef("");
  // const [email] = useRef('');
  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const passwordReset = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      emailRef.current.value = "";
      Swal.fire({
        title: "Password Reset email sent",
        icon: "success",
        draggable: true,
      });
    } else {
      Swal.fire({
        title: "Please give your email address",
        icon: "error",
        draggable: true,
      });
    }
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <p className="text-center">
        If you forget password ?
        <button
          onClick={passwordReset}
          className="btn btn-link text-primary text-decoration-none"
        >
          Reset Password
        </button>
      </p>
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className=" w-50 mx-auto rounded bg-primary d-block border-0 text-center mb-3"
        >
          <img style={{ width: "30px" }} className="mb-1" src={google} alt="" />
          <span className="fs-6 px-3 text-white">Continue with Google</span>
        </button>
        <p className="text-danger">{error}</p>
      </div>
      <div>
        <button
          onClick={() => signInWithGithub()}
          className=" w-50 mx-auto rounded bg-primary d-block border-0 text-center "
        >
          <img style={{ width: "30px" }} className="mb-1" src={github} alt="" />
          <span className="fs-6 px-3 text-white">Continue with Github</span>
        </button>
        {/* <p>{githubError}</p> */}
      </div>
    </div>
  );
};

export default SignInWithSocial;
