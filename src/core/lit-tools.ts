import { css } from "lit-element";

const { cssRules } = document.styleSheets[0];
export const globalStyle = css({ ...[Object.values(cssRules).map(rule => rule.cssText).join('\n')], raw: [] })


