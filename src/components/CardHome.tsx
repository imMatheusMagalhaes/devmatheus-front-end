import { FC } from "react";
import { Card } from "react-bootstrap";
import { PostDataType } from "../types/PostDataType";

const CardHome: FC<PostDataType> = (props: PostDataType) => {
  const date = new Date(props.dataCriacao);
  const dateFormat = date.toLocaleDateString("pt-BR", { timeZone: "UTC" });
  return (
    <Card style={{ width: "18rem", cursor: "pointer" }} onClick={() => {}}>
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>{props.resumo}</Card.Text>
        <Card.Text>{dateFormat}</Card.Text>
        <Card.Text className="d-flex justify-content-end">
          {props.user.nome}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardHome;
