<template>
  <!--eslint-disable-->
  <div class="column">
    <div class="column__search">
      <input
        type="text"
        placeholder="Поиск..."
        v-model="searchStr"
        @input="onInputChanged"
      >
    </div>
    <Item
      class="column__item"
      v-for="item in dataSource"
      :key="item.id"
      v-bind="item"
      :buttonIcon="buttonIcon"
    />
  </div>
</template>

<script>
import Item from './Item';

export default {
  name: 'Column',
  components: {
    Item
  },
  props: {
    items: Array,
    buttonIcon: String
  },
  data() {
    return {
      dataSource: null,
      timeoutId: null,
      searchStr: ''
    };
  },
  watch: {
    items: {
      handler() {
        if (this.searchStr) {
          this.findAndSortItems();
          return;
        }
        this.dataSource = this.items;
      },
      immediate: true
    }
  },
  methods: {
    /**
     * Действие на событие ввода символа в строку поиска
     * запускает поиск с сортировкой по таймеру
     */
    onInputChanged() {
      //Чтобы не перерисовывать DOM и не раздражать пользователей при каждом введенном символе
      //Дождемся, когда пользователь закончит вводить строку
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      this.timeoutId = setTimeout(() => {
        this.findAndSortItems();
        this.timeoutId = null;
      }, 1000);
    },
    /**
     * Ищет и сортирует объекты в соответствии с введенной строкой поиска
     */
    findAndSortItems() {
      //Не будем учитывать регистр
      let searchStr = this.searchStr.toLowerCase();
      //Если поиск очистили, вернем первоначальный порядок
      if (!searchStr) {
        this.dataSource = this.items;
        return;
      }
      this.dataSource = this.items
        //Склеим все имена в одну строку
        .map((item) => {
          return {
            ...item,
            complexName: (item.name + item.items.map((itemInItem) => itemInItem.name).join('')).toLowerCase()
          };
        })
        //Отфильтруем по наличию вхождения
        .filter(({ complexName }) => complexName.includes(searchStr))
        //Отсортируем в обратном порядке по количеству вхождений (от большего к меньшему?)
        .sort(({ complexName: complexName1 }, { complexName: complexName2 }) => {
          let entryCount1 = complexName1.split(searchStr).length - 1;
          let entryCount2 = complexName2.split(searchStr).length - 1;
          return entryCount2 - entryCount1;
        })
        //Удалим поле со склеенными строками
        .map((item) => {
          delete item.complexName;
          return item;
        });
    }
  }
};
</script>

<style lang="scss">
.column {
  padding: 0 10px;
  box-sizing: border-box;

  &__search {
    margin-bottom: 10px;

    input {
      box-sizing: border-box;
      width: 100%;
      border: 1px solid #cdcdcd;
      border-radius: 4px;
      height: 30px;
      outline: none;
      padding: 1px 7px;

      &:focus,
      &:active {
        box-shadow: 0 4px 8px rgb(7 40 51 / 15%);
      }
    }
  }
}
</style>
