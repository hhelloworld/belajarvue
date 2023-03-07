<template >
  <router-view v-show="pinSurat"/>

  <v-list v-for="item in suratMasuk" :key="item" class="d-flex align-center justify-start fill-width w-100 overflow-hidden" style="height: 56px; max-width: 5000px; width: auto;">

    <v-hover>

      <template v-slot:default="{ isHovering, props }">
        <v-card @mouseover="(buttonPesan = item) & (buttonArsip = item) & (buttonPin = item)" @mouseleave="(buttonPesan = null) & (buttonArsip = null) & (buttonPin = null)" v-bind="props" :color="isHovering ? 'blue-grey-lighten-5' : undefined" elevation="0" class="px-sm-0 ma-sm-0 d-flex align-center rounded-lg justify-center" style="height: 48px;" link :to="item.link"> 

          <v-card-item v-model="item.namaPengirim" class="font-weight-medium text-body-2"> {{ item.namaPengirim }}</v-card-item>  
          <v-card-item v-model="item.instansiPengirim" class="font-weight-medium text-body-2"> {{ item.instansiPengirim }}</v-card-item>  

          <v-card-item v-model="item.labelSurat"> 
            <v-tooltip color="primary" location="right">
              <template v-slot:activator="{ props }">
                <v-chip variant="elevated" elevation="0" 
                :color="item.labelSurat.includes('Audiensi') 
                || item.labelSurat.includes('Menghadiri/Meresmikan/Meluncurkan/Membuka Acara') 
                || item.labelSurat.includes('Pidato/Kata Sambutan/Key Note Speech')
                || item.labelSurat.includes('Keterangan Pemerintah (Sidang bersama DPR RI/DPD RI atau Sidang RAPBN)')
                || item.labelSurat.includes('Keterangan Pemerintah (Sidang RAPBN)')
                || item.labelSurat.includes('Kata Pengantar Buku')
                || item.labelSurat.includes('Bantuan Keuangan/Pembangunan Gedung/Infrastruktur/Lain-lain')
                || item.labelSurat.includes('Pembahasan Substansi Pada Sidang Kabinet/ Rapat Terbatas/ Penyelesaian Masalah')
                || item.labelSurat.includes('Pengangkatan Seseorang Pada Jabatan Tertentu')
                || item.labelSurat.includes('Penetapan Hari Besar/ Tanggal Peringatan Event Tertentu')
                || item.labelSurat.includes('Piala Presiden/Piala Bergilir')? 'blue-darken-2' : 'teal'" 

                v-bind="props" style="max-width: 200px;" size="small"><div class="text-truncate font-weight-medium text-caption px-2">{{item.labelSurat }}</div></v-chip>                
              </template>
              <span >{{item.labelSurat }}</span>
             </v-tooltip>
          </v-card-item>
          <v-card-text v-model="item.isiSurat" class="text-truncate align-center td2 text-body-2 font-weight-medium over overflow-x-hidden">{{ item.isiSurat }}</v-card-text>

          <v-card-item class="px-0" v-show="buttonPesan === item">
            <v-btn color="blue"  class="px-0 justify-center" variant="plain" v-on:click.prevent="isHovering">
                <svg-icon style="width: 18px; height: 18px;" type="mdi" :path="buttonPesanIco"></svg-icon>
            </v-btn>
          </v-card-item>

          <v-card-item class="px-0" v-show="buttonArsip === item">
            <v-btn color="blue" class="px-0" variant="plain" v-on:click.prevent="isHovering">
                <svg-icon style="width: 18px; height: 18px;" type="mdi" :path="buttonArsipIco"></svg-icon>
            </v-btn>
          </v-card-item>

          <v-card-item v-model="item.pinLink" class="px-0" v-show="buttonPin === item">
            <v-btn color="orange-darken-1" style="max-width: 26px" class="px-0 justify-center" variant="plain" link :to="item.pinLink" 
            @click.stop.prevent="(pinSurat = !pinSurat) & (itemPin(item.namaPengirim))">
                <svg-icon style="width: 18px; height: 18px;" type="mdi" :path="buttonPinIco"></svg-icon>
            </v-btn> 
          </v-card-item>


          <v-card-item v-show="suratMasukWaktu" class=" font-weight-medium text-body-2"> {{item.waktu}} </v-card-item>


          



        </v-card>
      </template>
    </v-hover>
  </v-list>

</template>

<script type="text/javascript">

  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiSendOutline } from '@mdi/js';
  import { mdiPin  } from '@mdi/js';
  import { mdiPlaylistPlus } from '@mdi/js';

  export default {
    name: 'BDAinbox',
    components: {
      SvgIcon
    },


    data(){
      return{
        buttonPesanIco: mdiSendOutline,
        buttonArsipIco: mdiPlaylistPlus,
        buttonPinIco: mdiPin,

        suratMasukWaktu: true,
        buttonPesan: null,
        buttonArsip: null,
        buttonPin: null,

        namaPengirimPin: null,
        instansiPengirimPin: null,
        labelSuratPin: null,
        isiSuratPin: null,
        waktuPin: null,
        pinSurat: false,
        pinSuratMasuk: null,

      }
    },
    methods: {
      
      itemPin(namaPengirim){
        this.$store.commit("pinSurat", namaPengirim)
        this.$router.push({
            path: '/pinSurat'
        })
    }

      
    },

    computed:{
      suratMasuk(){
        return this.$store.state.suratMasuk;
      }
    },

    
  }

</script>



<style scoped>


table {
  width: 100%;
  max-height: 300px !important;
  
}


.td {
  max-width: 200px;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  overflow: hidden !important;
}

.td2{
  display: block;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis !important;

}
.td2 :after{
  white-space: nowrap;
  text-overflow: ellipsis !important;
  max-width: 3000px;
  width: 100%;

}
.chipPanjang {
    display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100px;
}
.tip {
  
  display: block !important;
  background-color: #E5E5E5;
}


</style>
