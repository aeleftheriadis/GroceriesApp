export default {
  // Functions return fixtures
  getProducts: (supplier) => {
    // This fixture only supports gantman or else returns skellock
    const tescoData = require('../Fixtures/tesco.json')
    const waitroseData = require('../Fixtures/waitrose.json')
    return {
      ok: true,
      data: supplier === 'tesco' ? tescoData : waitroseData
    }
  }
}
