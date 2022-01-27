import { FC, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { api } from "../../config/axios";

const Write: FC = () => {
  const [postMD, setPostMD] = useState("");
  const params = useParams();
  useEffect(() => {
    api
      .get(`/posts/download/${params.id}`)
      .then((response) => setPostMD(response.data))
      .catch((error) => console.error(error));
  }, []);

  return <ReactMarkdown className="d-flex flex-column justify-content-center align-items-center">{postMD}</ReactMarkdown>;
};
export default Write;
