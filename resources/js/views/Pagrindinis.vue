<template>
  <section class="section is-main-section">
      <card-component title="INFORMACIJA" icon="account-multiple">
        Duomenys atnaujinti<br>
        Likučiai: 2019-11-13<br>
        Pardavimai: 2019-10-13 --- 2019-11-13

      </card-component>     
    </section>
</template>

<script>
import CardComponent from '@/components/CardComponent'

export default {
  name: 'pagrindinis',
  components: {CardComponent},
  computed: {
  }
}
</script>
