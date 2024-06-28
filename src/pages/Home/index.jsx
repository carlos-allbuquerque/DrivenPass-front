import * as S from "./styles";
import userContext from "../../hooks/userContext";
import { useContext } from "react";
import Header from "../../components/Header";
import credentialIcon from "../../assets/credentialIcon.svg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  return(
    <S.Page>
      <Header text="Minhas senhas" route="/"/>
      <S.Section onClick={() => navigate("/credentials")}>
        <S.Icon src={credentialIcon}></S.Icon>
        <S.Text>Credenciais</S.Text>
      </S.Section>
    </S.Page>
  );
}