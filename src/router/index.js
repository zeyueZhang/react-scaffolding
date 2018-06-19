import React from 'react'
import { Route, Switch, Redirect  } from 'react-router-dom'
// import AuthRoute from './AuthRoute'
import routesMap from './routesMap'
import asyncComponent from '@/components/AsyncComponent'

const routes = [
  /**
   * test
   */
  {
    path: routesMap.test,
    exact: true,
    component: asyncComponent(() => import('@/routes/test')),
  },
  /**
   * a页面
   */
  {
    path: routesMap.a,
    exact: true,
    component: asyncComponent(() => import('@/routes/A')),
  },
  /**
   * b页面
   */
  {
    path: routesMap.b,
    exact: true,
    component: asyncComponent(() => import('@/routes/B')),
  },
];

/**
 * Not Found
 */
const AsyncNotFound = asyncComponent(() => import('@/routes/NotFound'))

export default (
  <Switch>
    {/* === 首页 === */}
    <Redirect exact path="/" to={routesMap.test} />
    {/* <AuthRoute path={routesMap.main} component={MainLayout} /> */}
    {routes.map(
      (route, index) =>
        <Route
          key={index}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
    )}
    <Route component={AsyncNotFound}/>
    {/* Not Found */}
    <Route component={AsyncNotFound} />
  </Switch>
)