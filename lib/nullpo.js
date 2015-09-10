'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (fox) {
  fox.add(function (res) {
    if (res.text === 'ぬるぽ') res.reply('ガッ');
  });
};

module.exports = exports['default'];