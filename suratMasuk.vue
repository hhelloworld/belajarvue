<template>
  
  <v-table class="d-flex pr-3 table mt-2" cellspacing="3">
    <tbody style="height: 52px;">
      <tr
        v-for="item in suratMasuk"
        :key="item.name"
      >
        <td class="pl-1"><svg-icon class="d-flex justify-center" type="mdi" :path="kelasSurat" style="width: 22px; height: 22px;"></svg-icon></td>
        <td class="td font-weight-medium text-subtitle-2">{{ item.namaPengirim }}</td>
        <td><v-chip style="max-width: 200px;" size="small"><div class="font-weight-bold text-caption px-2">{{ item.labelSurat }}</div></v-chip></td>
        <td ><a class= "td2 text-body-2 font-weight-medium over overflow-x-hidden" style="height: 52px;">{{ item.isiSurat }}</a></td>
        <td class="td font-weight-medium text-body-2"> {{ item.waktu }}</td>

      </tr>
    </tbody>
  </v-table>



</template>

<script type="text/javascript">

  import SvgIcon from '@jamescoyle/vue-icon';

  import { mdiNumeric1BoxOutline } from '@mdi/js';

  export default {
    name: 'BDAinbox',
    components: {
      SvgIcon
    },
    data(){
      return{
        kelasSurat: mdiNumeric1BoxOutline,
        suratMasuk: [
          { namaPengirim: "Teja Suhendra Bael", instansiPengirim: 'Surat Masuk',   labelSurat: 'Kata Pengantar Buku', isiSurat:'Dalam rangka mewujudkan impian Indonesia yang lebih melayani melalui program Gerakan Indonesia Melayani sebagai salah satu wujud nyata Gerakan Nasional Revolusi Mental, Asosiasi Service Quality Indonesia (ASQI) akan menyelenggarakan acara Hari Indonesia Melayani yang akan dilaksanakan pada: Hari & Tanggal : Sabtu, 22 Januari 2022 Waktu : Pukul 09.00 - 14.00 WIB (Jadwal Acara Pada Proposal) Lokasi : Online via Zoom Meeting Acara : Acara Puncak Hari Indonesia Melayani Sehubungan dengan itu kami mengundang dan mengharapkan kesediaan Bapak Presiden Ir. H. Joko Widodo untuk memberikan keynote speech pada acara Hari Indonesia Melayani tersebut secara taping (rekaman suara)', waktu:'14:05', link: "/suratMasuk" },
          { namaPengirim: "Teja Suhendra Bael", instansiPengirim: 'Surat Masuk',   labelSurat: 'Laporan Kegiatan/Perjalanan Dinas Luar Negeri/Capaian Periodik/ Laporan Tahunan Kelembagaan', isiSurat:'Sekretariat Negara mempunyai tugas menyelenggarakan dukungan teknis dan administrasi serta analisis urusan pemerintahan di bidang kesekretariatan negara untuk membantu Presiden dan Wakil Presiden dalam menyelenggarakan pemerintahan negara.', waktu:'14:05', link: "/suratMasuk" },
          { namaPengirim: "Sambo", instansiPengirim: 'Surat Masuk',   labelSurat: 'Permohonan', isiSurat:'Untuk memperbaiki proses rekruitmen anggota Polri agar semakin berkualitas, Polri telah melakukan perubahan substansi dan kultur yang diwujudkan dalam akselerasi transformasi di tubuh Polri, utamanya pada proses penerimaan anggota Polri dengan mengacu pada prinsip dasar penerimaan yaitu “BETAH” yang merupakan kepanjangan dari Bersih, Transparan, Akuntabel dan Humanis.', waktu:'14:05', link: "/suratMasuk" },


           


          ]
      }
    }
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
  max-height: 1.5em;
  overflow: hidden;
}
.td2 :after{
  white-space: nowrap;
  text-overflow: ellipsis;

}
.chipPanjang {
  white-space: normal;
  display: block text;
  text-overflow: ellipsis;


}

</style>