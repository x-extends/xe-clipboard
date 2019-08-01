'use strict'

var doc = window.document

function getContainer () {
  var $copy = doc.getElementById('$XECopy')
  if (!$copy) {
    $copy = doc.createElement('textarea')
    $copy.id = '$XECopy'
    $copy.style['width'] = '48px'
    $copy.style['height'] = '12px'
    $copy.style['position'] = 'fixed'
    $copy.style['z-index'] = '0'
    $copy.style['left'] = '-500px'
    $copy.style['top'] = '-500px'
    doc.body.appendChild($copy)
  }
  return $copy
}

/**
 * Copy the contents to the clipboard.
 *
 * @param {String} content Content
 */
function XEClipboard (content) {
  var $copy = getContainer()
  var value = content === null || content === undefined ? '' : '' + content
  try {
    $copy.value = value
    $copy.focus()
    $copy.setSelectionRange(0, value.length)
    return doc.execCommand('copy', true)
  } catch (e) {}
  return false
}

XEClipboard.copy = XEClipboard

export default XEClipboard
