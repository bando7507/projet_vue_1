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
    padding: 10px 0px 10px 100px ;
    .cards{
        position: relative;
        width: 250px;
        height: 300px;
        // border: 2px solid #000;
        border-radius: 10px;
        padding: 10px;
        box-shadow: rgba(0, 0, 0, 0.537) 0px 3px 12px;

        img{
            width: 100%;
        }

        .info{
            
            .title{
                padding: 15px 0;
            }
        }
    }
}
</style>