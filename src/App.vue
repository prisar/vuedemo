<template>
  <div id="app">
    <div>Is it Idle? - {{ isIdle }}</div>
    <modal-idle v-if="isIdle" />
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from "./components/ProductListOne";
import ProductListTwo from "./components/ProductListTwo";
import ModalIdle from "@/components/ModalIdle";

export default {
  components: {
    "product-list-one": ProductListOne,
    "product-list-two": ProductListTwo,
    "modal-idle": ModalIdle,
  },
  name: "app",
  data() {
    return {};
  },
  computed: {
    isIdle() {
      return this.$store.state.idleVue.isIdle;
    },
  },
};
</script>

<style>
body {
  font-family: Ubuntu;
  color: #555;
}
</style>
