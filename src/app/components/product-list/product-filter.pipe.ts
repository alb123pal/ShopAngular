import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(products: [], filter: {[key: string]: any }) {
        if (!products || ! filter) {
            return products;
        }
        const isFilterByNameProduct = filter.searchProduct !== 'searchProduct' && filter.searchProduct !== undefined;

        if (isFilterByNameProduct) {
            const filteredProduct = products.filter( (product: any) => {
                return product.name.toLowerCase().indexOf(filter.searchProduct.toLowerCase()) !== -1;
            });
            this.displayCaptionWhileEmptyList(filteredProduct);
            return filteredProduct;
        } else if (!!filter.displaySpecifiedPage) {
            const maxIdProduct = filter.displaySpecifiedPage.max,
                minIdProduct = filter.displaySpecifiedPage.min - 1,
                productsOnPage = this.displayProductsOnSpecifiedPage(products, minIdProduct, maxIdProduct);
            return productsOnPage;
        } else {
            const filteredProduct = products.filter(item => {
                const notMatchingField = Object.keys(filter)
                                             .find( (filterType) => {
                                                 let returnKey: any;
                                                 if (filterType === 'priceFrom') {
                                                    if (filter[filterType] > item['cost']) {
                                                        returnKey = filterType;
                                                    }
                                                 } else if (filterType === 'priceTo') {
                                                    if (filter[filterType] < item['cost']) {
                                                        returnKey = filterType;
                                                    }
                                                 } else {
                                                    if (item[filterType] !== filter[filterType]) {
                                                        returnKey = filterType;
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
