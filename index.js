
export const storage = {

    getItem(key) {
        return JSON.parse(localStorage.getItem(key))
    },

    setItem(key, value) {
        value && localStorage.setItem(key, JSON.stringify(value))
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
        return JSON.parse(sessionStorage.getItem(key))
    },

    setItem(key, value) {
        value && sessionStorage.setItem(key, JSON.stringify(value))
    },

    removeItem(key) {
        sessionStorage.removeItem(key)
    },
    clear() {
        sessionStorage.clear();
    }
}

export const cookie = {

    setItem(key, value, time) {
        const date = new Date()
        date.setTime(date.getTime() + time * 1000)
        document.cookie = `${key}=${escape(
            value
        )};expires=${date.toUTCString()};`
    },

    getItem(key) {
        let name = key + '='
        let ca = document.cookie.split(';')
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim()
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length)
        }
        return ''
    },

    removeItem(key) {
        this.setItem(key, null, -1 * 24 * 60 * 60)
    }
}

