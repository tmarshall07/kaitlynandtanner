import styled, { css } from 'styled-components';
import { lighten, darken, transparentize } from 'polished';
import colors from '../helpers/colors';

export const H1 = styled.h1`
  font-size: 3.2rem;
  color: ${darken(0.3, colors.grey)};

  margin: 0;

  ${(props) => props.inverted && css`
    color: ${transparentize(0, 'white')};
  `}
`;

export const H2 = styled.h2`
  font-size: 2.4rem;
  color: ${darken(0.2, colors.grey)};
  
  margin: 0;

  ${(props) => props.inverted && css`
    color: ${transparentize(0.05, 'white')};
  `}
`;

export const H3 = styled.h3`
  font-size: 1.8rem;
  color: ${darken(0.1, colors.grey)};

  margin: 0;

  ${(props) => props.inverted && css`
    color: ${transparentize(0.1, 'white')};
  `}
`;

export const H4 = styled.h4`
  font-size: 1.6rem;
  color: ${colors.grey};

  margin: 0;

  ${(props) => props.inverted && css`
    color: ${transparentize(0.15, 'white')};
  `}
`;

export const P = styled.p`
  font-size: 1.6rem;
  line-height: 1.5em;
  color: ${lighten(0.05, colors.grey)};

  margin: 0;

  ${(props) => props.inverted && css`
    color: ${transparentize(0.2, 'white')};
  `}
`;
