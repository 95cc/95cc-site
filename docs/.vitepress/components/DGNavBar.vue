<script lang="ts" setup></script>

<template>
  <div class="wrapper-root">
    <h1 class="title">地瓜</h1>
    <nav>
      <ul class="site-nav">
        <li><a href="/">读书</a></li>
        <li><a href="/features">前端</a></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.wrapper-root {
  max-width: 1080px;
  margin: 0 auto;
}
.title {
  margin-top: 1.5rem;
  font-size: 30px;
  font-weight: 600;
  color: #000000;
}
.site-nav {
  margin-top: 1.5rem;
  /* 指定site-nav为弹性容器，让子元素成为弹性子元素 */
  display: flex;
  padding: 0.5em;
  background-color: #5f4b44;
  list-style-type: none;
  border-radius: 0.2em;
  color: #fff;
}
.site-nav > li > a {
  display: block;
  padding: 0.5em 1em;
  background-color: #cc6b5a;
  color: white;
  text-decoration: none;
}
.site-nav > li + li {
  margin-left: 1.5em;
}
</style>
