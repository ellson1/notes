import React, { useRef, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { prop } from "styled-tools";

const StyledCollapsible = styled.div`
  transition: ${prop("time", "400")}ms ${prop("delay", "0")}ms height;
  display: ${prop("display")};
  height: 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Collapsible = ({ time, delay, children, expanded = true }) => {
  const [loaded, setLoaded] = useState(expanded);
  const ref = useRef(null);
  useEffect(() => {
    ref.current.style.height = `${ref.current.scrollHeight}px`;
    if (!expanded) {
      const h = ref.current.offsetHeight; // eslint-disable-line no-unused-vars
      ref.current.style.height = 0;
      ref.current.style.overflowY = "hidden";
    }
    setLoaded(true);
  }, [expanded]);

  const handleTransitionEnd = useCallback(() => {
    ref.current.style.height = expanded ? "auto" : "0";
    if (expanded) {
      ref.current.style.overflowY = "visible";
    }
  }, [expanded]);

  const display = loaded ? "block" : "none";

  return (
    <StyledCollapsible
      ref={ref}
      expanded={expanded}
      onTransitionEnd={handleTransitionEnd}
      time={time}
      delay={delay}
      display={display}
    >
      {children}
    </StyledCollapsible>
  );
};
