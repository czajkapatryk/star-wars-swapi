<template>
  <v-navigation-drawer
    v-model="drawerValue"
    :value="drawerValue"
    :disable-resize-watcher="true"
    width="280"
    height="100vh"
    rail-width="80"
    :touchless="!isMobile"
    :floating="!isMobile"
    :permanent="!isMobile"
    color="secondary"
    :rail="miniVariant"
  >
    <DrawerBtn
      v-if="!isMobile"
      :mini-variant="miniVariant"
      :elevation="3"
      @toggle-variant="toggleMiniVariant"
    />
    <div :class="{ 'c-drawer': !miniVariant, 'c-drawer__mini': miniVariant }">
      <router-link
        to="/"
        class="c-drawer--logo c-drawer--logo-main"
        :class="{ 'c-drawer--logo-mini': miniVariant }"
      >
        <v-img
          contain
          :src="`${miniVariant ? '/main_logo_mini.png' : '/main_logo.png'}`"
        />
      </router-link>
      <div class="c-drawer__nav">
        <List
          :items="reducedTabs"
          :mini-variant="miniVariant"
        />
      </div>
      <div class="c-drawer--company-logo">
        <a
          href="https://www.t-mobile.pl"
          target="_blank"
          class="c-drawer--logo"
          :class="{ 'c-drawer--logo-mini': miniVariant }"
        >
          <v-img
            contain
            :src="`${miniVariant ? '/company_logo_mini.png' : '/company_logo.png'}`"
          />
        </a>
      </div>
    </div>
  </v-navigation-drawer>
  <v-btn
    v-if="isMobile"
    :icon="true"
    right
    color="primaryVariant"
    class="c-toggle-drawer-mobile-btn"
    @click.stop="drawer = !drawer"
  >
    <v-icon>{{
      drawer ? 'mdi-dots-horizontal-circle' : 'mdi-dots-vertical-circle-outline'
    }}</v-icon>
  </v-btn>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount, onMounted } from 'vue'
import { useNavStore } from '@/store/nav'
import { useMobileStore } from '@/store/mobile'
import type { NavItemsType } from '@/features/nav/types/NavItemsType'
import NavItemsInterface from '@/features/nav/interfaces/NavItemsInterface'

import DrawerBtn from '@/components/modules/nav/molecules/DrawerBtn.vue'
import List from '@/components/modules/nav/molecules/List.vue'

const navStore = useNavStore()
const mobileStore = useMobileStore()
const drawer = ref(false as boolean)
const reducedTabs = ref<NavItemsType>([])

const isMobile = computed(() => mobileStore.isMobile)
const miniVariant = computed(() => navStore.miniVariant)
const tabs = computed(() => navStore.defaultTabs())

const drawerValue = computed({
  get() {
    if (isMobile.value) {
      return drawer.value
    } else {
      return true
    }
  },
  set(value: boolean) {
    if (isMobile.value) {
      return (drawer.value = value)
    } else {
      return true
    }
  },
})

onBeforeMount(() => {
  tabList()
})

onMounted(() => {
  navStore.loadDrawerProps()
})

function tabList() {
  const tempTabs: NavItemsInterface = JSON.parse(JSON.stringify(tabs.value))
  const tabsArray: NavItemsType = []

  for (const [tabKey, tabValue] of Object.entries(tempTabs)) {
    const hasShow = Object.prototype.hasOwnProperty.call(tabValue, 'show')
    if (!hasShow && !tabValue.items) {
      tabsArray.push(tabValue)
      continue
    }
    if (hasShow) {
      if (tabValue.show && !tabValue.show()) {
        delete tempTabs[tabKey]
        continue
      }
    }
    tabsArray.push(tempTabs[tabKey])
  }
  reducedTabs.value = tabsArray
}

function toggleMiniVariant() {
  navStore.toggleMiniVariant()
}
</script>

<style lang="css" scoped>
.c-drawer {
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 280px;
  border-right: 1px solid var(--primary);
  height: 100%;
}

.c-drawer__mini {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 80px;
  width: 80px;
  height: 100%;
}

.c-drawer--logo {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 1.25rem;
}

.c-drawer--logo-mini {
  padding: 0 0.25rem;
}

.c-drawer--logo:hover {
  opacity: 0.55;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.c-drawer__nav {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 50%,
    rgba(255, 227, 0, 0.2) 100%
  );
}

.c-drawer--logo-main {
  background: linear-gradient(
    180deg,
    rgba(255, 227, 0, 0.2) 0%,
    rgba(0, 0, 0, 1) 50%
  );
}

.c-drawer--company-logo {
  border-top: 2px solid rgba(227, 0, 117, 0.2);
  background: linear-gradient(
    180deg,
    rgba(227, 0, 117, 0.2) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(227, 0, 117, 0.2) 100%
  );
}

:deep(.v-navigation-drawer__content) {
  border-right: 1px solid var(--primary);
}

.c-toggle-drawer-mobile-btn {
  position: fixed;
  right: 0;
  top: 20%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  z-index: 9;
}
</style>
