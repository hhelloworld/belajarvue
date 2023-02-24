<template>
  <v-app class="bg-blue-grey-lighten-5"> 
    <v-card style="height: 100%; max-height: 1000;" class="my-7 mx-8 py-5 " elevation="0" >
      <v-layout style="height: 100%;" class="mx-6">
        <v-navigation-drawer id="app-drawer" style="height: 100%;" v-model="drawer" :rail="rail" floating @click="rail = false">
          <div>
            <v-list-item class="mt-1 pb-2" :prepend-avatar="getImageInbox1()" nav>
              <template v-slot:append>
                <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
              </template>
            </v-list-item>
            <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-email-outline" title="Surat Masuk" value="inbox"></v-list-item>
            <v-list-item prepend-icon="mdi-message-outline" title="Pesan" value="message"></v-list-item>
            <v-list-item prepend-icon="mdi-email-edit-outline" title="Draf" value="draf"></v-list-item>
            <v-list-item prepend-icon="mdi-calendar-blank-outline" title="Kalender dan Peta" value="calendarMap"></v-list-item>
            <v-list-item prepend-icon="mdi-email-outline" title="Surat Terkirim" value="sent"></v-list-item>
            <v-divider class="my-6" :thickness="2"></v-divider>
            <v-list-item prepend-icon="mdi-account" title="Profil" value="user"></v-list-item>
            <v-list-item prepend-icon="mdi-apps" title="Aplikasi" value="apps"></v-list-item>
            <v-spacer></v-spacer>
            <v-list-item prepend-icon="mdi-exit-to-app" title="Keluar" value="logout"></v-list-item>

          </v-list>
        </div>
        </v-navigation-drawer>
        <v-main style="height: 100%">
          <v-app-bar :elevation="0" class="px-lg-5 px-sm-2 align-center bg-transparent" >
            <div class="d-flex align-center" style="max-width: 600px; width: 100%;">
              <v-text-field class="justify-start align-center rounded-sm" style="max-width: 400px; width: 100%;" density="compact" label="Cari 'Sambo' " append-inner-icon="mdi-magnify" hide-details single-line @click:append-inner="onClick">
              </v-text-field>
              <svg-icon class="d-flex justify-center align-center ml-5" type="mdi" :path="filterIco"></svg-icon>
            </div>
            <v-spacer></v-spacer>
            <div class="d-flex align-center " style="max-width: 600px; width: 100;">
              <svg-icon class="mr-5 ml-7 d-flex justify-center" type="mdi" :path="refreshIco"></svg-icon>
              <svg-icon class="mr-5 d-flex justify-center" type="mdi" :path="sortIco"></svg-icon>
              <svg-icon class="mr-7 d-flex justify-center" type="mdi" :path="tunjukIco"></svg-icon>
              <v-pagination :length="2" size="small"></v-pagination>
            </div>

          </v-app-bar>
        </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script>
  import SvgIcon from '@jamescoyle/vue-icon'
  import '@jamescoyle/svg-icon'
  import { mdiFilterVariant } from '@mdi/js';
  import { mdiPaperclip  } from '@mdi/js';
  import { mdiRefresh   } from '@mdi/js';
  import { mdiSortVariant } from '@mdi/js';



export default {
    name: 'BDAinbox',
    Components: {
      SvgIcon
    },
    data(){
      return{
        drawer: true,
        items: [
          { title: 'Surat Masuk', icon: 'mdi-email-outline' },
          { title: 'Draf', icon: 'mdi-noteEdit-outline' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
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
      getImageInbox3() {
        return require("../assets/telkom2.png");
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
.v-input.v-text-field >>> .v-field__outline:before {
  border: hidden !important;
}

.v-input.v-text-field >>> .v-field__outline:after {
  border: none !important;
}
.v-input.v-text-field >>> .v-field__overlay {
  border-radius: 9px !important;
}

.v-pagination. >>> .v-btn__overlay >>> .v-btn:before{
  width: 24px;
  height: 24px;
}
</style>
