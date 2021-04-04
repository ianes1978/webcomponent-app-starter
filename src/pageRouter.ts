import { LitElement, html, customElement } from 'lit-element';
import { Router } from '@vaadin/router';
import './views/home.view';
import './views/pageOne.view';
import './views/pageTwo.view';

@customElement("page-router")
class PageRouter extends LitElement {
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
