// pages/me/me.js
var app=getApp();
Page({
  data: {
    userInfo:{},
    name:'立即登录'
  },
  onLoad:function(){
    var user=wx.getStorageSync("users");
    if(user){
      this.setData({name:user.name});
    }
    app.getUserInfo(function(userInfo){
      page.setData({ userInfo: userInfo})
    });
  },
  setup:function(){
    wx.navigateTo({
      url: '../setup2/setup2',
    })
  },
  login:function(){
    wx.navigateTo({
      url: '../login/login'
    })
  }
})