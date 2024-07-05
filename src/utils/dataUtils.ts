export const convertExperienceLeft = (experience: number) => {
    var amount = 0
    while (experience > 1000) {
        amount++
        experience /= 1000
    }

    return `${formatNumber(experience, 1)}${'k'.repeat(amount + 1)}`
}

export const formatNumber = (number: number, decimalPlaces: number) => {
    let formatted = number.toFixed(decimalPlaces)
    formatted = formatted.replace(/\.?0+$/, '')
    return formatted
}
