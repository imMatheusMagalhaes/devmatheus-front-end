import { FC } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Post: FC = () => {
  return (
    <Container className="col-md-3 mx-auto align-items-center">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control placeholder="Coloque um nome!!" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>E-mail</Form.Label>
          <Form.Control placeholder="Algum endereço de e-mail!" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Resumo</Form.Label>
          <Form.Control placeholder="Agora dica algo sobre você!!!" />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Post;
