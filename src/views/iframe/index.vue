<template>
  <div class="iframe">
    <div class="container">
      <!-- <h1>这是地址{{ url }}</h1>
      <h2>这是路由地址{{ this.$router.currentRoute.path }} </h2> -->
      <iframe :src="url" id="main-iframe" scrolling="yes" frameborder="0" name="main-iframe"></iframe>
    </div>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      url: "http://74.1.32.85/?ReportName="+this.$router.currentRoute.path.substring(this.$router.currentRoute.path.lastIndexOf("\/")+1,this.$router.currentRoute.path.length)
    }
  },
  watch: {
     $route(to, from) {
       this.changeIframeUrl()
     },
  },
  methods: {
    changeIframeUrl() {
      // this.strurl = this.$router.currentRoute.path
      this.url = "http://74.1.32.85/?ReportName="+this.$router.currentRoute.path.substring(this.$router.currentRoute.path.lastIndexOf("\/")+1,this.$router.currentRoute.path.length)
      // console.log ("url=",this.url)
    }
 
  },
  mounted() {
     function changeMobsfIframe() {
      const mobsf = document.getElementById("main-iframe");
      const deviceWidth = document.body.clientWidth - 60;
      const deviceHeight = document.body.clientHeight;
      mobsf.style.width = Number(deviceWidth) - 160 + "px"; //数字是页面布局宽度差值
      mobsf.style.height = Number(deviceHeight) - 60+ "px"; //数字是页面布局高度差
    }

    changeMobsfIframe();

    window.onresize = function() {
      changeMobsfIframe();
    };
  }
};
</script>
<style scoped>
.iframe,
.main-iframe {
  position: absolute;
  top: 0px;
  left: 0px;
  /* overflow-y: auto; */
  background: url(../../assets/bg.jpg) no-repeat center;
  background-size: 100%;
}
</style>