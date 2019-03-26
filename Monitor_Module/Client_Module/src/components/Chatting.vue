<template>
  <div id="app">
    <div class="sidebar">
      <div class="card">
        <header>
          <img class="avatar" width="40" height="40" :alt="user.img" :src="user.img">
          <p class="name">{{user.name}}</p>
        </header>
        <footer>
          <input class="search" type="searchText" placeholder="search user...">
        </footer>
      </div>
      <div class="list">
        <ul>
          <li v-for="item in sessions" :class="{ active: item.id === currentSessionId }"
              @click="selectSession(item.id)">
            <img class="avatar" width="30" height="30" :alt="item.user.name" :src="item.user.img">
            <p class="name">{{item.user.name}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="main">
      <div class="message">
        <ul v-if="sessions[currentSessionId]">
          <li v-for="item in sessions[currentSessionId].messages">
            <p class="time">
              <span>{{ item.date | time }}</span>
            </p>
            <div class="content">
              <div :class="{ self: item.self }">
                <img class="avatar" width="30" height="30"
                     :src="item.self?user.img:item.img"/>
                <div class="chatText">{{ item.content }}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="text">
        <textarea placeholder="按 Enter 发送" v-model="content[currentSessionId]" @keyup="onKeyup"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
  import Global from './../../static/Global'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        // 聊天框输入
        content: [],

        // 当前用户
        user: Global.userList[0],
        // 会话列表
        sessions: [
          {
            id: 0,
            user: {
              name: '示例介绍',
              img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/20141008164952_RUAA2.jpeg'
            },
            messages: [
              {
                content: 'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。',
                date: new Date(),
                name: '示例介绍',
                img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/20141008164952_RUAA2.jpeg'
              }, {
                content: '项目地址: https://github.com/coffcer/vue-chat',
                date: new Date(),
                name: 'webpack',
                img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/Snipaste_2019-03-23_12-23-49.png'
              }
            ]
          },
          {
            id: 1,
            user: {
              name: 'webpack',
              img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/Snipaste_2019-03-23_12-23-49.png',
            },
            messages: [
              {
                content: 'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。',
                date: new Date(),
                self: true,
                name: 'webpack',
                img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/Snipaste_2019-03-23_12-23-49.png',
              }, {
                content: 'emmmmm',
                date: new Date(),
                name: 'webpack',
                img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/Snipaste_2019-03-23_12-23-49.png',
              }
            ]
          },
          {
            id: 2,
            user: {
              name: '示例介绍',
              img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/Snipaste_2019-03-23_12-24-37.png'
            },
            messages: [
              {
                content: 'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。',
                date: new Date(),
                name: 'webpack',
                img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/Snipaste_2019-03-23_12-23-49.png',
              }, {
                content: '项目地址: https://github.com/coffcer/vue-chat',
                date: new Date(),
                name: 'webpack',
                img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/Snipaste_2019-03-23_12-23-49.png',
              }
            ]
          },
          {
            id: 3,
            user: {
              name: '示例介绍',
              img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/Snipaste_2019-03-23_12-25-05.png'
            },
            messages: [
              {
                content: 'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。',
                date: new Date(),
                name: 'webpack',
                img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/Snipaste_2019-03-23_12-23-49.png',
              }, {
                content: '项目地址: https://github.com/coffcer/vue-chat',
                date: new Date(),
                name: 'webpack',
                img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/Snipaste_2019-03-23_12-23-49.png',
              }
            ]
          },
          {
            id: 4,
            user: {
              name: '示例介绍',
              img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/Snipaste_2019-03-23_13-48-20.png'
            },
            messages: [
              {
                content: 'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。',
                date: new Date(),
                name: 'webpack',
                img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/Snipaste_2019-03-23_12-23-49.png',
              }, {
                content: '项目地址: https://github.com/coffcer/vue-chat',
                date: new Date(),
                name: 'webpack',
                img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/Snipaste_2019-03-23_12-23-49.png',
              }
            ]
          },
          {
            id: 5,
            user: {
              name: '示例介绍',
              img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/Snipaste_2019-03-23_13-48-39.png'
            },
            messages: [
              {
                content: 'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。',
                date: new Date(),
                name: 'webpack',
                img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/Snipaste_2019-03-23_12-23-49.png',
              }, {
                content: '项目地址: https://github.com/coffcer/vue-chat',
                date: new Date(),
                name: 'webpack',
                img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/Snipaste_2019-03-23_12-23-49.png',
              }
            ]
          },
          {
            id: 6,
            user: {
              name: '示例介绍',
              img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/Snipaste_2019-03-23_13-48-39.png'
            },
            messages: [
              {
                content: 'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。',
                date: new Date(),
                name: 'webpack',
                img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/Snipaste_2019-03-23_12-23-49.png',
              }, {
                content: '项目地址: https://github.com/coffcer/vue-chat',
                date: new Date(),
                name: 'webpack',
                img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/Snipaste_2019-03-23_12-23-49.png',
              }
            ]
          },
        ],
        // 当前选中的会话
        currentSessionId: 0,
        // 过滤出只包含这个key的会话
        filterKey: '',

        websock: null
      }
    },

    created() {
      this.initWebSocket()
    },

    methods: {
      selectSession(id) {
        this.currentSessionId = id
      },

      onKeyup(e) {
        if (e.keyCode === 13 && this.content.length) {
          this.sendMessage()
        }
      },

      sendMessage() {
        // 发送信息
        console.log(this.content[this.currentSessionId])
        this.websock.send(this.content[this.currentSessionId])
        // TODO 添加到消息列表

        // 消息清空
        this.content[this.currentSessionId]=''
      },

      // =========================================================
      // websocket
      initWebSocket() { //初始化websocket
        //ws地址
        const wsuri = "ws://localhost:8082/websocket"
        this.websock = new WebSocket(wsuri)
        this.websock.onmessage = this.websocketonmessage
        this.websock.onclose = this.websocketclose
      },

      websocketonmessage(e) { //数据接收
        // TODO 解析后台传过来的数据
        console.log(e)
        const redata = JSON.parse(e.data)
        alert(redata)
        console.log(redata)
      },

      websocketclose(e) {  //关闭
        console.log("connection closed (" + e.code + ")")
      }
    },

    filters: {
      // 将日期过滤为 hour:minutes
      time(date) {
        if (typeof date === 'string') {
          date = new Date(date)
        }
        return date.getHours() + ':' + date.getMinutes()
      }
    }
    ,

    directives: {
      // TODO 发送消息后滚动到底部
      'scroll-bottom'() {
        // this.vm.$nextTick(() => {
        //   this.el.scrollTop = this.el.scrollHeight - this.el.clientHeight
        // })
      }
    }
    ,
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #app {
    margin: 20px auto;
    width: 800px;
    height: 600px;

    overflow: hidden;
    border-radius: 3px;

    .sidebar, .main {
      height: 100%;
    }
    .sidebar {
      float: left;
      width: 200px;
      color: #f4f4f4;
      background-color: #2e3238;

      .card {
        padding: 12px;
        border-bottom: solid 1px #24272C;

        footer {
          margin-top: 10px;
        }

        header {
          float: left;
          margin-bottom: 10px;
        }

        .avatar, .name {
          vertical-align: middle;
        }
        .avatar {
          border-radius: 2px;
        }
        .name {
          display: inline-block;
          margin: 0 0 0 15px;
          font-size: 16px;
        }
        .search {
          padding: 0 10px;
          width: 100%;
          font-size: 12px;
          color: #fff;
          height: 30px;
          line-height: 30px;
          border: solid 1px #3a3a3a;
          border-radius: 4px;
          outline: none;
          background-color: #26292E;
        }
      }

      .list {
        li {
          width: 100%;
          /*float: left;*/
          padding: 12px 15px;
          border-bottom: 1px solid #292C33;
          cursor: pointer;
          transition: background-color .1s;

          &:hover {
            background-color: rgba(255, 255, 255, 0.03);
          }
          &.active {
            background-color: rgba(255, 255, 255, 0.1);
          }
        }
        .avatar, .name {
          vertical-align: middle;
        }
        .avatar {
          float: left;
          margin-top: -5px;
          border-radius: 2px;
        }
        .name {
          margin: 0 0 0 15px;
        }
      }
    }

    .main {
      position: relative;
      overflow: hidden;
      background-color: #eee;

      .text {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
      }
      .message {
        height: ~'calc(100% - 160px)';

        .content {
          padding: 10px 15px;
          overflow-y: scroll;

          li {
            margin-bottom: 15px;
          }
          .time {
            margin: 7px 0;
            text-align: center;

            > span {
              display: inline-block;
              padding: 0 18px;
              font-size: 12px;
              color: #fff;
              border-radius: 2px;
              background-color: #dcdcdc;
            }
          }

          .avatar {
            float: left;
            margin: 0 10px 0 0;
            border-radius: 3px;
          }
          .chatText {
            float: left;
            display: inline-block;
            position: relative;
            padding: 0 10px;
            max-width: ~'calc(100% - 40px)';
            min-height: 30px;
            line-height: 2.5;
            font-size: 12px;
            text-align: left;
            word-break: break-all;
            background-color: #fafafa;
            border-radius: 4px;

            &:before {
              content: " ";
              position: absolute;
              top: 9px;
              right: 100%;
              border: 6px solid transparent;
              border-right-color: #fafafa;
            }
          }
        }

        .self {
          text-align: right;

          .avatar {
            float: right;
            margin: 0 0 0 10px;
          }
          .chatText {
            background-color: #b2e281;

            &:before {
              right: inherit;
              left: 100%;
              border-right-color: transparent;
              border-left-color: #b2e281;
            }
          }
        }
      }

      .text {
        height: 160px;
        border-top: solid 1px #ddd;

        textarea {
          padding: 10px;
          height: 100%;
          width: 100%;
          border: none;
          outline: none;
          font-family: "Micrsofot Yahei";
          resize: none;
        }
      }
    }
  }
</style>
