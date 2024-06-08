var appState = {
    currentPage: localStorage.getItem('currentPage') || 'home' // Halaman default atau ambil dari localStorage
};

function loadPage(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('.page-content').innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

// Fungsi untuk menampilkan konten halaman berdasarkan status navigasi
function renderPage() {
    if (appState.currentPage === 'akun') {
        loadPage('akun.html');
    } else if (appState.currentPage === 'about') {
        loadPage('about.html');
    } else if (appState.currentPage === 'contact') {
        loadPage('contact.html');
    }
}

// Fungsi untuk memuat sidebar
function loadSidebar() {
    var sidebar = document.getElementById('sidebar');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            sidebar.innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", 'sidebar.html', true); // Ganti dengan URL sidebar Anda
    xhttp.send();
}

document.addEventListener('DOMContentLoaded', function() {
    // Memuat sidebar saat halaman dimuat
    loadSidebar();

    // Memuat konten halaman saat halaman dimuat
    renderPage();

    var navLinks = document.querySelectorAll('.sidebar-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var page = event.target.getAttribute('data-page');
            appState.currentPage = page;
            localStorage.setItem('currentPage', page); // Menyimpan halaman saat ini di localStorage
            renderPage();

            // Hapus kelas 'active' dari semua item sidebar
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });

            // Tambahkan kelas 'active' ke item sidebar yang diklik
            event.target.closest('.sidebar-item').classList.add('active');
        });
    });
});
