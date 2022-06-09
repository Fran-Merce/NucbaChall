import styled from "styled-components";

const TodoItemWrapper = styled.div`
  width: 90%;
  height: 4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;
  border-bottom: 2px solid grey;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  
`;

export default TodoItemWrapper;
