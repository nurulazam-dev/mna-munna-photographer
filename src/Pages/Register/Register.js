import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import SignInWithSocial from "../Login/SignInWithSocial/SignInWithSocial";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!name.trim()) {
      setError("Name is required.");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate("/login");
  }

  return (
    <div
      style={{ width: "500px" }}
      className="container mx-auto border p-3 rounded my-4 shadow"
    >
      <h2 className="text-primary text-center mt-2">Please Register</h2>
      <form onSubmit={handleRegister} className="w-75 mx-auto">
        <div className="mb-3">
          <input
            type="text"
            className="form-control fs-6"
            id="exampleInputName1"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            onBlur={(e) => setEmail(e.target.value)}
            className="form-control fs-6"
            id="exampleInputEmail1"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            onBlur={(e) => setPassword(e.target.value)}
            className="form-control fs-6"
            id="exampleInputPassword1"
            placeholder="Password"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            onBlur={(e) => setConfirmPassword(e.target.value)}
            className="form-control fs-6"
            id="exampleInputConfirmPassword1"
            placeholder="Confirm Password"
            required
          />
        </div>
        <p className="text-danger">
          {error || (hookError && hookError.message)}
        </p>

        <button
          type="submit"
          className="btn btn-primary w-100 mx-auto fs-5"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <p className="text-center mt-2 mb-0">
        If you have already account?{" "}
        <Link className="text-primary text-decoration-none" to="/login">
          Please Login
        </Link>
      </p>
      <SignInWithSocial />
    </div>
  );
};

export default Register;
