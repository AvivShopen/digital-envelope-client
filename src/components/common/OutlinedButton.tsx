import styled from "styled-components";

const OutlinedButton = styled.button`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgb(84, 105, 212) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
  color: rgb(84, 105, 212);
  border: unset;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;

export default OutlinedButton;
