<template>
  <div>
    <div class="row">
      <!-- 產品列表 -->
      <div class="col-md">
        <h1>產品列表</h1>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">產品</th>
              <th scope="col" width="70">原價</th>
              <th scope="col" width="70">售價</th>
              <th scope="col" width="70">狀態</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="itemProduct in products" :key="itemProduct.id">
              <td>{{ itemProduct.title }}</td>
              <td>{{ itemProduct.origin_price }}</td>
              <td>{{ itemProduct.price }}</td>
              <td>
                <span
                  :class="{
                    'text-success': itemProduct.is_enabled,
                    'text-danger': !itemProduct.is_enabled,
                  }"
                >
                  {{ itemProduct.is_enabled ? "啟用" : "未啟用" }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          目前有 <span>{{ products.length }}</span> 項產品
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    getData () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products`
      this.$http.get(url)
        .then(res => {
          this.products = res.data.products
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
