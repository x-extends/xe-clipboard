'use strict'

var doc = window.document
var $elem = doc.createElement('textarea')

function handleText (content) {
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

function selectText () {
  $elem.focus()
  $elem.select()
  $elem.setSelectionRange(0, $elem.value.length)
}

function copyText (showDefault) {
  return doc.execCommand('copy', showDefault)
}

/**
 * Copy the contents to the clipboard.
 *
 * @param {String} content Content
 */
function XEClipboard (content) {
  var result = false
  try {
    handleText(content)
    selectText()
    result = copyText()
    if (!result) {
      selectText()
      result = copyText(true)
    }
  } catch (e) {}
  return result
}

XEClipboard.copy = XEClipboard

export default XEClipboard
