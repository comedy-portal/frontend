export function getMonthNameRu(monthNumber: number): string {
    if (monthNumber < 1 || monthNumber > 12) return ''

    const date = new Date(2025, monthNumber - 1)
    const formatter = new Intl.DateTimeFormat('ru-RU', { month: 'long' })
    const monthName = formatter.format(date)

    return monthName.charAt(0).toUpperCase() + monthName.slice(1)
}
