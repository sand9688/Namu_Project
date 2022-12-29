<template>
    <v-app class="mx-auto">
      <v-layout>
        <v-app-bar
          color="green"
          density="compact"
        >
          <template v-slot:prepend>
            <v-app-bar-nav-icon @click="Login">Login</v-app-bar-nav-icon>
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
                <div>방문자수  : {{ contenfrom.visiter }}</div>
                <hr>
                <br>
                <v-card elevation="20" outlined class="mx-auto" >
                  <v-card-text>
                    <p class="text-h4 text--primary">
                      제목 : {{contenfrom.title}}
                    </p>
                    <br>
                    <p>작성자 : {{ contenfrom.wirter }}</p>
                    <br>

                    <div class="text--primary">
                      {{ contenfrom.content }}
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn text color="teal accent-4" @click="reveal = true">수정하기</v-btn>
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


export default {
  data() {
    return{
      contenfrom:{
        title:"취업",
        wirter:"룰루",
        content:'',
        visiter: 0

      }
    }
  },
  methods:{
    Home:()=>{
      console.log('확인')
      router.push('/')
    }
  }

}
</script>