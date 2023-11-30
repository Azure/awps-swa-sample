// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

// function for auth.
module.exports = function (context, req, wpsReq) {
    context.log("response connect");
    context.log(wpsReq.request.connectionContext.userId);
    context.res = { body: {"userId": wpsReq.request.connectionContext.userId} };
    context.done();
  };
  
