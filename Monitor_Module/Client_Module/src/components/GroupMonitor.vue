<template>
  <div
    style="margin: 20px auto;width: 800px;height: 630px;overflow: hidden;border-radius: 3px; background-color: #dcdcdc">
    <div :style="{height:'600px',width:'800px'}" ref="myEchart">
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import Global from '../../static/Global'

  export default {
    name: "monitor",

    data() {
      return {
        chart: null,
        messageID: '',
        links: [],
        color: ['red', 'blue', 'green'],
        index: 0,
      }
    },
    mounted() {
      this.initWebSocket()
      this.initChart()
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    },

    methods: {
      // =========================================================
      // websocket
      initWebSocket() { //初始化websocket
        //ws地址
        const wsuri = "ws://localhost:8082/websocket/group"
        this.websock = new WebSocket(wsuri)
        this.websock.onmessage = this.websocketonmessage
        this.websock.onclose = this.websocketclose
      },

      websocketonmessage(e) { //数据接收
        // TODO 解析后台传过来的数据
        const newLink = JSON.parse(e.data)

        console.log(this.color[this.index])

        if(newLink.messageID === this.messageID){
          this.links.push({
            source: newLink.source,
            target: newLink.target,
            lineStyle: {
              normal: {
                curveness: 0, //线段弧度
                color: this.color[this.index]
              }
            }
          })
        }
        else{
          this.messageID = newLink.messageID
          this.index = (this.index + 1)%3
          this.links = [{
            source: newLink.source,
            target: newLink.target,
            lineStyle: {
              normal: {
                curveness: 0, //线段弧度
                color: this.color[this.index]
              }
            }
          }]
        }

        this.setOption()
      },

      websocketclose(e) {  //关闭
        console.log("connection closed (" + e.code + ")")
      },

      // ================================================
      // 拓扑图
      setOption(){
        // 把配置和数据放这里
        this.chart.setOption({
          title: {
            text: '网络连接',
            textAlign: 'left',
          },
          animationDurationUpdate: 1,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              type: 'graph',
              layout: 'none',
              symbolSize: 50,
              label: {
                normal: {
                  show: true
                }
              },
              edgeSymbol: ['circle', 'arrow'],
              edgeSymbolSize: [4, 10],
              edgeLabel: {
                normal: {
                  textStyle: {
                    fontSize: 20
                  }
                }
              },
              data: [{
                name: '刘瑷玮',
                symbol: 'image://https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user1.png',
                x: 350,
                y: 180,
                label: {
                  position: 'bottom'
                }
              }, {
                name: '林宇超',
                symbol: 'image://https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user2.png',
                x: 550,
                y: 170,
                label: {
                  position: 'bottom'
                }
              }, {
                name: '曹嘉玮',
                symbol: 'image://https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user3.png',
                x: 750,
                y: 200,
                label: {
                  position: 'bottom'
                }
              }, {
                name: '顾琦琪',
                symbol: 'image://https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user4.png',
                x: 380,
                y: 280,
                label: {
                  position: 'bottom'
                }
              }, {
                name: '蔡蔚霖',
                symbol: 'image://https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user5.png',
                x: 530,
                y: 290,
                label: {
                  position: 'bottom'
                }
              }, {
                name: '刘倚彤',
                symbol: 'image://https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user6.png',
                x: 730,
                y: 310,
                label: {
                  position: 'bottom'
                }
              }, {
                name: '李泽斌',
                symbol: 'image://https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user7.png',
                x: 330,
                y: 410,
                label: {
                  position: 'bottom'
                }
              }, {
                name: '李安迪',
                symbol: 'image://https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user8.png',
                x: 560,
                y: 430,
                label: {
                  position: 'bottom'
                }
              }, {
                name: '周润发',
                symbol: 'image://https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user9.png',
                x: 750,
                y: 440,
                label: {
                  position: 'bottom'
                }
              }],

              links: this.links,
              lineStyle: {
                normal: {
                  opacity: 0.9,
                  width: 2,
                  curveness: 0,
                }
              }
            }
          ]
        })
      },

      initChart() {
        this.chart = echarts.init(this.$refs.myEchart)
        this.setOption()
      }
    }
  }
</script>

<style scoped>

</style>
