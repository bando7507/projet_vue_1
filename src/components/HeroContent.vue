<template>
    <div class="row">
        <div class="max-width">
            <div class="col">
                <h2><span>Delicious Food Menu, </span> <br> in Your Gadget</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <router-link to="/" class="link">Pesan</router-link>
            </div>
            <div class="col-1">
                <img src="../assets/img/ilustrasi.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeroContent',

    }
</script>

<style lang="scss" scoped>
    .row {
        .max-width{
        display: flex;
        justify-content: space-between;
        align-items: center;
        }
        .col {
            h2{
                font-size: 2rem;
                span{
                    color: #4EB883;
                }
            }
            p{
                margin: 0 0 30px 0;
            }

            .link{
                text-decoration: none;
                padding: 15px;
                background: #00d068;
                border-radius: 10px;
            }
        }

        .col-1 {
            img {
                width: 500px;
            }
        }
    }
</style>