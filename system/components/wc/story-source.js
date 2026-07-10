const toAttribute = (name) => name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
const escapeAttribute = (value) => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;')

export function createPublicSource(tagName, eventNames = []) {
  return (_, context) => {
    const args = context.args ?? {}
    const attributes = Object.entries(args)
      .filter(([name, value]) => !eventNames.includes(name) && value !== false && value != null)
      .map(([name, value]) => {
        const attribute = toAttribute(name)
        return value === true ? attribute : `${attribute}="${escapeAttribute(value)}"`
      })
      .join(' ')

    return `<${tagName}${attributes ? ` ${attributes}` : ''}></${tagName}>`
  }
}
