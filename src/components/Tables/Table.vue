<script setup>
import GradeButton from '../GradeButton.vue';

const props = defineProps({
    variation: {
        type: Boolean,
        default: false
    }
})

</script>
<template>
  <div class="table-responsive">

    <table class="table">
      <thead>
        <tr>
          <th scope="col">
            <div class="d-flex align-center gap-1">
              <span class="noshrink"> Deal Id</span>

              <span class="d-flex flex-column align-center">
                <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
              </span>

            </div>
          </th>
          <th scope="col">
            <div class="d-flex align-center gap-1">
              <span> Client </span>

              <span class="d-flex flex-column align-center">
                <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
              </span>

            </div>
          </th>
          <th scope="col">
            <div class="d-flex align-center gap-1">
              <span> Originator </span>

              <span class="d-flex flex-column align-center">
                <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
              </span>

            </div>
          </th>
          <th scope="col">
            <div class="d-flex align-center gap-1">
              <span> Transactor</span>

              <span class="d-flex flex-column align-center">
                <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
              </span>

            </div>
          </th>
          <th scope="col">
            <div class="d-flex align-center gap-1">
              <span>Industry </span>

              <span class="d-flex flex-column align-center">
                <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
              </span>

            </div>
          </th>
          <th scope="col">

            <div class="d-flex align-center gap-1">
              <span> Product </span>

              <span class="d-flex flex-column align-center">
                <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
              </span>

            </div>
          </th>
          <th scope="col">

            <div class="d-flex align-center gap-1">
              <span>Status</span>

              <span class="d-flex flex-column align-center">
                <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
              </span>

            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="props.variation" @click="$router.push('pipelinedeals/detail')" v-for="(item, index) in ['amber','amber','blue','amber','red','green','blue', 'red','red']">
          <td scope="row">#CP452{{ index + 1 }}</td>
          <td>Lagos Free Zone Company</td>
          <td>Thornton John</td>
          <td>Oluyemi Rufai</td>
          <td>Inputs to Infra </td>
          <td>Gas</td>
          <td>
            <GradeButton :grade="item" />
          </td>
        </tr>
        <tr v-else @click="$router.push('pipelinedeals/detail')" v-for="(item, index) in ['blue','red', 'red', 'amber','red','green','blue', 'red','green']">
          <td scope="row">#CP452{{ index + 1 }}</td>
          <td>Banner Energy Limited</td>
          <td>Osaze Osaghae</td>
          <td>Oluyemi Rufai</td>
          <td>On-Grid Power </td>
          <td>Public Bond</td>
          <td>
            <GradeButton :grade="item" />
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<style scoped>
thead tr th {
  font-size: 12px;
  font-weight: 600;
  line-height: 14.4px;
  padding: 15px;
}

tbody tr td {
  color: var(--grey-dark, #808080);
  /* Caption */
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  padding: 20px 15px;
  cursor: pointer;
}
thead,
tr {
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.05);
}
.noshrink {
  display: flex;
  flex-shrink: 0;
}
</style>
