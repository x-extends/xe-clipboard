/**
 * xe-clipboard.js v1.0.0
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
   * Copy the contents to the clipboard.
   *
   * @param {String} content Content
   */
  function XEClipboard (content) {
    var $copy = getContainer()
    var value = '' + content
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

  return XEClipboard
}))
