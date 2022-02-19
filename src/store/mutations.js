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
  }
};
