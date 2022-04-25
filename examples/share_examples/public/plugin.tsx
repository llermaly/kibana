/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { SharePluginStart, SharePluginSetup } from '@kbn/share-plugin/public';
import { Plugin, CoreSetup, CoreStart } from '@kbn/core/public';
import Component from './component';
import React from 'react';

interface SetupDeps {
  share: SharePluginSetup;
}

interface StartDeps {
  share: SharePluginStart;
}

export class ShareDemoPlugin implements Plugin<void, void, SetupDeps, StartDeps> {
  public setup(core: CoreSetup<StartDeps>, { share }: SetupDeps) {
    console.log(share);
    share.register({
      id: 'demo',
      getShareMenuItems: (context: any) =>
        context.objectId !== 'lol' ? [
          {
            panel: {
              id: '1',
              title: 'Patients Report',
              content: <Component context={context} />,
            },
            shareMenuItem: {
              name: 'Patients Report',
              icon: 'document',
              sortOrder: -1,
            },
          },
        ] : []
    });
  }

  public start(core: CoreStart, { share }: StartDeps) {}

  public stop() {}
}
