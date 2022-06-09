import styled from "styled-components";

const InputTodoWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 4rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;
  background-color: #808080b3;
  margin-top: 2rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin-bottom: 2rem;
  input {
    width: 90%;
    border: none;
    background-color: transparent;
    outline: none;
    font-size: 1.1rem;
    color: #fff;
    &::placeholder {
      color: #555465;
    }

  }
  svg::hover{
    color: #000;
  }
  
`;
export default InputTodoWrapper;
