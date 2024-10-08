// SPDX-License-Identifier: GNU-3.0

import React, { FC, LazyExoticComponent } from 'react';

export type BasicRouteType = {
  path: string;
  component?: LazyExoticComponent<FC>;
  redirect?: string;
  children?: BasicRouteType[];
};

export const scannerRouters: BasicRouteType[] = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', component: React.lazy(() => import('../pages/dashboard/index')) },
  {
    path: '/deployments',
    component: React.lazy(() => import('../pages/projectDeploymentRewards/index')),
  },
  {
    path: '/deployments/:id',
    component: React.lazy(() => import('../pages/projectDetail/index')),
  },
  {
    path: '/operators',
    component: React.lazy(() => import('../pages/nodeOperators/index')),
  },
  {
    path: '/operators/:id',
    component: React.lazy(() => import('../pages/nodeOperatorDetail/index')),
  },
];
