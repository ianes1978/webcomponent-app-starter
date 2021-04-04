import { LitElement, html, css, property, customElement } from 'lit-element';
import { store } from './store/store'
import { connect } from 'pwa-helpers'
import { globalStyle } from './core/decorators'
import { Router } from '@vaadin/router';
import './components/nav-bar';
import './views/home.view';
import './views/pageOne.view';
import './views/pageTwo.view';

@customElement("my-app")
class MyApp extends connect(store)(LitElement) {
  @globalStyle()
  static get styles() {
    return [css`
         .page {
          display: none;
        }
        .page[active] {
          display: block;
        }
    `];
  }
  @property() _page = "";
  firstUpdated() {
    const router = new Router(this.shadowRoot.getElementById('router'));
    router.setRoutes([
      { path: '/', component: 'home-view' },
      { path: '/pageOne', component: 'page-one-view' },
      { path: '/pageTwo', component: 'page-two-view' },
    ]);
  }
  stateChanged(state) {
  }
  render() {
    return html`
    
          <nav-bar></nav-bar>
          <div class="container">
            <div class="row">
              <div class="col">
                <div id="router"></div>
              </div>
            </div>
          </div>
    `;
  }
}
