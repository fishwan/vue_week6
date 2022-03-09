<template>
    <div class="product">
        <div class="row">
          <div class="col-5">
            <div class="product-img">
              <img :src="product.imageUrl" class="img-fluid" alt="">
            </div>
          </div>
          <div class="col-7">
            <div class="product-content">
              <h2 class="fw-bold">{{ product.title }}</h2>
              <div class="product-category mb-3">{{ product.category }}</div>
              <div class="p-product-description mb-3">{{ product.description }}</div>
              <div v-if="product.price === product.origin_price" class="card-text mb-3">
                <div class="fw-bold"><small>售價 $</small> {{ product.origin_price }}</div>
              </div>
              <div v-else class="card-text mb-3 d-flex">
                <div class="text-danger fw-bold me-2"><small>特價 $</small> {{ product.price }}</div>
                <div class="text-decoration-line-through fw-bold text-black-50"><small>售價 $</small> {{ product.origin_price }}</div>
              </div>
              <div class="mb-3">
                <select class="form-select" name="productItemQty" id="productItemQty" v-model="qty">
                  <option v-for="num in 10" :value="num" :key="`${product.id} + ${num}`">
                    {{ num }}
                  </option>
                </select>
              </div>
              <button class="btn btn-dark w-100"
              @click="addToCart">放入購物車</button>
            </div>
          </div>
        </div>
        <router-link to="/products">回產品列表</router-link>
    </div>
</template>

<script>
export default {
  data () {
    return {
      product: [],
      qty: 1
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http.get(url)
        .then((res) => {
          this.product = res.data.product
        })
    },
    addToCart () {
      // this.$emit('add-cart', this.product.id, this.qty);
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
