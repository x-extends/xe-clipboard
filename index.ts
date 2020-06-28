'use strict'

var doc = window.document
var copyElem: HTMLTextAreaElement

function handleText (content: string | number) {
  if (!copyElem) {
    copyElem = doc.createElement('textarea')
    copyElem.id = '$XECopy'
    var styles = copyElem.style
    styles.width = '48px'
    styles.height = '24px'
    styles.position = 'fixed'
    styles.zIndex = '0'
    styles.left = '-500px'
    styles.top = '-500px'
    doc.body.appendChild(copyElem)
  }
  copyElem.value = content === null || content === undefined ? '' : ('' + content)
}

function copyText (content: string | number): boolean {
  var result = false
  try {
    handleText(content)
    copyElem.focus()
    copyElem.select()
    copyElem.setSelectionRange(0, copyElem.value.length)
    result = doc.execCommand('copy')
  } catch (e) {}
  return result
}

/**
 * 复制内容到剪贴板
 *
 * @param {String} content Text 内容
 */
function XEClipboard (content: string | number): boolean {
  return copyText(content)
}

XEClipboard.copy = copyText

export default XEClipboard
