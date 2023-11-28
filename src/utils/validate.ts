/**
 * @description: check url
 * @param {string} path params
 * @returns {Boolean} reutrn true or false
 */
export function isExternal(path: string) {
    return /^(https?:|mailto:|tel:)/.test(path)
}
