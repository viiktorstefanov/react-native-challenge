export function dateFormat(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();

    const timeDifference = now.getTime() - date.getTime();

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    let timeAgoString = '';

    if (days > 0) {
        timeAgoString = `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        timeAgoString = `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        timeAgoString = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (seconds > 0) {
        timeAgoString = `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    } else {
        timeAgoString = 'Just now';
    }

    return timeAgoString;
}