var formApp=new Vue({
    el:'#formApp',
    data:{
        form:{
            name:'',
            email:'',
            gender:'',
            refer:'',
            profession:[],
            interested:[],
            message:'',
            satisfaction:'',
            terms: false
        }
    },
    methods:{
        formSubmit: function(event){
            console.log(this.form);
            event.target.reset();
        }
    }
});