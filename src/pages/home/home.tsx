import { FC, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CardHome from "../../components/CardHome/CardHome";
import { api } from "../../config/axios";
import { PostDataType } from "../../types/PostDataType";
import "../home/home.css";

const Home: FC = () => {
  const [postsList, setPostsList] = useState(Array<PostDataType>());
  const navigate = useNavigate();
  useEffect(() => {
    api
      .get("/posts")
      .then((response) => setPostsList(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handlerShowPost = (id: string) => {
    navigate(`/write/${id}`);
  };

  return (
    <Container
      fluid
      className="home d-flex flex-column justify-content-center align-items-center"
    >
      {postsList.map((item) => (
        <CardHome
          click={() => handlerShowPost(item.idPost as string)}
          key={item.idPost}
          titulo={item.titulo}
          resumo={item.resumo}
          user={item.user}
          dataCriacao={item.dataCriacao}
        />
      ))}
    </Container>
  );
};

export default Home;
