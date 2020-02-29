let shoucang = false
let dianzan = false
Page({
  data: {
    imgUrl: '../../pages/images/icon/shoucang.png',
    dianzanimgUrl: '../../pages/images/icon/dianzan.png'
  },
  clickMe() {
    if (shoucang) {
      this.setData({
        imgUrl: "../../pages/images/icon/shoucang.png"
      })
      shoucang = false
    } else {
      this.setData({
        imgUrl: "../../pages/images/icon/shoucang-active.png"
      })
      shoucang = true
    }
  },
  clickMe2() {
    if (dianzan) {
      this.setData({
        dianzanimgUrl: "../../pages/images/icon/dianzan.png"
      })
      dianzan = false
    } else {
      this.setData({
        dianzanimgUrl: "../../pages/images/icon/dianzan-active.png"
      })
      dianzan = true
    }
  }
})