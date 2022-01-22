import { FC, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CardHome from "../../components/CardHome";
import { api } from "../../config/axios";
import { PostDataType } from "../../types/PostDataType";

const Home: FC = () => {
  const [posts, setPosts] = useState(Array<PostDataType>());

  useEffect(() => {
    api
      .get("/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container className="home d-flex flex-column justify-content-center align-items-center">
      {posts.map((item) => (
        <CardHome
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
