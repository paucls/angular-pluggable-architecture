# angular-pluggable-architecture
This is the code example for my article [Angular pluggable architecture?](https://paucls.wordpress.com/2018/05/10/angular-pluggable-architecture/), an Angular application that allows to dynamically plug functionality.

The application is a simple Dashboard with Widgets that are loaded
at runtime from external sources.

![app screenshot](dashboard.gif)

This repo contains:
- dahboard - An Angular CLI project that provides a widgets dashboard. To keep it simple all the logic in charge of dinamically fetching and compilings widgets is in the `dashboard.component.ts`.
- widgets-repo - External repository from where the widgets configuration and bundles are served. (for this demo it is only static content served via http-server).
- wiget-hello - An example of widget component containing nested sub-components.
- wiget-quotes - An example of widget component that uses a service to retrieve quotes from an API.
- widget-todays-date - Another widget component.

## Running the demo
- Build all widgets
```
./build_widgets.sh
```
- Start the widgets-repo
```
cd widgets-repo && yarn start
```
- Start dashboard app
```
cd dashboard && yarn start
```

## To do
- Support production build with AOT.
- Widgets with separated template and css files should be compiled and inlined during the bundle build. Configure rollup to do that or use ng-packagr.

## References
- Developing with Angular, Denys Vuika.
https://github.com/DenisVuyka/developing-with-angular/tree/master/angular/plugins
- As busy as a bee — lazy loading in the Angular CLI, David Herges
https://blog.angularindepth.com/as-busy-as-a-bee-lazy-loading-in-the-angular-cli-d2812141637f
... how does lazy loading in the Angular CLI work under the hood?
- How to load dynamic external components into Angular application?
https://stackoverflow.com/questions/45503497/how-to-load-dynamic-external-components-into-angular-application/45506470#45506470
- Here is what you need to know about dynamic components in Angular, Maxim Koretskyi
https://blog.angularindepth.com/here-is-what-you-need-to-know-about-dynamic-components-in-angular-ac1e96167f9e
- Modules are not what you think they are, Maxim Koretskyi
https://youtu.be/pERhnBBae2k
- Extension mechanism demo
https://github.com/maximusk/extension-mechanism-demo
- JIT Complier needed with AOT Build for Dynamic Component.
https://github.com/angular/angular/issues/20875
