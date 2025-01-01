import { FieldValues } from "react-hook-form";

export function createAPI(baseurl: string) {



    async function fetchData<T>(url: string): Promise<T> {
        url = baseurl + url;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    async function deleteData<T>(url: string): Promise<T> {
        url = baseurl + url;
        const response = await fetch(url, {
            method: "DELETE"
        });
        const data = await response.json();
        return data;
    }

    async function postData<T>(url: string, form: FieldValues): Promise<T> {
        url = baseurl + url;
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        return data;
    };
    return { fetchData, deleteData, postData };
};

