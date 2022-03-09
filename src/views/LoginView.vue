<template>
  <div>登入頁面</div>
  <form action="">
    <button type="button" @click="login">登入</button>
  </form>
</template>

<script>
export default {
  methods: {
    login () {
      // 轉址
      this.$router.push('/admin/products')
    }
  }
}
</script>
