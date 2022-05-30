// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

// function required to respond to AbuseProtection from Azure Web PubSub service.
module.exports = async function (context, req, wpsReq) {
    return wpsReq.response;
  }
  