import google from "../../../images/Social Logo/google.png";
import github from "../../../images/Social Logo/github.png";
import auth from "../../../Firebase/Firebase.init";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const SignInWithSocial = () => {
  const [signInWithGoogle, user, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user || githubUser) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <p className="text-center my-2">
        Forgot password? <a href="reset-password">Reset it</a>
      </p>
      <hr />
      <p className="text-center mb-2">Or continue with</p>
      <div className="d-flex justify-content-center gap-3">
        <button
          onClick={() => signInWithGoogle()}
          disabled={googleLoading}
          className="border"
        >
          <img style={{ width: "30px" }} className="" src={google} alt="" />
        </button>

        <button
          onClick={() => signInWithGithub()}
          disabled={githubLoading}
          className="border"
        >
          <img style={{ width: "30px" }} src={github} alt="" />
        </button>
      </div>
      {/* Error messages */}
      <div
        className="text-danger text-center mt-2"
        style={{ minHeight: "24px" }}
      >
        {googleError && googleError.message}
        {githubError && githubError.message}
      </div>
    </div>
  );
};

export default SignInWithSocial;
