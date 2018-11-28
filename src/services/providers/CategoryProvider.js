import HttpProvider from './HttpProvider';

const baseUrl = 'categories'

export default class CategoryProvider {

    static getCategories() {
        return HttpProvider.get(baseUrl).then(response => response.data)
    }
    
    static removeCategory(id) {
        return HttpProvider.delete(`${baseUrl}/${id}`).then(response => response.data)
    }

    static postCategory(data) {
        return HttpProvider.post(baseUrl, data).then(response => response.data)
    }

    static getCategory(id) {
        return HttpProvider.get(`${baseUrl}/${id}`).then(response => response.data)
    }

    static putCategory(id, data) {
        return HttpProvider.put(`${baseUrl}/${id}`, data).then(response => response.data)
    }
}