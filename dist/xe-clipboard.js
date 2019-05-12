(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("xe-clipboard", ["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.XEClipboard = mod.exports.default;
  }
})(this, function (_exports) {
  'use strict';

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  var doc = window.document;

  function getContainer() {
    var $copy = doc.getElementById('$XECopy');

    if (!$copy) {
      $copy = doc.createElement('input');
      $copy.id = '$XECopy';
      $copy.style['width'] = '48px';
      $copy.style['height'] = '12px';
      $copy.style['position'] = 'fixed';
      $copy.style['z-index'] = '0';
      $copy.style['left'] = '-500px';
      $copy.style['top'] = '-500px';
      doc.body.appendChild($copy);
    }

    return $copy;
  }
  /**
   * Copy the contents to the clipboard.
   *
   * @param {String} content Content
   */


  function XEClipboard(content) {
    var $copy = getContainer();
    var value = content === null || content === undefined ? '' : '' + content;

    try {
      $copy.value = value;
      $copy.focus();
      $copy.setSelectionRange(0, value.length);
      return doc.execCommand('copy', true);
    } catch (e) {}

    return false;
  }

  XEClipboard.copy = XEClipboard;
  var _default = XEClipboard;
  _exports["default"] = _default;
});