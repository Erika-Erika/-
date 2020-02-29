var util = require('../../utils/util.js');
Page({
  data: {
    mapUrl: ""

  },
  onLoad: function(e) {
    var id = e.id;
    var time = util.formatTime(new Date());
    wx.setNavigationBarTitle({
        title: '专题详情',
      }),
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    }),

      this.setData({
        mapUrl: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
      })
  }
})