
import { LitElement, html, customElement, property, css } from 'lit-element';
import { globalStyle } from "../core/lit-tools";


@customElement('css-component')
class cssComponent extends LitElement {
  @property() myString = "World";
  @property({ type: Array }) myArray = ["an", "array", "of", "test", "data"];
  @property({ type: Boolean }) myBool = true;
  static get styles() {
    return [
      globalStyle,
      css`
      .btn-secondary{
        background-color: violet
      }
   
      `
    ];
  }

  render() {
    return html`
    <h3>Webcomponent with external style (Bootstrap)</h3>
    <div class="card">
      <div class="card-body">
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-secondary">Secondary (style scoped)</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>
        <ul>
          ${this.myArray.map(i => html`<li>${i}</li>`)}
        </ul>
        ${this.myBool ?
        html`<p>Render some HTML if myBool is true</p>` :
        html`<p>Render some other HTML if myBool is false</p>`}
      </div>
    </div>

     
    `;
  }
}
