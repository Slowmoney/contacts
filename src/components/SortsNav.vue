<template>
  <div class="sorts">
      <div class="sorts-grid">
          <div class="sorts-btn" @click="$emit('sort')"></div>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sorts {
  height: 60px;
  min-width: 300px;
  max-width: 400px;
  margin: auto;
  display: flex;
  align-items: center;
  background-color: #673ab7;
  &-grid{
      display: flex;
      padding: 20px 20px;
  }
  &-birsday{
       display: flex;
    width: 35px;
    height: 35px;
    cursor: default;
    background-color: #8b5fda;
    border-radius: 10px;
  }
}
</style>