import { Component } from '@angular/core';

@Component({
    selector: 'dropdown',
    template: `
 <div class="btn-group" dropdown>
  <button dropdownToggle type="button" class="btn btn-primary dropdown-toggle">
     <span class="caret"></span>
  </button>
  <ul *dropdownMenu class="dropdown-menu" role="menu">
    <li role="menuitem"><a class="dropdown-item" href="#">Action</a></li>
    <li role="menuitem"><a class="dropdown-item" href="#">Another action</a></li>
    <li role="menuitem"><a class="dropdown-item" href="#">Something else here</a></li>
    <li class="divider dropdown-divider"></li>
    <li role="menuitem"><a class="dropdown-item" href="#">Separated link</a>
    </li>
  </ul>
</div>
  `
})
export class DropdownComponent { }