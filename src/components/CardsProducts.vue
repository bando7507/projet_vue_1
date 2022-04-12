<template>
<div class="maxwidth">
    <div class="cards">
        <img :src=" '../assets/img/' + product.gambar " alt="...">
        <!-- <img src="../assets/img/nasi-rames.jpg" alt=""> -->
        <div class="info">
            <div class="title">
                {{ product.nama }}
            </div>
            <div class="price">
                harga: {{ product.harga}}
            </div>
            <router-link :to="{name: 'FoodsDetailds', params: {id: product.id }}" class="link"><i class="fa fa-shopping-cart" aria-hidden="true"></i>Achat...</router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'CardsProducts',
    props:['product']
    


}
</script>


<style lang="scss" scoped>

.maxwidth{
    padding: 10px 0;
    .cards{
        position: relative;
        width: 350px;
        height: 420px;
        // border: 2px solid #000;
        border-radius: 15px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

        img{
            width: 350px;
            height: 250px;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
        }

        .info{
            padding: 15px 20px;

            .title{
                padding: 10px 20px;
            }

            .price{
                padding: 20px 20px;
            }

            .link{
                text-decoration: none;
                background: #00d068;
                padding: .6rem 1.5rem;
                border-radius: 15px;
                margin-left: 15px;
                color: #fff;

                i{
                    color: #fff;
                    padding-right: 10px;
                }
            }
        }
    }
}

</style>