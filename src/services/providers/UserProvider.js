import HttpProvider from './HttpProvider';

const baseUrl = 'users'

export default class UserProvider {

    static login(data) {
        return HttpProvider.post('login', data).then(response => response.data)
    }

}