import {defineStore} from 'pinia'
import axios from "axios";

export const usePriceGroupsStore = defineStore('priceGroupsStore',
    {
        state: () => ({
            activeGroup: null,
            priceGroups: []
        }),
        getters: {
            getActiveGroup: (state) => state.activeGroup,
            getPriceGroups: (state) => state.priceGroups,
        },
        actions: {
            setActiveGroup(group) {
                this.activeGroup = group;
            },
            fetchPriceGroups() {
                axios.get('/prices.json').then(response => {
                    this.$patch({
                        priceGroups: response.data.priceGroups,
                    });
                }).catch(error => {
                    console.error('Nie je možné načítať údaje.', error);
                });
            },
            init() {
                this.fetchPriceGroups();
            },
        }
    });