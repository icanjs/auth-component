import React from 'react';
import ReactDOM from 'react-dom';
import route from 'can-route';
import DefineMap from 'can-define/map/map';
import AuthComponent from './auth';

const RouteMap = DefineMap.extend({
  page: {
    type: 'string'
  }
});
route.data = new RouteMap({});

// Create a '/page' route.
route('{page}', {page: 'login'});

route.ready();

ReactDOM.render(
  <AuthComponent activeTab={route.data.page} />,
  document.querySelector('[root=true]')
);
