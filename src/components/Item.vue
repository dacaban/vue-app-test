<template>
  <!--eslint-disable-->
  <div class="item">
    <div class="item__header">
      <h3 class="item__name">{{ name }}</h3>
      <input
        class="item__button"
        :style="{ backgroundImage: `url(${buttonIcon})` }"
        type="button"
        @click="changeSelection"
      >
    </div>
    <ul
      v-if="items.length"
      class="item__list"
    >
      <li
        v-for="item in items"
        class="item__subitem"
        :key="item.id"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    id: Number,
    name: String,
    items: Array,
    buttonIcon: String,
    selected: Boolean
  },
  methods: {
    /**
     * Изменяет состояние выбора элемента на противоположное
     */
    changeSelection() {
      this.$store.commit('CHANGE_ITEM_SELECTION', { id: this.id, selected: !this.selected });
    }
  }
};
</script>

<style lang="scss">
.item {
  padding: 10px 0;

  &:hover {
    background: linear-gradient(90deg, transparent 0%, #e9f7fd 20%, #e9f7fd 80%, transparent 100%);
  }

  &__header {
    display: flex;
    align-items: flex-start;
    margin-bottom: 5px;
  }

  &__button {
    background-color: #b7e3f7;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 10px;
    border: none;
    padding: 0;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgb(27 27 34 / 15%);

    &:hover {
      background-color: #8ad2ea;
    }
  }

  &__name {
    margin: 0;
    flex-grow: 1;
  }

  &__list {
    margin: 0 20px 0 0;
    padding: 0;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  &__subitem {
    margin-right: 5px;
    padding-right: 8px;
    list-style-type: none;
    opacity: 0.5;
    position: relative;

    &:not(:last-child)::after {
      content: '';
      width: 3px;
      height: 3px;
      background: #000;
      opacity: 0.5;
      border-radius: 50%;
      position: absolute;
      right: 0;
      top: 50%;
    }
  }
}
</style>
