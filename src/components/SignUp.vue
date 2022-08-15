<template>
    <div>
        <form @submit.prevent="handleSubmit">

            <label for="name" ref="name">Name</label>
            <input @focus="translate_label_name" @focusout="check_name" ref="name_input"
                id="name" type="name" v-model="name" required>


            <label for="email" ref="email">Email</label>
            <input @focus="translate_label_email" @focusout="check_email" @click="erase_error" ref="email_input"
                id="email" type="email" v-model="email" required>
            <transition name="error" mode="out-in">
                <div v-if="duplicateUser" class="error"> {{ duplicateUser }} </div>
            </transition>

            <label for="password" ref="password">Password</label>
            <input @click="translate_label_password" @focus="translate_label_password" @focusout="check_password"
                ref="password_input" id="password" type="password" v-model="password" required>
            <transition name="error" mode="out-in">
                <div v-if="passwordShort" class="error">{{ passwordShort }} </div>
            </transition>

            <label for="repassword" ref="repassword">Retype-Password</label>
            <input @click="translate_label_repassword" @focus="translate_label_repassword" @focusout="check_repassword"
                ref="repassword_input" id="repassword" type="password" v-model="repassword" required>
            <transition name="error" mode="out-in">
                <div v-if="passwordMismatch" class="error">{{ passwordMismatch }} </div>
            </transition>

            <div class="button">
                <router-link @click="handleSubmit" style="text-decoration: none; color: inherit;" to="/">
                    <button class="submit" type="submit" ref="submit">Sign up</button>
                </router-link>
            </div>
        </form>


    </div>

</template>


<script>
export default {
    

    data() {
        return {
            email: '',
            duplicateUser: '',
            password: '', 
            repassword: '',
            passwordShort: '',
            passwordMismatch: '',
            name: '',
            error: 'true',
            users:[
                {
                    email: 'kh@kh',
                    password: '1234567',
                },
            ],
        }
    },
    methods: {

        translate_label_name() {
            setTimeout(() => {
                this.$refs.name.classList.add('email_clicked')
            }, 50)
            this.$refs.name_input.style.borderColor = "#42b883"
            this.$refs.name_input.style.outline = "none"
            // this.duplicateUser = ''
        },


        translate_label_email(){
            setTimeout(() => {
           this.$refs.email.classList.add('email_clicked')
            }, 50)    
            this.$refs.email_input.style.borderColor ="#42b883"        
            this.$refs.email_input.style.outline = "none"
            // this.duplicateUser = ''
        },

        translate_label_password() {           
            setTimeout(() => {
                this.$refs.password.classList.add('email_clicked')
            }, 50)
            this.$refs.password_input.style.borderColor = "#42b883"
            this.$refs.password_input.style.outline = "none"
        },

        translate_label_repassword() {
            setTimeout(() => {
                this.$refs.repassword.classList.add('email_clicked')
            }, 50)
            this.$refs.repassword_input.style.borderColor = "#42b883"
            this.$refs.repassword_input.style.outline = "none"
        },

        check_email(){
            console.log(this.email)
            // Validate user not already exists
            this.duplicateUser = this.users.filter(e => e.email === this.email).length<=0 ?
                '' : 'Email already exists !'
                console.log(JSON.stringify(this.users))
        },

        erase_error(){
            this.duplicateUser = ''
        },

        check_password(){
            //Validate password field length
            this.passwordShort = this.password.length > 6 ?
                '' : 'Password should be more than 6 characters long!';
        },

        check_repassword(){

            //Validate password mismatch
            this.passwordMismatch = this.password === this.repassword ?
                '' : 'Password Mismatch !'   
            this.error = !this.duplicateUser && !this.passwordMismatch && !this.passwordShort       
        },

        handleSubmit() {           

            if (!this.duplicateUser && !this.passwordMismatch && !this.passwordShort) {              
                this.users.push({'email': this.email, 'password': this.password}) 
                console.log(JSON.stringify(this.users))
                this.emitter.emit('my-event', {'email':this.name, 'logged': true})
            }
        }
    }

}
</script>


<style scoped>




















 form {
     max-width: 600px;
     margin: 50px auto;
     background: #fff;
     text-align: left;
     padding: 50px;
     box-shadow: 0px 0px 10px white;
    font-family: 'Oxygen';
}

 label {
     color: #35495E;
     display: inline-block;
     margin: 0px ;
     padding: 0px;
    transform: translate(5px, 28px);
 }

 input,
 select {
     display: block;
     padding: 5px 5px;
     margin: auto;
     width: 100%;
     align-self: center;
     box-sizing: bordre-box;
     border: none;
     font-size: 1rem;
     border-bottom: 1px solid #ddd;
     color: #35495E;
 }

 input[type="checkbox"] {
     display: inline-block;
     width: 16px;
     margin: 0 10px 0;
     position: relative;
     top: 2px;
 }

 .pill {
     display: inline-block;
     margin: 20px 10px 0 0;
     padding: 6px 12px;
     border-radius: 20px;
     font-size: 12px;
     cursor: pointer;
     background: #eee;
 }

 .email_clicked{
    transform: translate(0px, 0px);
    font-size: 12px;
    transition: all 0.25s ease-in-out;
 }

 button {
     background: rgb(7, 24, 7);
     border: solid 2px #42b883;
     margin: 20px auto;
     padding: 10px 20px;
     color: white;
     background: #35495E;
    font-family: 'Oxygen';
    
 }

 .submit {
     text-align: center;
 }

 .error {
     color: #ff0000;
     margin-top: 10px;
     font-size: 0.8em;
     font-weight: bold;
 }

 .error-leave-from,
 .error-enter-to{
    opacity: 1;
    transform: translateY(0);
 }

 .error-leave-to,
 .error-enter-from{
    opacity: 1;
    transform: translateY(-20px);
 }

 .error-leave-active,
 .error-enter-active{
    transition: all 0.3s ease-in-out;
    /* animation: wobble 0.5s ease-in-out; */
 }

 @keyframes wobble{
    0% {
        transform: translateY(-20px); 
        opacity: 0;
        }

    50% {
        transform: translateY(0px);
        opacity: 1;
    }

    60% {
        transform: translateX(8px);
    }

    70% {
        transform: translateX(-8px);
    }

    80% {
        transform: translateX(4px);
    }

    90% {
        transform: translateX(-4px);
    }

    100% {
        transform: translateX(0px);
    }
 }

 @media only screen and (max-width: 900px) {
    form {
            max-width: 50%;
            margin: 50px auto;
            background: #fff;
            text-align: left;
            padding: 50px;
            box-shadow: 0px 0px 10px white;
            font-family: 'Oxygen';
        }

input,
select {
    display: block;
    padding: 5px 5px;
    margin: auto;
    width: 100%;
    align-self: center;
    box-sizing: bordre-box;
    border: none;
    font-size: 0.8rem;
    border-bottom: 1px solid #ddd;
    color: #35495E;
}

label {
    font-size: 0.8rem;
    color: #35495E;
    display: inline-block;
    margin: 0px;
    padding: 5px 0px;
    transform: translate(5px, 28px);
}


 }

 @media only screen and (max-width: 600px) {
     form {
         max-width: 40%;
         margin: 50px auto;
         background: #fff;
         text-align: left;
         padding: 50px;
         box-shadow: 0px 0px 10px white;
         font-family: 'Oxygen';
     }

input,
select {
    display: block;
    padding: 5px 5px;
    margin: auto;
    width: 100%;
    align-self: center;
    box-sizing: bordre-box;
    border: none;
    font-size: 0.7rem;
    border-bottom: 1px solid #ddd;
    color: #35495E;
}

button {
    background: rgb(7, 24, 7);
    border: solid 2px #42b883;
    font-size: 0.7rem;
    margin: 10px auto;
    padding: 5px 10px;
    color: white;
    background: #35495E;
    font-family: 'Oxygen';

}

label {
    color: #35495E;
    display: inline-block;
    margin: 0px;
    padding: 0px;    
    font-size: 0.8rem;
    transform: translate(5px, 18px);
}

.email_clicked {
    transform: translate(0px, 0px);
    font-size: 0.6rem;
    transition: all 0.25s ease-in-out;
}

.error {
    color: #ff0000;
    margin-top: 10px;
    font-size: 0.6em;
    font-weight: bold;
}

 }


</style>