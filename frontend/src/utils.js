export function isWord(input) {
  return input.match(/[a-zÀ-ú]+/gmui).length === 1
}