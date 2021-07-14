import { css } from '@lion/core';

export const borderRadiusMixin = (size, corner) => {
  if (!size) {
    size = '';
  }

  if (!corner) {
    corner = '';
  }

  const sizeMap = {
    none: css`0`,
    sm: css`0.125rem`,
    '': css`0.25rem`,
    md: css`0.375rem`,
    lg: css`0.5rem`,
    xl: css`0.75rem`,
    '2xl': css`1rem`,
    '3xl': css`1.5rem`,
    full: css`9999px`,
  };

  let cornerMap = {
    '': [css`border-radius`],
    tl: [css`border-top-left-radius`],
    tr: [css`border-top-right-radius`],
    bl: [css`border-bottom-left-radius`],
    br: [css`border-bottom-right-radius`],
  };

  cornerMap = {
    ...cornerMap,
    t: [...cornerMap['tl'], ...cornerMap['tr']],
    b: [...cornerMap['bl'], ...cornerMap['br']],
    l: [...cornerMap['tl'], ...cornerMap['bl']],
    r: [...cornerMap['tr'], ...cornerMap['br']],
  };

  // prettier-ignore
  const output = cornerMap[corner]
      .map(
        (corn) =>
          css`${corn}: ${sizeMap[size]};`
      )
      .reduce((acc, curr) => css`${acc}
${curr}`);

  return output;
};
