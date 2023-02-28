import { inject, InjectionToken } from "@angular/core";
import { PLATFORM_ID } from "./platform";

export const WINDOW = new InjectionToken<Window>('global Window object', {
  providedIn: 'root',
  factory: () => {
    const platform = inject(PLATFORM_ID)
    return platform === 'browser' ?  window : {} as Window;
  }
})



