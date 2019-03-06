import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Pipe({
  name: 'sanitizeResourceUrl'
})
export class SanitizeResourceUrlPipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) {}
  transform(value: any, args?: any): SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
