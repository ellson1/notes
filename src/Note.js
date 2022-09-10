import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

const colors = ["#ffec97", "#f9cfe3", "#fcddd1", "#e3d5ea", "#e5eb9f", "#bae3eb"];

const StyledNote = styled.div`
  background: ${colors[0]};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 6px 10px 6px #0005;

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
`;

export const Note = () => {
  return (
    <StyledNote>
      <input placeholder="Write your title here" />
      <TextareaAutosize minRows={7} placeholder="Write your note here" />
    </StyledNote>
  );
};
