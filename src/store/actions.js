export default {
  /**
   * Запрашивает массив объектов и кладет их в хранилище
   * @param context - объект контекста
   * @param url - адрес внешнего api
   * @return {Promise<never>|Promise<any>}
   */
  loadItems(context, { url }) {
    if (!url) {
      return Promise.reject('url is required');
    }
    //Если объекты уже запрошены ранее, вернем их
    const items = context.state.items;
    if (items.length) {
      return Promise.resolve(items);
    }
    //Иначе делаем запрос
    let fetchOptions = {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return fetch(url, fetchOptions)
      .then((response) => {
        if (!response.ok) {
          throw response;
        }

        return response.json();
      })
      .then((result) => {
        context.commit('SET_ITEMS', { items: result });
        return result;
      })
      .catch((err) => {
        window.console.log(err);
      });
  },

  /**
   * Изменяет значение выбора у объекта и записывает изменение в историю
   * @param context - объект контекста
   * @param id - идентификатор объекта
   * @param selection - флаг выбора
   */
  changeItemSelection(context, { id, selected }) {
    context.commit('CHANGE_ITEM_SELECTION', { id, selected });
    context.commit('ADD_TO_HISTORY', { id, selected });
  }
};
