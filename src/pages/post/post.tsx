import { FC } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { api } from "../../config/axios";
import { setPosts } from "../../store/posts.store";
import "./post.css";

type Conteudo = {
  file: FileList;
};

const Post: FC = () => {
  const userId = window.localStorage.getItem("id");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Conteudo>();

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<Conteudo> = async (data) => {
    if (userId) {
      const file = {
        post: (await data.file[0].text()).toString(),
      };
      const response = await api.post(`/posts/user/${userId}`, file);
      if (response.status === 201) {
        return dispatch(setPosts(response.data));
      }
    } else {
      console.log("error");
      return navigate("/user");
    }
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

export default Post;
