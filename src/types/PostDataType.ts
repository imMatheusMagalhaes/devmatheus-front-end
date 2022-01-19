import { UserDataType } from "./UserDataType";

export interface PostDataType {
  idPost?: string;
  titulo: string;
  resumo: string;
  dataCriacao: string;
  user: UserDataType;
}
