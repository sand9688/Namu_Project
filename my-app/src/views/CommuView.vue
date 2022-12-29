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
                    <th class="text-left">방문</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="item in testItems" :key="item.num">
                      <td>{{ item.num }}</td>
                      <td><button @click="Move" :value=item.num>{{ item.title }}</button></td>
                      <td>{{ item.creater }}</td>
                      <td>{{ item.visiter }}</td>
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
export default {
  data() {
    return{
      testItems: [
          { num: 1, title: '취업하고 싶다', creater: '로로', visiter: 0 },
          { num: 2, title: '취업하고 싶으면 개추', creater: '룰루', visiter: 0 },
          { num: 3, title: '취업시켜 주세요', creater: '랄라', visiter: 0 },
          { num: 4, title: '취업하고 싶다', creater: '로로', visiter: 0 },
          { num: 5, title: '취업하고 싶으면 개추', creater: '룰루', visiter: 0 },
          { num: 6, title: '취업시켜 주세요', creater: '랄라', visiter: 0 },
          { num: 7, title: '취업하고 싶다', creater: '로로', visiter: 0 },
          { num: 8, title: '취업하고 싶으면 개추', creater: '룰루', visiter: 0 },
          { num: 9, title: '취업시켜 주세요', creater: '랄라', visiter: 0 },
      ],
      num :'',
      page : 1,
      len: '',
      loge: 'LOGIN'
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
      router.push('/detail')
    },
    Login(){
      router.push('/login')
    }
  }
}
</script>