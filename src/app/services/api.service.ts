export const getAllUsers = async (): Promise<any[]> => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    return response
}