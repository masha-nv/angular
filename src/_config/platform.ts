import { InjectionToken } from "@angular/core";

export const PLATFORM_ID = new InjectionToken('platform_id', {
  providedIn: 'root',
  factory() {
      return 'browser'
  },

})
