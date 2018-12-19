//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    todolist:[
      {
        todo:"吃饭",
        complete:false
      },
      {
        todo: "看书",
        complete: true
      },
      {
        todo: "追剧",
        complete: false
      },
      {
        todo: "购物",
        complete: false
      },
      {
        todo: "学习",
        complete: true
      },
      {
        todo: "跑步",
        complete: true
      },
      {
        todo: "听歌",
        complete: false
      },
      {
        todo: "旅行",
        complete: false
      }
    ],
    newitem:""
  },
  additem(e){
    if (e.detail.value){
      this.data.newitem = e.detail.value;
      this.data.todolist.push({
        todo: this.data.newitem,
        complete:false
      });
      this.setData({
        todolist: this.data.todolist,
        newitem:""
      })
    }
  },
  fn(e) {
    let index = e.currentTarget.dataset.index;
    this.data.todolist[index].complete = !this.data.todolist[index].complete;
    this.setData({
        todolist: this.data.todolist
    })
  }
})
