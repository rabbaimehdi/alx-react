

export default function NotificationsItem({type, html, value}) {
    return <><li data-notification-type={type} dangerouslySetInnerHTML= {html}>{value}</li></>
}