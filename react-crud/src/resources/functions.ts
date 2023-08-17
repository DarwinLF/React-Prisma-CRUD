import toast from "react-hot-toast"

export function getAllRows(table: string, setData: Function) {
    fetch(`http://localhost:3001/${table}`, {method: "GET"})
        .then(response => response.json())
        .then(data => {
            setData(data)}
        )
        .catch((err) => {
            console.log(err.message);
        })
}

export function deleteRow(table: string, searchParam: number | string) {
    fetch(`http://localhost:3001/${table}/${searchParam}`, {method: "DELETE"})
        .then(response => toast.success(`${table} deleted`))
        .catch((err) => {
            console.log(err.message);
        })
    return;
}

export function selectProfile(profile: string, setUserName: Function) {
    setUserName(profile);
}