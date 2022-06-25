import styled from "styled-components";

export const StyledBg = styled.div`
  background-color: ${(props) => props.theme === true? 'white' : '#222'};
`;
export const StyledDivBg = styled.div`
  background-color: ${(props) => props.theme === true? '#222' : 'whitesmoke'};
`;
export const StyledNavLink = styled.a`
  text-decoration: none;
  font-size: 12px;
  
  color: ${(props) => props.theme === true? 'black' : 'white'};
`;
export const StyledBlackHead = styled.h1`
  color: ${(props) => props.theme === true? 'black' : 'white'};
`;
export const StyledBlackSub = styled.p`
  color: ${(props) => props.theme === true? 'black' : 'white'};
`;
export const StyledWhiteHead = styled.h1`
  color: ${(props) => props.theme === true? 'white' : 'black'};
`;
export const StyledWhiteSub = styled.p`
  color: ${(props) => props.theme === true? 'white' : 'black'};
`;
export const StyledWhiteHead2 = styled.h2`
  color: ${(props) => props.theme === true? 'white' : 'black'};
`;
export const StyledBlackHead2 = styled.h2`
  color: ${(props) => props.theme === true? 'black' : 'white'};
`;