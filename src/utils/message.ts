import { createDiscreteApi } from 'naive-ui';

const { message, dialog, notification, loadingBar } = createDiscreteApi([
  'message',
  'dialog',
  'notification',
  'loadingBar'
]);
export { message, dialog, notification, loadingBar };
