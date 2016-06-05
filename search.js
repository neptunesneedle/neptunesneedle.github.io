/* global instantsearch */

var search = instantsearch({
  appId: 'XCO4VPMR9R',
  apiKey: '4bf46bb5a900207b7a3ffc341272cbc1',
  indexName: 'nn',
  urlSync: true
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input',
    placeholder: 'Search Neptune''''s Needle'
  }
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    hitsPerPage: 10,
    templates: {
      item: getTemplate('hit'),
      empty: getTemplate('no-results')
    }
  })
);
search.addWidget(
  instantsearch.widgets.stats({
    container: '#stats'
  })
);







function getTemplate(templateName) {
  return document.getElementById(templateName + '-template').innerHTML;
}



search.addWidget(
  instantsearch.widgets.sortBySelector({
    container: '#sort-by',
    autoHideContainer: true,
    indices: [{
      name: search.indexName, label: 'Most relevant'
    }, {
      name: search.indexName + '_price_asc', label: 'Lowest price'
    }, {
      name: search.indexName + '_price_desc', label: 'Highest price'
    }]
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination'
  })
);



search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#category',
    attributeName: 'categories',
    limit: 10,
    operator: 'or',
    templates: {
      header: '<h5>Category</h5>'
    }
  })
);
search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#country',
    attributeName: 'country',
    limit: 10,
    operator: 'or',
    templates: {
      header: '<h5>Country</h5>'
    }
  })
);
search.addWidget(
  instantsearch.widgets.rangeSlider({
    container: '#lifespan',
    attributeName: 'lifespan',
    templates: {
      header: '<h5>Dates</h5>'
    }
  })
);









search.start();
