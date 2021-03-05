export const headers = {
  Authorization: localStorage.getItem('token'),
  'Content-Type': 'application/json'
}

export const getHeaders = function () {
  return {
    Authorization: localStorage.getItem('token'),
    'Content-Type': 'application/json'
  }
}

export default headers;