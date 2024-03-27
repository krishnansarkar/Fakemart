import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactUsPage() {
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [sendButtonText, setSendButtonText] = useState("Send");

  const sendButtonStates = {
    Ready: "Send",
    Sending: "Sending...",
    Sent: "Sent!",
  };
  function setSendButtonState(state) {
    switch (state) {
      case sendButtonStates.Ready:
        setSubmitDisabled(false);
        setSendButtonText(sendButtonStates.Ready);
        break;
      case sendButtonStates.Sending:
        setSubmitDisabled(true);
        setSendButtonText(sendButtonStates.Sending);
        break;
      case sendButtonStates.Sent:
        setSubmitDisabled(true);
        setSendButtonText(sendButtonStates.Sent);
        break;
      case sendButtonStates.Error:
        setSubmitDisabled(true);
        setSendButtonText(sendButtonStates.Error);
        break;
      default:
        console.log("Attempted to set send button state to an invalid value.");
        break;
    }
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, message } = data;

    setSendButtonState(sendButtonStates.Sending);

    try {
      const templateParams = {
        name,
        email,
        message,
      };

      await emailjs.send(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        templateParams,
        { publicKey: process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY }
      );

      setSendButtonState(sendButtonStates.Sent);

      reset();
    } catch (e) {
      console.log("Failed to send message: " + e);
      setSendButtonState(sendButtonStates.Error);
    } finally {
      setTimeout(() => {
        setSendButtonState(sendButtonStates.Ready);
      }, 1500);
    }
  };

  const formStyle = {
    maxWidth: "900px",
  };

  return (
    <Container fluid className="bg-white">
      <div className="mx-auto py-5" style={formStyle}>
        <h1>Contact Us</h1>
        <p className="pb-3">
          Have a question, suggestion, or just want to say hello? We'd love to
          hear from you. Feel free to reach out to us via email, phone, or the
          form below.
        </p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="Name" className="mb-3 ">
            <Form.Label>Name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Jane Doe"
              {...register("name", {
                required: "Name is required.",
              })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </Form.Group>
          <Form.Group controlId="email" className="mb-3">
            <Form.Label>Email address*</Form.Label>
            <Form.Control
              type="email"
              placeholder="email@example.com"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </Form.Group>
          <Form.Group controlId="message" className="mb-3">
            <Form.Label>Message*</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Hello. This is an example message."
              {...register("message", {
                required: "Message is required",
              })}
            />
            {errors.message && <span>{errors.message.message}</span>}
          </Form.Group>
          <Button variant="primary" type="submit" disabled={submitDisabled}>
            {sendButtonText}
          </Button>
        </Form>
      </div>
    </Container>
  );
}
