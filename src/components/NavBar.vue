<template>
    <header>
        <div class="max-width">
            <div>
                Navbar
            </div>
            <nav v-show="!navmobile">
                <ul>
                    <!-- <li>
                        Navbar
                    </li> -->
                    <li>
                        <router-link class="link" to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link class="link" to="/Foods">Foods</router-link>
                    </li>
                </ul>
            </nav>
            <transition name="fade">
                <div class="drop" v-show="moible">
                    <nav>
                        <div>
                            <i class="fa fa-align-justify" @click="Not"></i>
                        </div>

                        <div>
                            <router-link class="link" to="/">Home</router-link>
                        </div>

                        <div>
                            <router-link class="link" to="/Foods">Foods</router-link>
                        </div>
                        <!-- <ul>
                        <li>
                            <i class="fa fa-align-justify" @click="Not"></i>
                        </li>
                        <li>
                            <router-link class="link" to="/">Home</router-link>
                        </li>
                        <li>
                            <router-link class="link" to="/Foods">Foods</router-link>
                        </li>
                        
                    </ul> -->
                    </nav>
                </div>
            </transition>
            <div class="logo">
                <router-link class="link" to="/KeranJang" v-show="!navmobile">
                    Keranjang
                    <i class="fa fa-briefcase" aria-hidden="true"></i>
                    <span class="plus">{{updateLen ? updateLen.lenght : jumlah_pesanams.length}}</span>
                </router-link>
                <i class="fa fa-align-justify" v-show="navmobile" @click="Nva"></i>
            </div>
        </div>
    </header>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'NavBar',
        data() {
            return {
                moible: null,
                navmobile: null,
                sreenWidth: null,

                jumlah_pesanams: []
            }
        },
        props:{
            updateLen : Array
        },

        created() {
            window.addEventListener('resize', this.screenCheck)
            this.screenCheck()
        },
        methods: {
            Nva() {
                this.moible = true
            },
            Not() {
                this.moible = false
            },
            screenCheck() {
                this.sreenWidth = innerWidth
                if (this.sreenWidth <= 850) {
                    this.navmobile = true
                    return;
                }
                this.navmobile = false
                return;
            },

            setJumlah(data) {
                this.jumlah_pesanams = data
            }

        },

        mounted() {
            axios
                .get("http://localhost:3000/keranjangs")
                .then((response) => this.setJumlah(response.data))
                .catch((error) => console.log(error))
        }

    }
</script>

<style lang="scss" scoped>
    header {

        .max-width {
            display: flex;
            align-items: center;
            justify-content: space-between;
            // padding: 10px 120px;

            nav {
                ul {
                    display: block;

                    li {
                        display: inline-block;

                        .link {
                            margin-left: 25px;
                            text-decoration: none;

                            .plus {}
                        }
                    }
                }
            }

            .logo {
                .link {
                    text-decoration: none;
                    color: #000;

                    i {
                        margin-left: 10px;
                    }

                    .plus {
                        margin-left: 10px;
                        padding: 4px;
                        border-radius: 3px;
                        background: #00d068;
                        color: #fff;
                        font-size: 12px;

                    }
                }
            }

            .drop {
                position: fixed;
                right: 0;
                top: 0;
                width: 200px;
                height: 100vh;
                background: #fff;
                padding: 20px 30px;
                box-shadow: rgba(0, 0, 0, 0.537) 0px 3px 12px;

                nav {
                    div {
                        padding: 10px;

                        .link {
                            text-decoration: none;
                        }
                    }
                }
            }
        }
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: 0.4s ease all;
    }

    .fade-enter-from,
    .fade-leave-to {
        transform: translateX(250px)
    }

    .fade-enter-to {
        transform: translateX(0);
    }
</style>