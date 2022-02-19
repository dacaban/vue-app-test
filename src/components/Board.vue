<template>
  <!--eslint-disable-->
  <div class="board">
    <Column
      class="board__column"
      :items="unselectedItems"
      :buttonIcon="require('@/assets/plus.svg')"
    />
    <Column
      class="board__column"
      :items="selectedItems"
      :buttonIcon="require('@/assets/minus.svg')"
    />
  </div>
</template>

<script>
import Column from './Column';
export default {
  name: 'Board',
  components: {
    Column
  },
  computed: {
    selectedItems() {
      return this.$store.getters.getItemsList(true);
    },
    unselectedItems() {
      return this.$store.getters.getItemsList(false);
    }
  },
  mounted() {
    //Загрузим объекты при инициализации
    //Здесь использован локальный сервер на nodejs
    //Можно поднять его, можно использовать другое api
    const url = 'http://localhost:30001/open-api';
    this.$store.dispatch('loadItems', { url });
  }
};
</script>

<style lang="scss">
.board {
  display: flex;
  justify-content: stretch;
  padding: 20px 10px;
  box-sizing: border-box;
  border: 1px solid #cdcdcd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(7, 40, 51, 0.15);
  background: #fff;

  &__column {
    flex-basis: 50%;

    &:not(:last-child) {
      border-right: 1px solid #cdcdcd;
    }
  }
}
</style>
