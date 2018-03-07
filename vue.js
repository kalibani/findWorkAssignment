new Vue({
  el:'#app',
  data: {
    edited: '',
    show: false
  },
  created() {
    this.edited = localStorage.getItem('item')
  },
  methods:{
    editMe() {
      this.edited = this.edited
      localStorage.setItem('item', this.edited)
    }
  }

})
