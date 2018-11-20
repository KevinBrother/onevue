export default class myUtil {
    
    static apphost() {
        return (/^t\.|test/).test(window.location.host) ? "" : "";
    }
}