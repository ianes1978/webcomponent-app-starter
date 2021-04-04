import { LitElement, html, css, property, customElement } from "lit-element";
import { globalStyle } from "../core/decorators";


@customElement("ex-input-binding")
class ExInputBinding extends LitElement {
  @globalStyle()
  static get styles() {
    return [css`
          :host{
              display: block;
          }
    `];
  }
  @property({ type: String }) _text = "Test me";


  render() {
    return html`
                <h5>Double binding :</h5>
                <div class="d-flex">
                  <input style="width:200px" type="text" class="form-control" value="${this._text}"
                    @keydown="${(e) => this._text = e.target.value}">
                  <div class="ml-3 d-flex align-items-center">${this._text}</div>
                </div>
    `;
  }
}
