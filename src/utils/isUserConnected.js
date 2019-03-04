const isUserConnected = () => {
  const isConnected = localStorage.getItem('token')
  return !!isConnected
  // caste le retour de la fonction en booleen
}

export default isUserConnected
