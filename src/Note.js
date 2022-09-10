import { useState, useEffect } from "react";
import styled from "styled-components";
import { prop } from "styled-tools";
import TextareaAutosize from "react-textarea-autosize";

import { Collapsible } from "Collapsible";
import { ReactComponent as DeleteIcon } from "trash-can.svg";

const StyledNote = styled.div`
  background: ${prop("color")};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 6px 10px 6px #0005;
  position: relative;

  input {
    background: inherit;
    width: 100%;
    border: none;
    outline: none;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    box-sizing: border-box;
    padding: 12px;
    font-size: 16px;

    :focus {
      background: #fff5;
    }
  }

  textarea {
    background: inherit;
    width: 100%;
    border: none;
    outline: none;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    box-sizing: border-box;
    padding: 12px;

    :focus {
      background: #fff5;
    }
  }

  svg {
    position: absolute;
    right: 6px;
    bottom: 12px;
    width: 24px;
    height: 24px;
  }
`;

export const Note = ({ color, note, title, onUpdateNote, deleteNote }) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(true);
  }, []);

  const handleDelete = () => {
    setExpanded(false);
    setTimeout(deleteNote, 400);
  };

  return (
    <Collapsible expanded={expanded}>
      <StyledNote color={color}>
        <input placeholder="Write your title here" onChange={onUpdateNote("title")} value={title} />
        <TextareaAutosize minRows={7} placeholder="Write your note here" onChange={onUpdateNote("note")} value={note} />
        <DeleteIcon onClick={handleDelete} />
      </StyledNote>
    </Collapsible>
  );
};
