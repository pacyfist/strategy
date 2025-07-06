import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { environment } from '../environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: environment.firebase_apiKey,
        authDomain: environment.firebase_authDomain,
        projectId: environment.firebase_projectId,
        storageBucket: environment.firebase_storageBucket,
        messagingSenderId: environment.firebase_messagingSenderId,
        appId: environment.firebase_appId,
      }),
    ),
    provideFirestore(() => getFirestore()),
  ],
};
