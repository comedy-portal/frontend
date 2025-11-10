export enum NotificationType {
    COMEDIAN = 'comedian',
    GROUP = 'group',
    VENUE = 'venue',
}

export type INotification =
    | {
          type: NotificationType.COMEDIAN
          id: number
          name: string
          slug: string
      }
    | {
          type: NotificationType.GROUP
          id: number
          name: string
          slug: string
      }
    | {
          type: NotificationType.VENUE
          id: number
          name: string
          slug: string
      }

export type INotificationContent = {
    id: number
    name: string
    type: string
}
