<template>
  <v-app class="hero"> 
    <v-main class="d-flex justify-center align-center">
      <container class="d-flex justify-sm-center" fluid style="margin: 0px; padding: 0px; max-width: 1400px; width: 100%; max-height: 600px; height: 100%;">

          <v-card  class="px-9 py-12 rounded-card" style="height: 100%; max-width: 450px; width: 100%" tile elevation="0" rounded-0>

            <v-progress-linear :active="loadingLogin" :indeterminate="loadingLogin" absolute color="yellow-darken-2"></v-progress-linear>

            <div class="d-flex flex-row justify-start mt-16">
              <v-img class="mr-3" :src="getImage()" max-width="40"></v-img>
              <v-img :src="getImage2()" max-width="40" ></v-img>
            </div>

            <div class="d-flex flex-row justify-space-between align-center mt-6 px-0">
              <v-card-title class=" px-0 py-0 font-weight-bold"> Hai, Silahkan Login </v-card-title >
            </div>

            <v-form ref="form" class="mt-5">
              <v-card-text class= "px-0 py-0">
                <v-text-field
                ref="email"
                v-model="user.email"
                :rules="[emailRules, clickRules].flat()" 
                variant="plain" 
                label="Email"  
                :error-messages="errorMessages"
                required 
                placeholder="Ketik Email" />

                <v-text-field
                class="mt-2"
                ref="password"
                :rules="passRules" 
                variant="plain" 
                label="Sandi"
                :error-messages="errorMessages"  
                :type="showPassword ? 'text' : 'password'"  
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="handleClick"
                v-model="user.password"
                required 
                placeholder="Ketik Sandi"/>

              </v-card-text>

              <div class="d-flex flex-row align-center justify-space-between mt-2 ">
                <a class="font-weight-bold text-decoration-none d-flex justify-center align-center text-body-2 ma-0" href="url"> Lupa Sandi?</a> 
                <v-card-actions class="px-0 d-flex flex-colum">
                  <v-btn 
                  class="px-7" 
                  block rounded="pill" 
                  color="info" 
                  variant="flat" 
                  size="small" 
                  @click="submit" 
                  >Masuk</v-btn>
                </v-card-actions>
              </div>
            </v-form>

            <div class="d-flex flex-row align-center justify-center mt-16">
              <v-card-actions class="d-flex justify-center text-body-2 pr-1 py-0"> Belum punya Akun? </v-card-actions>
              <a @click="syaratdankondisi = !syaratdankondisi" class="ma-0 font-weight-bold text-decoration-none d-flex justify-center align-center text-body-2" href="javascript:void(0)"> Klik Daftar</a>
            </div>
          </v-card>
          <v-carousel style=" height: 100%; width: 100%" class="d-none d-md-block" cover cycle hide-delimiters show-arrows="hover" >
            <v-carousel-item
            
              v-for="(item,i) in items"
              :key="i"
              :src="item.src" cover>  
            </v-carousel-item>
          </v-carousel>
      </container>
      <v-overlay v-model="syaratdankondisi" persistent contained class="align-center justify-center">
        <v-container>
          <v-card class="px-9 py-12 rounded-card align-center justify-center align-end overflow-y-auto scroll-y" height="820" width="800" tile elevation="0" rounded-0>
            <div class="d-flex flex-column overflow-y-auto">
              <div class="d-flex flex-row justify-start mt-3">
                <v-img class="mr-3" :src="getImage()" max-width="40"></v-img>
                <v-img :src="getImage2()" max-width="40" ></v-img>
              </div>

              <div class="d-flex flex-row justify-space-between align-center mt-6 px-0">
                <v-card-title class=" px-0 py-0 font-weight-bold text-h5"> Syarat dan Ketentuan Dashboard Setneg Satria Dewa </v-card-title >
              </div>

              <div class=""></div>
              <div class="d-flex flex-column align-start">
                <v-card-text class="align-self-center mx-0 py-3 px-0 text-subtitle-2">Syarat dan Ketentuan yang ditetapkan di bawah ini mengatur pemakaian Tanda Tangan atas penggunaan Dashboard Setneg Satria Dewa, dengan mendaftar, membuat akun dan/atau menggunakan Dashboard Setneg Satria Dewa, maka pengguna dianggap telah membaca, memahami dan menyetujui isi dalam Syarat dan Ketentuan ini.</v-card-text>

                <v-card-title class=" px-0 py-0 mt-4 font-weight-bold"> Pengguna Terdaftar </v-card-title >
                <div class=" d-flex ml-4 " v-html="penggunaTerdaftar"></div>
                <v-card-title class=" px-0 py-0 mt-4 font-weight-bold"> Peraturan Pengguna Terdaftar </v-card-title >
                <div class=" d-flex ml-4 " v-html="peraturanPenggunaTerdaftar"></div>
                <v-card-title class=" px-0 py-0 mt-4 font-weight-bold"> Pengelolaan Resiko </v-card-title >
                <p class="text-subtitle-2 px-0 py-0 ma-0">Pengguna memahami dan menyetujui bahwa Pengguna secara sadar memberikan persetujuan kepada Dashboard Setneg Satria Dewa, untuk melakukan hal-hal sebagai berikut:</p>
                <div class=" d-flex ml-4 " v-html="pengelolaanResiko"></div>
                <v-card-text class="text-subtitle-2 pa-0 mt-4">Dalam hal ditemukan oleh Pihak Setneg dan/atau afiliasi lain dari Dashboard Setneg Satria Dewa bahwa Data yang diajukan Pendaftar untuk menggunakan Layanan Dashboard Setneg Satria Dewa adalah tidak akurat, palsu dan/atau dipalsukan oleh Pengguna, maka Pihak Setneg dan/atau afiliasi lain dari Dashboard Setneg Satria Dewa memiliki hak untuk:</v-card-text>
                <div class=" d-flex ml-4 " v-html="hakUntuk"></div>

                <v-card-text class="text-subtitle-2 px-0 py-0 ma-0">Tanpa mengesampingkan alasan di atas, Pengguna memahami dan menyetujui bahwa Pihak Setneg Satria Dewa dan/atau afiliasi lain dari Dashboard Setneg Satria Dewa memiliki hak dan kewenangan penuh untuk menolak maupun menghentikan segala Aktivitas Layanan Register, tanpa memerlukan pemberitahuan dan/atau persetujuan terlebih dahulu.</v-card-text>
                <v-card-title class=" px-0 py-0 mt-4 font-weight-bold"> Registrasi Akun dan Tanda Tangan Elektronik </v-card-title >
                <div class=" d-flex ml-4 " v-html="registrasiDanTTD"></div>
                <v-card-title class=" px-0 py-0 mt-4 font-weight-bold"> Ketentuan Lain </v-card-title >
                <v-card-text class="align-self-center mx-0 pa-0 text-subtitle-2">Segala hal yang belum dan/atau tidak diatur dalam Syarat dan Ketentuan Aktivasi Akun Setneg Satria Dewa ini akan sepenuhnya merujuk pada Syarat dan Ketentuan Penggunaan Dashboard Setneg Satria Dewa secara umum.</v-card-text>     
                <div class=" d-flex ml-4 " v-html="ketentuanLain"></div>

              </div>
              <div class="d-flex flex-column pt-6">
               <v-card-actions class="d-flex flex-column pa-0 ma-0">
                <v-btn
                :loading="btnLoad[1]"
                :disabled="btnLoad[1]"
                class="pa-0 ma-0" 
                block rounded="pill" 
                color="info" 
                variant="flat" 
                @click="loadBtn(1)">Saya Setuju dan Daftar
                </v-btn>
                <v-btn class="mt-3" variant="plain" @click="syaratdankondisi = false" >Sudah punya Akun? Login
                </v-btn> 
                
                
              </v-card-actions>  

              </div>
              

            </div>    
          </v-card>
        </v-container> 
      </v-overlay>

      <v-overlay v-model="daftarMenu" persistent contained class="align-center justify-center">
        <v-container>
          <!-- <v-progress-linear :active="loadingLogin" :indeterminate="loadingLogin" absolute color="yellow-darken-2"></v-progress-linear> -->
          <v-card fluid class="px-9 py-12 rounded-card overflow-y-auto scroll-y" height="900" width="1000" tile elevation="0" rounded-0>
            <v-row class="d-flex flex-column overflow-y-auto pa-0 ma-0" height="600">

              <v-col align-self="start" class="pa-0 ma-0">
                <div class="d-flex flex-row justify-start mt-3">
                  <v-img class="mr-3" :src="getImage()" max-width="40"></v-img>
                  <v-img :src="getImage2()" max-width="40" ></v-img>
                </div>
              </v-col> 

              <v-col align-self="center" class=" mt-6 mb-2 pa-0">
                <v-card-title class=" pa-0 mb-3 font-weight-bold text-h5"> Pendaftaran </v-card-title >
                <v-card elevation="0" class="ma-0" height="610">
                  <v-row class="pa-0 ma-0">
                    <v-col cols="2" class="pa-0 ml-0">
                      <v-tabs v-model="tab" direction="vertical" width="450">
                        <v-tab value="unggahFoto" class="text-body-1" >
                          Unggah Foto 
                        </v-tab>
                        <v-tab value="dataDiri" class="text-body-1">
                          Data Diri
                        </v-tab>
                        <v-tab :disabled="!tabDataDiri" value="dataInstansi" class="text-body-1">
                          Data Instansi
                        </v-tab>
                      </v-tabs>
                    </v-col>
                    <v-divider vertical class="px-2"></v-divider>
                    <v-col class= "pa-0 ml-3">

                      <v-window v-model="tab">
                        <v-window-item value="unggahFoto">
                          <v-card flat>
                            <v-card-text class="mx-2 mb-2 mt-0 pa-0">
                              <div class="d-flex flex-row align-center justify-space-between">
                                <div class="d-flex flex-row align-center justify-center">
                                  <p class="text-h6 font-weight-bold ma-0">Unggah Foto </p>
                                  <v-btn variant="plain" size="x-small" class="pa-0 align-center justify-center">
                                    <svg-icon class="align-center justify-center" height="20" width="20" type="mdi" :path="path">
                                    </svg-icon>
                                    <v-tooltip max-width="300" location="end" activator="parent"> Unggah foto berikut untuk memastikan bahwa anda bukan robot
                                    </v-tooltip>
                                  </v-btn>
                                </div>
                                <div class="d-flex flex-row">
                                  <v-btn variant="text" size="small" disabled> Sebelumnya</v-btn>
                                  <v-btn variant="text" size="small" @click="changeTab1"> Selanjutnya</v-btn>
                                </div>
                              </div>
                              <div class="d-flex flex-row align-center justify-space-between mt-4 ">
                                <label @change="choosFile" refs="fileUpload" class="font-weight-medium text-decoration-none d-flex justify-center align-center text-body-2 ma-0"> Upload Kartu Tanda Penduduk</label> 
                                <v-card-actions class="px-0 d-flex flex-colum">
                                  <input id="fileUpload" type="file" hidden>
                                  <v-btn 
                                  class="px-5" 
                                  block rounded="pill" 
                                  color="info" 
                                  variant="flat" 
                                  size="x-small" 
                                  @click="uploadFoto()"
                                  >Pilih File</v-btn>
                                </v-card-actions>
                              </div>

                              <div class="d-flex flex-row align-center justify-space-between mt-2 ">
                                <p class="font-weight-medium text-decoration-none d-flex justify-center align-center text-body-2 ma-0"> Upload Kartu Pegawai</p> 
                                <v-card-actions class="px-0 d-flex flex-colum">
                                  <v-btn 
                                  class="px-5" 
                                  block rounded="pill" 
                                  color="info" 
                                  variant="flat" 
                                  size="x-small" 

                                  >Pilih File</v-btn>
                                </v-card-actions>
                              </div>

                              <div class="d-flex flex-row align-center justify-space-between mt-2 ">
                                <p class="font-weight-medium text-decoration-none d-flex justify-center align-center text-body-2 ma-0"> Upload Foto Wajah</p> 
                                <v-card-actions class="px-0 d-flex flex-colum">
                                  <v-btn 
                                  class="px-5" 
                                  block rounded="pill" 
                                  color="info" 
                                  variant="flat" 
                                  size="x-small" 

                                  >Pilih File</v-btn>
                                </v-card-actions>
                              </div>
                            </v-card-text>
                          </v-card>
                        </v-window-item>

                        <v-window-item value="dataDiri">
                          <v-card flat>
                            <v-form v-model="tabDataDiri" ref="formRegistrasi">
                              <v-card-text class="mx-2 mb-2 mt-0 pa-0">
                                <div class="d-flex flex-row align-center justify-space-between">
                                  <div class="d-flex flex-row align-center justify-center">
                                    <p class="text-h6 font-weight-bold ma-0">Data Diri </p>
                                    <v-btn variant="plain" size="x-small" class="pa-0" >
                                      <svg-icon class="align-center justify-center" height="20" width="20" type="mdi" :path="path">
                                      </svg-icon>
                                      <v-tooltip max-width="300" location="end" activator="parent"> Lengkapi data diri untuk memastikan anda bukan robot
                                      </v-tooltip>
                                    </v-btn>
                                  </div>
                                  <div class="d-flex flex-row">
                                    <v-btn variant="text" size="small" @click="changeTab3"> Sebelumnya</v-btn>
                                    <v-btn variant="text" size="small" @click="submitRegistrasi2(), changeTab2()" :disabled="!tabDataDiri"> Selanjutnya</v-btn>
                                  </div>
                                </div>
                                

                                <div class="my-2">
                                  <v-text-field ref='namaReg' v-model="registerUser.namaReg" :error-messages="errorMessages" :rules="[wajibNama, emptyRules].flat()" label="Nama" variant="underlined" dense required></v-text-field>

                                  <v-text-field ref='emailReg' v-model="registerUser.emailReg" :error-messages="errorMessages" :rules="[emailRules, clickRules].flat()" label="Email" variant="underlined" dense required></v-text-field>

                                  <v-text-field ref='passwordReg' v-model="registerUser.passwordReg" :error-messages="errorMessages" :type="showPassword ? 'text' : 'password'" :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append-inner="handleClick" 
                                  :rules="emptyRules" label="Password" variant="underlined" dense required></v-text-field>

                                  <v-text-field ref='telpReg' v-model="registerUser.telpReg" :error-messages="errorMessages" 
                                  :rules="[wajibNomor, emptyRules].flat()" label="Nomor Telepon" variant="underlined" dense required></v-text-field>

                                  <v-text-field ref='ktpReg' v-model="registerUser.ktpReg" :error-messages="errorMessages" 
                                  :rules="[wajibKtp, emptyRules].flat()" label="Nomor Kartu Tanda Penduduk" variant="underlined" dense required></v-text-field>

                                  <v-text-field ref='alamatReg' v-model="registerUser.alamatReg" :error-messages="errorMessages" 
                                  :rules="alamat" label="Alamat" variant="underlined" dense required></v-text-field>

                                  <v-text-field ref='tempatTglLahirReg' v-model="registerUser.tempatTglLahirReg" :error-messages="errorMessages" :rules="tempatTglLahir" label="Tempat dan Tanggal Lahir" variant="underlined" dense required></v-text-field>

                                  <v-text-field ref='wargaNegaraReg' v-model="registerUser.wargaNegaraReg" :error-messages="errorMessages" 
                                  :rules="wargaNegara" label="Warga Negara" variant="underlined" dense required></v-text-field>
                                </div>
                              </v-card-text>
                            </v-form>
                          </v-card>
                        </v-window-item>

                        <v-window-item value="dataInstansi">
                          <v-card flat>
                            <v-form v-model="tabDataInstansi" ref="formRegistrasi">
                              <v-card-text class="mx-2 mb-2 mt-0 pa-0">
                                <div class="d-flex flex-row align-center justify-space-between">
                                 <div class="d-flex flex-row">
                                    <p class="text-h6 font-weight-bold ma-0">Data Instansi </p>
                                    <v-btn variant="plain" size="x-small" class="pa-0" >
                                      <svg-icon class="align-center justify-center" height="20" width="20" type="mdi" :path="path">
                                      </svg-icon>
                                      <v-tooltip max-width="300" location="end" activator="parent"> Lengkapi data Instansi untuk memastikan bahwa anda benar merupakan bagian dari:
                                        <li>Perusahaan</li>
                                        <li>Instansi Negara</li>
                                        <li>Lembaga Resmi, Dan</li>
                                        <li>Partai Resmi</li>
                                      </v-tooltip>
                                    </v-btn>
                                  </div>

                                  <div class="d-flex flex-row">
                                    <v-btn variant="text" size="small" @click="changeTab1"> Sebelumnya</v-btn>

                                    <!-- <v-btn class="px-4" size="small" rounded="pill" color="info" variant="flat" :disabled="!tabDataDiri || !tabDataInstansi" @click="submitRegistrasi3"> Selanjutnya</v-btn> -->

                                    <v-dialog class="d-flex flex-row align-center justify-center" max-width="400" v-model="dialogBuatAkun" persistent>
                                      <template v-slot:activator="{ props }">
                                        <v-btn class="px-5" rounded="pill" color="info" variant="flat" size="small" :disabled="!tabDataDiri || !tabDataInstansi" v-bind="props" @click="submitRegistrasi3">Buat Akun</v-btn>
                                      </template>
                                      <v-card justify="center" class="px-6 py-3" height="200" width="400" >
                                        <v-card-title class="text-h5 px-0 font-weight-bold">Akun Berhasil Dibuat!</v-card-title>
                                        <v-card-text class="px-0 pb-0">Admin SETNEG akan segera memproses akun anda dalam waktu 48 jam. Mohon periksa secara berkala</v-card-text>
                                        <v-card-actions class="py-0 px-0">
                                          <v-spacer></v-spacer>
                                          <v-btn color="info" variant="text" @click="(dialogBuatAkun = false) & (daftarMenu = false) & (resetFormReg())">Terima Kasih</v-btn>
                                        </v-card-actions>
                                      </v-card>
                                    </v-dialog>
                                  </div>

                                </div>
                                <div class="my-2">
                                  <v-text-field ref='namaInstansiReg' v-model="registerUser.namaInstansiReg" :error-messages="errorMessages" 
                                  :rules="[namaPerusahaan,emptyRules].flat()" label="Nama Instansi" variant="underlined" dense required></v-text-field>

                                  <v-text-field ref='jabatanPemohonReg' v-model="registerUser.jabatanPemohonReg" :error-messages="errorMessages" 
                                  :rules="[jabatan, emptyRules].flat()" label="Jabatan Pemohon" variant="underlined" dense required></v-text-field>

                                  <v-text-field ref='alamatLengkapIntansiReg' v-model="registerUser.alamatLengkapIntansiReg" :error-messages="errorMessages" :rules="[alamat, emptyRules].flat()" label="Alamat Lengkap Instansi" variant="underlined" dense required></v-text-field>

                                  <v-text-field ref='nomorIndukPegawaiReg' v-model="registerUser.nomorIndukPegawaiReg" :error-messages="errorMessages" :rules="[wajibKtp, emptyRules].flat()" label="Nomor Induk Pegawai" variant="underlined" dense required></v-text-field>
                                  
                                </div>
                              </v-card-text>
                            </v-form>
                          </v-card>
                        </v-window-item>

                      </v-window>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-spacer></v-spacer>
              <v-col align-self="end" class="flex mt-2 pa-0">
                <div class="d-flex flex-row align-center justify-space-between mt-2 ">
                  <!-- <v-btn variant="plain" @click="daftarMenu = false" >Sudah punya Akun? Login -->
                    <v-dialog class="d-flex flex-row align-center justify-center" max-width="400" v-model="dialog" persistent>
                      <template v-slot:activator="{ props }">
                        <v-btn variant="plain" v-bind="props">Sudah punya Akun? Login</v-btn>
                      </template>
                      <v-card justify="center" class="px-6 py-3" height="200" width="400" >
                        <v-card-title class="text-h5 px-0 font-weight-bold">Oops..</v-card-title>
                        <v-card-text class="px-0 pb-0">Ingin membatalkan pendaftaran?</v-card-text>
                        <v-card-actions class="py-0 px-0">
                          <v-spacer></v-spacer>
                          <v-btn color="info" variant="text" @click="dialog = false"> Batalkan</v-btn>
                          <v-btn color="error" variant="text" @click="(dialog = false) & (daftarMenu=false) & (resetFormReg()) & (changeTab3()) ">Ya</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  <v-btn variant="plain"> Bantuan? </v-btn> 
                </div>
              </v-col>       
            </v-row> 
          </v-card>
        </v-container>
      </v-overlay>
    </v-main>
  </v-app>
</template>

<script>
  import { computed } from 'vue'
  import { useDisplay } from 'vuetify'
  import SvgIcon from '@jamescoyle/vue-icon'  
  import { mdiInformationOutline } from '@mdi/js';

  export default {
    name: 'BDAlogin',
    components: {
      SvgIcon
    },
    data() {
      return {
        items: [
        { 
          src: require ('../assets/foto 1.png'),
          },
        {
          src: require ('../assets/foto 2.png'),
          },
        {
          src: require ('../assets/foto 3.jpg'),
          },
        {
          src: require ('../assets/foto 4.png'),
          },
        {
          src: require ('../assets/foto 5.png'),
          },
        {
          src: require ('../assets/foto 6.png'),
          },  
        {
          src: require ('../assets/foto 7.png'),
          },
        {
          src: require ('../assets/foto 8.png'),
          },  
        {
          src: require ('../assets/foto 9.png'),
          },
        ],
        showPassword: false,
        alignments: [
          'start',
          'center',
          'end',
        ],
        user: {
          email: '',
          password: ''
        },

        registerUser: {
          namaReg: '',
          emailReg: '',
          passwordReg: '',
          telpReg:'',
          ktpReg:'',
          alamatReg:'',
          tempatTglLahirReg:'',
          wargaNegaraReg:'',

          namaInstansiReg:'',
          jabatanPemohonReg:'',
          alamatLengkapIntansiReg:'',
          nomorIndukPegawaiReg:''
        },

        emailRules: [
          v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail tidak Valid'
          ], 
        clickRules: [
          v => v !='' || 'Masukan Email'
          ],
        passRules:[
          v => v != '' || 'Masukan Sandi'
          ],
        wajibNama: [
          v => !v ||  /^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/.test(v) || 'Gunakan Format "Nama Depan" Spasi "Nama Tengah" (Opsional) Spasi "Nama Belakang" (Opsional) '
          ],
        wajibNomor: [
          v => !v || /^[0-9]{10,12}$/.test(v) || 'Nomor telepon tidak valid'
          ],
        wajibKtp: [
          v => !v || /^[0-9]{16}$/.test(v) || '16 Digit Nomor pada Kartu Tanda Penduduk '
          ],
        alamat: [
          v => v != '' || 'Alamat harus diisi '
          ],
        tempatTglLahir: [
          v => v != '' || 'Tempat dan Tanggal Lahir harus diisi'
          ],
        wargaNegara: [
          v => v != '' || 'Warga Negara harus diisi '
          ],
        namaPerusahaan: [
          v => !v || /^[A-Za-z]{2,35}(?: [a-zA-Z]+){0,4}$/.test(v) || 'Nama Perusahaan/ Instansi harus diisi '
          ],
        jabatan: [
          v => !v || /^[A-Za-z]{2,35}(?: [a-zA-Z]+){0,4}$/.test(v) || 'Posisi Jabatan harus diisi '
          ],
        emptyRules:[
          v => v != '' || 'Tidak boleh kosong!'
          ],
        loadingLogin: false,
        loadingTerms: false,
        btnLoad: [],
        formHasErrors: false,
        errorMessages: '',
        syaratdankondisi: false,
        daftarMenu: false,
        tab:'unggahFoto',
        tabUnggahFoto: false,
        tabDataDiri: false,
        tabDataInstansi: false,
        dialog: false,
        dialogBuatAkun: false,


        path: mdiInformationOutline,


        penggunaTerdaftar:
          `<ol class="text-subtitle-2 my-1">
            <li>Pengguna adalah pengguna Dashboard Setneg Satria Dewa yang terdaftar dalam suatu akun;</li>
            <li>Pengguna akan membuat sebuah nama akun (username) dan sandi (password) ketika menyelesaikan proses registrasi dan verifikasi yang telah ditetapkan dalam Dashboard Setneg Satria Dewa;</li>
            <li>Pengguna bertanggung jawab atas kebenaran data pribadi yang terdaftar dalam Dashboard Setneg Satria Dewa;</li>
            <li>Pengguna bertanggung jawab untuk menjaga kerahasiaan dan keamanan atas username dan password serta bertanggung jawab sepenuhnya atas segala kegiatan yang dilakukan oleh atau diatas namakan akun Pengguna;</li>
            <li>Pengguna menyetujui untuk segera memberitahukan kepada Pihak Setneg setiap adanya dugaan penggunaan yang tidak sah/valid dengan pengatas namaan akun Pengguna; </li>
            <li>Setneg berhak untuk membatasi, memblokir, menghapus atau mengakhiri pelayanan dari suatu akun Pengguna, serta membatalkan, menunda, membekukan transaksi jika diketahui atau diduga adanya kecurangan oleh Pengguna dan mengambil langkah-langkah hukum jika diperlukan.</li>
          </ol>`,
        peraturanPenggunaTerdaftar:
          `<ol class="text-subtitle-2 my-1">
            <li>Dengan memilih untuk membuat akun sebagai Pengguna dari Dashboard Setneg Satria Dewa Pengguna akan membuat sebuah nama akun (username) dan sandi (password) ketika menyelesaikan proses registrasi dan verifikasi yang telah ditetapkan dalam Dashboard Setneg Satria Dewa;</li>
            <li>Pengguna bertanggung jawab untuk menjaga kerahasiaan dan keamanan atas nama username dan password serta bertanggung jawab sepenuhnya atas segala kegiatan yang dilakukan oleh atau diatasnamakan nama akun Pengguna;</li>
            <li>Bahwa Pengguna tidak diperkenankan menjual, berupaya menjual, menawarkan untuk menjual, memberikan, menyerahkan atau mengalihkan akun, identitas Pengguna atau password kepada pihak ketiga tanpa sepengetahuan dan persetujuan tertulis sebelumnya dari Pihak Setneg. Kami dapat menangguhkan atau menghentikan akun Pengguna Terdaftar atau akun pihak yang menerima pengalihan dari Pengguna yang dijual, ditawarkan untuk dijual, diberikan, diserahkan atau dialihkan dengan melanggar ketentuan dalam Point ini. Apabila dengan keterbatasan kemampuan Pihak Setneg dalam mengidentifikasi pelanggaran ini, maka seluruh akibat, resiko adalah merupakan tanggung jawab dari Pengguna Terdaftar yang mengalihkan;</li>
            <li>Pengguna menyetujui untuk segera memberitahukan kepada Pihak Setneg setiap adanya dugaan penggunaan yang tidak sah/valid dengan pengatas namaan akun Pengguna;</li>
            <li>Setneg berhak sepenuhnya untuk membatasi, memblokir atau mengakhiri pelayanan dari suatu akun Pengguna, melarang akses ke Dashboard Setneg Satria Dewa dan membatalkan segala kegiatan yang dilakukan atas nama akun tersebut, melakukan pembekuan, penundaan dan mengambil langkah-langkah hukum untuk menjaga Pengguna Terdaftar atau pengguna lain jika Pihak Setneg menganggap Pengguna Terdaftar atau pengguna lain melanggar hukum-hukum yang berlaku, menggunakan data informasi, dan akun-akun yang tidak benar dan yang bersifat sementara (temporary/disposable) dalam akun Pengguna Terdaftar.</li>
          </ol>`,
        pengelolaanResiko:
          `<ol class="text-subtitle-2 my-1">
            <li>Mengambil, menyimpan, mengolah, baik secara sendiri ataupun oleh afiliasi Dashboard Setneg Satria Dewa terkait Data dan informasi Pengguna, sehubungan dengan Pemberian Informasi Data Diri dalam Aplikasi Dashboard Setneg Satria Dewa dan/atau kegiatan lainnya atau afiliasi lain dari Dashboard Setneg Satria Dewa;</li>
            <li>Mengalihkan kepada Dashboard Setneg Satria Dewa atau afiliasi lain Dashboard Setneg Satria Dewa, Data pribadi Pengguna, sehubungan dengan Kegiatan Registrasi Akun Setneg Satria Dewa dan/atau kegiatan lainnya atau afiliasi lain dari Dashboard Setneg Satria Dewa;</li>
            <li>Mengintegrasikan Data milik Pengguna sebagai Informasi Data Registrasi Akun Setneg Satria Dewa untuk kemudian disimpan, diolah maupun digunakan sebagaimana mestinya termasuk namun tidak terbatas untuk melakukan hal-hal lainnya yang dianggap patut oleh Dashboard Setneg Satria Dewa dan/atau afiliasi lain dari Dashboard Setneg Satria Dewa;</li>
            <li>Menghubungi Pengguna untuk melakukan verifikasi Data melalui Email, Whatsapp dan media lain sebagaimana diperlukan dalam Registrasi Akun Setneg Satria Dewa;</li>
            <li>Melakukan Integrasi Berupa pengambilan, penyimpanan, pengolahan dan pengalihan data dari Identitas yang diberikan oleh Pengguna untuk diidentifikasi, digunakan dan disimpan dari Pengguna Akun Setneg Satria Dewa dan/atau afiliasi lain dari Dashboard Setneg Satria Dewa;</li>
            <li>Melakukan pengecekan ke dan pengambilan, penyimpanan, pengolahan dan pengalihan data dari Sosial Media yang digunakan Pengguna untuk Registrasi Awal Akun Setneg Satria Dewa;</li>
            <li>Melengkapi data-data yang diperlukan sesuai dengan Ketentuan yang berlaku atau Otoritas Pemerintah sepanjang Pengguna tidak dapat melengkapi data tersebut dan dapat diubah selanjutnya oleh Pengguna sendiri melalui prosedur yang saat ini berlaku di Dashboard Setneg Satria Dewa, dan dengan Pengguna tetap sepenuhnya menjadi tanggung jawab atas ketepatan dan keakuratan data tersebut;</li>
            <li>Dalam hal ini Pengguna bersedia melakukan tanda-tangan elektronik tertentu sepanjang diperlukan didalam Registrasi Akun Setneg Satria Dewa, dan/atau kegiatan lainnya atau afiliasi lain dari Dashboard Setneg Satria Dewa;</li>
            <li>Melakukan tindakan-tindakan lain yang diperlukan untuk pelaksanaan keberlakuan Syarat dan Ketentuan Registrasi ini, Kebijakan Privasi, dan setiap ketentuan lainnya sehubungan dengan Penggunaan Dashboard Setneg Satria Dewa.</li>
          </ol>`,
        hakUntuk:
          `<ol class="text-subtitle-2 my-2">
            <li>Menolak permohonan penggunaan atau Registrasi Akun Setneg Satria Dewa;</li>
            <li>Membatalkan Registrasi Layanan penggunaan Dashboard Setneg Satria Dewa;</li>
            <li>Mencabut akses Pemohon ke Layanan dan Aplikasi Dashboard Setneg Satria Dewa;</li>
            <li>dan/atau Melakukan tindakan lainnya yang diperlukan sepanjang tidak bertentangan dengan Hukum yang berlaku.</li>
          </ol>`,
        registrasiDanTTD:
          `<ol class="text-subtitle-2 my-1">
            <li>Pengguna dengan ini setuju bahwa setiap korespondensi sehubungan dengan Layanan dapat/atas diskresi penuh Dashboard Setneg Satria Dewa, dilakukan secara elektronik, baik melalui Aplikasi Setneg Satria Dewa dan/atau afiliasi lain dari Dashboard Setneg Satria Dewa ataupun di luar Aplikasi Setneg Satria Dewa. Pengguna berjanji untuk menerima dan tidak menggugat keabsahan atau keberlakuan setiap korespondensi yang dibuat dalam bentuk Tanda Tangan elektronik, termasuk namun tidak terbatas pada pemberitahuan;</li>
            <li>Pengguna memahami dan menyetujui bahwa diperlukan tanda tangan elektornik sebagai aktivasi didalam layanan Akun Setneg Satria Dewa dan tidak terbatas pada hal-hal lainnya yang berhubungan dengan identitas berupa tanda tangan pengguna dalam bentuk elektronik terhadap hal-hal yang diperlukan didalam Dashboard Setneg Satria Dewa;</li>
            <li>Pengguna mengakui bahwa Pihak Setneg Satria Dewa tidak bertanggung jawab, dan Pengguna berjanji untuk tidak akan meminta Pihak Setneg Satria Dewa untuk bertanggung jawab atau memberikan ganti rugi, atas korespondensi yang dibuat selain dari Identitas Pengguna yang didaftarakan diPenandatanganan sebagai aktivasi akun Setneg Satria Dewa, merupakan registrasi sah yang akan dilakukan secara elektronik melalui tandatangan elektronik. Pengguna berjanji untuk tidak menentang keabsahan atau keberlakuan setiap perjanjian yang ditandatangani sehubungan dengan Layanan atas dasar perjanjian tersebut ditandatangani secara elektronik.</li>
          </ol>`,
        ketentuanLain:
          `<ol class="text-subtitle-2 my-1">
            <li>Pengguna tidak dapat mengalihkan hak atau kewajibannya berdasarkan Syarat dan Ketentuan Registrasi ini;</li>
            <li>Apabila, sewaktu-waktu, ketentuan apapun dalam Syarat dan KetentuanRegistrasi ini adalah atau menjadi tidak sah, tidak berlaku atau tidak dapatdilaksanakan dalam hal apapun berdasarkan hukum apa pun dari yurisdiksi manapun, baik keabsahan, keberlakuan atau dapat dilaksanakannya ketentuan yang tersisa maupun keabsahan, keberlakuan atau dapat dilaksanakannya ketentuan tersebut berdasarkan hukum yurisdiksi lainnya tidak akan terpengaruh atau terganggu.</li>
          </ol>`,
      }
    },
    watch:{
      loading (val) {
        if (!val) return

        setTimeout(() => (this.loading = false), 3000)
      },
      loadingLogin (val) {
        if (!val) return

        setTimeout(() => (this.loadingLogin = false), 3000)
      },
      
    },
    methods: {
      changeTab1(){
        this.tab='dataDiri'
      },
      changeTab2(){
        this.tab='dataInstansi'
      }, 
      changeTab3(){
        this.tab='unggahFoto'
      }, 
      loadBtn(i){
        this.btnLoad[i] = true
        //setTimeout((function() { this.btnLoad[i] = 'v-progress-circular';}) .bind(this), 1000);
        setTimeout(() => (this.btnLoad[i] = false, this.syaratdankondisi = false), 2500)
        setTimeout(() => (this.daftarMenu = true), 3200)

      },
      openPopup: function () {
        alert('ok')
      },
      handleClick(){
        this.showPassword = !this.showPassword
      },
      
      getImage() {
        return require("../assets/s1.png");
      },
      getImage2() {
        return require("../assets/bda.png");
      },
      getImage3() {
        return require("../assets/telkom2.png");
      },  
      
      submit () { 
        if (this.$refs.form.validate()){
          //form is valid
          this.formHasErrors = false          
          this.$router.push({ name: 'inbox' })
          console.log(this.user)

        } else {
          //form is not valid
          this.formHasErrors = true
          this.loadingLogin = true
          this.$router.push({ name: 'login' })

        }
      },
      
      submitRegistrasi2 () {
        if (this.$refs.formRegistrasi.validate()){
          //form is valid
          this.formHasErrors = false          
          console.log(this.registerUser)
          this.tabDataInstansi = true

        } else {
          //form is not valid
          this.formHasErrors = true
        }
      },

      submitRegistrasi3(){
        if (this.$refs.formRegistrasi.validate()){
          //form is valid
          this.formHasErrors = false          
          console.log(this.registerUser)
          this.tabDataInstansi = true

        } else {
          //form is not valid
          this.formHasErrors = true
        }

      },
      resetFormReg () {
        Object.keys(this.formRegistrasi).forEach(f => {
          this.$refs[f].reset()
          this.tab='unggahFoto'

        })
      },
      uploadFoto(){
        document.getElementById("fileUpload").click()
      }
      
    },
    computed: {
      form() {
        return{
          email: this.email,
          password: this.password
        }
      },
      formRegistrasi(){
        return {
          namaReg: this.namaReg,
          emailReg : this.emailReg,
          passwordReg: this.passwordReg,
          telpReg: this.telpReg,
          ktpReg: this.ktpReg,
          alamatReg: this.alamatReg,
          tempatTglLahirReg: this.tempatTglLahirReg,
          wargaNegaraReg: this.wargaNegaraReg,

          namaInstansiReg: this.namaInstansiReg,
          jabatanPemohonReg: this.jabatanPemohonReg,
          alamatLengkapIntansiReg: this.alamatLengkapIntansiReg,
          nomorIndukPegawaiReg: this.nomorIndukPegawaiReg
        }
      }
    },
    setup () {
      const { name } = useDisplay()

      const height = computed(() => {
        // name is reactive and
        // must use .value
        switch (name.value) {
          case 'xs': return 220
          case 'sm': return 400
          case 'md': return 500
          case 'lg': return 600
          case 'xl': return 800
          case 'xxl': return 1200
        }

        return undefined
      })

      return { height }
    },

  };
</script>



<style scoped>
.hero {
  background: url('../assets/bgmt.png');
  background-size: cover;
  height: 100%;
  width: 100%;
}
.rounded-card{
  border-radius:0px;
}

.margin1{
  margin-top: 50px;
  margin-bottom: 50px;
}
.body {
  counter-reset: p;
}
.ol {
  padding-left: 25px;
  list-style-type:decimal;
}
.scroll {
  overflow: hidden;
}

.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
.no-wrap{
  flex-shrink: 0;
}
.tab-item-wrapper {
  /* vuetify sets the v-tabs__container height to 48px */
  width: calc(30vh - 48px)
}
.v-window__container {
  width: 100%
}

.v-label{
  font-size: 10px;
}
</style>
