var app1 = new Vue({
    el: '#app1',
    data: {
        message: 'Hello world!'
    }
});
var app2 = new Vue({
    el: '#app2',
    data: {
        name: 'Eric'
    }
});

var vfor = new Vue({
    el: '#v-for',
    data: {
        fruits: ['apple', 'banana', 'strawberry'],
        object: {
            name: 'fruits store',
            address: 'BJTU16'
        }
    }
});

var vif = new Vue({
    el: '#v-if',
    data: {
        count: 10
    }
});

var vbind = new Vue({
    el: '#v-bind',
    data: {
        isActive: true,
        color: 'black'
    }
});

var vbon = new Vue({
    el: '#v-on',
    data: {
        count: 0
    }
});

var function1 = new Vue({
    el: '#function',
    data: {
        greeting: '',
        fruits: ['apple', 'banana', 'strawberry'],
        newName: '132'
    },
    methods: {
        greet: function (greeting) {
            this.greeting = greeting + ", how are you?";
        },
        addFruits: function () {
            this.fruits.push(this.newName);
            this.newName = '';
        }
    }
});

let surname = 'Snow';
var computed = new Vue({
    el: '#computed',
    data: {
        sortBy: 'name',
        sortDirection: 'asc',
        range: '',
        name: 'John',
        category: '',
        products: [
            { name: "Keyboard", price: 44, category: 'Accessories' },
            { name: "Mouse", price: 20, category: 'Accessories' },
            { name: "Monitor", price: 399, category: 'Accessories' },
            { name: "Dell XPS", price: 599, category: 'Laptop' },
            { name: "MacBook Pro", price: 899, category: 'Laptop' },
            { name: "Pencil Box", price: 6, category: 'Stationary' },
            { name: "Pen", price: 2, category: 'Stationary' },
            { name: "USB Cable", price: 7, category: 'Accessories' },
            { name: "Eraser", price: 2, category: 'Stationary' },
            { name: "Highlighter", price: 5, category: 'Stationary' }
        ]
    },
    computed: {
        computedFullName: function () {
            return this.name + ' ' + surname;
        },
        countLength: function () {
            return this.name.length;
        },
        filterProducts: function () {
            return this.filterProductsByRange(this.filterProductsByName(this.filterProductsByCategory(this.products)))
        },
        filterProductsByCategory: function () {
            // -----过滤器-----
            // 简介方法
            // return this.products.filter(product => !product.category.indexOf(this.category));
            // 一般方法
            return this.products.filter(product => {
                if (this.category == '') {
                    return true;
                } else if (product.category != this.category) {
                    return false;
                } else {
                    return true;
                }
            });
        },
        filterProductsByName: function () {
            return this.products.filter(product => !product.name.indexOf(this.name));
        },
        filterProductsByRange: function () {
            return this.products.filter(product => (product.price > 0 && product.price < this.range) ? true : false)
        },
        sortedProducts: function () {
            return this.products.sort((p1, p2) => {
                let modifier = 1;
                if (this.sortDirection === 'desc') modifier = -1;
                if (p1[this.sortBy] < p2[this.sortBy]) return -1 * modifier;
                if (p1[this.sortBy] > p2[this.sortBy]) return 1 * modifier;
                return 0;
            });
        }
    },
    methods: {
        saveSurname: function(){
            surname = this.$el.querySelector('#surname').value;
        },
        sort: function (s) {
            if (s === this.sortBy) {
                this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
            }
            this.sortBy = s;
        },
        test: function () {
            console.log(!(0));
            console.log(!this.products[9].category == this.category);
        },
        filterProductsByCategory: function (products) {
            return products.filter(product => !product.category.indexOf(this.category))
        },

        filterProductsByName: function (products) {
            return products.filter(product => !product.name.indexOf(this.name))
        },

        filterProductsByRange: function (products) {
            return products.filter(product => (product.price > 0 && product.price < this.range) ? product : '')
        },
        
    }
});