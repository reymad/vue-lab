<template>

<!-- old way
 <div class="locale-changer">
    <b-form-select v-model="$i18n.locale"  class="mb-1" @change="langChanged">
    
      <template slot="first">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.code" :selected="($i18n.locale==lang.code)">{{ lang.text }}</option>
      </template>
    </b-form-select>
</div>
-->

        <v-flex xs6 right>

            <v-select with="auto"
            class="text--small"
            v-model="$i18n.locale"
            item-text="text"
            item-value="code"
            :items="langs"
            menu-props="auto"
            hide-details
            single-line
            prepend-inner-icon="language"
            hide-selected
            @change="langChanged"           
            ></v-select>

        </v-flex>

</template>


<script>
export default {
  // name: 'LanguageSwipper',
  data () {
    return {
        langs: [
            { code: 'en_us', text: 'English (us)' },
            { code: 'es_es', text: 'Español (es)' },
        ]
    }
  },
  mounted(){
      // filtering an object by prop (it works)
      // let cur_lang = this.langs.filter(lang => lang.code === this.$i18n.locale );
      // console.info(cur_lang[0].text);
      // this.current_lang = cur_lang[0].text;
  },
  methods: {
      langChanged(){
          this.$toastr.success(this.$t("Language changed", [this.$i18n.locale]))
      }
  }
}
</script>


<style lang="css" scoped>
    .locale-changer{
        width: auto;
    }
</style>