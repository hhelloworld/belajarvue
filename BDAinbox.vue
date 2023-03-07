<template>
  <v-app class="bg-blue-grey-lighten-5"> 
    <v-card style="height: 100%; max-height: 1000;" class="my-7 mx-8 py-5 " elevation="0" >
      <v-layout style="height: 100%;" class="mx-6">
        <v-navigation-drawer id="app-drawer" style="height: 100%;" v-model="drawer" :rail="rail" floating @click="rail = false">
            <v-list-item class="mt-1 pb-2" :prepend-avatar="getImageInbox1()" nav>
              <template v-slot:append>
                <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
              </template>
            </v-list-item>
            <v-list density="compact" nav>
              <v-list-item v-for="(item, i) in items" :key="i" :value="item" active-color="info" :to="item.link" link >
                <template v-slot:prepend>
                  <v-icon :icon="item.icon" style="width: 22px; height: 22px;"></v-icon>
                </template>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item>
            </v-list>

            <v-list density="compact" nav>
              <v-list-item v-for="(item, i) in items2" :key="i" :value="item" active-color="info" :to="item.link" link >
                <template v-slot:prepend>
                  <v-icon :icon="item.icon" style="width: 22px; height: 22px;"></v-icon>
                </template>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item>
            </v-list>


            
        </v-navigation-drawer>

        <v-divider vertical height="24"></v-divider>

         <v-main>
          <v-app-bar :elevation="0" class="pl-lg-6 px-sm-0 bg-transparent">
            <div class="d-flex align-center" style="max-width: 700px; width: 100%;">
              <v-text-field class="justify-start align-center rounded-sm" style="max-width: 700px; width: 100%;" density="compact" label="Cari 'Sambo' " append-inner-icon="mdi-magnify" hide-details single-line @click:append-inner="onClick">
              </v-text-field>
              <svg-icon class="d-flex justify-center align-center ml-5" type="mdi" :path="filterIco" style="width: 22px; height: 22px;"></svg-icon>
            </div>
            <v-spacer></v-spacer>

            <div class="d-flex align-center" style="max-width: 700px; width: 100;">
              <svg-icon class="mr-5 ml-7 d-flex justify-center" type="mdi" :path="refreshIco" style="width: 22px; height: 22px;"></svg-icon>
              <svg-icon class="mr-5 d-flex justify-center" type="mdi" :path="sortIco" style="width: 22px; height: 22px;"></svg-icon>
              <svg-icon class="mr-7 d-flex justify-center" type="mdi" :path="tunjukIco" style="width: 22px; height: 22px;"></svg-icon>
              <v-pagination :length="2" size="small"></v-pagination>
            </div>

          </v-app-bar>
          <v-container class="pl-lg-6 pr-1 px-sm-0 mx-sm-0 pt-1" style="max-width: 5000px; width: auto;">
            <router-view/>
          </v-container>
        </v-main>

      </v-layout>
    </v-card>
  </v-app>
</template>

<script>
  import SvgIcon from '@jamescoyle/vue-icon'
  import { mdiFilterVariant } from '@mdi/js';
  import { mdiPaperclip  } from '@mdi/js';
  import { mdiRefresh   } from '@mdi/js';
  import { mdiSortVariant } from '@mdi/js';



export default {
    name: 'BDAinbox',
    components: {
      SvgIcon
    },
    data(){
      return{
        drawer: true,
        items: [
          { title: 'Surat Masuk', icon: 'mdi-email-outline', link: "/suratMasuk" },
          { title: 'Pesan', icon: 'mdi-message-outline', link: "/pesanMasuk" },
          { title: 'Draf', icon: 'mdi-email-edit-outline', link: "/drafSurat" },
          { title: 'Kalender', icon: 'mdi-calendar-blank-outline', link: "/kalenderPeta" },
          { title: 'Surat Terkirim', icon: 'mdi-email-outline', link: "/suratTerkirim" },
        ],

        items2: [
          { title: 'Profil Saya', icon: 'mdi-account' },
          { title: 'Aplikasi', icon: 'mdi-apps' },
          { title: 'Keluar', icon: 'mdi-exit-to-app', link: "/login" },
        ],


        rail: true,
        filterIco: mdiFilterVariant,
        tunjukIco: mdiPaperclip ,
        refreshIco: mdiRefresh ,
        sortIco: mdiSortVariant,
        loaded: false,
        loading: false,

      }
    },
    methods: {
      getImageInbox1() {
        return require("../assets/s1.png");
      },
      getImageInbox2() {
        return require("../assets/bda.png");
      },
      
      onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    }
};
</script>

<style scoped>
.v-input.v-text-field :deep() .v-field__outline:before {
  border: hidden !important;
}

.v-input.v-text-field :deep() .v-field__outline:after {
  border: none !important;
}
.v-input.v-text-field :deep() .v-field__overlay {
  border-radius: 9px !important;
}

.v-pagination. :deep() .v-btn__overlay :deep() .v-btn:before{
  width: 24px;
  height: 24px;
}
.v-main {
}
</style>
