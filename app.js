new Vue({
    el:"#app",
    data:{
        
        quantityToload:2,
        itemTotal:0,
        name:"shawn",
        website:"kwafonanadev.co.uk",
        age:28,
        lists:[
            {name:"Kwafo Nana Mensah",description:"Quame I"},
            {name:"Media Chibgarande",description:"hello boss am the tallest person in ghana"},
            {name:"Ampofo Mensah",description:"hello boss am the tallest person in ghana"},
            {name:"Suzzie Mensah",description:"hello boss am the tallest person in ghana"},
            {name:"Kwame Aboah mensah",description:"hello boss am the tallest person in ghana"}
        ],
        namesearch:'',
        descriptionsearch:'',
    },
    methods:{
      getName:function(){
          return "hello";
      } ,
      increaseAge:function(){
       return this.age ++;
      } ,
      showalert:function(){
          alert("ok");
      }
    },
    created() {
        return this.lists;
       
    },
    computed:{
        filteredData:function(){
             return this.lists.filter((list)=>{
                return list.name.match(this.namesearch)&& list.description.match(this.descriptionsearch);
                           
             })        
        }
    }
})