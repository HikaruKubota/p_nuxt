<template>
  <section class="container">
    <h1>{{title}}</h1>
    <p>{{message}}</p>
    <hr>
    <router-link to="/">
      GO TO TOP
    </router-link>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'Other',
      message: 'これは別のページです'
    }
  },
}
</script>

<style>
.container {
  padding: 5px 10px;
}
h1 {
  font-size: 60pt;
}
p {
  padding: 5px;
  font-size: 20pt;
}
pre {
  padding: 10px;
  font-size: 20pt;
  background-color: #efefef;
}
hr {
  margin: 10px 0;
}
</style>
