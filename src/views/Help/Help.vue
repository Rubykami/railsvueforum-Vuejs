<template>
    <WelcomeSection/>
    <div style="display: flex">
        <section class="main__helppagelist">
            <span class="main__helppagelist__title">
                <font-awesome-icon class="main__helppagelist__title__icon" icon="fa-solid fa-file" />
                Help
            </span>
            <div class="main__helppagelist__content">
                <RouterLink to="#" class="main__helppagelist__content__item">Smillies</RouterLink>
                <RouterLink to="#"  class="main__helppagelist__content__item">BB codes</RouterLink>
                <RouterLink to="#"  class="main__helppagelist__content__item">Trophies</RouterLink>
                <RouterLink to="#"  class="main__helppagelist__content__item">Cookie Usage</RouterLink>
                <RouterLink to="#"  class="main__helppagelist__content__item">Rules</RouterLink>
                <RouterLink to="#"  class="main__helppagelist__content__item">Privacy policy</RouterLink>
            </div>
        </section>
        <section class="main__helppagecontent">
            <div class="main__helppagecontent__contentdivision">
                <RouterLink to="#" class="main__helppagecontent__contentdivision__title"> Smillies</RouterLink>
                <RouterLink to="#" class="main__helppagecontent__contentdivision__link">This shows a full list of the smilies you can insert when posting a message.</RouterLink>
            </div>
            <div class="main__helppagecontent__contentdivision">
                <RouterLink to="#" class="main__helppagecontent__contentdivision__title"> BB Codes</RouterLink>
                <RouterLink to="#" class="main__helppagecontent__contentdivision__link">The list of BB codes you can use to spice up the look of your messages. This page shows a list of all BB codes that are available.</RouterLink>
            </div>
            <div class="main__helppagecontent__contentdivision">
                <RouterLink to="#" class="main__helppagecontent__contentdivision__title"> Trophies</RouterLink>
                <RouterLink to="#" class="main__helppagecontent__contentdivision__link">You can earn trophies by carrying out different actions. This page shows a list of the trophies that are available.</RouterLink>
            </div>
            <div class="main__helppagecontent__contentdivision">
                <RouterLink to="#" class="main__helppagecontent__contentdivision__title"> Cookie Usage</RouterLink>
                <RouterLink to="#" class="main__helppagecontent__contentdivision__link">This page explains how this site uses cookies.</RouterLink>
            </div>
            <div class="main__helppagecontent__contentdivision">
                <RouterLink to="#" class="main__helppagecontent__contentdivision__title"> Rules </RouterLink>
                <RouterLink to="#" class="main__helppagecontent__contentdivision__link">A list of rules users must stick to.</RouterLink>
            </div>
            <div class="main__helppagecontent__contentdivision">
                <RouterLink to="#" class="main__helppagecontent__contentdivision__title"> Privacy policy </RouterLink>
                <RouterLink to="#" class="main__helppagecontent__contentdivision__link">You must accept this policy before using the site.</RouterLink>
            </div>
        </section>
    </div>
    
</template>

<script lang="ts" setup>

import WelcomeSection from '@/components/WelcomeSection/WelcomeSection.vue'

</script>

<style lang="scss" src="./styles.scss"/>
