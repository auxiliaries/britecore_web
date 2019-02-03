<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Here you could REGISTER your UNDER RISK PROPERTY! If you need any help more just contact us through
      <a href="https://britecore.com" target="_blank" rel="noopener">BriteCore Website</a>.
    </p>
    <h3>Register Your Under-Risk Property</h3>
    <b-tabs>
      <b-tab v-for="(risk_type, index) in risk_types" :id="risk_type.slug" :title="risk_type.title"
             :active="index === 0">
          <div v-for="(fi, fi_index) in risk_type.fieldimplementation_set">
            <br>
            <b-input-group v-if="fi.type === 'enum'" :prepend="fi.title">
              <select class="form-control" :id="'value-for-' + fi.id">
                <option v-for="(fc, fc_index) in fi.fieldchoice_set" :value="fc.id">{{ fc.title }}</option>
              </select>
            </b-input-group>
            <b-input-group v-if="fi.type !== 'enum'" :prepend="fi.title">
              <b-form-input :id="'value-for-' + fi.id" :pattern="fi.force ? '.{1,}' : ''"
                            :type="fi.type === 'integer' ? 'number' : fi.type"></b-form-input>
            </b-input-group>
          </div>
          <br>
          <b-form-group>
              <b-button-group>
                  <b-button variant="success" @click="showRegistrationModal">Register</b-button>
              </b-button-group>
          </b-form-group>
          <b-modal ref="registrationModalRef" hide-footer title="Needs BriteCore Decision 😉">
              <div class="d-block text-center">
                  <h3>It's under a critical decision🤪,
                      Just wait for some days to BriteCore Team take a landmark decision 😘,
                      We wish you and your properties be safe till an amazing decision 😇.
                  </h3>
              </div>
              <b-btn class="mt-3" variant="outline-danger" block @click="hideRegistrationModal">🤩 I'll wait for...</b-btn>
          </b-modal>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'RiskTypes',
  props: {
    msg: String
  },
  components: {
  },
  data() {
    return {
      risk_types: []
    }
  },
  methods: {
    refreshRiskTypes() {
      axios.get('/api/v1/insurance/risk_types/').then((response) => {
        this.risk_types = response.data;
      });
    },
    showRegistrationModal () {
      for (var i in this.$refs.registrationModalRef) {
        this.$refs.registrationModalRef[i].show()
      }
    },
    hideRegistrationModal () {
      for (var i in this.$refs.registrationModalRef) {
        this.$refs.registrationModalRef[i].hide()
      }
    }

  },
  mounted: function () {
    this.refreshRiskTypes()
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
