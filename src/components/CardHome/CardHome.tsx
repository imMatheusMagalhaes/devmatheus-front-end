import { FC } from "react";
import { Card } from "react-bootstrap";
import { PostDataType } from "../../types/PostDataType";
import "./CardHome.css";

const CardHome: FC<PostDataType> = (props: PostDataType) => {
  const dateTimeFormat = new Date(props.dataCriacao);
  const dateFormat = dateTimeFormat.toLocaleDateString("pt-BR", { timeZone: "UTC" }) 
  const timeFormat = dateTimeFormat.toLocaleTimeString("pt-BR", { timeZone: "UTC" })
  const dateTime = `${dateFormat} ás ${timeFormat}`

  return (
    <Card className="card" style={{ width: "30rem", cursor: "pointer" }} onClick={props.click}>
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>{props.resumo}</Card.Text>
        <Card.Text>{dateTime}</Card.Text>
        <Card.Text className="d-flex justify-content-end">
          {props.user.nome}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardHome;
