<template>
    <div class="blogs">
        <h2>
            Blog
        </h2>

        <div class="search">
            <input type="text" v-model="searchTerm">
            <span>{{ searchTerm }}</span>
        </div>
        
        <div v-for="post in filteredPosts" :key="post.id">
            <h3>
                {{ post.title }}
            </h3>
            <p> 
                {{ post.body | snippet }}  <!-- | filter symbol, name -->
            </p>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'Blogs',
    data() {
        return {
            posts: [],
            searchTerm: ''
        }
    },
    methods: {
    },
    computed: {
        filteredPosts() {
            return this.posts.filter(post => {
                return post.title.match(this.searchTerm);
            })
        }
    },
    beforeCreate() {
        
    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(response => {
            this.posts = response.data
        }).catch(err => {
            console.log(err);
        });
    }
}
</script>
<style scoped>

</style>
