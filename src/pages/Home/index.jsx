import * as S from "./styles";
import userContext from "../../hooks/userContext";
import { useContext } from "react";
import Header from "../../components/Header";
import credentialIcon from "../../assets/credentialIcon.svg";
import { useNavigate } from "react-router-dom";
import penIcon from "../../assets/pen.svg";
import cardIcon from "../../assets/cards.svg"

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

      <S.Section onClick={() => navigate("/safenotes")}>
        <S.Icon src={penIcon}></S.Icon>
        <S.Text>Notas seguras</S.Text>
      </S.Section>

      <S.Section onClick={() => navigate("/cards")}>
        <S.Icon src={cardIcon}></S.Icon>
        <S.Text>Notas seguras</S.Text>
      </S.Section>
    </S.Page>
  );
}
