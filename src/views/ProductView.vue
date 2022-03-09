<template>
    <div class="product">
        {{ product }}
        <router-link to="/products">回產品列表</router-link>
    </div>
</template>

<script>
export default {
  data () {
    return {
      product: []
    }
  },
  mounted () {
    const { id } = this.$route.params
    const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
    this.$http.get(url)
      .then((res) => {
        this.product = res.data.product
      })
  }
}
</script>
