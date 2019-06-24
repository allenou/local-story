

export const storage = {

    getItem(key) {
        return localStorage.getItem(key)
    },

    setItem(key, value) {
        value && localStorage.setItem(key, value)
    },

    removeItem(key) {
        localStorage.removeItem(key)
    },
    clear() {
        localStorage.clear()
    }
}

export const session = {

    getItem(key) {
        return sessionStorage.getItem(key)
    },

    setItem(key, value) {
        value && sessionStorage.setItem(key, value)
    },

    removeItem(key) {
        sessionStorage.removeItem(key)
    },
    clear() {
        sessionStorage.clear();
    }
}
