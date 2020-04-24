<template>
  <div class="navbar">
    <el-menu
      :unique-opened="true"
      :router="true"
      default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#4b6c9e"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="item in menuData">
        <el-submenu :index="item.path" :key="item.path">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </template>
          <!-- <router-link v-for="(citem,cindex) in item.children" :to="citem.path" :key="cindex"> -->
          <el-menu-item
            v-for="(citem, cindex) in item.children"
            :key="cindex"
            :index="citem.path"
          >
            <span slot="title">{{ citem.name }}</span>
          </el-menu-item>
          <!-- </router-link> -->
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuData: [
        {
          icon: "el-icon-s-home",
          path: "/home",
          name: "首页",
          children: []
        },
        {
          icon: "el-icon-document",
          path: "/car3g",
          name: "车险查询",
          children: [
            { path: "/car3g/zhongtie_car3g_qd", name: "中铁车险签单保费" },
            { path: "/car3g/taizhang_car3g_qd", name: "车险承保台账" },
            { path: "/car3g/dianzibaodan_car3g_qd", name: "车险电子保单" },
            // { path: "/car3g/cheshang_car3g_qd", name: "车商承保台账" },
            { path: "/car3g/bijia_car3g_qd", name: "车险承保比价表" }
          ]
        },
        {
          icon: "el-icon-document",
          path: "/carlp",
          name: "车险理赔",
          children: [
            { path: "/carlp/carlp_recoverlist", name: "追偿案件清单" },
            { path: "/carlp/carlp_reclaimlist", name: "损余回收清单" },
            { path: "/carlp/carlp_damagelist", name: "出险案件清单" }
          ]
        },
        {
          icon: "el-icon-money",
          path: "/sff",
          name: "财务查询",
          children: [
            { path: "/sff/sffcbccheque", name: "见费支票清单" },
            { path: "/sff/sffyssxf", name: "应收手续费" },
            { path: "/sff/sffrecpremlist", name: "应收保费清单" },
            { path: "/sff/sffrecpremBBRlist", name: "未逾期未实收(BBR)" },
            { path: "/sff/sffrefundlist", name: "退票信息" }
          ]
        },
        {
          icon: "el-icon-tickets",
          path: "/prpall",
          name: "非车查询",
          children: [
            { path: "/prpall/prpcbqd_ZDGlist", name: "教职员工校责险清单" },
            { path: "/prpall/prpcbqd_ZCJlist", name: "校(园)方责任保险" }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      if (keyPath == "/home") {
        this.$router.push(key);
      }
      // console.log(key, keyPath);
      // console.log("urlsrc=", urlsrc);
    },
    handleClose(key, keyPath) {
      if (keyPath == "/home") {
        this.$router.push(key);
      }
      // console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.navbar {
  position: absolute;
  width: 220px;
  top: 51px;
  left: 0px;
  bottom: 0px;
  overflow-y: auto;
  background: #4b6c9e;
  color: white;
  text-shadow: black 0 1px 0;
}
.el-menu {
  border: 1px;
}
</style>
