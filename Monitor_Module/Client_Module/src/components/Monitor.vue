<template>
  <div
    style="margin: 20px auto;width: 800px;height: 630px;overflow: hidden;border-radius: 3px; background-color: #dcdcdc">
    <div @click="clear"
         style="width: 150px;height: 30px; border-width: 0px; border-radius: 3px; background: #a9a9a9;	cursor: pointer;outline: none;color: #ffffff; font-size: 17px;
         padding: 5px; margin-right: 10px; float: right; margin-top: 10px">
      清屏
    </div>
    <div :style="{height:'570px',width:'800px'}" ref="myEchart">
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
        links: [],
        radian: [0, 0.1, 0.2, 0.3, 0.4, 0.5]
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
      // 清屏
      clear() {
        this.links = []
        this.setOption()
      },

      // =========================================================
      // websocket
      initWebSocket() { //初始化websocket
        //ws地址
        const wsuri = "ws://127.0.0.1:8082/websocket"
        this.websock = new WebSocket(wsuri)
        this.websock.onmessage = this.websocketonmessage
        this.websock.onclose = this.websocketclose
      },

      websocketonmessage(e) { //数据接收
        // TODO 解析后台传过来的数据
        const newLink = JSON.parse(e.data)
        console.log(newLink)
        // alert(newLink)

        this.links.push({
          source: newLink.source,
          target: newLink.target,
          lineStyle: {
            normal: {
              curveness: this.radian[this.links.length % 6], //线段弧度
              color: Global.getColor(newLink.type)
            }
          }
        })

        console.log(this.links)
        this.setOption()
      },

      websocketclose(e) {  //关闭
        console.log("connection closed (" + e.code + ")")
      },

      // ================================================
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
                x: 300,
                y: 250,
                label: {
                  position: 'bottom'
                }
              }, {
                name: '林宇超',
                symbol: 'image://https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user2.png',
                x: 440,
                y: 180,
                label: {
                  position: 'bottom'
                }
              }, {
                name: '曹嘉玮',
                symbol: 'image://https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user3.png',
                x: 600,
                y: 180,
                label: {
                  position: 'bottom'
                }
              }, {
                name: '顾琦琪',
                symbol: 'image://https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user4.png',
                x: 740,
                y: 250,
                label: {
                  position: 'bottom'
                }
              }, {
                name: '蔡蔚霖',
                symbol: 'image://https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user5.png',
                x: 780,
                y: 350,
                label: {
                  position: 'bottom'
                }
              }, {
                name: '刘倚彤',
                symbol: 'image://https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user6.png',
                x: 680,
                y: 480,
                label: {
                  position: 'bottom'
                }
              }, {
                name: '李泽斌',
                symbol: 'image://https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user7.png',
                x: 550,
                y: 490,
                label: {
                  position: 'bottom'
                }
              }, {
                name: '李安迪',
                symbol: 'image://https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user8.png',
                x: 400,
                y: 450,
                label: {
                  position: 'bottom'
                }
              }, {
                name: '周润发',
                symbol: 'image://https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user9.png',
                x: 300,
                y: 370,
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
      // 拓扑图
      initChart() {
        this.chart = echarts.init(this.$refs.myEchart)
        this.setOption()
      }
    }
  }
</script>

<style scoped>

</style>
