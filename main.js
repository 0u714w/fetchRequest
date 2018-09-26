let main = document.getElementById("main")



fetch("http://jservice.io/api/category?id=93/")
    .then(res => res.json())
    .then(data => console.log(data))