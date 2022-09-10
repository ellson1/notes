import styled from "styled-components";
import { ReactComponent as AddIcon } from "add--alt.svg";

const StyledCreateNote = styled.div`
  color: lightblue;
  border: 4px dashed #666;
  border-radius: 16px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: #666;
    height: 40px;
    width: 40px;
  }
`;

export const CreateNote = ({ createNote }) => {
  return (
    <StyledCreateNote onClick={createNote}>
      <AddIcon />
    </StyledCreateNote>
  );
};
