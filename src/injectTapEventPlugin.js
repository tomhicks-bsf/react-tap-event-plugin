"use strict";

var defaultClickRejectionStrategy = require("./defaultClickRejectionStrategy");

module.exports = function injectTapEventPlugin (strategyOverrides) {
  strategyOverrides = strategyOverrides || {};
  var shouldRejectClick = strategyOverrides.shouldRejectClick || defaultClickRejectionStrategy;

  var React = require("react");
  React.initializeTouchEvents(true);

  require('react/lib/EventPluginHub').injection.injectEventPluginsByName({
    "ResponderEventPlugin": require('./ResponderEventPlugin.js'),
    "TapEventPlugin":       require('./TapEventPlugin.js')(shouldRejectClick)
  });
};
