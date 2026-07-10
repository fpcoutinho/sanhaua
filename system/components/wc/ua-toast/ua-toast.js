import '../../styles/ua-toast.scss'

const ICON_MAP = {
  neutral: 'info',
  success: 'check_circle',
  warning: 'warning',
  danger: 'error',
  informative: 'info'
}

class UaWcToast extends HTMLElement {
  static get observedAttributes() {
    return ['appearance', 'title', 'message']
  }

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  render() {
    const appearance = this.getAttribute('appearance') ?? 'neutral'
    const title = this.getAttribute('title') ?? 'Toast title'
    const message = this.getAttribute('message') ?? 'Toast message'
    const icon = ICON_MAP[appearance] ?? 'info'

    this.innerHTML = `
      <div class="ua-toast ${appearance}">
        <div class="header">
          <div class="title-wrapper">
            <span class="material-symbols-rounded icon">${icon}</span>
            <span class="title">${title}</span>
          </div>
          <span class="material-symbols-rounded dismiss-icon">close</span>
        </div>
        <div class="content">${message}</div>
      </div>
    `

    const dismiss = this.querySelector('.dismiss-icon')
    if (dismiss) {
      dismiss.addEventListener('click', (event) => {
        this.dispatchEvent(new CustomEvent('dismiss', { detail: event, bubbles: true }))
      })
    }
  }
}

if (!customElements.get('ua-wc-toast')) {
  customElements.define('ua-wc-toast', UaWcToast)
}

export default UaWcToast
