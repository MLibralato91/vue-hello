/*

 */




const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      image: "https://i.ytimg.com/vi/WNzkZIxlv4w/maxresdefault.jpg",
      imgW: 'width',
      number1: 0,
      number2: 0,
      result:0
    }
  },
  methods: {
    addNumber() {
      this.result = this.number1 + this.number2;
      
    }

  }
}).mount('#app')
