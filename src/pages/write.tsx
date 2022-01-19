import { FC } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Write: FC = () => {
  return (
    <Container className="col-md-3 mx-auto align-items-center">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Titulo</Form.Label>
          <Form.Control placeholder="Uma título massa!" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Conteúdo</Form.Label>
          <Form.Control placeholder="Pode falar!" />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Write;
