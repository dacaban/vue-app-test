export default {
  /**
   * Возвращает массив объектов в соответствии с параметром selected
   * @param state - объект состояния Vuex
   * @return {function(*): *[]}
   */
  getItemsList:
    (state) =>
    (selected = null) => {
      if (selected === null) {
        return state.items;
      }
      return state.items.filter((item) => item.selected === selected);
    },

  /**
   * Возвращает массив объектов истории в соответствии с параметром selected
   * @param state - объект состояния Vuex
   * @return {(function(*=): ([]))|*}
   */
  getHistory:
    (state) =>
    (selected = null) => {
      if (selected === null) {
        return state.history;
      }
      return state.history.filter((item) => item.selected === selected);
    }
};
