<template>
    <div class="pesanans">
        <div class="max-width">
            <NavBar />

            <div class="container">
                <img src="../assets/img/menunggu.png" alt="">
                <div class="info">
                    <div class="tlite">Seccess</div>
                    <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, rerum!
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import NavBar from "../components/NavBar.vue"
    export default {
        name: 'PaseNans',
        components: {
            NavBar,

        },

    }
</script>

<style lang="scss" scoped>
    .pesanans {
        padding: 10px 50px;

        .max-width {
            padding: 10px 50px;

            .container {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                img {
                    width: 550px;
                }

                .info {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;

                    .tlite {
                        font-size: 3rem
                    }

                    ;
                }

            }
        }

    }
</style>