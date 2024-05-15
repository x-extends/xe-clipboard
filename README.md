# xe-clipboard

[![gitee star](https://gitee.com/x-extends/xe-clipboard/badge/star.svg?theme=dark)](https://gitee.com/x-extends/xe-clipboard/stargazers)
[![npm version](https://img.shields.io/npm/v/xe-clipboard.svg?style=flat-square)](https://www.npmjs.com/package/xe-clipboard)
[![npm downloads](https://img.shields.io/npm/dm/xe-clipboard.svg?style=flat-square)](http://npm-stat.com/charts.html?package=xe-clipboard)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

基于 [execCommand](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand) API 实现复制内容到剪贴板，支持主流的 H5 浏览器 IE, Chrome, Firefox, Opera, Safari, IOS, Android  
压缩大小 < 0.5KB  

## Browser Support

![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- | --- |
10+ ✔ | Latest ✔ | 42+ ✔ | 41+ ✔ | 29+ ✔ | 10+ ✔ |

## Installing

```shell
npm install xe-clipboard
```

```xml
<script src="https://cdn.jsdelivr.net/npm/xe-clipboard"></script>
```

## Example

[Run Test](https://xuliangzhan.com/xe-clipboard/)

```html
<button id="btn1">Copy</button>
```

```javascript
document.getElementById('btn1').addEventListener('click', function (evnt) {
  // 由于浏览器的安全机制，操作剪贴板必须在事件之内才能有效
  if (XEClipboard.copy('Copy this content to the clipboard.')) {
    alert('Copy success.')
  } else {
    alert('The browser is not supported.')
  }
})
```

## Contributors

Thank you to everyone who contributed to this project.

[![xe-clipboard](https://contrib.rocks/image?repo=x-extends/xe-clipboard)](https://github.com/x-extends/xe-clipboard/graphs/contributors)

## License

[MIT](LICENSE) © 2017-present, Xu Liangzhan
