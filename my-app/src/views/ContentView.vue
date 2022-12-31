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
            <v-col cols="12" sm="2"></v-col>

            <v-col cols="15" sm="8">
              <v-sheet min-height="90vh" rounded="lg">
                <hr>
                <hr>
                <br>
                <v-card elevation="20" outlined class="mx-auto" >
                  <v-card-text>
                    <p class="text-h4 text--primary">
                      제목 : {{contenfrom.title}}
                    </p>
                    <br>
                    <p>작성자 : {{ contenfrom.twitter }}</p>
                    <br>

                    <div class="text--primary">
                      {{ contenfrom.content }}
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn text color="teal accent-4" @click="reveal">수정하기</v-btn>
                  </v-card-actions>
                </v-card>

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
    this.par = this.$route.params.num
    axios.get('http://localhost:8081/api/content/'+ this.par)
    .then((res) => {
      console.log(res.data)
      this.contenfrom = res.data[0]
    })
    .catch((err)=>{
      console.log(err)
    })
    if(sessionStorage.getItem('id') != undefined){
      console.log(sessionStorage.getItem('id'))
      this.loge = 'LOGOUT'
    }


  },
  data() {
    return{
      contenfrom:{
      },
      loge: 'LOGIN',
      par:''
    }
  },
  methods:{
    Home:()=>{
      console.log('확인')
      router.push('/')
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
    reveal(){
      if(this.contenfrom.twitter == sessionStorage.getItem('id')){
        router.push('/content/update/'+this.contenfrom.num)
      }else{
        alert('작성자만 수정 가능 합니다')
      }
    }
  }

}
</script>