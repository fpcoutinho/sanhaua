import '../../styles/ua-skeleton.scss'

class UaSkeleton extends HTMLElement {
  static get observedAttributes() {
    return ['format', 'width', 'height']
  }

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  render() {
    const format = this.getAttribute('format') ?? 'round'
    const width = this.getAttribute('width') ?? '240px'
    const height = this.getAttribute('height') ?? '56px'

    this.innerHTML = `<div class="ua-skeleton ${format}" style="width: ${width}; height: ${height};"></div>`
  }
}

if (!customElements.get('ua-skeleton')) {
  customElements.define('ua-skeleton', UaSkeleton)
}

export default UaSkeleton
