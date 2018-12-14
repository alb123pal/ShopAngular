import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(products: [], searchProduct) {
        if (!products || ! searchProduct) {
            return products;
        }
        return products.filter(product =>
            product.name.toLowerCase().indexOf(searchProduct.toLowerCase()) !== -1);

    }
}
