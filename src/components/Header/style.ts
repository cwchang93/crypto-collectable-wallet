import styled from "styled-components";

export const StyledHeader = styled.div`
  position: fixed;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  height: 60px;
  grid-template-columns: 40px auto 100px;
  align-items: center;
  border-bottom: solid #f5f5f5 1px;
  background: #fff;
  z-index: 10;
  text-align: center;
  font-size: 32px;
  line-height:60px;
  
 @media screen and (min-width: 768px) {
    height: 80px;
    line-height: 80px;
  }

`;
