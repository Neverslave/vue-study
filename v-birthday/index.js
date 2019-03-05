var app = new Vue({
    el:'#app',
    data:{
        year:1994,
        month:5,
        day:9
    },
    methods:{
        getDays:
            function () {
                var times = new Date(this.year, this.month-1, this.day);
                var nowTimes = Date.now();
                var days = parseInt((nowTimes - times.valueOf())/1000/3600/24+1)
                 return days;
            }

        },
    computed:{
        days:{
            get:function () {
           return  this.getDays();
        }
    }

    }

})
