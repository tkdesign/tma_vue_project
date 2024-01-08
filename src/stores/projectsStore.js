import { defineStore } from 'pinia'
import axios from 'axios';

export const useProjectsStore  = defineStore('projectsStore',
    {
        state: () => ({
            categories: [],
            projects: [],
        }),
        getters: {
            getCategories: (state) => state.categories,
            getProjects: (state) => state.projects,
            getProjectById: (state) => (id) => {
                return state.projects.find((project) => project.id === id);
            },
            getProjectsByCategory: (state) => (categoryId) => {
                return state.projects.filter((project) => project.category_id === categoryId);
            },
        },
        actions: {
            fetchCategories() {
                axios.get('/categories.json').then(response => {
                    this.$patch({
                        categories: response.data.categories,
                    });
                    console.log(this.categories);
                }).catch(error => {
                    console.error('Nie je možné načítať údaje.', error);
                });
            },
            fetchProjects() {
                axios.get('/projects.json').then(response => {
                    this.$patch({
                        projects: response.data.projects,
                    });
                    console.log(this.projects);
                }).catch(error => {
                    console.error('Nie je možné načítať údaje.', error);
                });
            },
            init() {
                this.fetchCategories();
                this.fetchProjects();
            },
            setCategories(categories) {
                this.categories = categories;
            },

            setProjects(projects) {
                this.projects = projects;
            },
        }
    });