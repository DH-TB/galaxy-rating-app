import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'gr-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserInfoComponent),
      multi: true
    }
  ]
})
export class UserInfoComponent implements ControlValueAccessor {
  public value: string;

  onChanged: any = () => {};
  onTouched: any = () => {};


  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  recordCurrentValue() {
    this.value = new Date().toLocaleDateString();
    this.onChanged(this.value);
    this.onTouched();
  }
}
