<template>
  <ic-container>
    <ic-header>Header</ic-header>
    <ic-main>Main</ic-main>
    <ic-footer>Footer</ic-footer>
  </ic-container>
  <hr />
  <ic-button type="primary">按钮</ic-button>
  <ic-button type="success">按钮</ic-button>
  <ic-button>按钮</ic-button>
  <ic-button size="small">按钮</ic-button>
  <hr />
  <ic-container>
    <ic-header>Header</ic-header>
    <ic-container>
      <ic-aside width="200px">Aside</ic-aside>
      <ic-main>Main</ic-main>
    </ic-container>
  </ic-container>
  <hr />
  <ic-container>
    <ic-aside width="200px">Aside</ic-aside>
    <ic-container>
      <ic-header>Header</ic-header>
      <ic-main>Main</ic-main>
      <ic-footer>Footer</ic-footer>
    </ic-container>
  </ic-container>
</template>
<script setup lang="ts">
</script>
<style>
body {
  width: 100%;
  margin: 10px auto;
}
.ic-header,
.ic-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.ic-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.ic-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .ic-container {
  margin-bottom: 40px;
}
.ic-container:nth-child(5) .ic-aside,
.ic-container:nth-child(6) .ic-aside {
  line-height: 260px;
}
.ic-container:nth-child(7) .ic-aside {
  line-height: 320px;
}
</style>
