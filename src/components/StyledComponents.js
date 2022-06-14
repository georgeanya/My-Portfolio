import styled from "styled-components";

export const StyledBg = styled.div`
  background-color: ${(props) => (props.theme ? 'white' : 'grey')};
`;
export const StyledNavLink = styled.a`
  text-decoration: none;
  color: black;
`;
export const StyledBlackHead = styled.h1`
  color: black;
`;
export const StyledBlackSub = styled.p`
  color: black;
`;
export const StyledWhiteHead = styled.h1`
  color: white;
`;
export const StyledWhiteSub = styled.p`
  color: white;
`;
export const StyledWhiteHead2 = styled.h2`
  color: white;
`;
export const StyledBlackHead2 = styled.h2`
  color: black;
`;