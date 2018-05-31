let defaultCity = '大澳'

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  console.info('localStorage操作异常')
}

export default {
  city: defaultCity
}
