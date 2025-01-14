/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { IRouter, HttpSetup } from '@kbn/core/server';
import { RANDOM_NUMBER_ROUTE_PATH } from '../../common';

/**
 *
 * @param router Registers a get route that returns a random number between one and ten. It has no input
 * parameters, and returns a random number in the body.
 */
export function registerGetRandomNumberRoute(router: IRouter, http: HttpSetup ) {
  router.get(
    {
      path: RANDOM_NUMBER_ROUTE_PATH,
      validate: {},
    },
    async (context, request, response) => {
      const xd = await core.http.get('/internal/security/me');
      console.log("RESPONSE FROM USER DATA");
      console.log(xd);
      const externalRes = await fetch('https://random-data-api.com/api/stripe/random_stripe');
      const data = await externalRes.json();
      console.log('externalRes service on localhost:6969');
      console.log(data)
      return response.ok({
        body: {
          randomNumber: Math.random() * 10,
        },
      });
    }
  );
}
