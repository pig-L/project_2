<template>
  <main>
      <v-footer></v-footer> 
      <router-view></router-view>
  </main>
</template>

<script>
import vfooter from './components/index/footer.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome'
    }
  },
  components:{
    'v-footer':vfooter
  }
}
</script>