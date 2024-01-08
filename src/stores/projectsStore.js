import { ref, computed } from 'vue'
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
                const data = {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
                axios.get('/categories.json', data).then(response => {
                    this.$patch({
                        categories: response.data.categories,
                    });
                    console.log(this.categories);
                }).catch(error => {
                    console.error('Error loading data', error);
                });
            },
            fetchProjects() {
                const data = {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
                axios.get('/projects.json', data).then(response => {
                    this.$patch({
                        projects: response.data.projects,
                    });
                    console.log(this.projects);
                }).catch(error => {
                    console.error('Error loading data', error);
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