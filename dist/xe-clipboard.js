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
  var $elem = doc.createElement('textarea');

  function handleText(content) {
    var styles = $elem.style;
    $elem.id = '$XECopy';
    styles.width = '48px';
    styles.height = '24px';
    styles.position = 'fixed';
    styles.zIndex = '0';
    styles.left = '-500px';
    styles.top = '-500px';
    $elem.value = content === null || content === undefined ? '' : '' + content;

    if (!$elem.parentNode) {
      doc.body.appendChild($elem);
    }
  }

  function copyText(showDefault) {
    $elem.focus();
    $elem.select();
    $elem.setSelectionRange(0, $elem.value.length);
    return doc.execCommand('copy', !!showDefault);
  }
  /**
   * Copy the contents to the clipboard.
   *
   * @param {String} content Content
   */


  function XEClipboard(content) {
    var result = false;

    try {
      handleText(content);
      result = copyText();

      if (!result) {
        result = copyText(1);
      }
    } catch (e) {}

    return result;
  }

  XEClipboard.copy = XEClipboard;
  var _default = XEClipboard;
  _exports["default"] = _default;
});