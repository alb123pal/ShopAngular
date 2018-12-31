import { PipeTransform, Pipe, ɵConsole } from '@angular/core';

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
            return filteredProduct;
        } else if (!!filter.displaySpecifiedPage) {
            const max = filter.displaySpecifiedPage.max,
            min = filter.displaySpecifiedPage.min - 1;
            const productsOnPage = this.displayProductsOnSpecifiedPage(products, min, max);
            return productsOnPage;
        } else {
            const filteredProduct = products.filter(item => {
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
            this.displayCaptionWhileEmptyList(filteredProduct);
            return filteredProduct;

        }}
        displayCaptionWhileEmptyList(filteredProduct) {
            if (filteredProduct.length === 0) {
                document.getElementById('emptyList').style.display = 'block';
            } else {
                document.getElementById('emptyList').style.display = 'none';
            }
        }
        displayProductsOnSpecifiedPage(products, min = 0, max = 4) {
            const productsOnPage = products.slice(min, max);
            return productsOnPage;
        }
}
