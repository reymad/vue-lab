<template>
<!--https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/examples/layouts/baseline.vue-->
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      white
      v-if="this.$route.meta.layout!='none'"
    >
      <v-list dense>
        <v-list-tile @click="login">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="login">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="elevation-0 default" class="black--text" v-if="this.$route.meta.layout!='none'" fixed app>
      <v-toolbar-side-icon class="black--text" @click.stop="drawer = !drawer"><v-icon>more_vert</v-icon></v-toolbar-side-icon>
      <v-toolbar-title><router-link to="/" class="toolbar-title secondary--text"> {{ appName }} </router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items right>
        <v-btn flat color="success" class="--no-rounded" to="/jesus">{{ $t("hello", ["Jesús"]) }}</v-btn>
        <v-btn flat color="primary" class="--no-rounded" to="/component1">component 1</v-btn>
        <v-btn flat color="accent" class="--no-rounded" to="/apitest">Api test</v-btn>
        <!--<span><LocaleChanger /> </span>-->
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-start
        >
        <router-view/>
        <!--
          <v-flex text-xs-center>
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon large>code</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn icon large href="https://codepen.io/johnjleider/pen/rJdVMq" target="_blank" v-on="on">
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-flex>
        -->
        </v-layout>
      </v-container>
    </v-content>

    <v-footer color="default" height="auto" app>
      &nbsp;<span class="">&copy; {{ appName }} {{ year }}</span>
      <v-spacer></v-spacer>

      <!--Locale changer-->
      <v-btn v-on="on" @click="localeChange" v-if="$i18n.locale!='en_us'" small color="primary" flat data-lang="en_us"><v-icon small color="primary">language</v-icon>&nbsp;english</v-btn>
      <v-btn v-on="on" @click="localeChange" v-if="$i18n.locale!='es_es'" small color="primary" flat data-lang="es_es"><v-icon small color="primary">language</v-icon>&nbsp;español</v-btn>
     
    </v-footer>

  </v-app>
</template>

<script>
  // imports
  import Vue from 'vue'
  import AppEvents from  './event';
  import BackendLayout from './shared/layouts/backend';
  import DefaultLayout from './shared/layouts/default';
  import NoneLayout from './shared/layouts/none';
  import LocaleChanger from '@/shared/components/LocaleChanger';


  Vue.component('backend-layout', BackendLayout);
  Vue.component('default-layout', DefaultLayout);
  Vue.component('none-layout', NoneLayout);
  const default_layout = 'default';

  // Inside console.log(window.getApp.$appInfo)
  Vue.prototype.$appInfo = 
  {
      ip: 'todo:ip',
      debug: process.env.IS_DEBUG,
      env: process.env.NODE_ENV,
  };

  // globals

  export default {
    name: 'app',
    data () {
      return {
        appName: "Reymad",
        user: null,
        drawer: false,
        year: new Date().getFullYear(),
      }
    },
    // props: ['default'],
    components: {
     LocaleChanger,
    },
    // mixin: [Mixins],
    methods: {
      login () {
        alert('todo:login')
      },
      async logout () {

      },
      localeChange($event) {
        let langcode = event.currentTarget.getAttribute('data-lang');
        // debugger;
        this.$i18n.locale = langcode;
        this.$toastr.success(this.$t("Language changed", [this.$i18n.locale]))
        // alert(this.$i18n.locale);
        // this.$forceUpdate();// vue refresh ¿?
      }
    },
    // implantacion de eventos the app
    created () {
      AppEvents.forEach(item => {
        this.$on(item.name, item.callback);
      });
      window.getApp = this;// for console
      if(process.env.IS_DEBUG){
        this.$toastr.info('Dev info', 'NODE_ENV: "development"\nIS_DEBUG: true');
      }

    },
    mounted() {
      // alert(this.$i18n.locale);
    },
    computed: {
      // see: https://itnext.io/anyway-heres-how-to-create-a-multiple-layout-system-with-vue-and-vue-router-b379baa91a05
      layout() {
        return ( (this.$route.meta.layout) || default_layout) + '-layout';

      }
    }
  }

</script>

<style lang="css">
html{
  overflow-y: auto; /* overwrite from vuetify styles */
}
.toolbar-title{
    /*font-size: 150px; */
    line-height: 150px;
    /* font-weight: 700; */
    color: #252932;
    text-decoration: none !important;
    text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 1px 0px, rgba(61, 61, 61, 0.3) 1px 1px;
}
</style>