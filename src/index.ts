
import { LitElement, html, css, property, customElement } from 'lit-element';
import { store } from './store/store'
import { actionNavigate } from './store/store-app'
import { connect, installRouter } from 'pwa-helpers'
import { globalStyle } from './core/decorators'
import './components/first-component';
import './components/css-component';
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
    installRouter((location) => store.dispatch(actionNavigate(location)));
  }
  stateChanged(state) {
    this._page = state.app.page;
  }
  render() {
    return html`
    
          <nav-bar></nav-bar>
          <div class="container">
            <div class="row">
              <div class="col">
                <home-view class="page" ?active="${this._page === ''}"></home-view>
                <page-one-view class="page" ?active="${this._page === 'pageOne'}"></page-one-view>
                <page-two-view class="page" ?active="${this._page === 'pageTwo'}"></page-two-view>
              </div>
            </div>
          </div>
          </div>
          
    `;
  }
}
