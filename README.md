# Angular Extensions: Decorators
### `npm i @ngx-ext/decorators`

### List of decorators
1. `@Page()`
It may be useful to distinguish reusable components from pages used in the routing and with a huge probability loading necessary data. In such cases, `@Page()` decorator comes in handy. It accepts the same options as `@Component()` except "selector":
```typescript
import { Page } from '@ngx-ext/decorators';

@Page({
  templateUrl: 'home.page.html',
})
export class HomePage {}
```

2. `@AbstractClass()`
Since Angular v9 every class using properties decorators (like `@Input()`) has to be decorated. Angular update script fills that hole by adding `@Directive()` decorator, but it has its drawbacks:
   * looks misleading if applied on some parent class
   * can cause tslint error:
   > TSLint: The name of the class DeploymentGridComponent should end with the suffix Directive (https://angular.io/styleguide#style-02-03) (directive-class-suffix)

Then `@AbstractClass()` decorator comes to the rescue:
```typescript
import { AbstractClass } from '@ngx-ext/decorators';

@AbstractClass()
export abstract class ParentComponent<Parameter extends ParemeterModel> implements OnInit, OnChanges {
    @Input() iCanBeSafelyInherited: string;
}
```
