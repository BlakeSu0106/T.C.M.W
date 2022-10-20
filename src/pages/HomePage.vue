<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>會員中心</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer hide v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header>會員中心</q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import userManager from "src/auth/authService.js";
const linksList = [
  {
    title: "會員資料",
    caption: "",
    icon: "school",
    link: "/telligent-admin-template",
  },
];

export default defineComponent({
  name: "HomePage",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    function signOut() {
      userManager.signoutRedirect();
    }
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      signOut,
    };
  },
});
</script>
