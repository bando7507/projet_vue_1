<template>
    <div class="home">
        <div class="max-width">
            <NavBar />
            <HeroContent />
        </div>
        <div class="max-width2">
            <div class="text-1">
                Best <strong>Foods</strong>
            </div>
            <router-link class="link" to="/" ><i class="fa fa-eye" aria-hidden="true"></i>more...</router-link>
        </div>

        <div class="max-width3">
            <div v-for="product in products" :key="product.id">
                <CardsProducts :product="product" />
            </div>
        </div>

    </div>
</template>

<script>
    import NavBar from "../components/NavBar.vue"
    import HeroContent from '../components/HeroContent.vue'
    import CardsProducts from '../components/CardsProducts.vue'
    import axios from 'axios'
    export default {
        name: 'HomeContent',
        components: {
            NavBar,
            HeroContent,
            CardsProducts
        },

        data() {
            return {
                products: []
            }
        },

        methods: {
            setProduct(data) {
                this.products = data
            }
        },

        mounted() {
            axios
                .get("http://localhost:3000/best-products")
                .then((response) => this.setProduct(response.data))
                .catch((error) => console.log(error))



        }
    }
</script>

<style lang="scss" scoped>
    .home {
        
        .max-width {
            padding: 30px 120px 0 120px;
        }

        .max-width2 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 120px;

            .text-1 {
                font-size: 2rem;
            }

            .link {
                text-decoration: none;
                padding: 0.8rem 2rem;
                background: #00d068;
                color: #fff;
                border-radius: 10px;
                
                i{
                    color: #fff;
                    padding-right: 10px;
                }
            }

        }

        .max-width3 {
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
        }

    }


    @media (max-width:1094px) {
        .home {

            .max-width {
                padding: 10px 30px;
            }

            .max-width2 {
                padding: 20px 50px;

                .text-1 {
                    font-size: 1.7rem;
                }

                .link {
                    padding: 0.6rem 1.7rem;
                }
            }
        }
    }

    @media (max-width:791px) {
        .home {

            .max-width {
                padding: 10px 50px;
            }

            .max-width2 {
                padding: 20px 10px;

                .text-1 {
                    font-size: 1.5rem;
                }

                .link {
                    padding: 0.6rem 1.5rem;
                }
            }
        }
    }
</style>