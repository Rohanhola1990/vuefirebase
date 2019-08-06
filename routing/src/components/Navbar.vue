<template>
    <div class="main-nav">
        <ul>
            <li>
                <router-link :to="{name: 'Home'}">
                    Home
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'About'}">
                    About
                </router-link>
            </li>
        </ul>
        <h2>
            User Profiles
        </h2>
        <ul>
            <li v-for="(id, index) in userIds" :key="index">
                <router-link :to="{name: 'ViewProfile', params: { user_id: id }}">
                    <span>
                        Profile {{ id }}
                    </span>
                </router-link>
            </li>
        </ul>

        <h2>Navigation Controls</h2>
        <ul>
            <li>
                <button @click="goBack">
                    GO Back
                </button>
                <button @click="goHome">
                    Redirect to Home
                </button>
                <button @click="goForward">
                    GO Forward
                </button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Navbar',
    data() {
        return {
            userIds: ['1', '2', '3', '4']
        }
    },
    methods: {
        goHome() {
            this.$router.push({name: 'Home'}) //NOT $route
        },
        goBack() {
            this.$router.go(-1)
        },
        goForward() {
            this.$router.go(1)
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        margin: 0 10px;
        display: inline-block;
    }
    a {
        color: #42b983;
    }
    .router-link-exact-active {
        color: purple;
    }
</style>
