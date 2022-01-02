let ipAddress = {
    apiKey = "at_6C0jy3OsGvOeOKJCchUCca9hmJ8FN",

    fetchIp = fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_6C0jy3OsGvOeOKJCchUCca9hmJ8FN&ipAddress=8.8.8.8").then((response) => response.json())
    .then((data) => console.log(data))
}