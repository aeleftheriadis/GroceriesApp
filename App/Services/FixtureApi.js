export default {
  // Functions return fixtures
  getRoot: () => {
    return {
      ok: true,
      data: require('../Fixtures/root.json')
    }
  },
  getRate: () => {
    return {
      ok: true,
      data: require('../Fixtures/rateLimit.json')
    }
  },
  getUser: (username) => {
    // This fixture only supports gantman or else returns skellock
    const gantmanData = require('../Fixtures/gantman.json')
    const skellockData = require('../Fixtures/skellock.json')
    return {
      ok: true,
      data: username.toLowerCase() === 'gantman' ? gantmanData : skellockData
    }
  },
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
