export default {
  /**
   * Устанавливает список объектов
   * при этом все объекты становятся невыбранными
   * @param state - объект состояния Vuex
   * @param items - массив объектов
   */
  SET_ITEMS(state, { items = [] }) {
    state.items = items.map((item) => {
      return {
        ...item,
        selected: false
      };
    });
  },

  /**
   * Устанавливает значение выбора у объекта
   * @param state - объект состояния Vuex
   * @param id - id объекта
   * @param selected - флаг выбора
   */
  CHANGE_ITEM_SELECTION(state, { id, selected }) {
    const targetItem = state.items.find((item) => item.id === id);
    if (!targetItem) {
      return;
    }
    targetItem.selected = selected;
  },

  /**
   * Добавляет объект в историю изменений
   * @param state - объект состояния Vuex
   * @param id - id объекта
   * @param selected - флаг выбора
   */

  ADD_TO_HISTORY(state, { id, selected }) {
    const targetItem = state.items.find((item) => item.id === id);
    if (!targetItem) {
      return;
    }
    const date = new Date();
    const historyRecord = {
      id: targetItem.id,
      name: targetItem.name,
      selected,
      time: `${padZeros(date.getHours(), 2)}:${padZeros(date.getMinutes(), 2)}:${padZeros(date.getSeconds(), 2)}`
    };
    state.history.push(historyRecord);
  }
};

function padZeros(number, len) {
  return number.toString().padStart(len, '0');
}
