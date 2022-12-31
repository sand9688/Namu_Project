<template>
    <v-app class="mx-auto">
      <v-layout>
        <v-app-bar
          color="green"
          density="compact"
        >
          <template v-slot:prepend>
            <v-app-bar-nav-icon @click="Login">{{ loge }}</v-app-bar-nav-icon>
          </template>

          <v-app-bar-title> <button @click="Home"> 익명 게시판 </button></v-app-bar-title>
        </v-app-bar>


        <v-main class="bg-grey-lighten-3">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="2"
            >
            </v-col>

            <v-col
              cols="15"
              sm="8"
            >
              <v-sheet
                min-height="90vh"
                rounded="lg"
              >
                <v-form v-model="valid">
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="4">
                              <p>제목 : {{ sendform.title }}</p>
                            </v-col>
                            <v-col cols="12" md="4">
                                <p>작성자 : {{ sendform.twitter }}</p>
                            </v-col>
                        </v-row>
                        <br>
                            <v-file-input v-model="sendform.img" accept="image/png, image/jpeg, image/bmp" placeholder="Pick an avatar" label="사진을 넣어 주세요"></v-file-input>
                        <br>
                        <v-divider></v-divider>
                            <v-textarea v-model="sendform.content" counter full-width label="변경할 내용을 넣어 주세요"></v-textarea>
                    </v-container>

                </v-form>
                <v-btn tile color="success" style="float: right" @click='updata'>수정완료</v-btn>
                <v-btn tile color="red" style="float: left" @click='deletedata'>삭제하기</v-btn>
              </v-sheet>
            </v-col>
            <v-col cols="12" sm="2"></v-col>
          </v-row>
        </v-container>
      </v-main>
      </v-layout>
      <v-footer>2022-고경훈, LLC</v-footer>
    </v-app>
</template>

<script>
import router from '@/router';
import axios from 'axios';


export default {
  mounted(){
    axios.get('http://localhost:8081/api/content/'+ this.$route.params.num)
    .then((res)=>{
      this.sendform=res.data[0]
      this.sendform.twitter=sessionStorage.getItem('id')
      console.log(this.sendform)
    })
    .catch((err) => {
      console.log(err)
    })

    if(sessionStorage.getItem('id') != undefined){
      console.log(sessionStorage.getItem('id'))
      this.loge = 'LOGOUT'
    }
  },
  data() {
    return{
        sendform:{
            num:'',
            title:'',
            twitter:'',
            content:'',
            img:'',
            visiter:0
        },
        loge :'LOGIN'
    }
  },
  methods:{
    Home:()=>{
      console.log('확인')
      router.push('/')
    },
    Send(){
      axios.post('api/content', this.sendform)
      .then((res)=>{
        console.log(res)
        router.push('/content/'+this.sendform.num)
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    Login(){
      if(sessionStorage.getItem('id') == undefined){
        router.push('/login')
      }else{
        sessionStorage.clear()
        alert('로그아웃 하셨습니다')
        router.go()
      }
    },
    updata(){
      axios.put('http://localhost:8081/api/content/'+ this.$route.params.num, this.sendform)
      .then((res)=>{
        console.log(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    deletedata(){
      axios.delete('http://localhost:8081/api/content/'+ this.$route.params.num)
      .then((res)=>{
        console.log(res.data)
        router.push('/')
        alert('삭제되었습니다')
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  }

}
</script>