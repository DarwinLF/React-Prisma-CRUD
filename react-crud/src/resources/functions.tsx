export function getAllProfiles(setProfiles: Function) {
    fetch("http://localhost:3001/profile", {method: "GET"})
        .then(response => response.json())
        .then(data => {
            setProfiles(data)}
        )
        .catch((err) => {
            console.log(err.message);
        })
}

export function selectProfile(profile: string, setUserName: Function) {
    setUserName(profile);
}