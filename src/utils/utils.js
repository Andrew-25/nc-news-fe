export const dateTime = (UTC) => {
    const d = new Date(UTC)
    const timeString = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
    const dateString = ("0" + d.getDate()).slice(-2) + "/" + ("0"+(d.getMonth()+1)).slice(-2) + "/" + d.getFullYear()

    return timeString + ' on ' + dateString
}