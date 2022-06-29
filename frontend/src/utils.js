export function isWord(input) {
  try {
    return input.match(/[a-zÀ-ú]+/gmui).length === 1
  } catch (e) {
    return false
  }
}