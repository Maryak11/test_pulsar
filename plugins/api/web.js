export default (o, instance) => {
  return {
    // VALUTE LIST
    getValutesList() {
      return instance(o).get(`/daily_json.js`)
    },
  }
}
