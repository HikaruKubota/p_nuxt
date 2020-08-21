<template>
  <section class="container">
    <h1>{{title}}</h1>
    <p v-html="message">no message.</p>
    <hr>
    <div class="right">
      <router-link to="/">GO TOP</router-link>
    </div>
  </section>
</template>

<script>
export default {
  validate({params}){
    if (params.id == undefined || params.pass == undefined) {
      return false
    }
    return true
  },
  data: function () {
    return {
      title: 'login',
    }
  },
  computed: {
    message: function () {
      let id = this.$route.params.id != undefined ? this.$route.params.id : '*** no id ***'
      let pass = this.$route.params.pass != undefined ? this.$route.params.pass : '*** no password ***'
      return 'ID:' + id + '<br>PASS:' + pass
    }
  }
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
.right{
  text-align: right;
}

</style>
