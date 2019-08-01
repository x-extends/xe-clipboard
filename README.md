# xe-clipboard

[![npm version](https://img.shields.io/npm/v/xe-clipboard.svg?style=flat-square)](https://www.npmjs.org/package/xe-clipboard)
[![npm downloads](https://img.shields.io/npm/dm/xe-clipboard.svg?style=flat-square)](http://npm-stat.com/charts.html?package=xe-clipboard)
[![gzip size: JS](http://img.badgesize.io/https://unpkg.com/xe-clipboard/dist/xe-clipboard.min.js?compression=gzip&label=gzip%20size:%20JS)](https://unpkg.com/xe-clipboard/dist/xe-clipboard.min.js)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/xuliangzhan/xe-clipboard/blob/master/LICENSE)

It depends on the [execCommand](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand) APIs, support commonly used H5 browser IE, Chrome, Firefox, Opera, Safari, IOS, Android.

## Browser Support

![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- | --- |
10+ ✔ | Latest ✔ | 42+ ✔ | 41+ ✔ | 29+ ✔ | 10+ ✔ |

## Installing

```shell
npm install xe-clipboard
```

Get on [unpkg](https://unpkg.com/xe-clipboard/) and [cdnjs](https://cdn.jsdelivr.net/npm/xe-clipboard/)

```HTML
<script src="https://cdn.jsdelivr.net/npm/xe-clipboard"></script>
```

## Example

[Run Test](https://jsfiddle.net/fjvckd2a/)

```html
<button class="button">复制</button>
```

```javascript
document.querySelector('.button').addEventListener('click', function (evnt) {
  if (XEClipboard.copy('Copy this content to the clipboard.')) {
    alert('Copy success.')
  } else {
    alert('The browser is not supported.')
  }
})
```

## License

Copyright (c) 2017-present, Xu Liangzhan
