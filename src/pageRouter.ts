import { LitElement, html, css, property, customElement } from 'lit-element';
import { store } from './store/store'
import { connect } from 'pwa-helpers'
import { globalStyle } from './core/decorators'
import { Router } from '@vaadin/router';
import './components/nav-bar';
import './views/home.view';
import './views/pageOne.view';
import './views/pageTwo.view';

@customElement("page-router")
class PageRouter extends connect(store)(LitElement) {
  firstUpdated() {
    const router = new Router(this.shadowRoot.getElementById('router'));
    router.setRoutes([
      { path: '/', component: 'home-view' },
      { path: '/pageOne', component: 'page-one-view' },
      { path: '/pageTwo', component: 'page-two-view' },
    ]);
  }
  render() {
    return html`
      <div id="router"></div>
    `;
  }
}
