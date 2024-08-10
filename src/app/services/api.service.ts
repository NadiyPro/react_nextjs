const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        let [response] = await Promise.all([fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())]);
        return response;
    }
}

const postService = {
    getAllPosts: async ():Promise<IPost[]> => {
        let [response] = await Promise.all([fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())]);
        return response;
    },
    getById: async (id:number):Promise<IPost[]>=> {
        let [response] = await Promise.all([fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
            .then(value => value.json())]);
        return response;
    }
};
const commentsService = {
    getAll: async ():Promise<IComment[]> => {
        let [response] = await Promise.all([fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())]);
        return response;
    },
    getById: async (id:number):Promise<IComment[]>=> {
        let [response] = await Promise.all([fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
            .then(value => value.json())]);
        return response;
    }
}

export {userService,postService,commentsService}