const UA = window.navigator.userAgent;

/**
 * Mobile detector helper class. Tests the User Agent to see if we're, likely,
 * on a mobile device.
 */
export default class MobileDetector {
  /**
   * Whether the device is Android or not.
   * @return {Boolean}
   */
  static isAndroid() {
    return !!UA.match(/Android/i);
  }

  /**
   * Whether the device is BlackBerry or not.
   * @return {Boolean}
   */
  static isBlackBerry() {
    return !!UA.match(/BlackBerry/i);
  }

  /**
   * Whether the device is iOS or not.
   * @return {Boolean}
   */
  static isiOS() {
    return !!UA.match(/iPad|iPhone|iPod/i);
  }

  /**
   * Whether the device is Opera or not.
   * @return {Boolean}
   */
  static isOpera() {
    return !!UA.match(/Opera Mini/i);
  }

  /**
   * Whether the device is Windows or not.
   * @return {Boolean}
   */
  static isWindows() {
    return !!UA.match(/IEMobile/i);
  }

  /**
   * Whether the device is Windows Phone or not.
   * @return {Boolean}
   */
  static isWindowsPhone() {
    return !!UA.match(/Windows Phone/i);
  }

  /**
   * Whether the device is any mobile device or not.
   * @return {Boolean}
   */
  static isAny() {
    return MobileDetector.isAndroid() ||
    MobileDetector.isBlackBerry() ||
    MobileDetector.isiOS() ||
    MobileDetector.isOpera() ||
    MobileDetector.isWindows() ||
    MobileDetector.isWindowsPhone();
  }
}
