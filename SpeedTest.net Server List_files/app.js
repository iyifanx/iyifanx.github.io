parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"vZyd":[function(require,module,exports) {
var t=function(t){clipboard.writeText("python speedtest.py --server ".concat(t)).then(function(){},function(t){throw t})},e=algoliasearch("CY7BHF95PM","39f41a23cf1b53613fc72c7428d7ef2c"),n=instantsearch({indexName:"list",searchParameters:{facetingAfterDistinct:!0,attributesToSnippet:["extended:40"]},routing:{stateMapping:instantsearch.stateMappings.singleIndex("list")},searchClient:e});n.addWidget(instantsearch.widgets.searchBox({container:"#searchbox",placeholder:"Search for node…"})),n.addWidget(instantsearch.widgets.hits({container:"#hits",templates:{item:function(t){var e=t._highlightResult&&t._highlightResult.name?t._highlightResult.name.value:t.name,n=t._highlightResult&&t._highlightResult.country?t._highlightResult.country.value:t.country,a=t._highlightResult&&t._highlightResult.sponsor?t._highlightResult.sponsor.value:t.sponsor,i=t._highlightResult&&t._highlightResult.objectID?t._highlightResult.objectID.value:t.objectID,o="".concat(t._geoloc.lat,",").concat(t._geoloc.lon);return'\n          <h1>\n            <span\n              data-tippy-content="'.concat(t.cc,'"\n              class="flag-icon flag-icon-').concat(t.cc.toLowerCase(),' tooltip"\n            ></span>\n            <a href="').concat(t.url,'" target="_blank" ref="noopener noreferer">\n              ').concat(e,", ").concat(n,'\n            </a>\n          </h1>\n          <div class="sponsor">').concat(a,'</div>\n          <div class="meta">\n            <div class="cord">\n              <a class="tooltip"\n                href="https://www.google.com/maps/search/').concat(o,'"\n                data-tippy-content="View in Google Maps"\n                target="_blank" ref="noopener noreferer"\n              >\n                ').concat(t._geoloc.lat,", ").concat(t._geoloc.lon,'\n              </a>\n            </div>\n            <span class="id tooltip"\n              data-tippy-trigger="click"\n              data-tippy-content="Copied to clipboard"\n              data-id="').concat(i,'"\n            >\n              <i class="no-sign">#</i>').concat(i,"\n            </span>\n          </div>\n        ")}}})),n.addWidget(instantsearch.widgets.pagination({container:"#pagination"})),n.addWidget(instantsearch.widgets.refinementList({container:"#refinement-list",attribute:"country",operator:"and",limit:10,showMore:!0,showMoreLimit:30,searchable:!0,searchablePlaceholder:"Search countries"})),n.addWidget(instantsearch.widgets.stats({container:"#search-stats"})),n.start(),tippy.setDefaults({arrow:!0,arrowType:"round",animateFill:!1,animation:"shift-toward",theme:"light",delay:[50,50]}),tippy(".tooltip"),n.on("render",function(){document.querySelectorAll(".id").forEach(function(e){tippy(".tooltip"),e.addEventListener("click",function(n){n.preventDefault(),t(e.dataset.id)})})});
},{}]},{},["vZyd"], null)
//# sourceMappingURL=/lab/speedtest-list/app.5d703a87.js.map