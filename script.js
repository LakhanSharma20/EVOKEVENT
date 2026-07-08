function toggleMenu() {
    let menu = document.getElementById("dropdown");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

async function bookEvent() {

    let user = localStorage.getItem("email");

    if (!user) {
        alert("Please login first!");
        window.location.href = "login.html";
        return;
    }

    let form = document.getElementById("booking");

    let data = {
        name: form[0].value,
        email: form[1].value,
        phone: form[2].value,
        date: form[3].value,
        location: form[4].value,
        eventType: form[5].value,
        description: form[6].value
    };
    if (!data.name || !data.email || !data.phone || !data.date || !data.location) {
        alert("Please fill all required fields!");
        return;
    }

    console.log(data); 

    let res = await fetch("http://localhost:5000/book", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    let result = await res.text();

    alert(result);
}