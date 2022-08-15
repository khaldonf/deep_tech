<script>

</script>

<template>
    <div class="footer">
        <div class="contact_us">
            <ul>
                <li>
                    More Links
                </li>
                <li>
                    Services Center
                </li>
                <li>
                    Sales Points
                </li>
                <li>
                    Customer Rates
                </li>
            </ul>
        </div>
        <div class="social_media">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-google"></a>
            <a href="#" class="fa fa-linkedin"></a>
            <a href="#" class="fa fa-youtube"></a>
            <a href="#" class="fa fa-instagram"></a>
        </div>
        <p>Deep Tech Copyright © 2022</p>
    </div>
</template>

<style>














.footer{
    background-color: #42b883;
    width: 100%;
    margin-bottom:0;
    text-align: center;
    position: relative;
    bottom: 0;
    height: auto;
    margin: auto;
    box-shadow: 0px 0px 50px #42b883;
    font-family: 'Oxygen';
}

.contact_us{
    display: block;
    font-size: 18px;
    color: white;
    width: 60%;
    border-bottom: solid 1px;
    align-self: center;
    padding: 10px 50px 10px 50px;
    margin: auto;
}

.contact_us ul{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
}
.contact_us ul>li{
    display: block;
    margin-left:0;
    transition: color 0.25s ease-in;
}

.contact_us ul>li:first-child{
    font-weight: bold;
    border-bottom: solid 2px;
}

.contact_us ul>li:not(:first-child):hover{
    cursor: pointer;
    color: #35495e;
}

.social_media{
    display: block;
    align-self: right;
    margin: auto;
    margin-right: 0px;
    padding-right: 0px;
    margin-top: 20px;
    width: 30%;
}


.social_media i{
    color: white;
}

.fa {
    padding: 10px;
    font-size: 25px;
    width: 25px;
    text-align: center;
    text-decoration: none;
    margin: 5px 2px;
    border-radius: 50%;
    transition: all 0.25s ease-out;
}


.fa:hover {
color: #42b883;
}

.fa-facebook {
    background: #35495e;
    color: white;
}

.fa-twitter {
    background: #35495e;
    color: white;
}

.fa-google {
    background: #35495e;
    color: white;
}

.fa-linkedin {
    background: #35495e;
    color: white;
}

.fa-youtube {
    background: #35495e;
    color: white;
}

.fa-instagram {
    background: #35495e;
    color: white;
}

p{
    color: white;
    font-size: 18px;
    padding: 50px auto;
    border: solid 10px #42b883;

}

@media only screen and (max-width: 1200px) {
    .fa {
            padding: 7px;
            font-size: 20px;
            width: 25px;
            text-align: center;
            text-decoration: none;
            margin: 5px 2px;
            border-radius: 50%;
            transition: all 0.25s ease-out;
        }

.contact_us {
    display: block;
    font-size: 14px;
    color: white;
    width: 50%;
    border-bottom: solid 1px;
    align-self: center;
    padding: 10px 50px 10px 50px;
    margin: auto;
}

p {
    color: white;
    font-size: 14px;
    padding: 50px auto;
    border: solid 10px #42b883;

}

.footer {
    background-color: #42b883;
    width: 100%;
    /* margin-bottom: 0; */
    text-align: center;
    position: relative;
    padding: 0;
    bottom: 0;
    /* height: auto; */
    margin: 0;
    box-shadow: 0px 0px 50px #42b883;
    font-family: 'Oxygen';
}


}


@media only screen and (max-width: 900px) {
    .fa {
        padding: 5px;
        font-size: 15px;
        width: 20px;
        text-align: center;
        text-decoration: none;
        margin: 5px 2px;
        border-radius: 50%;
        transition: all 0.25s ease-out;
    }

}

@media only screen and (max-width: 600px) {
    .fa {
        padding: 5px;
        font-size: 12px;
        width: 15px;
        text-align: center;
        text-decoration: none;
        margin: 5px 2px;
        border-radius: 50%;
        transition: all 0.25s ease-out;
    }

.contact_us {
    display: block;
    font-size: 12px;
    color: white;
    width: 50%;
    border-bottom: solid 1px;
    align-self: center;
    padding: 10px 50px 10px 50px;
    margin: auto;
}

}

</style>