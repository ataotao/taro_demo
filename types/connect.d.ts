import { EffectsCommandMap } from 'dva-core';
import React from 'react';
import * as H from 'history';

/** 全局model类型 */
export interface ConnectState {
  sys: any;
  loading: Loading;
  router: Router;
}

export interface RouterProps {
  history: H.History;
}

export class Router extends React.Component<RouterProps, any> {}

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    [key: string]: any;
  };
}

export interface Action<T = any> {
  type: T;
}

export interface AnyAction extends Action {
  // Allows any extra properties to be defined in an action.
  [extraProps: string]: any;
}

export type Reducer<S = any, A extends Action = AnyAction> = (
  state: S | undefined,
  action: A
) => S;

export type Effect = (action: AnyAction, effects: EffectsCommandMap) => void;
