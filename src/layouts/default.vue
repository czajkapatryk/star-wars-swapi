<template>
  <v-app>
    <div>
      <Nav />
    </div>
    <v-main :class="{ 'o-main': !miniVariant, 'o-main--mini': miniVariant }">
      <v-container :fluid="true">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNavStore } from '@/store/nav'
import Nav from '@/components/modules/nav/organisms/Nav.vue'

const navStore = useNavStore()
const miniVariant = computed(() => navStore.miniVariant)
</script>
