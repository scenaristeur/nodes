function capital(string) {
  const capitalizedString =
    string.substring(0, 1).toUpperCase() + string.substring(1)
  return capitalizedString+'boo'
}

export default capital
