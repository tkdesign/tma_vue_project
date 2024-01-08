import { defineStore } from 'pinia'

export const usePriceGroupsStore = defineStore('priceGroupsStore',
    {
        state: () => ({
            activeGroup: null,
        }),
        getters: {
            getActiveGroup: (state) => state.activeGroup,
        },
        actions: {
            setActiveGroup(group) {
                this.activeGroup = group;
            },
        }
    });