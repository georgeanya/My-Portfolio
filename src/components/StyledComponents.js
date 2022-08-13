import styled from "styled-components";

export const StyledBg = styled.div`
  background-color: ${(props) => props.theme === true? 'white' : '#05103A'};
`;
export const StyledDivBg = styled.div`
  background-color: ${(props) => props.theme === true? '#192347' : '#192347'};
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
  color: ${(props) => props.theme === true? '#05103A' : 'white'};
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
  background-color: ${(props) => props.theme === true? 'white' : '#192347' };
`;