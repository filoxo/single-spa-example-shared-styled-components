import React from "react";
import styled, { keyframes } from "styled-components";

const shake = keyframes`
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    transform: translateX(-2px);
  }
  20%,
  40%,
  60% {
    transform: translateX(2px);
  }
  80% {
    transform: translateX(1px);
  }
  90% {
    transform: translateX(-1px);
  }
`;

const StyledButton = styled.button`
  background: papayawhip;
  border: none;
  border-radius: 0.3rem;
  font-size: 1rem;
  padding: 0.6rem 1.2rem;

  :focus {
    animation: ${shake} 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    box-shadow: 0 0 0 3px coral;
    outline: none;
  }
`;

export default function Button(props) {
  return <StyledButton type="button" {...props} />;
}
