import {defineStore} from 'pinia'

export const useSubjectsStore = defineStore('subjectsStore',
    {
        state: () => ({
            subjectOptions: [
                {value: null, text: 'Výber predmetu'},
                {value: 1, text: 'Architektonické služby'},
                {value: 2, text: 'Interiérové služby'},
                {value: 3, text: 'Vizuálizácia'},
                {value: 4, text: '3D modelovanie'},
                {value: 5, text: 'Iné'},
            ],
        }),
        getters: {
            getSubjectOptions: (state) => state.subjectOptions,
        },
        actions: {
            mapSubjectText(subjectValue) {
                const subject = this.subjectOptions.find(option => option.value === parseInt(subjectValue));
                return subject ? subject.text : null;
            },
        },
    });