function openModal(title, description, date, time, location) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal-date").innerText = date;
    document.getElementById("modal-time").innerText = time;
    document.getElementById("modal-location").innerText = location;

    const modal = document.getElementById("modal");
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
}