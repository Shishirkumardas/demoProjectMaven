const BASE_URL = "http://localhost:8080/api/users"; // Replace with your backend URL

export async function getUsers() {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
}

export async function createUser(user) {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
}

// Other API methods for updating, deleting users