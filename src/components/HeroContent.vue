<template>
    <div class="row">
        <div class="max-width" v-show="!navmobile">
            <div class="col">
                <h2><span>Delicious Food Menu, </span> <br> in Your Gadget</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <router-link to="/Foods" class="link"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>Pesan
                </router-link>
            </div>
            <div class="col-1">
                <img src="../assets/img/ilustrasi.png" alt="">
            </div>
        </div>

        <div class="max-width-2" v-show="moible">
            <div class="col-1">
                <img src="../assets/img/ilustrasi.png" alt="">
            </div>
            <div class="col">
                <h2><span>Delicious Food Menu, </span> <br> in Your Gadget</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <router-link to="/Foods" class="link"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>Pesan
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeroContent',
        data() {
            return {
                moible: null,
                navmobile: null,
                sreenWidth: null
            }
        },
        created() {
            window.addEventListener('resize', this.screenCheck)
            this.screenCheck()
        },

        methods: {
            screenCheck() {
                this.sreenWidth = innerWidth
                if (this.sreenWidth <= 850) {
                    this.navmobile = true
                    this.moible = true
                    return;
                }
                this.navmobile = false
                this.moible = false
                return;
            }
        }

    }
</script>

<style lang="scss" scoped>
    .row {
        .max-width {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
        }

        .col {
            h2 {
                font-size: 2rem;

                span {
                    color: #4EB883;
                }
            }

            p {
                margin: 0 0 30px 0;
            }

            .link {
                text-decoration: none;
                padding: 15px;
                background: #00d068;
                border-radius: 10px;
                color: #fff;

                i{
                    color: #fff;
                    padding-right: 10px;
                }
            }
        }

        .col-1 {
            img {
                width: 450px;
            }
        }


        .max-width-2 {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 25px 0;

            .col-1 {
            img {
                width: 250px;
            }
        }
        }
    }


    @media (max-width:916px) {
        .row {
            .col-1 {
                img {
                    width: 350px;
                }
            }
        }
    }
</style>