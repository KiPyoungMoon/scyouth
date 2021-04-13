export const MenusPath = {
  state: () => ({
    img: "",
  }),
  mutations: {
    set(state, imgPath) {
      state.img = imgPath;
    },
  },
  getters: {
    getImgUrl(state) {
      return state.img;
    },
  },
  actions: {
    setImg({ commit }, { imgPath }) {
      commit("set", imgPath);
    },
  },
};
