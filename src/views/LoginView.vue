<template>
  <div class="login">
    <div class="row justify-content-center">
      <div class="page-title text-center">請先登入</div>
      <form action="" @submit.prevent="login">
        <div class="form-floating mb-3">
          <input type="email" v-model="user.username" class="form-control" id="email" placeholder="name@example.com">
          <label for="email">Email</label>
        </div>
        <div class="form-floating">
          <input type="password" v-model="user.password" class="form-control" id="password" placeholder="密碼" autocomplete="">
          <label for="password">密碼</label>
        </div>
        <div class="d-grid gap-2 mt-3">
          <button type="submit" class="btn btn-dark btn-lg">登入</button>
        </div>
        <div class="text-center mt-3">
          <router-link to="/">回前台</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const url = `${process.env.VUE_APP_API}/admin/signin`
      this.$http.post(url, this.user)
        .then(res => {
          alert(res.data.message)
          const { token, expired } = res.data
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}; path=/`
          this.$router.push('/admin/products') // 轉址
        }).catch(() => {
          alert('登入失敗')
        })
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
