<template>
    <header>
        <div class="max-width">
            <nav>
                <ul>
                    <li>
                        Navbar
                    </li>
                    <li>
                        <router-link class="link" to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link class="link" to="/Foods">Foods</router-link>
                    </li>
                </ul>
            </nav>
            <div class="logo">
                <router-link class="link" to="/">
                Keranjang
                <i class="fa fa-briefcase" aria-hidden="true"></i>
                <span class="plus">0</span>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'NavBar',

    }
</script>

<style lang="scss" scoped>
    header {

        .max-width {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 80px;

            nav {
                ul {
                    display: block;

                    li {
                        display: inline-block;

                        .link {
                            margin-left: 20px;
                            text-decoration: none;

                            .plus{

                            }
                        }
                    }
                }
            }

            .logo{
                .link{
                    text-decoration: none;
                    i{
                        margin-left: 10px;
                    }

                    .plus{
                        margin-left: 10px;
                        padding: 3px;
                        border-radius: 3px;
                        background: rgb(101, 182, 66);
                        
                    }
                }
            }
        }
    }
</style>