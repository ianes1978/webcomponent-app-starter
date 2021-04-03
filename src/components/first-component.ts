
import { LitElement, html, customElement, property } from 'lit-element';

@customElement('first-component')
class FirstComponent extends LitElement {
  @property() myString = 'World';
  @property({ type: Array }) myArray = ['an','array','of','test','data'];
  @property({ type: Boolean })  myBool = true
  
  render() {
    return html`
      <p>${this.myString}</p>
      <ul>
        ${this.myArray.map(i => html`<li>${i}</li>`)}
      </ul>
      ${this.myBool?
        html`<p>Render some HTML if myBool is true</p>`:
        html`<p>Render some other HTML if myBool is false</p>`}
    `;
  }
}
