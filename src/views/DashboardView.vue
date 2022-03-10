<template>
  <div class="container">
    <router-link to="/">回到前台</router-link>
    <div class="page-title">後台</div>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkSuccess: false
    }
  },
  methods: {
    // 驗證登入
    checkLogin () {
      const url = `${process.env.VUE_APP_API}/api/user/check`
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      this.$http.defaults.headers.common.Authorization = `${token}`
      this.$http.post(url)
        .then(() => {
          this.checkSuccess = true
        }).catch(() => {
          alert('驗證失敗，請重新登入')
          this.$router.push('/login') // 轉址
        })
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
