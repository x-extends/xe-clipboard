'use strict'

var doc = window.document
var $elem = doc.createElement('textarea')

function handleText (content: string | number) {
  var styles = $elem.style
  $elem.id = '$XECopy'
  styles.width = '48px'
  styles.height = '24px'
  styles.position = 'fixed'
  styles.zIndex = '0'
  styles.left = '-500px'
  styles.top = '-500px'
  $elem.value = content === null || content === undefined ? '' : ('' + content)
  if (!$elem.parentNode) {
    doc.body.appendChild($elem)
  }
}

function copyText () {
  $elem.focus()
  $elem.select()
  $elem.setSelectionRange(0, $elem.value.length)
  return doc.execCommand('copy')
}

/**
 * 复制内容到剪贴板
 *
 * @param {String} content Text 内容
 */
function XEClipboard (content: string | number) {
  var result = false
  try {
    handleText(content)
    result = copyText()
  } catch (e) {}
  return result
}

XEClipboard.copy = XEClipboard

export default XEClipboard
