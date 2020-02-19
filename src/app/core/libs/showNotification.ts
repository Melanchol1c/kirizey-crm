import { notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

export default function showNotification(
  message: string,
  description: string,
  type = 'info' as NotificationType,
  duration = 4.5 as number,
): void {
  notification[type]({
    message,
    description,
    duration,
  });
}
