// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDP48MJlU9eW6ZvCF-M_s9bMxm80gwsIio',
    authDomain: 'propertyapp-d2365.firebaseapp.com',
    databaseURL: 'https://propertyapp-d2365.firebaseio.com',
    projectId: 'propertyapp-d2365',
    storageBucket: 'propertyapp-d2365.appspot.com',
    messagingSenderId: '276299107750'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
