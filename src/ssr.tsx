import type { ComponentType, FunctionComponent, JSX } from "preact";
import { h, Fragment } from "preact";

// eslint-disable-next-line import/no-mutable-exports
let wrap = (App: ComponentType): ComponentType => App;

// For SSR only: wrap the app to collect and append styles
if (process.env.SSR) {
  // eslint-disable-next-line no-undef
  const jsdom = __non_webpack_require__(`jsdom`);
  // @ts-expect-error
  global.DOMParser = new jsdom.JSDOM().window.DOMParser;
  // We use require() here so that these large interfaces don't get bundled into the client:
  const { ServerStyleSheet, StyleSheetManager }: typeof import("styled-components") = require("styled-components"); // eslint-disable-line

  wrap = (App: ComponentType): ComponentType => {
    const sheet = new ServerStyleSheet();

    // **This wrapper component is required.**
    // It ensures getStyleElement() runs only after <App> has been rendered.
    // Here's how:
    //   VDOM is rendered depth-first, and children are rendered in first-to-last order.
    //   By wrapping `sheet.getStyleElement()` in a component and placing that component
    //   *after* <StyleSheetManager><App/></StyleSheetManager>, we leverage the fact that
    //   <StyleTags> will always be "rendered" (and thus called) after <App> is rendered.
    //   This ensures `getStyleElement()` is invoked after rendering App, when styles are collected.
    const StyleTags = (): JSX.Element =>
      // styled-components typings are broken and explicitly force React.Element, so we override:
       (sheet.getStyleElement() as unknown) as JSX.Element;
    const SSRApp: FunctionComponent = (props) => (
      <Fragment>
        <StyleSheetManager sheet={sheet.instance}>
          <App {...props} />
        </StyleSheetManager>
        <StyleTags />
      </Fragment>
    );

    return SSRApp;
  };
}

export { wrap };
