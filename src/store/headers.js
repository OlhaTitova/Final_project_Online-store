const headers = {
  Authorization: localStorage.getItem('token'),
  'Content-Type': 'application/json'
}

export default headers;