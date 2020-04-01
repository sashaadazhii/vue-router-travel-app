<template>
  <span class="go-back">
    <button @click="goBack">Back</button>
  </span>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.go-back {
  display: flex;
  cursor: pointer;
}

button {
  padding: 5px;
  background: lightyellow;
  border: none;
  cursor: pointer;
}
</style>