'use strict'

function getContainer () {
  var $copy = document.getElementById('$XECopy')
  if (!$copy) {
    $copy = document.createElement('input')
    $copy.id = '$XECopy'
    $copy.style['width'] = '48px'
    $copy.style['height'] = '12px'
    $copy.style['position'] = 'absolute'
    $copy.style['z-index'] = '0'
    $copy.style['left'] = '-500px'
    $copy.style['top'] = '-500px'
    document.body.appendChild($copy)
  }
  return $copy
}

/**
 * 复制文本到剪贴板
 *
 * @param {String} content 文本内容
 */
function XEClipboard (content) {
  var $copy = getContainer()
  var value = content || ''
  try {
    $copy.value = value
    $copy.focus()
    $copy.setSelectionRange(0, value.length)
    return document.execCommand('copy', true)
  } catch (e) {
    return false
  }
}

XEClipboard.copy = XEClipboard

module.exports = XEClipboard
module.exports.default = XEClipboard
