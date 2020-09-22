export const getNum = (string) => {
  const regex = /\d+/g
  return string.match(regex)
}
