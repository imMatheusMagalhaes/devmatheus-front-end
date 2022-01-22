import { FC } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../config/axios";
import { RootState } from "../../store/store";
import { setUser } from "../../store/user.store";
import "./post.css";

type User = {
  nome: string;
  email: string;
  info: string;
};

const Post: FC = () => {
  const user = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = async (data) => {
    const response = await api.post("/users", data);
    if (response.status === 201) {
      console.log(user);
      return dispatch(setUser(response.data));
    }
    return alert(response.status);
  };

  return (
    <Container className="align d-flex flex-column justify-content-center align-items-center">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control {...register("nome")} placeholder="Coloque um nome!!" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            {...register("email")}
            placeholder="Algum endereço de e-mail!"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Info</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            {...register("info")}
            placeholder="Agora diga algo sobre você caso queira!"
          />
        </Form.Group>
        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  );
};

export default Post;
