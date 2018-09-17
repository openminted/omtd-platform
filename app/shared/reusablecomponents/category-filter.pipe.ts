import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'categoryFilter',
    pure: false
})
export class CategoryFilterPipe implements PipeTransform {
    transform(items: any[], category: string): any {
        if (!items || !category) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.category === category);
    }
}