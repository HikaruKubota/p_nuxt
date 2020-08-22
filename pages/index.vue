<template>
  <section class="container">
    <h1>{{title}}</h1>
    <p>{{$store.state.message}}</p>
    <hr>
    <div class="link"
      @click.exact="$store.dispatch('doit')">
      <a
        @click.stop="$store.commit('reset')"
      >
        clicked: {{$store.state.counter}}
      </a>
    </div>
    <p>{{message}}</p>
    <hr>
    <pre>[{{now}}]</pre>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'hello!',
      message: 'this is a message!',
      now: 'wait...'
    }
  },
  created: function () {
    setInterval(()=>{
      let a = new Date()
      this.now = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds()
    }, 1000)
  },
}
</script>

<style>
.container {
  padding: 5px 10px;
}
a {
  font-size: 16pt;
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
