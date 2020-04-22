/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')
let cody

describe('User model', () => {
  beforeEach(() => {
    return db
      .sync({force: true})
      .then(() => {
        return User.create({
          firstName: 'Cody',
          lastName: 'Puppy',
          email: 'cody@puppybook.com',
          password: 'bones',
        })
      })
      .then((user) => {
        cody = user
        return cody
      })
  })

  describe('attributes ', () => {
    it('includes `firstName` field', () => {
      expect(cody.firstName).to.equal('Cody')
    })
    it('includes `lastName` field', () => {
      expect(cody.lastName).to.equal('Puppy')
    })
    it('includes `email` field', () => {
      expect(cody.email).to.equal('cody@puppybook.com')
    })
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model') 


