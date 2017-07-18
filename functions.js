var robot = require('robotjs')

var play = {
  audioPlay: function () {
    robot.keyTap('audio_play')
  },
  audioNext: function () {
    robot.keyTap('audio_next')
  },
  audioPrev: function () {
    robot.keyTap('audio_prev')
  },
  /* 软件音量 */
  audioVolUp: function () {
    robot.keyTap('up', 'control')
  },
  audioVolDown: function () {
    robot.keyTap('down', 'control')
  },
  /* 系统音量 */
  sysVolUp: function () {
    robot.keyTap('audio_vol_up')
  },
  sysVolDown: function () {
    robot.keyTap('audio_vol_down')
  },
  sysVolMute: function () {
    robot.keyTap('audio_mute')
  }
  
}

module.exports = play

//robot.keyTap('audio_play')

/* module.exports.functions = {
  audioPlay: function () {
    robot.keyTap('audio_play')
  }
} */

// robot.keyTap()