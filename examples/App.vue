<template>
  <div :class="$options.name">
    <div>
      <mainHeader></mainHeader>
      <div class="container" v-if="!isIndex">
        <sideNav class="nav"></sideNav>
        <router-view class="view"></router-view>
      </div>
      <router-view class="page" v-else></router-view>
      <!-- <mainFooter v-if="!isIndex"></mainFooter> -->
    </div>
  </div>
</template>

<script>
/**
* @file App.vue
* @author shenjp@founder.com
* @date 2020-04-14 12:29:38
*/
import MainHeader from './components/header.vue';
import MainFooter from './components/footer.vue';
import SideNav from './components/side-nav.vue';
export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter,
    SideNav
  },
  data () {
    return {
      isIndex: true
    };
  },
  watch: {
    $route () {
      this.isIndex = this.$route.name === 'index';
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/index";

.container {
  margin: 48px auto;
  width: 90%;
  background-color: #fff;
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
  .nav {
    float: left;
    width: 210px;
  }
  .view {
    float: left;
    width: calc(100% - 215px);
    padding: 32px 48px 48px;
    box-sizing: border-box;
  }
}
.container:after {
  content: "";
  clear: both;
  display: block;
}
</style>
