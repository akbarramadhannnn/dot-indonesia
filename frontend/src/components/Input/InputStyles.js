import styled from 'styled-components';

const Input = styled.input`
  outline: none;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  padding: 10px;
`;

export const Select = styled.select`
  outline: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  padding: 0px 5px 0px 5px;
`;

export const Suggestion = styled.ul`
  position: absolute;
  box-sizing: border-box;
  margin-top: 5px;
  background: #fff;
  width: 100%;
  z-index: 10;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  padding: 10px;
  max-height: 150px;
  overflow: scroll;
`;

export const SuggestionList = styled.li`
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
  }

  &:last-child {
    margin-bottom: 0px;
  }
`;
export default Input;
