<script>
export default {
    data() {
        
        return {
            min_val: 300000,
            max_val: 10000000,
            i: 0,
            storage: [120, 240, 500, 1000],
            memory: [4, 8, 12, 16],
            screen: [13, 14, 15, 17],
            cpu: ['Core i3', 'Core i5', 'Core i7', 'AMD R3'],
            laptops: [
                {
                    name: 'Asus', 
                    id: 0, 
                    storage: 240, 
                    memory: 8, 
                    screen: 15.6,
                    cpu: 'Core i3', 
                    price: parseInt(800000), 
                    price_locale: this.getLocaleString(800000),
                    image: 'asus',   
                    alt: 'asus gaming',
                    is_fav: false,          
                },

                {
                    name: 'Toshiba',
                    id: 1,
                    storage: 500,
                    memory: 16,
                    screen: 14.5,
                    cpu: 'Core i5',
                    price: 1500000,
                    price_locale: this.getLocaleString(1500000),
                    image: 'toshiba',
                    alt: 'toshiba',
                    is_fav: false,
                },

                {
                    name: 'MSI',
                    id: 2,
                    storage: 500,
                    memory: 12,
                    screen: 17.3,
                    cpu: 'AMD R3',
                    price: 2300000,
                    price_locale: this.getLocaleString(2300000),
                    image: 'msi',
                    alt: 'msi',
                    is_fav: false,
                },

                {
                    name: 'Asus',
                    id: 3,
                    storage: 120,
                    memory: 8,
                    screen: 13.3,
                    cpu: 'Core i7',
                    price: 3850000,
                    price_locale: this.getLocaleString(3850000),
                    image: 'mac',
                    alt: 'mac',
                    is_fav: false,
                },

                {
                    name: 'Mac',
                    id: 4,
                    storage: 120,
                    memory: 8,
                    screen: 13.3,
                    cpu: 'Core i7',
                    price: 4620000,
                    price_locale: this.getLocaleString(4620000),
                    image: 'mac',
                    alt: 'mac',
                    is_fav: false,
                },

                {
                    name: 'Asus',
                    id: 5,
                    storage: 120,
                    memory: 8,
                    screen: 13.3,
                    cpu: 'Core i7',
                    price: 2150000,
                    price_locale: this.getLocaleString(2150000),
                    image: 'mac',
                    alt: 'mac',
                    is_fav: false,
                },

                {
                    name: 'Asus',
                    id: 6,
                    storage: 240,
                    memory: 8,
                    screen: 15.6,
                    cpu: 'Core i3',
                    price: 860000,
                    price_locale: this.getLocaleString(860000),
                    image: 'asus',
                    alt: 'asus gaming',
                    is_fav: false,
                },

                {
                    name: 'Toshiba',
                    id: 7,
                    storage: 500,
                    memory: 16,
                    screen: 14.5,
                    cpu: 'Core i5',
                    price: 1570000,
                    price_locale: this.getLocaleString(1570000),
                    image: 'toshiba',
                    alt: 'toshiba',
                    is_fav: false,
                },

                {
                    name: 'MSI',
                    id: 8,
                    storage: 500,
                    memory: 12,
                    screen: 17.3,
                    cpu: 'AMD R3',
                    price: 2460000,
                    price_locale: this.getLocaleString(2460000),
                    image: 'msi',
                    alt: 'msi',
                    is_fav: false,
                },

                {
                    name: 'Asus',
                    id: 9,
                    storage: 120,
                    memory: 8,
                    screen: 13.3,
                    cpu: 'Core i7',
                    price: 5860000,
                    price_locale: this.getLocaleString(5860000),
                    image: 'mac',
                    alt: 'mac',
                    is_fav: false,
                },

                {
                    name: 'Asus',
                    id: 10,
                    storage: 120,
                    memory: 8,
                    screen: 13.3,
                    cpu: 'Core i7',
                    price: 960000,
                    price_locale: this.getLocaleString(960000),
                    image: 'mac',
                    alt: 'mac',
                    is_fav: false,
                },

                {
                    name: 'Asus',
                    id: 11,
                    storage: 120,
                    memory: 8,
                    screen: 13.3,
                    cpu: 'Core i7',
                    price: 3820000 ,
                    price_locale: this.getLocaleString(3820000),
                    image: 'mac',
                    alt: 'mac',
                    is_fav: false,
                },

            ],

            filtered_laptops:[],

        }
    },

    created(){
        this.filtered_laptops = this.laptops     
    },


    methods: {
        foo(e) {
            let gap = 1000000;
            this.min_val = this.$refs.input_1.value.toLocaleString()
            this.max_val = this.$refs.input_2.value

            if (this.max_val - this.min_val <= gap) {
                if (e.target.className === "range_min") {
                    this.$refs.input_1.value = this.max_val - gap
                    this.min_val = this.$refs.input_1.value
                } else {
                    this.$refs.input_2.value = parseInt(this.$refs.input_1.value) + gap
                    this.max_val = this.$refs.input_2.value
                }
            } else {
                let progress_left = (this.min_val / this.$refs.input_1.max) * 100 + "%"
                let progress_right = 100 - (this.max_val / this.$refs.input_2.max) * 100 + "%"
                this.$refs.progress.style.left = progress_left
                this.$refs.progress.style.right = progress_right
            }          
        },

        getUrl(_imgURL) {
            return new URL(`../assets/${_imgURL}.jpg`, import.meta.url).href
        },

        getLocaleString(num){
            return num.toLocaleString()
        },

        search(){          
            this.min_val = this.$refs.input_1.value
            this.max_val = this.$refs.input_2.value
            setTimeout(() => {
            this.filtered_laptops = this.laptops.filter(laptop =>  
             laptop.price > this.min_val   &&
             laptop.price < this.max_val   &&
             this.storage.map(Number).includes(parseInt(laptop.storage)) &&
             this.memory.map(Number).includes(parseInt(laptop.memory)) &&
             this.screen.map(Number).includes(parseInt(laptop.screen)) &&
             this.cpu.includes(laptop.cpu)
            )
            }, "50")           
        },

        add_to_fav(id){
            console.log("favorite !!!!")
            console.log(id)
            console.log(this.laptops[id].is_fav)
            this.laptops[id].is_fav = !this.laptops[id].is_fav
        }
    },
}
</script>


<template>
    <div>
        <div class="container" @mouseup="search">
            <div class="laptop">
                <transition-group name="list">
                    <div class="card" v-for="laptop in this.filtered_laptops" :key="laptop.id">
                        <img :src="getUrl(`${laptop.image}`)" :key="laptop.id" :alt="laptop.alt">
                        <p> <span> Brand: </span>{{laptop.name}}</p>
                        <p><span>CPU: </span>{{laptop.cpu}}</p>
                        <p><span>Memory: </span>{{laptop.memory}} GB</p>
                        <p><span>Storage: </span>{{laptop.storage}} GB</p>
                        <p><span>Screen: </span>{{laptop.screen}} "</p>
                        <p><span>Price: </span><span>{{laptop.price_locale}} </span> S.P</p>

                        <div class="fav" @click="add_to_fav(laptop.id)">
                            <!-- <transition name="fav" mode="in-out"> -->
                                <i v-show="laptop.is_fav" class="fa fa-heart fa-border" aria-hidden="false"></i>
                            <!-- </transition> -->
                            <!-- <transition name="fav" mode="in-out"> -->
                                <i v-show="!laptop.is_fav" class="fa fa-heart-o fa-border" aria-hidden="false"></i>
                            <!-- </transition> -->
                        </div>

                    </div>
                </transition-group>
            </div>

            <div class="filter">
                <h2>Filter Result</h2>
                <h3>Price</h3>
                <div class="price">
                    <p>{{ parseInt(min_val).toLocaleString() }}</p>
                    <p>to</p>
                    <p>{{ parseInt(max_val).toLocaleString() }}</p>
                </div>
                <div class="slider">
                    <div class="progress" ref="progress"></div>
                </div>
                <div class="range_input" ref="range_input" @input="foo($event)">
                    <input ref="input_1" type="range" min="300000" max="10000000" value="300000" class="range_min"
                        step="10000">
                    <input ref="input_2" type="range" min="300000" max="10000000" value="10000000" class="range_max"
                        step="10000">
                </div>
                <h3>Storage</h3>
                <div class="storage">

                    <input type="checkbox" id="120 GB" value="120" v-model="storage">
                    <label for="120 GB">120 GB</label> <br>

                    <input type="checkbox" id="240 GB" value="240" v-model="storage">
                    <label for="240 GB">240 GB</label> <br>

                    <input type="checkbox" id="500 GB" value="500" v-model="storage">
                    <label for="500 GB">500 GB</label><br>

                    <input type="checkbox" id="1 TB" value="1000" v-model="storage">
                    <label for="1 TB">1 TB</label><br>
                </div>

                <h3>Memory</h3>
                <div class="memory">

                    <input type="checkbox" id="4 GB" value="4" v-model="memory">
                    <label for="4 GB">4 GB</label> <br>

                    <input type="checkbox" id="8 GB" value="8" v-model="memory">
                    <label for="8 GB">8 GB</label> <br>

                    <input type="checkbox" id="12 GB" value="12" v-model="memory">
                    <label for="12 GB">12 GB</label><br>

                    <input type="checkbox" id="16 GB" value="16" v-model="memory">
                    <label for="16 GB">16 GB</label><br>
                </div>

                <h3>Screen Size</h3>
                <div class="screen">

                    <input type="checkbox" id="13.3" value="13" v-model="screen">
                    <label for="13.3">13.3 "</label> <br>

                    <input type="checkbox" id="14.5" value="14" v-model="screen">
                    <label for="14.5">14.5 "</label> <br>

                    <input type="checkbox" id="15.6" value="15" v-model="screen">
                    <label for="15.6">15.6 "</label><br>

                    <input type="checkbox" id="17.3" value="17" v-model="screen">
                    <label for="17.3">17.3 "</label><br>
                </div>

                <h3>CPU</h3>
                <div class="cpu">

                    <input type="checkbox" id="core i3" value="Core i3" v-model="cpu">
                    <label for="core i3">Core i3</label> <br>

                    <input type="checkbox" id="core i5" value="Core i5" v-model="cpu">
                    <label for="core i5">Core i5</label> <br>

                    <input type="checkbox" id="core i7" value="Core i7" v-model="cpu">
                    <label for="core i7">Core i7</label><br>

                    <input type="checkbox" id="AMd R3" value="AMD R3" v-model="cpu">
                    <label for="AMd R3">AMD R3</label><br>
                </div>
            </div>


        </div>
    </div>
</template>




<style scoped>

















.container{
   margin: 60px;
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    align-self: flex-start;
    font-family: 'Oxygen', Times, serif;
}

h2{
    color: white;
    margin-top: -45px;
    font-size: 1.3rem;
}

.filter{
    text-align: center;
    background: #35495e;
    align-self: flex-start;
    border: solid 1px white;
    width: 22%;
    padding: 10px 0px;
    font-size: 0.9rem;
}

h3{
    margin: 10px auto;
    color: white;
    color: #42b883;
    font-size: 0.9rem;
}



.slider{
    height: 5px;
    width: 70%;
    margin: auto;
    border-radius: 5px;
    background: #ddd;
    position: relative;
    left: 0;
}

.slider .progress{
    height: 5px;
    width: auto;
    left: 0;
    right: 0;
    position: absolute;
    border-radius: 5px;
    background: #42b883;
}

.range_input{
    position: relative;
}

.range_input input{
    position: absolute;
    top: -5px;
    height: 5px;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    background:none;
    -webkit-appearance: none;
    pointer-events: none;
    cursor: pointer;
}

input[type="range"]::-webkit-slider-thumb{
    height: 17px;
    width: 17px;
    -webkit-appearance: none;
    pointer-events: auto;
    border-radius: 50%;
    background: #42b883;

}

input[type="range"]::-moz-range-thumb {
    height: 17px;
    width: 17px;
    border: none;
    -webkit-appearance: none;
    pointer-events: auto;
    border-radius: 50%;
    background: #42b883;

}

.laptop{
    background: white;
    margin-top: -10px;
}


.price{
    width: 100%;
    height: auto;
    margin: 5px auto;
    background:#35495e;
}

.price p{
    display: inline-block;
    color:white;
    border: 0;
    margin: 15px;
    padding: 0;
    font-size: 1rem;
}

.storage, 
.memory,
.screen,
.cpu{
    text-align: left;
    margin-left: 50px;
}

.storage h3,
.memory h3,
.screen h3,
.cpu h3{
    align-self: center;
}
.storage label,
.memory label,
.screen label,
.cpu label{
    color: white;
    margin: 0 5px;    
}

.storage input,
.memory input,
.screen input,
.cpu input{
    margin: auto;
}

.laptop {
    display: flex;
    background:#35495e;
    flex-grow: 2;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 50px;
    height: 100%;
}

.laptop img{
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
}

.laptop .card{
    margin-top: 10px;
    height: 25%;
    background: white;
    box-shadow: 0px 0px 5px rgb(240, 240, 240);
}


.card p{
    color: #111;
    background:white;
    margin: 0;
    padding: 5px;
    border: solid 1px white;
    font-size: 0.8rem;
}

.card >p>span{
    font-weight: bold;
}

.card>p>span:nth-child(2) {
    font-weight: bold;
    font-size: 1.2rem;
    color:#42b883 ;
}

.list-leave-to,
.list-enter-from{
    opacity: 0;
    transform: scale(0.6);
}

.list-leave-from,
.list-enter-to{
    opacity: 1;
    transform: scale(1);
}

.list-leave-active,
.list-enter-active{
    transition: all 0.4s ease;
}


.fav-leave-to,
.fav-enter-from {
    opacity: 0;
    transform: scale(0.6);
}

.fav-leave-from,
.fav-enter-to {
    opacity: 1;
    transform: scale(1);
}

.fav-leave-active,
.fav-enter-active {
    transition: all 0.8s ease;
}

.fav{
    position: relative;
}
.fav>i{
    color: red;
    cursor: pointer;
    position: relative;
    z-index: 10;
}

@media only screen and (max-width: 1200px) {
    .filter {
            text-align: center;
            background: #35495e;
            align-self: flex-start;
            border: solid 1px white;
            width: 25%;
            padding: 10px 0px;
            display: block;
            font-size: 0.9rem;
        }
}


@media only screen and (max-width: 800px) {

.laptop .card {
        margin-top: 10px;
        height: 25%;
        background: white;
        box-shadow: 0px 0px 5px rgb(240, 240, 240);
    }

.filter {
    text-align: center;
    background: #35495e;
    align-self: flex-start;
    border: solid 1px white;
    width: 55%;
    padding: 10px 0px;
    display: block;
    font-size: 0.9rem;
}

}

@media only screen and (max-width: 600px) {
.container {
        margin: 60px;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-around;
        align-items: stretch;
        /* align-self: flex-start; */
        order: 2;
        font-family: 'Oxygen', Times, serif;
    }

.filter {
    text-align: center;
    background: #35495e;
    align-self: center;
    border: solid 1px white;
    width: 65%;
    padding: 10px 0px;
    margin: 20px auto;
    display: block;
    font-size: 0.9rem;
}

}



</style>

