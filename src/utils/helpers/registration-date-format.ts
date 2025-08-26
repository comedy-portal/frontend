export function formatDuration(days: number) {
    const safeDays = Math.max(days, 1) // если 0, ставим 1
    if (safeDays < 7) {
        return `${safeDays} ${getDayWord(safeDays)}`
    } else if (safeDays < 30) {
        const weeks = Math.floor(safeDays / 7)
        return `${weeks} ${getWeekWord(weeks)}`
    } else if (safeDays < 365) {
        const months = Math.floor(safeDays / 30)
        return `${months} ${getMonthWord(months)}`
    } else {
        const years = Math.floor(safeDays / 365)
        return `${years} ${getYearWord(years)}`
    }
}

function getDayWord(n: number) {
    const lastDigit = n % 10
    const lastTwoDigits = n % 100
    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return 'дней'
    if (lastDigit === 1) return 'день'
    if (lastDigit >= 2 && lastDigit <= 4) return 'дня'
    return 'дней'
}

function getWeekWord(n: number) {
    const lastDigit = n % 10
    const lastTwoDigits = n % 100
    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return 'недель'
    if (lastDigit === 1) return 'неделю'
    if (lastDigit >= 2 && lastDigit <= 4) return 'недели'
    return 'недель'
}

function getMonthWord(n: number) {
    const lastDigit = n % 10
    const lastTwoDigits = n % 100
    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return 'месяцев'
    if (lastDigit === 1) return 'месяц'
    if (lastDigit >= 2 && lastDigit <= 4) return 'месяца'
    return 'месяцев'
}

function getYearWord(n: number) {
    const lastDigit = n % 10
    const lastTwoDigits = n % 100
    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return 'лет'
    if (lastDigit === 1) return 'год'
    if (lastDigit >= 2 && lastDigit <= 4) return 'года'
    return 'лет'
}
