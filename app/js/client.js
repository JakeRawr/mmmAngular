'use strict';
require('angular/angular');
var calApp = angular.module('calApp', []);

require('./cal/services/restService')(calApp);
require('./cal/controllers/mmm_controller')(calApp);
