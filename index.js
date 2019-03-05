var  app =  new Vue({
    el:'#app',
    data:{
   list:[{
       catagory:'电子产品',
       product:[
           {
               id:1,
               name:'iphone XR',
               price:8998,
               checked:true
           },
           {
               id:2,
               name:'iphone 7',
               price:5998,
               checked:true
           },           {
               id:3,
               name:'iPad pro',
               price:6998,
               checked:true
           }
       ]


      },{
       catagory:'蔬果',
       product:[
           {
               id:1,
               name:'橘子',
               price:6,
               checked:true
           },
           {
               id:2,
               name:'苹果',
               price:6,
               checked:true
           },           {
               id:3,
               name:'樱桃',
               price:29,
               checked:true
           }
       ]
   }



   ]

    },
    computed:{
        totalPrice:function () {
            var total = 0;
            for (var i = 0; i <this.list.length ; i++) {
                var item = this.list[i];
                if(item.checked ===true){
                total +=item.price*item.count;
                }
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',')
        }

    },
    methods:{
        handleReduce:function (index) {
            if(this.list[index].count ===1) return;
            this.list[index].count--;
        },
        handleAdd:function (index) {
            this.list[index].count++;
        },
        handleRemove:function (index) {
            this.list.splice(index,1);

        },
        checkAll:function () {
            for (var i = 0; i <this.list.length ; i++) {
                var item = this.list[i];
                item.checked = !item.checked
            }
        }


    }


});
