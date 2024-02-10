export const getDeviceType = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (/windows/.test(userAgent)) {
        return 'Windows';
    } else if (/linux/.test(userAgent)) {
        return 'Linux';
    } else if (/macintosh|mac os x/.test(userAgent)) {
        if (/iphone|ipad|ipod/.test(userAgent)) {
            return 'iOS';
        } else {
            return 'Mac';
        }
    } else if (/android/.test(userAgent)) {
        return 'Android';
    } else {
        return 'Unknown';
    }
}
