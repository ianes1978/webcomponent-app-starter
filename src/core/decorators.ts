import { css } from "lit-element";

export function globalStyle() {

    return (target: Function, keyName: any, D: PropertyDescriptor) => {
        const { cssRules } = document.styleSheets[0];
        const globalStyle = css({ ...[Object.values(cssRules).map(rule => rule.cssText).join('\n')], raw: [] })
        const insideStyle = target[keyName];
        D.get = () => { return [globalStyle, ...insideStyle] }
    }
}