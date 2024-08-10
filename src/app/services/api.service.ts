const userService = {
    getAllUsers: async (): Promise<any[]> => {
        let [response] = await Promise.all([fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())]);
        return response;
    },
    getById: async (id:number):Promise<any>=> {
        let [response] = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json());
        return response;
    }
}

const postService = {
    getAllPosts: async ():Promise<any[]> => {
        let [response] = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json());
        return response;
    },
    getById: async (id:number):Promise<any[]>=> {
        let [response] = await fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
            .then(value => value.json());
        return response;
    }
}

const commentsService = {
    getAll: async ():Promise<any[]> => {
        let [response] = await fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json());
        return response;
    },
    getById: async (id:number):Promise<any[]>=> {
        let [response] = await fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
            .then(value => value.json());
        return response;
    }
}

export {userService,postService,commentsService}