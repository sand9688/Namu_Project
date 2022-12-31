<template>
    <v-app class="mx-auto">
      <v-layout>
        <v-app-bar color="green" density="compact">


          <template v-slot:prepend>
            <v-app-bar-nav-icon @click="Login">{{ loge }}</v-app-bar-nav-icon>
          </template>

          <v-app-bar-title><button @click="Home"> 익명 게시판 </button></v-app-bar-title>
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
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left">Num</th>
                    <th class="text-left">제목</th>
                    <th class="text-left">작성자</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="item in testItems" :key="item.num">
                      <td>{{ item.num }}</td>
                      <td><button @click="Move" :value=item.num>{{ item.title }}</button></td>
                      <td>{{ item.twitter }}</td>
                    </tr>
                </tbody>
              </v-table>
                <br>
                <v-btn tile color="success" style="float: right" @click="Create">Edit</v-btn>
              </v-sheet>
            </v-col>

            <v-col
              cols="12"
              sm="2"
            >
            </v-col>
          </v-row>
        </v-container>
      </v-main>
      </v-layout>
      <v-footer>2022-고경훈, LLC</v-footer>
    </v-app>
</template>

<script>
import router from '@/router/index';
import axios from 'axios';
export default {
  mounted(){
    axios.get('api/content')
    .then((res) => {
      this.testItems = res.data
      console.log(res.data)
    })
    if(sessionStorage.getItem('id') != undefined){
      console.log(sessionStorage.getItem('id'))
      this.loge = 'LOGOUT'
    }


  },
  data() {
    return{
      testItems: [
      ],
      num :'',
      page : 1,
      len: '',
      loge: 'LOGIN',
      setid: ''
    }
  },
  methods:{
    Move(e){
      console.log(e.target.value)
      this.num=e.target.value
      router.push('/content/'+this.num)
    },
    Home:()=>{
      console.log('확인')
      router.push('/')
    },
    Create(){
      if(sessionStorage.getItem('id') == undefined){
        alert('로그인해주세요')
        router.push('/login')
      }else{
        router.push('/detail')
      }
    },
    Login(){
      if(sessionStorage.getItem('id') == undefined){
        router.push('/login')
      }else{
        sessionStorage.clear()
        alert('로그아웃 하셨습니다')
        router.go()
      }

    }
  }
}
</script>