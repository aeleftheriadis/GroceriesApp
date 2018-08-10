import API from '../../App/Services/Api'
import FixtureAPI from '../../App/Services/FixtureApi'
import R from 'ramda'

test('All fixtures map to actual API', () => {
  const fixtureKeys = R.keys(FixtureAPI).sort()
  const apiKeys = R.keys(API.create())

  const intersection = R.intersection(fixtureKeys, apiKeys).sort()

  // There is no difference between the intersection and all fixtures
  expect(R.equals(fixtureKeys, intersection)).toBe(true)
})

test('FixtureAPI getProducts returns the right file for tesco', () => {
  const expectedFile = require('../../App/Fixtures/tesco.json')

  expect(FixtureAPI.getProducts('tesco')).toEqual({
    ok: true,
    data: expectedFile
  })
})

test('FixtureAPI getProducts returns the right file for waitrose as default', () => {
  const expectedFile = require('../../App/Fixtures/waitrose.json')

  expect(FixtureAPI.getProducts('waitrose')).toEqual({
    ok: true,
    data: expectedFile
  })
})
