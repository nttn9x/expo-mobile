/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/test-audio` | `/test-audio`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/test-camera-photos` | `/test-camera-photos`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/test-camera` | `/test-camera`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/test-video` | `/test-video`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/test-audio` | `/test-audio`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/test-camera-photos` | `/test-camera-photos`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/test-camera` | `/test-camera`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/test-video` | `/test-video`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/explore${`?${string}` | `#${string}` | ''}` | `/explore${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/test-audio${`?${string}` | `#${string}` | ''}` | `/test-audio${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/test-camera-photos${`?${string}` | `#${string}` | ''}` | `/test-camera-photos${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/test-camera${`?${string}` | `#${string}` | ''}` | `/test-camera${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/test-video${`?${string}` | `#${string}` | ''}` | `/test-video${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/test-audio` | `/test-audio`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/test-camera-photos` | `/test-camera-photos`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/test-camera` | `/test-camera`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/test-video` | `/test-video`; params?: Router.UnknownInputParams; } | `/+not-found` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}
