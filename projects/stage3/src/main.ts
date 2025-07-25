/* eslint-disable prettier/prettier */
import { enableProdMode } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { appConfig } from 'src/app/app.config'

import { AppComponent } from './app/app.component'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
}

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err))
