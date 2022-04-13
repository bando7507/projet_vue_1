<template>
    <div class="food-detail">
        <div class="max-width">
            <NavBar />
            <nav>
                <ul>
                    <li>
                        <router-link class="link" to="/">Home</router-link>
                    </li><span>/</span>
                    <li>
                        <router-link class="link" to="/Foods">Foods</router-link>
                    </li><span>/</span>
                    <li>
                        <router-link class="link" to="/">Food Order</router-link>
                    </li>
                </ul>
            </nav>

            <div class="container">
                <dir class="img">
                    <img :src="'../assets/img/'+ product.gambar" alt="">
                </dir>
                <div class="info">
                    <div class="name">
                        {{product.nama}}
                        <hr>
                    </div>
                    <div class="price">
                        harga : <strong>Pr.</strong> {{product.harga}}
                    </div>
                    <form action="" v-on:submit.prevent>
                        <label for="jumlah_pemesanan">
                            Jumlah Pesan
                        </label>
                        <input type="number" v-model="pesan.jumlah_pemesanan">

                        <label for="keterangan">
                            Keterangan
                        </label>
                        <textarea name="" id="" cols="30" rows="10" v-model="pesan.keterangan"></textarea>

                        <button type="submit" class="btn" @click="pemesanan"><i class="fa fa-shopping-cart"
                                aria-hidden="true"></i>Buy...</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from "../components/NavBar.vue"
    import axios from 'axios'
    export default {
        name: 'FoodsDetails',
        components: {
            NavBar,

        },

        data() {
            return {
                product: {},
                pesan: {}

            }
        },

        methods: {
            setProduct(data) {
                this.product = data
            },

            pemesanan() {
                if (this.pesan.jumlah_pemesanan) {
                    this.pesan.products = this.product
                    axios
                        .post("http://localhost:3000/keranjangs", this.pesan)
                        .then(() => {
                            this.$router.push({ path : '/KeranJang'})
                            this.$toast.success("coool", {
                                type: "success",
                                position: "top-right",
                                duration: 1000,
                                dismissible: true

                            })
                        })
                }
                else{
                    this.$toast.error("commande d abord", {
                        type: "error",
                        position: "top-right",
                        duration: 1000,
                        dismissible: true
                    })
                }
            }
        },

        mounted() {

            axios
                .get("http://localhost:3000/products/" + this.$route.params.id)
                .then((response) => this.setProduct(response.data))
                .catch((error) => console.log(error))
        }

    }
</script>


<style lang="scss" scoped>
    .food-detail {
        padding: 10px 50px;

        .max-width {
            padding: 20px 30px;

            nav {
                margin-top: 50px;

                ul {
                    display: block;

                    li {
                        display: inline-block;
                        padding: 10px 0;


                        .link {
                            margin: 0 25px 0 15px;
                            text-decoration: none;
                        }
                    }
                }
            }

            .container {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                padding: 20px 0;

                .img {
                    img {
                        border-radius: 15px;
                        width: 600px;
                        height: 400px;
                    }
                }

                .info {
                    width: 50%;

                    .name {
                        font-size: 2.5rem;

                        hr {
                            background: #000;
                            height: 5.5px;
                            width: 100%;
                            border-top-left-radius: 15px;
                            border-top-right-radius: 15px;
                            border: none;
                            outline: none;
                        }
                    }

                    .price {
                        padding: 25px 0;
                        font-size: 1.7rem;
                    }

                    form {
                        display: flex;
                        flex-direction: column;

                        label {
                            font-size: 1.2rem;
                            padding-top: 20px;

                        }

                        input {
                            width: 100%;
                            border: 1px solid #eee;
                            border-radius: 15px;
                            padding: 10px;
                            outline: none;
                            box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
                            transition: .5s all;

                            &:focus {
                                border-color: #00d068;
                            }
                        }

                        textarea {
                            width: 100%;
                            padding: 10px;
                            height: 65px;
                            border: 1px solid #eee;
                            outline: none;
                            border-radius: 15px;
                            box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
                            transition: .5s all;

                            &:focus {
                                border-color: #00d068;
                            }
                        }

                        .btn {
                            margin-top: 20px;
                            border: none;
                            font-size: 20px;
                            padding: 10px;
                            background: #00d068;
                            border: 2.5px solid #00d068;
                            outline: none;
                            transition: .4s all;
                            color: #fff;

                            &:hover {
                                background: none;
                            }

                            i {
                                color: #fff;
                                padding-right: 10px;
                                font-size: 25px;
                            }

                        }
                    }
                }
            }
        }
    }
</style>