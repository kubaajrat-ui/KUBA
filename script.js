function addCargo() {
    let cargo = document.getElementById("cargo").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let driver = document.getElementById("driver").value;

    if (cargo === "" || from === "" || to === "" || driver === "") {
        alert("Бардык талааларды толтуруңуз!");
        return;
    }

    let li = document.createElement("li");
    li.textContent =
        "Жүк: " + cargo +
        " | Кайдан: " + from +
        " | Каякка: " + to +
        " | Айдоочу: " + driver;

    document.getElementById("cargoList").appendChild(li);

    document.getElementById("cargo").value = "";
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
    document.getElementById("driver").value = "";
}
