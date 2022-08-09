import styled from "styled-components";

const TodoItemWrapper = styled.div`
  width: 90%;
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 2rem;
  border-bottom: 2px solid grey;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  svg {
    margin-left: 1rem;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.6);
    &:hover{
      color: rgba(255, 255, 255);
    }
  }

`;

export default TodoItemWrapper;
