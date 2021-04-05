import { LitElement, html, css, property, customElement } from "lit-element";
import { globalStyle } from "../core/decorators";


@customElement("nav-bar")
class NavBar extends LitElement {
  @globalStyle()
  static get styles() {
    return [];
  }
  @property({ type: Boolean }) show = false;
  render() {
    return html`
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button @click="${() => this.show = !this.show}" class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse ${this.show ? 'show' : ''}" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pageOne">Page 1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pageTwo">Page2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Page 3</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;
  }
}
