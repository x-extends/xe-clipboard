export interface XEClipboardMethods {
  /**
   * Copy the contents to the clipboard.
   * @param content Content
   */
  copy(content: string): boolean;
}

/**
 * Copy the contents to the clipboard.
 */
declare var XEClipboard: XEClipboardMethods;

export default XEClipboard;