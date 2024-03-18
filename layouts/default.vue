<template>
  <div>
    <header class="shadow-sm">
      <div class="container mx-auto p-4 bg-considBlue text-white">
      <nav class=" flex">

        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>

          <li><NuxtLink to="/form">CV</NuxtLink></li>
   
      
        </ul>
        
       
      </nav>
      <p class="text-center uppercase  text-3xl">We want to work at Consid. </p>
 
      <p class="text-center uppercase font-semibold text-5xl mt-4">You will notice.</p>
 
    </div>
 
     
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
