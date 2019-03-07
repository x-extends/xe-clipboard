/**
 * xe-clipboard.js v1.0.2
 * (c) 2017-2018 Xu Liangzhan
 * ISC License.
 * @preserve
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory()
    : typeof define === 'function' && define.amd ? define(factory)
      : (global.XEClipboard = factory())
}(this, function () {
  'use strict'

  var doc = window.document

  function getContainer () {
    var $copy = doc.getElementById('$XECopy')
    if (!$copy) {
      $copy = doc.createElement('input')
      $copy.id = '$XECopy'
      $copy.style['width'] = '48px'
      $copy.style['height'] = '12px'
      $copy.style['position'] = 'absolute'
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
    } catch (e) { }
    return false
  }

  XEClipboard.copy = XEClipboard

  return XEClipboard
}))
