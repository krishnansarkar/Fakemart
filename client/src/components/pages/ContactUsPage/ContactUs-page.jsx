import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactUsPage() {
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, message } = data;

    setSubmitDisabled(true);

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

      reset();
    } catch (e) {
      console.log("failed:" + e);
    } finally {
      setSubmitDisabled(false);
    }
  };

  const formStyle = {
    maxWidth: "900px",
  };

  return (
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
        {!submitDisabled ? (
          <Button variant="primary" type="submit">
            Send
          </Button>
        ) : (
          <Button variant="primary" type="submit" disabled>
            Sending...
          </Button>
        )}
      </Form>
    </div>
  );
}
