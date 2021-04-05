import { LitElement, html, css, property, customElement } from "lit-element";
import { globalStyle } from "../../core/lit-tools";
import './ex-binding-child'
import './ex-binding-child-complex'


@customElement("ex-binding")
class ExBinding extends LitElement {

  static get styles() {
    return [
      globalStyle,
      css`
          :host{
              display: block;
          }
    `];
  }
  @property({ type: String }) _text = "Text example";
  @property({ type: Object }) _object = { a: { b: [1, 2, 3], c: { d: 4 } } };


  render() {
    return html`
          <h5>Binding:</h5>
          if i want only pass a text or a number like: <b>${this._text}</b><br>
          is indifferent use valueCustom="${this._text}" or with point .valueCustom="${this._text}"<br><br>
          <h5>FirstCase valueCustom</h5>
          <ex-binding-child valueCustom="${this._text}"></ex-binding-child>
          <h5>SecondCase .valueCustom no difference</h5>
          <ex-binding-child .valueCustom='${this._text}'></ex-binding-child>
          <br>
          if i want to pass a complex data i have to use the point: { a: { b: [1, 2, 3], c: { d: 4 } } }</br>
          <ex-binding-child-complex .valueCustom="${this._object}"></ex-binding-child-complex>
      `;
  }
}
