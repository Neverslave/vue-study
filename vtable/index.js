var app =new Vue({
    el:'#app',
    data:{
        columns:[
            {
                title:'姓名',
                    key:
                'name'
            },
            {
                title:'年龄',
                key: 'age',
                sortable:'true'
            },
            {
                title:'生日',
                key:'birthday',
                sortable:true
            },
            {
                title:'地址',
                key:'address'
            }

        ],
        data:[{
            name:'王小明',
            age:18,
            birthday:'1999-02-21',
            address:'北京市朝阳区芍药居路'
        },
            {
                name:'赵小妮',
                age:19,
                birthday:'1998-08-21',
                address:'北京市朝阳区康居路'
            },
            {
                name:'李晓红',
                age:30,
                birthday:'1987-11-10',
                address:'上海市浦东新区世纪大道'
            }
        ]
    },
    methods:{
        handleAddData:function () {
            this.data.push({
                name:'刘晓天',
                age:19,
                birthday:'1998-05-30',
                address:'北京市东城区东直门'
            })

        }
    }
})
