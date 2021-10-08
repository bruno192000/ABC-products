// Reference 22-State > 23-Ins-Stripe
import decode from "jwt-decode";

class AuthService {
    getProfile() {
        return decode(this.getToken());
    }

    loggedIn() {
        // Check saved token and verify validity
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decode.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

    getToken() {
        // Get users token from localstorage
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        // Saves profile data and token to localstorage
        localStorage.setItem('id_token', idToken);
        // State reset and page reload
        window.location.assign('/');
    }

    logout() {
        // Removes profile data and token from localstorage
        localStorage.removeItem('id_token');
        // State reset and page reload
        window.location.assign('/');
    }
}

export default new AuthService();