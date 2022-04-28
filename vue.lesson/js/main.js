Vue.createApp({
    data(){
        return {
           name: '名無し',
           message: '',
           posts: []
        }
    },
    methods:{
      onSubmit() {
        //   名前が空の時に名無しをセット
          if(this.name === '') {
              this.name = '名無し'
          }
        //   入力された名前とメッセージをpostオブジェクトとして生成
          let post = {
              name: this.name,
              message: this.message
          }
        //   posts リストにpostオブジェクトを格納
          this.posts.push(post)
        //   データを格納した後にフォームを初期化
          this.name = '名無し'
          this.message = ''
      }


    },
    computed: {
        // 20文字以上を検出
        checkMessage(){
           return this.message.length > 20
           
        },
        // メッセージが空かどうかチエッく
        checkNull(){
            return this.message === ''
        }
    }


}).mount('#app')