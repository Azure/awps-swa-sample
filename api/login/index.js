// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

// function to generate Azure Web PubSub connection url for client.
module.exports = function (context, req, connection) {
    context.res = { body: connection };
    context.done();
  };