function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Namanya Gak Boleh Kosong Ya Ganteng😉🫶!!");
        return false;
    }

    if (email === "") {
        alert("Email Gak Boleh Kosong Ya Ganteng😉🫶!!");
        return false;
    }

    if (subject === "") {
        alert("Subjek Gak Boleh Kosong Ya Ganteng😉🫶!!");
        return false;
    }

    if (message === "") {
        alert("Pesan Gak Boleh Kosong Ya Ganteng😉🫶!!");
        return false;
    }

    alert("YEAYY FORUM BERHASIL DI KIRIM😉🫶!!!");
    return true;
}
