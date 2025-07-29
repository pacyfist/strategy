import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { computed, inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  readonly platform = inject(PLATFORM_ID);
  readonly isBrowser = computed(() => isPlatformBrowser(this.platform));
  readonly isServer = computed(() => isPlatformServer(this.platform));
}
