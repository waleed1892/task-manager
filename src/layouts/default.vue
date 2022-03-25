<template>
  <div class="layout-container">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.layout-container {
  background-color: #f2f3f8;
  min-height: calc(100vh - 80px);
  padding: 40px 0;
  display: flex;
  align-items: center;
  .content {
    width: 50%;
    margin: 0 auto;
  }
}
</style>