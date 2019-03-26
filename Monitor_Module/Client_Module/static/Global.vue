<script>
  let userList=[
    {
      name: 'kiki',
      img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user1.png'
    },
    {
      name: 'joyce',
      img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user2.png'
    },
    {
      name: 'jack',
      img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user3.png'
    },
    {
      name: 'keith',
      img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user4.png'
    },
    {
      name: 'john',
      img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user5.png'
    },
    {
      name: 'max',
      img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/user6.png'
    },
    {
      name: 'mike',
      img: 'https://image-s1.oss-cn-shanghai.aliyuncs.com/software/Snipaste_2019-03-23_13-48-39.png'
    },
  ]
  function getColor(type) {
    if(type === 'PING')
      return 'yellow'
    else if(type === 'FIND_NODE')
      return 'blue'
    else if(type ==='REPLY_NODE')
      return 'green'
    else if(type==='SEND')
      return 'red'
    else
      return 'pink'
  }

  export default {
    userList, getColor
  }
</script>

<style scoped>

</style>
