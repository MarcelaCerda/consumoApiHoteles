const { createApp } = Vue

  createApp({
    data() {
      return {
       
        hoteles:[],
        url:"http://engine.hotellook.com/api/v2/lookup.json?query=london",   
     }
    },
    methods: {
        fetchData(url) {  // necesite un async y await porque seguia de largo y no me cargaba el array recipes ni las listas desplegables
         fetch(url) 
           .then(response => response.json()) 
           .then(data => {
             console.log(data)
             this.hoteles=data.results.hotels
           })
           .catch(error=>alert("Ups... se produjo un error: "+ error))
       },
     },
    created() {
     this.fetchData(this.url)                                                       //   
    }
  }).mount('#app')