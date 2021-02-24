export default class Parent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append('parent');
    setInterval(
      () => {
        const customEvent = new CustomEvent('message', { detail: new Date().toISOString() });
        this.dispatchEvent(customEvent);
      },
      1000
    );
  }
}

customElements.define('demo-parent', Parent);

// https://stackoverflow.com/q/31210434/2715716
