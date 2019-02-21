// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    msg: '哈哈',
    userInfo:{},
    isShow: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo();
    
  },
  getUserInfo(){
    //判断用户是否授权
    wx.getSetting({
      success: (data) => {
        console.log(data);
        if (data.authSetting['scope.userInfo']) {
          //用户已经授权
          this.setData({
            isShow: false
          });
        } else {
          //用户没有授权
          this.setData({
            isShow: true
          });
        }
      }
    })

    wx.getUserInfo({
      success: (data) => {
        console.log(data);
        //更新data中的userInfo
        this.setData({
          userInfo: data.userInfo
        });
      },
      fail: () => {
        console.log('获取用户数据失败');
      }
    })
  },
 handleGetUserInfo(data){
   console.log('用户点击了',data);
   //判断用户点击的是否允许
   if(data.detail.rawData){
     //用户点击的是允许
     this.getUserInfo();
   }
 },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  data:{
      msg: '登录'
  },

  handleParent(){
    console.log('父元素');
  },
  handleChild(){
    console.log('子元素');
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})