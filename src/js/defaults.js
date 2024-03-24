/**
 * * Contains default display settings.
 * & Default order decides which parameters are displayed when.
 */

export const defaultDisplaySettings = [
    'ORDERID',       // Display order ID
    'SESSIONID',     // Display session ID
    'PROCESSID',     // Display process ID
    'FUNCTIONNAME',  // Display function name
    'TYPE',          // Display type
    'BODY'           // Display body
];

/**
 * * Contains key map.
 * & Maps display settings keys to corresponding object keys.
 */

export const keyToSettingMap = {
    ORDERID: 'orderId',             // Map ORDERID setting to orderId object key
    SESSIONID: 'sessionId',         // Map SESSIONID setting to sessionId object key
    PROCESSID: 'processId',         // Map PROCESSID setting to processId object key
    FUNCTIONNAME: 'functionName',   // Map FUNCTIONNAME setting to functionName object key
    TYPE: 'type',                   // Map TYPE setting to type object key
    BODY: 'body'                    // Map BODY setting to body object key
};
