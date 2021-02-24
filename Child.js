export default class Child extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append('child');
    this.addEventListener(
      'message',
      () => {
        console.log('to');
      },
      true
    );
  }
}

customElements.define('demo-child', Child);
