<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};

</script>
<style lang="scss">
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
   url(./assets/fonts/Montserrat-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Montserrat-Bold";
  src: local("Montserrat-Bold"),
   url(./assets/fonts/Montserrat-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "Montserrat-Light-Italic";
  src: local("Montserrat-Light-Italic"),
   url(./assets/fonts/Montserrat-LightItalic.ttf) format("truetype");
}

@font-face {
  font-family: "Montserrat-Light";
  src: local("Montserrat-Light"),
   url(./assets/fonts/Montserrat-Light.ttf) format("truetype");
}

:root {
  font-size: 1em;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat';
  box-sizing: border-box;
}

body {
  background-color: #F5F5F5;
}

.container {
  padding: 2rem 4rem;
}

</style>
