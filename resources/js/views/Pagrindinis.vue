<template>
  <section class="section is-main-section">
      <card-component title="INFORMACIJA" icon="account-multiple">
        Duomenys atnaujinti<br>
        Likučiai: 2019-10-28<br>
        Pardavimai: 2019-09-28 --- 2019-10-28

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
