import { Form, Button } from "react-bootstrap";
import { styled } from "styled-components";

export const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
`;

export const ContainerForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: 40%;
  height: 50vh;
  padding: 20px;
  border-radius: 8px;
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;

export const FloatingLabel = styled(Form.FloatingLabel)`
  padding-top: 5px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const SubmitButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.background};
  font-size: large;
  outline: none;
  border: none;
  width: 30%;
  &:hover {
    background-color: ${(props) => props.theme.colors.action};
    color: ${(props) => props.theme.colors.text};
  }
`;

export const ChangeForm = styled.span`
  transition: 350ms;
  cursor: pointer;
  border-bottom: 1px solid;
  &:hover {
    opacity: 0.7;
    padding: 0 12px;
  }
`;
