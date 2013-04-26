/**
 * QUnit tests for DataTypes's dataType store/factory (global dataType object).
 *
 * @since 0.1
 * @file
 * @ingroup DataTypes
 *
 * @licence GNU GPL v2+
 * @author H. Snater < mediawiki@snater.com >
 */

( function( dt, dv, $, QUnit ) {
	'use strict';

	QUnit.module( 'dataTypes.tests' );

	QUnit.test( 'Test initializing a DataType object', function( assert ) {
		// create new data type for testing and register it:
		var testDataType = new dt.DataType( 'foo', 'fooDataValueType' ),
			testDataTypeId = testDataType.getId();

		dt.registerDataType( testDataType );

		assert.ok(
			dt.hasDataType( testDataTypeId ),
			'hasDataType: Data type "' + testDataTypeId + '" is available after registering it'
		);

		assert.ok(
			$.inArray( dt.getDataTypeIds(), testDataTypeId ),
			'getDataTypes: Data type "' + testDataTypeId + '" is available.'
		);

		assert.ok(
			testDataType === dt.getDataType( testDataTypeId ),
			'getDataType: returns exact same instance of the data type which was registered before'
		);
	} );

}( dataTypes, dataValues, jQuery, QUnit ) );
