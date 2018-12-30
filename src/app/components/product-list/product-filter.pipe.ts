import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(products: [], filter: {[key: string]: any }) {
        if (!products || ! filter) {
            return products;
        }
        if (filter.searchProduct !== 'searchProduct' && filter.searchProduct !== undefined) {
            const filteredProduct = products.filter( (product: any) => {
                return product.name.toLowerCase().indexOf(filter.searchProduct.toLowerCase()) !== -1;
            });
            if (filteredProduct.length === 0) {
                document.getElementById('emptyList').style.display = 'block';
            } else {
                document.getElementById('emptyList').style.display = 'none';
            }
            return filteredProduct;
        } else {
            return products.filter(item => {
                const notMatchingField = Object.keys(filter)
                                             .find( (key) => {
                                                 let returnKey;
                                                 if (key === 'priceFrom') {
                                                    if (filter[key] > item['cost']) {
                                                        returnKey = key;
                                                    }
                                                 } else if (key === 'priceTo') {
                                                    if (filter[key] < item['cost']) {
                                                        returnKey = key;
                                                    }
                                                 } else {
                                                    if (item[key] !== filter[key]) {
                                                        returnKey = key;
                                                     }
                                                 }
                                                 return returnKey;
                                             });
                return !notMatchingField;
            });
        }
        }
}
