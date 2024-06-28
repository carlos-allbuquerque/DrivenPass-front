import styled from "styled-components";

export const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  height: 90%;
  width: 100rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem; 
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 7rem;
`;

export const Icon = styled.img`
  height: 12rem;
  width: 12rem;
`;

export const Text = styled.img`
  height: 4rem;
  width: 13rem;
`;

export const Form = styled.form`
  height: 15rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  border: solid 0.2rem #005985;
  border-radius: 0.4rem;
`;

export const Button = styled.button`
  height: 3.5rem;
  width: 100%;
  background-color: ${props => props.color};
  border: none;
  border-radius: 0.4rem;
  font-size: 1rem;
`;