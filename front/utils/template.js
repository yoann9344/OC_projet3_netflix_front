function create_elements (html) {
  const template = document.createElement('template')
  template.innerHTML = html
  return template
}

export function html_to_element (html) {
  return create_elements(html).content.firstElementChild
}

export function html_to_elements (html) {
  return create_elements(html).content.children
}

export function css_to_element (css) {
  const style = document.createElement('style')
  style.textContent = css
  return style
}
