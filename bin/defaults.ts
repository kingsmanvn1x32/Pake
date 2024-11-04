import { PakeCliOptions } from './types.js';

export const DEFAULT_PAKE_OPTIONS: PakeCliOptions = {
  icon: '',
  height: 780,
  width: 1200,
  fullscreen: false,
  resizable: true,
  hideTitleBar: false,
  alwaysOnTop: false,
  darkMode: true,
  disabledWebShortcuts: false,
  activationShortcut: '',
  userAgent: '',
  showSystemTray: false,
  multiArch: false,
  targets: 'appimage',
  useLocalFile: false,
  systemTrayIcon: '',
  debug: false,
  inject: [],
  safeDomain: [],
  installerLanguage: 'vi-VN',
};

// Just for cli development
export const DEFAULT_DEV_PAKE_OPTIONS: PakeCliOptions & { url: string } = {
  ...DEFAULT_PAKE_OPTIONS,
  url: 'https://www.facebook.com/',
  name: 'Facebook',
  safeDomain: ['www.facebook.com'],
  hideTitleBar: true,
};
