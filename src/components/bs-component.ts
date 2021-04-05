import { LitElement, html, css, property, customElement } from "lit-element";
import { globalStyle } from "../core/decorators";


@customElement("bs-component")
class BsComponent extends LitElement {
  @globalStyle()
  static get styles() {
    return [css`
     
    `];
  }
  @property() myString = "World";
  @property({ type: Array }) myArray = ["an", "array", "of", "test", "data"];
  @property({ type: Boolean }) myBool = true;


  render() {
    return html`
      <h3>Webcomponent with external style (Bootstrap)</h3>
      <div class="card">
        <div class="card-body">
          <button type="button" class="btn btn-primary">Primary</button>
          <button type="button" class="btn btn-success">Success</button>
          <button type="button" class="btn btn-secondary">Secondary</button>
          <button type="button" class="btn btn-danger">Danger</button>
          <button type="button" class="btn btn-warning">Warning</button>
          <button type="button" class="btn btn-info">Info</button>
          <button type="button" class="btn btn-light">Light</button>
          <button type="button" class="btn btn-dark">Dark</button>
          <ul>
            ${this.myArray.map((i) => html`<li>${i}</li>`)}
          </ul>
          ${this.myBool
        ? html`<p>Render some HTML if myBool is true</p>`
        : html`<p>Render some other HTML if myBool is false</p>`}
        </div>
      </div>
    `;
  }
}
