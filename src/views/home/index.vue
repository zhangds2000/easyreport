<template>
  <div class="home">
    <h1 class="bottom">清 单 查 询 系 统</h1>
    <!-- <img src="../../assets/showbg1.png" align="center" alt="插图"/> -->
  </div>
</template>


<style scope>
.home {
  position: fixed;
  width: 100%;
  height: 100%;
  /* background: url(../../assets/bg.jpg) no-repeat center; */
  /* background-size: 100%; */
  text-align: center;
  color: black;
  /* text-shadow: 0 2px 2px #fff; */
  /* text-shadow: 1px 1px rgba(197, 223, 248,0.8),2px 2px rgba(197, 223, 248,0.8),3px 3px rgba(197, 223, 248,0.8),4px 4px rgba(197, 223, 248,0.8),5px 5px rgba(197, 223, 248,0.8),6px 6px rgba(197, 223, 248,0.8); */
  /* text-shadow: -1px -1px rgba(197, 223, 248,0.8),-2px -2px rgba(197, 223, 248,0.8),-3px -3px rgba(197, 223, 248,0.8),-4px -4px rgba(197, 223, 248,0.8),-5px -5px rgba(197, 223, 248,0.8),-6px -6px rgba(197, 223, 248,0.8); */
  font-family: "微软雅黑";
  font-size: 500%;
  font-weight: 700;
  padding-top: 300px;
  margin: 0px;
}
.bottom {
  font-family: cursive;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: -1px -1px 1px #000, 0 -1px 1px #000, 1px -1px 1px #000,
    1px 0 1px #000, 1px 1px 1px #000, 0 1px 1px #000, -1px 1px 1px #000,
    -1px 0 1px #000, 0 0 4px #000;
  animation-name: moveTest;
  animation-duration: 5s;
}
@keyframes moveTest {
  0% {
    transform: translate(200px, 200px);
  }
  50% {
    transform: translateY(200px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>