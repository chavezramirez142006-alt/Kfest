import {
  bootstrapApplication,
  BootstrapContext
} from '@angular/platform-browser';

import { App } from './app/app';

const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(App, {
    providers: []
  }, context);

export default bootstrap;