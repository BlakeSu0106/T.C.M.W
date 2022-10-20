<template>
  <div class="q-pa-md row items-center justify-center q-gutter-md min-width">
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg"></q-img>

      <q-card-section>
        <!-- <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        ></q-btn>-->

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">金卡會員</div>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
          </q-avatar>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon></q-icon>Morgan
          </div>
        </div>

        <q-rating v-model="stars" readonly :max="5" size="32px"></q-rating>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1"></div>
        <div class="full-width row justify-around items-center content-center">
          <div>
            <q-btn class="row mx-2" round outline color="amber" icon="discount"></q-btn>
            <span>折價券</span>
          </div>
          <div>
            <q-btn class="row" round outline color="secondary" icon="history"></q-btn>
            <span>瀏覽紀錄</span>
          </div>
          <div>
            <q-btn class="row" round outline color="primary" icon="email"></q-btn>個人訊息
          </div>
        </div>
      </q-card-section>

      <q-separator></q-separator>

      <q-card-actions>
        <q-btn flat round icon="edit"></q-btn>
        <q-btn flat color="primary">修改個人資料</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "UserProfile",

  setup() {
    return {
      stars: ref(4),
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
});
</script>
<style scoped>
.my-card {
  min-width: 400px;
}
</style>