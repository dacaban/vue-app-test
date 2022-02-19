export default {
  /**
   * Возвращает массив выбранных объектов
   * @param state - объект состояния Vuex
   * @return {*[]}
   */
  getSelectedItemsList(state) {
    return state.items.filter((item) => item.selected);
  },
  /**
   * Возвращает объект невыбранных объектов
   * @param state - объект состояния Vuex
   * @return {*[]}
   */
  getUnselectedItemsList(state) {
    return state.items.filter((item) => !item.selected);
  }
};
