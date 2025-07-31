import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order', {
  state: () => ({
    name: '',
    telephone: '',
    items: [],
    specials: [],
  }),
  actions: {
    setName(name) {
      this.name = name;
    },
    setTelephone(telephone) {
      this.telephone = telephone;
    },
    setItems(items) {
      this.items = items;
    },
    setSpecials(specials) {
      this.specials = specials;
    },
  },
});