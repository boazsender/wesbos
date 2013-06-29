require.config({

  // override data-main from script tag during dev mode
  baseUrl: '/',

  // automatically require on page load in dev mode
  deps: ['app/index'],

  // automatically require this for production build
  insertRequire: ['app/index'],

  // map bower components to nice paths
  paths: {
    text: 'components/requirejs-plugins/lib/text',
    json: 'components/requirejs-plugins/src/json',
    handlebars: 'components/handlebars/handlebars',
    lodash: 'components/lodash/lodash',
    jquery: 'components/jquery/jquery'
  },

  // load non-amd dependencies
  shim: {
    handlebars: {
      exports: 'Handlebars'
    }
  },

  // remove these modules from the final build
  stubModules: ['json', 'text']
});