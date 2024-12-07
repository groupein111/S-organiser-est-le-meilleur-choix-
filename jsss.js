/ Fonction pour afficher une page spécifique
function showPage(pageId) {
    const loginPage = document.getElementById('login-page');
    const resetPage = document.getElementById('resetPage');

    if (pageId === 'loginPage') {
        loginPage.style.display = 'block';
        resetPage.style.display = 'none';
    } else if (pageId === 'resetPage') {
        loginPage.style.display = 'none';
        resetPage.style.display = 'block';
    }
}

// Gestion de l'événement pour afficher la page d'inscription
document.getElementById('show-signup').addEventListener('click', function() {
    alert("Rediriger vers la page d'inscription.");
});

// Gestion de l'événement pour afficher la page de réinitialisation du mot de passe
document.getElementById('show-reset').addEventListener('click', function() {
    showPage('resetPage');
});