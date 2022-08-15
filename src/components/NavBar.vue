<script>
export default {
    data() {
        return {
            logged_in: false,
            nav_menu_pressed: false,
            open: false,
        }
    },

    created() {
        window.addEventListener("click", this.close);
        this.emitter.on('my-event', (evt) => {
            this.testEvent = evt.email;
            this.logged_in = evt.logged;
        })
    },

  
    beforeDestroy() {
        window.removeEventListener("click", this.close);
    },

    methods: {
        home_clicked(){
            this.$refs.home.style.color = "#42b883"
            this.$refs.laptop.style.color = "#35495e"
            this.nav_menu_pressed = true
            this.menuFocus()
        },

        laptop_clicked(){
            this.$refs.laptop.style.color = "#42b883"
            this.$refs.home.style.color = "#35495e"
            this.nav_menu_pressed = true
            this.menuFocus()
        },

        signup_clicked(){
            this.$refs.laptop.style.color = "#35495e"
            this.$refs.home.style.color = "#35495e"
            this.nav_menu_pressed = true
            this.menuFocus()
        },

        log_out(){
            this.logged_in = false
        },

        menuFocus() {
            let x = window.matchMedia("(max-width: 900px)")
            if (x.matches) {
                this.nav_menu_pressed = !this.nav_menu_pressed
                if (this.nav_menu_pressed) {
                    setTimeout(() => {
                        this.$refs.nav_elements.classList.add("opened")
                    }, 50)
                } else {
                    setTimeout(() => {
                        this.$refs.nav_elements.classList.remove("opened")
                    }, 50)
                    console.log(this.$refs.nav_elements.classList.value)
                }
            }
        },

        close(e) {
            if ((!this.$refs.nav_elements.contains(e.target)) && (!this.$refs.nav_menu.contains(e.target))) {

                this.nav_menu_pressed = true
                this.menuFocus()
               
            }
        }

    }
}
</script>

<template>
    <div>
        <div class="navbar">
            <div class="logo">
                <img src="../assets/deep_tech_logo.jpg" alt="deep tach logo">
            </div>
            <div class="nav_menu" ref="nav_menu" @click="menuFocus" @click.prevent="toggle">
                <i class="fa fa-bars"></i>
            </div>
            <div class="nav_elements" ref="nav_elements">
                <ul>
                    <li @click="home_clicked" ref="home">
                        <router-link @click="home_clicked" style="text-decoration: none; color: inherit;" to='/'>
                            Home
                        </router-link>
                    </li>
                    <li @click="laptop_clicked" ref="laptop">
                        <router-link @click="laptop_clicked" style="text-decoration: none; color: inherit;" to=laptop>
                            Laptop
                        </router-link>
                    </li>
                    <li>
                        Mobile
                    </li>
                    <li>
                        Tablet
                    </li>
                    <li v-show="logged_in">{{ testEvent }}</li>
                    <li v-show="logged_in" @click="log_out">Log out</li>
                    <li v-if="!logged_in" @click="signup_clicked" ref="signup" class="signup">
                        <router-link @click="signup_clicked" style="text-decoration: none; color: inherit;" to=signup>
                            Sign Up
                        </router-link>
                    </li>


                </ul>
            </div>

        </div>
    </div>
</template>

<style>


























.navbar{
    height: 150px;
    width: 100%;
    background: white;
    box-shadow: 0px 0px 40px rgb(240, 240, 240);
}

.logo{
    width: 200px;
    height: auto;
    float: left;
    margin: 20px 0 20px 100px;    
}

.logo img{
    width: 100%;
    height: auto;    
}

.nav_menu {
    display: none;
}

.nav_elements{
    float: right;
    margin-right: 50px;
    font-family: 'Oxygen', Times, serif;    
    margin: 20px 80px 0 0 ;   
}

.nav_elements ul{
    list-style-type: none;
 
}

.nav_elements>ul>li{
    float: left;
    display: flex;
    font-size: 16px;
    margin: 40px 40px;
    font-weight: bold;
    color: #35495e;
    transition: color 0.25s ease-in;
}

.nav_elements ul>li:first-child{
    color: #42b883;
}

.nav_elements ul>li:last-child {
    background-color: #35495e;
    color: white;
    margin-top: 27px;
    padding : 10px;
    align-items: center;
    border: solid 3px #42b883;
}

.signup{
        background-color: #35495e;
            color: white;
            margin-top: 27px;
            padding: 10px;
            align-items: center;
            /* border-radius: 10px; */
            border: solid 3px #42b883;
}

.nav_elements>ul>li:hover {
    cursor: pointer;
    color: #42b883;
}

@media only screen and (max-width: 1200px) {
    .logo {
            width: 175px;
            /* height: auto;
            float: left; */
            margin: 20px 11px;
            /* border: solid 1px red; */
        }

.nav_elements {
    float: right;
    /* margin-right: 50px; */
    font-family: 'Oxygen', Times, serif;
    margin: 20px 10px 0 0;
}
    
        /* .logo img {
            width: 100%;
            height: auto;
        } */

        
}

@media only screen and (max-width: 900px) {
    .logo {
        width: 125px;
        /* height: auto;
        float: left; */
        margin: 20px 30px;
        /* border: solid 1px red; */
    }

.nav_menu {
    display: block;
    position: absolute;
    right: 0;
    padding: 25px 30px 0 0;
    font-size: 30px;
    color:#35495e ;
}


.nav_elements {
    opacity: 0;
    visibility: hidden;
    margin: 60px 5px 0 0;
    position: absolute;
    right: 0;
    z-index: 2;
    background-color: #f1f1f1;
    border-radius: 10px;
    width: auto;
    height: auto;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
}

.nav_elements>ul>li {
    float: none;
    padding: 5px 45px 5px 7px;
    margin: 5px 15px 5px 7px;
    list-style-type: none;
    font-family: 'Oxygen', Times, serif;
    font-size: 14px;
    color:#35495e;
    border: none;
    transition: all 0.25s ease;
}

.nav_elements ul>li:last-child {
    background-color: inherit;
    color: #35495e;
padding: 0px 25px 5px 7px;
    margin: 5px 15px 5px 7px;
    /* align-items: center; */
    border: none;
}

.nav_elements>ul>li:hover {
    cursor: pointer;
    /* border-left: 5px solid #de0000; */
    color:#42b883;
    /* border-block-start-width: 0px; */
    /* padding-bottom: 5px; */
}

/* #app>div>div.navbar>div.nav_elements>i:hover {
    cursor: pointer;
} */
/* 
    .logo img {
        width: 100%;
        height: auto;
    } */
.navbar {
    height: 125px;
    /* width: 100%;
    background: white;
    box-shadow: 0px 0px 40px rgb(240, 240, 240); */
}

.opened {
    opacity: 1;
    visibility: visible;
    transition: all 0.5s ease-in-out;
}

#app>div:nth-child(1)>div>div.nav_menu>i{
    cursor: pointer;
}

}


@media only screen and (max-width: 600px) {
    .logo {
        width: 100px;
        /* height: auto;
        float: left; */
        margin: 20px;
        /* border: solid 1px red; */
    }

.nav_elements {
    opacity: 0;
    visibility: hidden;
    margin: 50px 5px 0 0;
    position: absolute;
    right: 0;
    z-index: 2;
    background-color: #f1f1f1;
    border-radius: 10px;
    width: auto;
    height: auto;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
}

.opened {
    opacity: 1;
    visibility: visible;
    transition: all 0.5s ease-in-out;
}

    /* .logo img {
        width: 100%;
        height: auto;
    } */
.navbar {
    height: 100px;
    /* width: 100%;
    background: white;
    box-shadow: 0px 0px 40px rgb(240, 240, 240); */
}

.nav_menu {
    display: block;
    position: absolute;
    right: 0;
    padding: 20px 20px 0 0;
    font-size: 24px;
    color: #35495e;
}

.nav_elements>ul>li {
    float: none;
    padding: 5px 45px 5px 7px;
    margin: 5px 15px 5px 7px;
    list-style-type: none;
    font-family: 'Oxygen', Times, serif;
    font-size: 12px;
    color: #35495e;
    border: none;
    transition: all 0.25s ease;
}

}
</style>