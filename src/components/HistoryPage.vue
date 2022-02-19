<template>
  <!--eslint-disable-->
  <div class="history-page">
    <div class="history-page__menu">
      <Button
        class="history-page__button"
        text="На главную"
        @click="$router.push('/')"
      />
    </div>
    <div class="history-page__board">
      <table class="history-page__table">
        <tbody>
        <tr class="history-page__header">
          <th class="history-page__cell">ID</th>
          <th class="history-page__cell">Наименование</th>
          <th class="history-page__cell">Событие</th>
          <th class="history-page__cell">Время</th>
        </tr>
        <tr
          class="history-page__no-data"
          v-if="!dataSource.length"
        >
          <td class="history-page__cell" colspan="4">Нет данных</td>
        </tr>
        <tr
          v-for="(item, index) in dataSource"
          class="history-page__row"
          :class="{ 'history-page__row_even' : index % 2 }"
        >
          <td class="history-page__cell">
            {{ item.id }}
          </td>
          <td class="history-page__cell">
            {{ item.name }}
          </td>
          <td
            class="history-page__cell"
            :class="{ 'history-page__cell_success': item.selected, 'history-page__cell_warning': !item.selected }"
          >
            {{ item.selected ? 'Добавлено' : 'Удалено' }}
          </td>
          <td class="history-page__cell">
            {{ item.time }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Button from './Button';
export default {
  name: 'HistoryPage',
  components: {
    Button
  },
  computed: {
    dataSource() {
      let selected = this.$route.query.selected;
      selected = selected ? JSON.parse(selected) : null;
      return this.$store.getters.getHistory(selected);
    }
  }
};
</script>

<style lang="scss">
.history-page {
  padding: 20px;

  &__menu {
    margin-bottom: 20px;
  }

  &__button {
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
  }

  &__board {
    box-sizing: border-box;
    border: 1px solid #cdcdcd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(7, 40, 51, 0.15);
    background: #fff;
    padding: 20px;
  }

  &__table {
    width: 100%;
    border-spacing: 0;
  }

  &__header > th {
    border-bottom: 3px #8ad2ea solid;
  }

  &__row {
    &_even {
      background: rgba(138, 210, 234, 0.25);
    }
    &:hover {
      background: #b7e3f7;
    }
  }

  &__cell {
    padding: 6px 10px;
    text-align: left;

    &_success {
      color: green;
    }

    &_warning {
      color: red;
    }
  }

  &__no-data .history-page__cell {
    text-align: center;
    height: 100px;
    vertical-align: middle;
    color: #25b2e1;
  }
}
</style>
