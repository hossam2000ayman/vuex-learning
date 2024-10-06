<template>
  <div class="home">
    <h1>This is Home Page</h1>
    <button @click="getProductsHelper">Get Products</button>
    <ul class="product-list">
      {{
        getFirstProduct
      }}
      <li
        v-for="product in ProductsModule.products"
        :key="product.id"
        class="product-item"
      >
        <!-- Product Image -->
        <div class="product-image">
          <img :src="product.thumbnail" :alt="product.title" />
        </div>

        <!-- Product Details -->
        <div class="product-details">
          <!-- Product Title -->
          <h2>{{ product.title }}</h2>

          <!-- Product Brand, Category, and Description -->
          <p><strong>Brand:</strong> {{ product.brand }}</p>
          <p><strong>Category:</strong> {{ product.category }}</p>
          <p>{{ product.description }}</p>

          <!-- Product Dimensions -->
          <p>
            <strong>Dimensions:</strong>
            {{ product.dimensions.width }} x {{ product.dimensions.height }} x
            {{ product.dimensions.depth }}
          </p>

          <!-- Product Price and Discount -->
          <p><strong>Price:</strong> ${{ product.price }}</p>
          <p v-if="product.discountPercentage > 0">
            <strong>Discount:</strong> {{ product.discountPercentage }}%
          </p>

          <!-- Product Stock and Minimum Order Quantity -->
          <p><strong>Stock:</strong> {{ product.stock }} available</p>
          <p>
            <strong>Minimum Order Quantity:</strong>
            {{ product.minimumOrderQuantity }}
          </p>

          <!-- Product Rating -->
          <p><strong>Rating:</strong> {{ product.rating }} / 5</p>

          <!-- Product Return Policy, Shipping Information, and Warranty -->
          <p><strong>Return Policy:</strong> {{ product.returnPolicy }}</p>
          <p>
            <strong>Shipping Information:</strong>
            {{ product.shippingInformation }}
          </p>
          <p><strong>Warranty:</strong> {{ product.warrantyInformation }}</p>

          <!-- Product Tags -->
          <div class="product-tags">
            <strong>Tags:</strong>
            <span
              v-for="(tag, index) in product.tags"
              :key="index"
              class="tag"
              >{{ tag }}</span
            >
          </div>

          <!-- Product Reviews -->
          <div class="product-reviews">
            <h3>Customer Reviews:</h3>
            <ul>
              <li v-for="(review, index) in product.reviews" :key="index">
                <p>
                  <strong>{{ review.reviewerName }}:</strong>
                  {{ review.comment }}
                </p>
                <p><strong>Rating:</strong> {{ review.rating }} / 5</p>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
//vuex Helpers
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

export default {
  //state , getters in computed option
  computed: {
    //map state required name of modules
    //map state can be achieved through the actions ("dispatch")
    ...mapState(["ProductsModule"]),
    ...mapGetters(["getFirstProduct"]),
  },
  // mutations , actions in methods option
  methods: {
    ...mapMutations(["getProducts"]),
    ...mapActions(["doGetProducts"]),
    async getProductsHelper() {
      await this.doGetProducts(); //action => mutation => state + modules
      console.log("Products from Home Page", this.ProductsModule.products);
    },
  },
};
</script>
<style scoped>
.product-list {
  list-style-type: none;
  padding: 0;
}

.product-item {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px 0;
  display: flex;
  gap: 20px;
}

.product-image img {
  max-width: 150px;
  height: auto;
  object-fit: cover;
}

.product-details {
  flex: 1;
}

.product-tags {
  margin-top: 10px;
}

.product-tags .tag {
  background-color: #f3f3f3;
  border: 1px solid #ccc;
  padding: 5px;
  margin-right: 5px;
  display: inline-block;
}

.product-reviews {
  margin-top: 15px;
}
</style>
