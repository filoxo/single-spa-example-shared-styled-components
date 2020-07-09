import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: papayawhip;
  border: none;
  padding: 1rem 2rem;
`;

export default function Button(props) {
  return <StyledButton type="button" {...props} />;
}
