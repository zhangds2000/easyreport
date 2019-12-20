<template>
  <div class="header">
    <a href="#/">
      <img src="@/assets/logo.png" class="logo" alt />
      <span class="title">陕 西 省 分 公 司 清 单 查 询 系 统</span>
    </a>
    <span class="username">
      <!-- 下拉箭头-->
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          下拉菜单
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-edit" command="暂未启用">修改密码</el-dropdown-item>
          <el-dropdown-item icon="el-icon-s-fold" command="暂未启用">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
  </div>
</template>

<script>
export default {

  methods: {
    handleCommand(command) {
         this.$message(`点击了${command}`)
    //   switch (cmdItem) {
    //     case "info":
    //       this.showInfoList();
    //       break;
    //     case "logout":
    //       this.logout();
    //       break;
      }
    }
};
</script>

<style scoped>
.header {
  position: absolute;
  line-height: 50px;
  top: 0px;
  left: 0px;
  right: 0px;
  background: #4b6c9e;
  color: #fff;
  text-shadow: black 0 4px 0;
  border-bottom: 1px solid #ffa500;
}
.logo {
  height: 40px;
  width: 90px;
  padding: 0px 50px 0 40px;
  vertical-align: middle;
}
.title {
  position: absolute;
  vertical-align: middle;
  font-size: 22px;
  font-family: "Microsoft YaHei";
  color: #fff;
}
.el-dropdown {
  float: right;
  margin-right: 40px;
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}
</style>
