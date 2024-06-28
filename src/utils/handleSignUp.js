import axios, { AxiosError } from "axios";
import { SignUpSchema } from "../schemas/authSchem";
import toast from "react-hot-toast";
import { ZodError } from "zod";

export default async function handleSignUp(e, newUserData
) {
  e.preventDefault();
  const url = `${import.meta.env.VITE_BASE_URL}/signup`;
  console.log(newUserData)
  try {
    SignUpSchema.parse(newUserData);

    await axios.post(url, newUserData);

    toast.success("Cadastro realizado com sucesso.");
  } catch (error) {
    if (error instanceof ZodError) {
      return error.errors.forEach((e) => toast.error(e.message));
    }

      if (error.message === "As senhas devem ser iguais.") {
      return toast.error("As senhas devem ser iguais.");
    }

    if (error instanceof AxiosError) {
      switch (error.response?.status) {
        case 401:
          toast.error("Credenciais inválidas! Por favor cheque os dados inseridos.");
          break;
        case 409:
          toast.error("Esse email já está em uso.");
          break;
        default:
          toast.error("Algo deu errado. Por favor tente novamente.");
      }
      return;
    }

    toast.error("Algo deu errado. Por favor tente novamente.");
  }
}
