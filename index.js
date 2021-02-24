import Child from './child.js';
import Parent from './Parent.js';

window.addEventListener('load', () => {
  const parent = document.createElement('demo-parent');
  const child = document.createElement('demo-child');

  // TODO: Find out if `parent.append` should work somehow
  parent.shadowRoot.append(child);
  document.body.append(parent);
});
