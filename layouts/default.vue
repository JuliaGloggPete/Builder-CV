<template>
  <div>
    <header class="shadow-sm">
      <nav class="container mx-auto p-4 flex bg-considBlue text-white">

        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>

          <li><NuxtLink to="/form">CV</NuxtLink></li>
   
      
        </ul>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>
    <footer>
      <address class="flex flex-col container mx-auto p-4 bg-considBlue text-white">
        <p>Consid</p>
        <p>LiaProjekt</p>
      </address>
    </footer>
  </div>
</template>
<style scoped>
.router-link-exact-active {
  text-decoration: underline;
}
</style>
