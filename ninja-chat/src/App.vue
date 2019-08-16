<template>
  <div id="app">
    <router-view>
      <Welcome/>
      <Chat/>
    </router-view>
  </div>
</template>

<script>
import Welcome from './components/Welcome';
import Chat from './components/Chat';

export default {
  name: 'App',
  components: {
    Welcome,
    Chat
  }
}
</script>

<style>
</style>
