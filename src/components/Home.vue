<script>
export default {
    data() {
        return {

        }
    },

    methods: {
        home_clicked() {
            this.$refs.home.style.color = "#42b883"
            this.$refs.laptop.style.color = "#35495e"
        },

        laptop_clicked() {
            this.$refs.laptop.style.color = "#42b883"
            this.$refs.home.style.color = "#35495e"
        }
    }
}

</script>

<template>
    <div class="home">
        <div class="laptop">
            <!-- <router-link @click="laptop_clicked" style="text-decoration: none; color: inherit;" to=laptop> -->
                <img src="../assets/laptop.jpg" alt="laptop">
            <!-- </router-link> -->
        </div>
        <div class="mobile">
            <img src="../assets/mobile.jpg" alt="mobile">
        </div>
        <div class="tablet">
            <img src="../assets/tablet.jpg" alt="tablet">
        </div>

    </div>
</template>

<style>













.home{
    width: 100%;
    height: 1100px;
    margin: 30px auto;
    padding:0;
    text-align: center;
    display: block;
    /* border: solid 5px red; */

    /* width: 100%;
        height: auto;
        margin: 30px auto;
        padding: 0 auto;
        text-align: center;
        display: block;
         */
}

.laptop{
    width: 70%;
    margin: auto;
    height: auto;
    margin-top: 50px;
    margin-bottom: 10px;
    /* border: solid 5px greenyellow; */
}

.laptop img{
    width: 70%;   
    height: auto;
    transition: all 0.5s ease-out;
}

.laptop img:hover{
    width: 65%;
    cursor: pointer;
}


.tablet{
    width: 54%;
    float: right;
    margin : 0;
    padding: 0;
    /* margin-left: 0px; */
    /* border: solid 5px rgb(13, 47, 135); */
}

.mobile{
    width: 45%;
    float: left;
    margin-top: 0px;
    padding-right: 10px;
    /* border: solid 5px rgb(152, 184, 24); */
}

.tablet img{
    width: 70%;
    height: auto;
    float: left;
    margin-top: 0px;
    margin-left:0px;
    transition: all 0.5s ease-out;
}

.tablet img:hover{
    width: 65%;
    cursor: pointer;
}

.mobile img{
    width: 50%;
    float: right;
    height: auto;
    margin-right: 5px;
    transition: all 0.5s ease-out;
}

.mobile img:hover {
    width: 45%;
    cursor: pointer;
}

@media only screen and (max-width: 1200px) {

.home {
        width: 100%;
        height:auto;
        margin: 30px auto;
        padding: 0 auto;
        text-align: center;
        display: block;
        /* border: solid 5px red; */
    }

.laptop {
    width: 70%;
    margin: auto;
    height: auto;
    margin: 30px auto;
}

.laptop img {
    width: 70%;
    height: auto;
    transition: all 0.5s ease-out;
}

.laptop img:hover {
    width: 65%;
    cursor: pointer;
}






.mobile {
        width: 35%;
        height: auto;
        float: none;
        margin: 0px auto;
        align-self: center;
        padding: 0px;
        display: block;
        /* border: solid 1px red; */
        /* border: solid 5px rgb(152, 184, 24); */
    }

.mobile img {
    width: 100%;
    float: none;
    height: auto;
    align-self: center;
    margin-right: 5px;
    transition: all 0.5s ease-out;
}

.mobile img:hover {
    width: 90%;
    cursor: pointer;
}


.tablet {
    width: 65%;
    float: none;
    margin: 30px  auto;
    padding: 0px auto;
    display: block;
    /* margin-left: 0px; */
    /* border: solid 5px rgb(13, 47, 135); */
}

.tablet img {
    width: 70%;
    height: auto;
    display: block;
    margin: auto;
    float: none;
    align-self: center;
    transition: all 0.5s ease-out;
}

.tablet img:hover {
    width: 65%;
    cursor: pointer;
}

}

@media only screen and (max-width: 900px) {

    .home {
        width: 100%;
        height: auto;
        margin: 30px auto;
        padding: 0 auto;
        text-align: center;
        display: block;
        /* border: solid 5px red; */
    }

    .laptop {
        width: 70%;
        margin: auto;
        height: auto;
        margin: 30px auto;
    }

    .laptop img {
        width: 70%;
        height: auto;
        transition: all 0.5s ease-out;
    }

    .laptop img:hover {
        width: 65%;
        cursor: pointer;
    }

.tablet {
    width: 65%;
    /* float: none; */
    margin: 30px auto;
    padding: 0px ;
    display: block;
    /* margin-left: 0px; */
    /* border: solid 5px rgb(13, 47, 135); */
}

.tablet img {
    width: 70%;
    height: auto;
    display: block;
    margin: auto;
    float: none;
    align-self: center;
    transition: all 0.5s ease-out;
}

.tablet img:hover {
    width: 65%;
    cursor: pointer;
}


}

</style>