import styled from 'styled-components';

const List = styled.div`
  margin-top: 30px;
  position: relative;
`;

export const ContentWrapper = styled.div`
  position: relative;
  border: 1px solid #dcdcdc;
  padding: 10px;
  border-radius: 4px;
`;

export const TitleArea = styled.div`
  display: inline-block;
  /* border-bottom: 2px solid #aaa; */
  /* padding-bottom: 7px; */

  h1 {
    font-size: 16px;
    text-align: left;
  }
`;

export const Cost = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #dcdcdc;
  padding: 13px;
  border-radius: 4px;
  margin-top: 10px;
`;

export const TitleCost = styled.div`
  display: inline-block;

  h1 {
    font-size: 13.5px;
    text-align: left;
  }
`;

export const CostList = styled.ul`
  position: relative;
  display: flex;
  width: 100%;
  padding: 3px 0px;

  li {
    flex: 1;
    font-size: 13px;
    color: #100c08;
  }
`;

export default List;
