(function () {
  'use strict';

  angular
    .module('app')
    .controller('Tabs', Tabs)

  function Tabs () {
    let Tabs = this

    Tabs.tabs = [
      { label: 'updates', template: 'app/tabs/updates/updates.tpl.html' },
      { label: 'home', template: 'app/tabs/home/home.tpl.html' },
      { label: 'region', template: 'app/tabs/region/region.tpl.html' }
    ]

  }
}());
