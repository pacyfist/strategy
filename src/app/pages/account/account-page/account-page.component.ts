import { Component, inject } from '@angular/core';
import { PlatformService } from '../../../services/platform.service';

@Component({
  imports: [],
  templateUrl: './account-page.component.html',
})
export class AccountPageComponent {
  readonly platform = inject(PlatformService);
}
