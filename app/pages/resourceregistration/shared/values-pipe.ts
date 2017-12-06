/**
 * Created by stefanos on 9/12/2016.
 */
import { Pipe, PipeTransform } from "@angular/core";
/**
 * Created by stefanos on 23/11/2016.
 */

@Pipe({ name: 'values',  pure: false })
export class ValuesPipe implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        return Object.keys(value);
    }
}