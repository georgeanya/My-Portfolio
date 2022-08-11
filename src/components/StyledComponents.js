import styled from "styled-components";

export const StyledBg = styled.div`
  background-color: ${(props) => props.theme === true? 'white' : '#222'};
`;
export const StyledDivBg = styled.div`
  background-color: ${(props) => props.theme === true? '#222' : '#52574C'};
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
  color: ${(props) => props.theme === true? 'white' : 'white'};
`;
export const StyledWhiteSub = styled.p`
  color: ${(props) => props.theme === true? 'white' : 'white'};
`;
export const StyledWhiteHead2 = styled.h2`
  color: ${(props) => props.theme === true? 'white' : 'white'};
`;
export const StyledBlackHead2 = styled.h2`
  color: ${(props) => props.theme === true? 'black' : 'white'};
`;
export const StyledBlackDiv = styled.div`
  color: ${(props) => props.theme === true? 'black' : 'white'};
`;
export const StyledSpiceDiv = styled.div`
  background-color: ${(props) => props.theme === true? 'white' : '#52574C' };
`;