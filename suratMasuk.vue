<template >
  
	<v-row v-for="item in suratMasuk" :key="item.namaPengirim" class="mx-2 d-flex flex-colum align-center">
		<v-col >
			<v-card hover elevation="0" class="pa-1 d-flex flex-colum align-center" height="52" style="height: 52px; width: 100%; max-width:3000px;"> 

				<v-card-item class="font-weight-medium text-body-2"> {{ item.namaPengirim }}</v-card-item>  
				<v-card-item> 
					<v-tooltip bottom lazy>
          	<template v-slot:activator="{ props }">
							<v-chip :style="colorPicker(item)" v-bind="props" style="max-width: 200px;" size="small"><div class=" text-truncate font-weight-bold text-caption px-2">{{item.labelSurat }}</div></v-chip>                
						</template>
            <span>{{item.labelSurat }}</span>
           </v-tooltip>
				</v-card-item>
				<v-card-text class="text-truncate align-center td2 text-body-2 font-weight-medium over overflow-x-hidden" style="height: 52px;">{{ item.isiSurat }}</v-card-text>
				<v-card-item class=" font-weight-medium text-body-2"> {{ item.waktu	 }} </v-card-item>

			</v-card>
		</v-col>
	</v-row>
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
          { namaPengirim: "Joko Widodo", instansiPengirim: 'Surat Masuk',   labelSurat: 'Laporan Kegiatan/Perjalanan Dinas Luar Negeri/Capaian Periodik/ Laporan Tahunan Kelembagaan', isiSurat:'Sekretariat Negara mempunyai tugas menyelenggarakan dukungan teknis dan administrasi serta analisis urusan pemerintahan di bidang kesekretariatan negara untuk membantu Presiden dan Wakil Presiden dalam menyelenggarakan pemerintahan negara.', waktu:'14:05', link: "/suratMasuk" },
          { namaPengirim: "Ferdy Sambo", instansiPengirim: 'Surat Masuk',   labelSurat: 'Laporan Rahasia TNI/Polri, BIN', isiSurat:'Untuk memperbaiki proses rekruitmen anggota Polri agar semakin berkualitas, Polri telah melakukan perubahan substansi dan kultur yang diwujudkan dalam akselerasi transformasi di tubuh Polri, utamanya pada proses penerimaan anggota Polri dengan mengacu pada prinsip dasar penerimaan yaitu “BETAH” yang merupakan kepanjangan dari Bersih, Transparan, Akuntabel dan Humanis.', waktu:'14:05', link: "/suratMasuk" },
          ],

      }
    },
    methods: {
    	colorPicker() {
    		return(item) => {
    			if (suratMasuk.labelSurat.includes ('Audiensi','Menghadiri/Meresmikan/Meluncurkan/Membuka Acara, Pidato/Kata Sambutan/Key Note Speech, Penyerahan (Sertifikat/Penghargaan/Kompensasi)','Keterangan Pemerintah (Sidang bersama DPR RI/DPD RI), Keterangan Pemerintah (Sidang RAPBN)','Kata Pengantar Buku','Bantuan Keuangan/Pembangunan Gedung/Infrastruktur/Lain-lain','Pembahasan Substansi Pada Sidang Kabinet/ Rapat Terbatas/ Penyelesaian Masalah','Pengangkatan Seseorang Pada Jabatan Tertentu','Penetapan Hari Besar/ Tanggal Peringatan Event Tertentu','Piala Presiden/Piala Bergilir')) {
    			this.isColor = 'blue-darken-4';
    			} else if(suratMasuk.labelSurat.includes('Laporan Rahasia TNI/Polri, BIN', 'Penyampaian Buku/Katalog/Rekomendasi Kebijakan/Proyek Strategis Nasional', 'Laporan Kegiatan/Perjalanan Dinas Luar Negeri/Capaian Periodik/ Laporan Tahunan Kelembagaan', 'Berita Resmi Statistik', 'Saran Pengenaan Sanksi Atas Tidak Dilaksanakannya Rekomendasi (ORI dan KOMNAS HAM)')){
    				
    			this.suratPenyampaianColor = true;

    		}

    		}
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
  text-overflow: ellipsis !important;

}
.td2 :after{
  white-space: nowrap;
  text-overflow: ellipsis !important;

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
