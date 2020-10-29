import styled from '@emotion/styled';
import { compose, variant } from 'styled-system';

import {
  Base,
  BaseProps,
  baseStyleProps,
  TypographyProps,
  typographyStyleProps,
} from '../../system';

export type TextProps = {
  variant: 'body' | 'caption' | 'label';
} & BaseProps &
  TypographyProps;

const defaultextStyles = {
  fontFamily: 'body',
  fontWeight: 'body',
  lineHeight: 'body',
  color: 'text',
  mt: 0,
  mb: 0,
};

const textVariants = variant({
  variants: {
    body: {
      ...defaultextStyles,
      fontSize: 2,
    },
    caption: {
      ...defaultextStyles,
      fontSize: 1,
    },
    label: {
      ...defaultextStyles,
      fonts: 'heading',
      fontSize: 1,
      fontWeight: 'medium',
    },
  },
});

export const Text = styled(Base)<TextProps>(
  compose(...baseStyleProps, typographyStyleProps, textVariants)
);

Text.defaultProps = {
  variant: 'body',
  as: 'p',
};
