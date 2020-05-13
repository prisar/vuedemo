<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="(product, index) in saleProducts" :key="index">
        <span class="name">{{ product.name }}</span>
        <span class="price celebration">${{ product.price }}</span>
      </li>
    </ul>
    <button v-on:click="reducePrice(4)">Reduced Price</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    computed: {
        products(){
            return this.$store.state.products;
        },
        ...mapGetters([
            'saleProducts'
        ])
    },
    methods: {
        ...mapActions([
            'reducePrice'
        ])
    }
};
</script>

<style>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}

.celebration::before,
.celebration::after {
  animation: 1s bang ease-out 4 backwards, 1s gravity ease-in 4 backwards;
  border-radius: 50%;
  box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;
  content: "";
  height: 4px;
  position: absolute;
  width: 4px;
  will-change: transform, opacity;
}

@keyframes bang {
  to {
    box-shadow: -16px -10px #00ff59, 60px -20px #00ffd0, 25px -13px #f7ff00, 17px -33px #bf00ff, 29px 10px #ff1100, 44px -62px #4000ff, -47px 16px #00ffc4, 26px 18px #00ff4d, -56px -77px #ddff00, -26px -88px #95ff00, 0px -53px #fbff00, 43px -47px #ff008c, -3px -66px #001aff, -52px -60px #0033ff, 21px -79px #7b00ff, -24px -74px #00f2ff, 45px 2px #ff6600, -35px -40px #0011ff, 6px -46px #00ff09, -48px 11px #15ff00, 33px -32px #ff0048,
      36px -6px #00ff4d, -21px -34px #ff0051, -56px -6px #00ff73, 23px -97px #00ff99, 27px -9px #00ffd9, 20px -8px #e6ff00, -25px 1px #00e1ff, 28px -29px #00ff1e, -14px -85px #1100ff, -43px -85px #ff0062;
  }
}

@keyframes gravity {
  to {
    opacity: 0;
    transform: translateY(35px);
  }
}
</style>
