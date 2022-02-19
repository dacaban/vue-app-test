<template>
  <!--eslint-disable-->
  <div class="main-page">
    <div class="main-page__menu">
      <Button
        class="main-page__button"
        text="История"
        @click="goTo('/history')"
      />
      <Button
        class="main-page__button"
        text="История добавлений"
        @click="goTo('/history?selected=true')"
      />
      <Button
        class="main-page__button"
        text="История удалений"
        @click="goTo('/history?selected=false')"
      />
    </div>
    <Board />
  </div>
</template>

<script>
import Board from './Board';
import Button from './Button';
export default {
  name: 'MainPage',
  components: {
    Board,
    Button
  },
  methods: {
    /**
     * Переходит на страницу с заданным путем
     * @param path - путь к странице
     */
    goTo(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss">
.main-page {
  padding: 20px;

  &__menu {
    margin-bottom: 20px;
    display: flex;
  }

  &__button {
    margin-right: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
  }
}
</style>
