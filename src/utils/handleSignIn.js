import axios, { AxiosError } from "axios";
import { SignInSchema } from "../schemas/authSchema";
import toast from "react-hot-toast";
import { ZodError } from "zod";

export default async function handleSignIn(e, userData) {
  e.preventDefault();
  const url = `${import.meta.env.VITE_BASE_URL}/signin`;
  
  try {
    SignInSchema.parse(userData);

    const r = await axios.post(url, userData);
    toast.success("Login realizado com sucesso.");
    console.log(r.data);
    return r.data;
  } catch (error) {
    if (error instanceof ZodError) {
      return error.errors.forEach((e) => toast.error(e.message));
    }

    if (error instanceof AxiosError) {
      switch (error.response?.status) {
        case 401:
          toast.error("Credenciais inválidas! Por favor cheque os dados inseridos.");
          break;
        case 409:
          toast.error("Credenciais inválidas! Por favor cheque os dados inseridos.");
          break;
        default:
          toast.error("Algo deu errado. Por favor tente novamente.");
      }
      return;
    }

    toast.error("Algo deu errado. Por favor tente novamente.");
  }
}
