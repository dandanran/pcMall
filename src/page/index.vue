<template>
<div>
    <h1>test</h1>
  <!--<y-header></y-header>-->
    <router-view class="main"></router-view>
  <y-footer></y-footer>
</div>
</template>

<script>
  // import YHeader from '../components/header'
  import YFooter from '../components/loginfooter'
    export default {
        name: "index",
        data () {
            return {}
        },

      components: {
        // YHeader,
        YFooter
      }
    }
</script>

<style scoped>

</style>
