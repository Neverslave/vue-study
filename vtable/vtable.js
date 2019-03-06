Vue.component('vTable',{
    props:{
        columns:{
            type:Array,
            default:function () {
                return[]
            }
        },
        data:{
            type:Array,
            default:function () {
                return [];
            }
        }
    },
    data:function () {
        return {
            currentColumns: [],
            currentData:[]
        }
    },
    method:{
        makecolumns:function () {
            this.currentColumns.map(function (col,index) {
                col._sortType='normal' ;//增加一个字段标识当前的排序状态
                col._index = index ;//增加一个字段标识当前列在数组中的索引后续使用
                return col;
            })

        },
        makeData:function () {
            this.currentData=this.data.map(function (row,index) {
                row._index =index;
                return row;
            })

        }
    },
    mounted(){
        //初始化是调用
        this.makecolumns();
        this.makeData();
    },
    render:function (h) {
       var _this =this;
       var ths = [];
       this.currentColumns.forEach(function (col,index) {
           if(col.sortable){
               ths.push(h('th',[
                   h('span',col.title),
                   h('a',{
                       class:{
                           on:col._sortType ==='asc'
                       },
                       on:{
                           click:function () {
                               _this.handleSortByAsc(index)

                           }
                       }
                   },'↑'),
                   h('a',{
                       class:{
                           on:col._sortType ==='desc'

                       },
                       on:{
                           click:function () {
                               _this.handleSortByDesc(index)

                           }
                       }
                   },'↓')

               ]));
           }
           else{
               ths.push(h('th'),col.title);

           }
       })

    }

})
