// pages/home/home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lun:[
      {imgpic:'../../iconFont/img/lun1.png'},
      {imgpic:'../../iconFont/img/lun2.png'},
      {imgpic:'../../iconFont/img/lun3.png'},
      {imgpic:'../../iconFont/img/lun4.png'}
    ],
    acvity:[
      {id:1,name:'热门课程',imgpic:'../../iconFont/img/ball1.png',contImg:'../../iconFont/img/hot.png'},
      {id:2,name:'教育头条',imgpic:'../../iconFont/img/ball2.png',contImg:'../../iconFont/img/edu.png'},
      {id:3,name:'飞翔活动',imgpic:'../../iconFont/img/ball3.png',contImg:'../../iconFont/img/fly.png'},
      {id:4,name:'咨询教师',imgpic:'../../iconFont/img/ball4.png',contImg:'../../iconFont/img/consult.png'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.store.getState());
    app.store.dispatch({type:'login',value:true})
    console.log(app.store.getState());
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