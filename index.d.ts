export interface XEClipboardMethods {
  /**
   * 复制内容到剪贴板
   * @param content Text 内容
   */
  copy(content: string | number): boolean;
}

/**
 * 复制内容到剪贴板
 */
declare var XEClipboard: XEClipboardMethods;

export default XEClipboard;