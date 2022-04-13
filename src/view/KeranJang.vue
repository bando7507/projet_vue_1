<template>
    <div class="keranjang">
        <div class="max-width">
            <NavBar :updateLen="keranjangs" />
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
            <div>

                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Foto</th>
                            <th>Makanan</th>
                            <th>Keterangan</th>
                            <th>Jumiah</th>
                            <th>Harga</th>
                            <th>Tatal Harga</th>
                            <th>Hapus</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(keranjang, id) in keranjangs" :key="id">
                            <td>{{id+1}}</td>
                            <td><img :src="'../assets/img/'+keranjang.products.gambar" alt="" width="200"></td>
                            <td>{{keranjang.products.nama}}</td>
                            <td>{{keranjang.keterangan ? keranjang.keterangan : "-"}}</td>
                            <td>{{keranjang.jumlah_pemesanan}}</td>
                            <td>Rp. {{keranjang.products.harga}}</td>
                            <td>Rp. {{keranjang.products.harga * keranjang.jumlah_pemesanan}}</td>
                            <td @click="deleteKeranJangs(keranjang.id)"><i class="fa fa-trash" aria-hidden="true"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Total Harga: </strong>
                            </td>
                            <td>
                                <strong>Rp. {{totalPrice}} </strong>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div class="form" v-on:submit.prevent>
                <form action="">
                    <label for="name">
                        Name
                    </label>
                    <input type="number" v-model="pesan.name">

                    <label for="combien">
                        Combien
                    </label>
                    <input type="text" v-model="pesan.combien">

                    <button type="submit" class="btn" @click="checkout"><i class="fa fa-shopping-cart"
                            aria-hidden="true"></i>Buy...</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    //import axios from 'axios'
    import NavBar from "../components/NavBar.vue"
    export default {
        name: 'KeranJang',
        components: {
            NavBar
        },

        data() {
            return {
                keranjangs: [],
                pesan: {}
            }
        },

        methods: {
            setKeranJangs(data) {
                this.keranjangs = data
            },

            deleteKeranJangs(id) {
                axios
                    .delete('http://localhost:3000/keranjangs/' + id)
                    .then(() => {
                        this.$toast.error("delete", {
                            type: "error",
                            position: "top-right",
                            duration: 3000,
                            dismissible: true,
                        })

                        //mise a jour
                        axios
                            .get('http://localhost:3000/keranjangs')
                            .then((response) => this.setKeranJangs(response.data))
                            .catch((error) => console.log(error))
                    })
                    .catch((error) => console.log(error))
            },

            checkout() {
                if (this.pesan.name && this.pesan.combien) {
                    this.pesan.keranjangs = this.keranjangs
                    axios
                        .post("http://localhost:3000/pesanans", this.pesan)
                        .then(() => {

                            //appres la commandes vide le panier
                            this.keranjangs.map(function (item) {
                                return axios
                                    .delete('http://localhost:3000/keranjangs/' + item.id)
                                    .catch((error) => console.log(error))
                            })



                            this.$router.push({
                                path: '/PesaNans'
                            })
                            this.$toast.success("coool", {
                                type: "success",
                                position: "top-right",
                                duration: 1000,
                                dismissible: true

                            })
                        })

                } else {
                    this.$toast.error("delete", {
                        type: "error",
                        position: "top-right",
                        duration: 3000,
                        dismissible: true,
                    })

                }
            }
        },

        mounted() {
            axios
                .get('http://localhost:3000/keranjangs')
                .then((response) => this.setKeranJangs(response.data))
                .catch((error) => console.log(error))

        },

        computed: {
            totalPrice() {
                return this.keranjangs.reduce(function (items, data) {
                    return items + (data.products.harga * data.jumlah_pemesanan)
                }, 0)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .keranjang {
        padding: 10px 50px;

        .max-width {
            padding: 10px 50px;

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

            table {
                width: 100%;

                thead {
                    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

                    tr {
                        th {
                            box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                        }
                    }
                }

                tbody {
                    tr {
                        td {
                            padding: 0.5em;
                            box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

                            img {
                                border-radius: 15px;
                            }

                            i {
                                cursor: pointer;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                color: red;
                                font-size: 20px;
                            }
                        }
                    }
                }
            }

            .form {
                padding: 50px 0;
                display: flex;
                flex-direction: column;

                form {
                    display: flex;
                    justify-content: flex-end;
                    flex-wrap: wrap;
                }
            }
        }
    }

    // tbody:nth-child(odd)  { background-color : #0044ff; }
    // /* Les descendants de rang pair sont stylés avec une autre couleur */
    // tbody:nth-child(even) { background-color : #ff0000; }
    // th { background-color : #20824e; padding:0.7em; }
    // td { padding:0.5em; }
</style>