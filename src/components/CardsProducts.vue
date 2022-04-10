<template>
<div class="maxwidth">
    <div class="cards">
        <img :src=" '../assets/img/' + product.gambar " alt="...">
        <!-- <img src="../assets/img/nasi-rames.jpg" alt=""> -->
        <div class="info">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ab perspiciatis soluta rem libero deserunt! Sit aut du
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

        img{
            width: 100%;
        }

        .info{
        }
    }
}
</style>