import { AppAbility } from './src/app-ability';

declare module 'vue' {
  interface ComponentCustomProperties {
    $abilities: AppAbility;
    $can(this: this, ...args: Parameters<this['$abilities']['can']>): boolean;
  }
}
