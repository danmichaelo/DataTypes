<?php

/**
 * Definition of 'DataTypes' resourceloader modules.
 * When included this returns an array with all modules introduced by the 'DataTypes' extension.
 *
 * @licence GNU GPL v2+
 * @author Daniel Werner < daniel.werner@wikimedia.de >
 *
 * @codeCoverageIgnoreStart
 */
return call_user_func( function() {
	$remoteExtPathParts = explode( DIRECTORY_SEPARATOR . 'extensions' . DIRECTORY_SEPARATOR , __DIR__, 2 );

	$moduleTemplate = array(
		'localBasePath' => __DIR__ . '/resources',
		'remoteExtPath' => $remoteExtPathParts[1] . '/resources',
	);

	return array(
		'dataTypes' => $moduleTemplate + array(
			'scripts' => 'dataTypes.js', // also contains dataType.DataType constructor
			'dependencies' => array(
				'dataValues.DataValue',
				'valueParsers'
			),
		),
	);

} );
// @codeCoverageIgnoreEnd
