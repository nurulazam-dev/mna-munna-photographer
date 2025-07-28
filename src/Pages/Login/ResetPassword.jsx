import { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../../Firebase/Firebase.init";
import { Container, Form, Button, Card, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ResetPassword = () => {
  const [resetEmail, setResetEmail] = useState("");
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const passwordReset = async () => {
    if (resetEmail) {
      await sendPasswordResetEmail(resetEmail);
      setResetEmail("");
      Swal.fire({
        title: "Password reset email sent!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        title: "Please enter your email address",
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card
        className="p-4 shadow-sm"
        style={{ maxWidth: "420px", width: "100%" }}
      >
        <h4 className="text-center mb-3">Reset Your Password</h4>
        <p className="text-center text-muted mb-4">
          Enter your email to receive a password reset link.
        </p>

        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <Form.Control
              type="email"
              placeholder="example@email.com"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              required
            />
          </div>
        </Form.Group>

        <Button
          onClick={passwordReset}
          className="w-100 d-flex align-items-center justify-content-center"
          variant="primary"
          disabled={sending}
        >
          {sending ? (
            <>
              <Spinner animation="border" size="sm" className="me-2" />
              Sending...
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
              Send Reset Link
            </>
          )}
        </Button>

        {resetError && (
          <div className="text-danger text-center mt-3">
            {resetError?.message}
          </div>
        )}
      </Card>
    </Container>
  );
};

export default ResetPassword;
