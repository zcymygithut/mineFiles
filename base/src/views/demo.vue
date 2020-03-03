<template>
  <div class="demo"></div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {

    }
  },
  mounted () {
    this.getDemoData()
  },
  methods: {
    async getDemoData () {
      let res = await this.commonApi.demo()
      console.log(res)
    }
  }
}
</script>