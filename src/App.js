import styled from "styled-components";

import { CreateNote } from "CreateNote";

import { Note } from "Note";

const StyledNotesList = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 16px;
`;

export const App = () => {
  return (
    <StyledNotesList>
      <CreateNote />
      <Note />
    </StyledNotesList>
  );
};
