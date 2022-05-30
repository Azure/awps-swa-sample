// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

// function to send broadcast message.
module.exports = async function (context, req, wpsReq) {
    if (wpsReq.request == null)
    {
      return wpsReq.response;
    }
    else {
      context.bindings.actions = {
        "actionName": "sendToAll",
        "data": wpsReq.request.data,
        "dataType": wpsReq.request.dataType
      };
  
      return { body: { from: '[System]', content: 'ack.'} };
    }
  };
  