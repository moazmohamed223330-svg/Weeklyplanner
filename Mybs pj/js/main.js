let App = {
  data() {
    return {
      products: products,
      path: "product",
      cart: [],
      updateKey: 0
    };
  },

  methods: {
    addToCart: function (pro) {
      if (pro.stock <= 0) {
        alert("This product isn't");
        return;
      }

      let item = this.cart.find((ele) => ele.pro.id === pro.id);

      if (!item) {
        this.cart.push({ pro: pro, count: 1 });
      } else {
        item.count++;
      }

      pro.stock--;
      this.updateKey++; // ← هنا Vue هيعمل إعادة رسم تلقائي
    }
  }
};

Vue.createApp(App).mount("#App");
