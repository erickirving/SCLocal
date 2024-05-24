/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zmm_sprpserco/zmm_sprpserco/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
