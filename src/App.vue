<template>
  <div id="app">
    
    <TextInput />
  </div>
</template>

<script>
import TextInput from "./components/TextInput.vue";

export default {
  name: "App",
  components: {
    TextInput,
  },
};
</script>

<style lang="scss">
#app{
  font-family: Helvetica ;
  padding: 30px;

}
</style>
