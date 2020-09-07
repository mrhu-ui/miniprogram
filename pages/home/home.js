// pages/home/home.js
Page({
  data: {
    name: 'mrhu',
    students: [
      {id: 1, name: 'zhangshan', age: 11},
      {id: 2, name: 'lisi', age: 21},
      {id: 3, name: 'wanwu', age: 31},
      {id: 4, name: 'zhaoliu', age: 14}
    ],
    counter: 0,
    list: []
  },
  increment() {
    // 1.错误做法，界面是不会发生刷新的
    // this.data.counter++
    // 2.this.setDate()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  decrement() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  onLoad() {
    wx.request({
      url: 'http://152.136.185.210:8000/api/z8/recommend',
      success: (res) => {
        console.log(res)
        const data = res.data.data.list
        this.setData({
          list: data
        })
      }
    })
  },
  onShow() {

  },
  onReady() {

  },
  onHide() {

  },
  onUnload() {

  },
  // 监听页面的滚动
  onPageScroll(obj) {
    // console.log(obj)
  },
  // 监听页面滚动到底部
  onReachBottom() {
    console.log('页面滚动到底部了')
  }
})