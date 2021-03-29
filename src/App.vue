<template>
  <v-app>
    <Navbar 
    :login="login"
    :logout="logout"
    :userProfile="userProfile"
    :loggedIn="loggedIn"
    
    />
    <router-view></router-view>
    <Footer/>
  </v-app>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapGetters("user",{
      userProfile: "userProfile",
      loggedIn: "loggedIn",
    }),
  },
  methods: {
    ...mapActions('user',{
      login: 'login',
      logout: 'logout',
    })
  }

};
</script>
