export interface XEClipboardMethods {
  /**
   * Copy text to clipboard.
   * @param content Text
   */
  copy(content: string | number): boolean;
}

/**
 * Copy text to clipboard.
 */
declare var XEClipboard: XEClipboardMethods;

export default XEClipboard;