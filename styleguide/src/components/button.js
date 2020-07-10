import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: papayawhip;
  border: none;
  border-radius: 0.3rem;
  font-size: 1rem;
  padding: 0.6rem 1.2rem;

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px coral;
  }
`;

export default function Button(props) {
  return <StyledButton type="button" {...props} />;
}
