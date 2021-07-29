import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 4px;
  background: #4169e1;
  color: #fff;
  margin-right: 8px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  &:last-child {
    margin-right: 0px;
  }
`;

export default Button;
