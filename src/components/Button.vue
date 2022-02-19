<template>
  <!--eslint-disable-->
  <input
    class="button"
    type="button"
    :value="text"
    :style="style"
    @click="$emit('click')"
  >
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    icon: String
  },
  computed: {
    style() {
      return {
        backgroundImage: this.icon ? `url(${this.icon})` : 'none'
      };
    }
  }
};
</script>

<style lang="scss">
.button {
  background-color: #b7e3f7;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 10px;
  border: none;
  padding: 8px;
  box-sizing: border-box;
  cursor: pointer;
  min-width: 20px;
  min-height: 20px;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgb(27 27 34 / 15%);

  &:hover {
    background-color: #8ad2ea;
  }
}
</style>
