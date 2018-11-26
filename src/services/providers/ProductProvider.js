import HttpProvider from './HttpProvider';

const baseUrl = 'products'

export default class ProductProvider {
    
    static getProducts(filter) {
        return HttpProvider.get(`${baseUrl}?${filter}`).then(response => response.data)
    }

    static getProduct(id) {
        return HttpProvider.get(`${baseUrl}/${id}`).then(response => response.data)
    }
}