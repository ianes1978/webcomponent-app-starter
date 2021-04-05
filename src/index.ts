import { LitElement, html, css, property, customElement } from 'lit-element';
import { store } from './store/store'
import { connect } from 'pwa-helpers'
import { globalStyle } from './core/lit-tools'
import { Router } from '@vaadin/router';
import './components/nav-bar';
import './pageRouter';


@customElement("my-app")
class MyApp extends connect(store)(LitElement) {
  static get styles() {
    return [
      globalStyle,
      css``
    ];
  }

  render() {
    return html`
          <nav-bar></nav-bar>
          <div class="container">
            <div class="row">
              <div class="col">
                <page-router></page-router>
              </div>
            </div>
          </div>
    `;
  }
}
