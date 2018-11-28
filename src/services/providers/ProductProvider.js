import HttpProvider from './HttpProvider';

const baseUrl = 'products'

export default class ProductProvider {
    
    static getProducts(filter) {
        return HttpProvider.get(`${baseUrl}?${filter}`).then(response => response.data)
    }

    static getProduct(id) {
        return HttpProvider.get(`${baseUrl}/${id}`).then(response => response.data)
    }

    static postProduct(data) {
        return HttpProvider.post(baseUrl, data).then(response => response.data)
    }

    static deleteProduct(id) {
        return HttpProvider.delete(`${baseUrl}/${id}`).then(response => response.data)
    }
}