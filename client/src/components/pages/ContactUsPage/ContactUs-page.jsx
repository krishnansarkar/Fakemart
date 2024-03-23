import { Form, Button } from "react-bootstrap";

export default function ContactUsPage() {
  return (
    <>
      <h1>Contact Us</h1>
      <p>
        Have a question, suggestion, or just want to say hello? We'd love to
        hear from you. Feel free to reach out to us via email or phone.
      </p>
      <Form>
        <Form.Group controlId="firstName">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" placeholder="Emma" required />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" placeholder="Kim" required />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="email@example.com" required />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Hello, this is an example message."
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
