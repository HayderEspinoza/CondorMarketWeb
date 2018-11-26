import HttpProvider from './HttpProvider';

const baseUrl = 'categories'

export default class CategoryProvider {

    static getCategories() {
        return HttpProvider.get(baseUrl).then(response => response.data)
    }
}