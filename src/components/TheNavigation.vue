<template>
  <nav id="nav">
    <p class="logo">Travel LOGO</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>

      <li class="links" v-for="destination in destinations" :key="destination.name">
        <router-link
          :to="{
          name: 'DestinationDetails', 
          params: {slug: destination.slug} }
          "
        >{{destination.name}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from "@/store.js";

export default {
  data() {
    return {
      slug: this.$route.params.slug,
      destinations: store.destinations
    };
  }
};
</script>

<style scoped>
#nav {
  display: flex;
  align-items: center;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #d45aa1;
}

.nav-links {
  display: flex;
}

.links {
  padding-right: 20px;
  list-style: none;
}

.logo {
  font-size: 20px;
  color: darkred;
  font-weight: bold;
}
</style>