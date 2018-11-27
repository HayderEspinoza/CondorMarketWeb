import HttpProvider from './HttpProvider';

const baseUrl = 'orders'

export default class OrderProvider {

    static sendOrder(data) {
        return HttpProvider.post(`${baseUrl}`, data).then(response => response.data)
    }

    static getOrder() {
        return HttpProvider.get(`${baseUrl}`).then(response => response.data)
    }
}