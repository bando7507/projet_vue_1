<template>
    <div class="food">
        <div class="max-width">
            <NavBar />
            <div class="title">
                our <strong>Foods</strong>
            </div>
            <form class="form" action="">
                <input v-model="search" @keyup="searchFoods" type="text" name="" id="">
                <button>search</button>
            </form>
        </div>
        <div class="cards">
            <div v-for="product in products" :key="product.id">
                <CardsProducts :product="product" />
            </div>
        </div>
    </div>


</template>

<script>
    import NavBar from "../components/NavBar.vue"
    import CardsProducts from "../components/CardsProducts.vue"
    import axios from 'axios'
    export default {
        name: 'FoodsContent',
        components: {
            NavBar,
            CardsProducts
        },

        data() {
            return {
                products: [],
                search: ''
            }
        },

        methods: {

            setProduct(data) {
                this.products = data

            },
            searchFoods() {
                axios
                    .get("http://localhost:3000/products?q=" + this.search)
                    .then((response) => this.setProduct(response.data), console.log(this.products))
                    .catch((error) => console.log(error))
            }


        },

        mounted() {
            axios
                .get("http://localhost:3000/products")
                .then((response) => this.setProduct(response.data), console.log(this.products))
                .catch((error) => console.log(error))


        }



    }
</script>

<style lang="scss" scoped>
    .food {
        padding: 10px 50px;

        .max-width {
            padding: 20px 30px;

            .title {
                padding: 50px 0 0 0;
                font-size: 2rem;
            }

            .form {
                width: 100%;

                input {
                    width: 80%;
                    padding: 10px;
                    border: 0;
                    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
                    outline: none;
                }

                button {
                    width: 20%;
                    padding: 10px;
                    border: 0;
                    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                }
            }
        }

        .cards {
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            padding: 20px 30px;
        }
    }
</style>