import assert from 'power-assert'
import foxtail from 'foxtail'
import sinon from 'sinon'
const config = require('../config.json')

describe('foxtail-nullpo', () => {
  it('listenerに追加されていること', () => {
    let fox = new foxtail(config)
    assert(fox.listeners.length === 0)
    require('../lib/nullpo.js')(fox)
    assert(fox.listeners.length === 1)
  })

  describe('ツイートイベントが起きたとき', ()=> {
    let Res = function() {}
    Res.prototype.reply = function(cb) {
      return cb()
    }
    let fox = new foxtail(config)
    require('../lib/nullpo.js')(fox)
    let cb = fox.listeners[0].cb

    it('ツイートがぬるぽのときres.replyが呼ばれること', () => {
      let res = new Res()
      let stub = sinon.stub(res, 'reply')
      Res.prototype.text = 'ぬるぽ'

      assert(stub.callCount === 0)
      cb(res)
      assert(stub.callCount === 1)
    })

    it('ツイートがテストのときres.replyが呼ばれないこと', () => {
      let res = new Res()
      let stub = sinon.stub(res, 'reply')
      Res.prototype.text = 'テスト'

      assert(stub.callCount === 0)
      cb(res)
      assert(stub.callCount === 0)
    })
  })
})
