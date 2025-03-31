const baseURL = "https://lk-stud.api.kreosoft.space/api/";

async function LoginUser(user) {
    try {
        const res = await fetch(baseURL + "Auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }
        console.log(data);
        //return data;

    }
    catch (error) {
        console.log(error);
    }
}

export default LoginUser;