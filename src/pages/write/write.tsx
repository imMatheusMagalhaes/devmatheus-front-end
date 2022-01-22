import { FC } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./write.css";

type Conteudo = {
  file: FileList;
};

const Write: FC = () => {
  const user = useSelector((state: RootState) => state.user);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Conteudo>();

  const onSubmit: SubmitHandler<Conteudo> = async (data) => {
    console.log(user);
  };
  return (
    <Container className="align d-flex flex-column justify-content-center align-items-center">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Envie um arquivo escrito em MarkDown</Form.Label>
          <div className="input-group custom-file-button">
            <label className="input-group-text" htmlFor="inputGroupFile">
              Upload
            </label>
            <input
              {...register("file")}
              type="file"
              className="form-control"
              id="inputGroupFile"
            />
          </div>
        </Form.Group>
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
};

export default Write;
