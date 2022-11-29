const baseUrl = 'https://sandbox-api.whello.io';
const baseHeaders = {
    Accept: 'application/json',
    'Content-type': 'application/json'
};

export async function createClient(user) {
    const {role, id, ...attributes} = user;
    const request = await fetch(`${baseUrl}/test/userTest/${id}`, {
        method: 'POST',
        headers: {
            ...baseHeaders
        },
        body: JSON.stringify({
            attributes,
            pwd: "123456",
            status: "ACTIVE",
            roles: {
                whello: [
                    role
                ]
            },
        })
    })

    return request.data;
}

export async function getUsers(){
    const request = await fetch(`${baseUrl}/test/userTest`, {
        method: 'get'
    });

    return (await request.json())?.data;
}
export async function getUserById(id){
    const request = await fetch(`${baseUrl}/test/userTest/${id}`, {
        method: 'get'
    });

    return (await request.json())?.data;
}

export async function dropUser(id){
    const request = await fetch(`${baseUrl}/test/userTest/${id}`, {
        method: 'delete'
    });

    return (await request.json())?.data;
}

export async function updateUser(user){
    const {role, id, ...attributes} = user;
    const request = await fetch(`${baseUrl}/test/userTest/${id}`, {
        method: 'PUT',
        headers: {
            ...baseHeaders
        },
        body: JSON.stringify({
            attributes,
            pwd: "123456",
            status: "ACTIVE",
            roles: {
                whello: [
                    role
                ]
            },
        })
    });

    return (await request.json())?.data;
}
