<template>
  <v-app>
    <v-main>
      <v-container
        class="c-error"
        fluid
      >
        <h1>Error 404</h1>
        <p>Page not found.</p>
        <router-link
          class="c-error--redirect"
          to="/"
        >
          Go back to the main site
        </router-link>
      </v-container>
    </v-main>
  </v-app>
</template>
<style lang="css" scoped>
.c-error {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: var(--font_size--xxl);
  background: var(--secondary);
  color: var(--primary);
}

.c-error--redirect {
  color: var(--primary-variant);
}
</style>
