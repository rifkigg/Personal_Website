// Fungsi untuk menambahkan kelas 'visible' saat elemen muncul di viewport
function reveal() {
  const elements = document.querySelectorAll(".hidden");
  const windowHeight = window.innerHeight;

  elements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 50) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
}

// Panggil fungsi reveal saat scroll
window.addEventListener("scroll", reveal);
// Panggil fungsi reveal saat halaman dimuat
document.addEventListener("DOMContentLoaded", reveal);

$(document).ready(function () {
  // Show or hide the button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#toTopBtn").fadeIn();
    } else {
      $("#toTopBtn").fadeOut();
    }
  });

  // Animate the scroll to top
  $("#toTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});

function noDeploy() {
  alert("This project is not deployed yet!");
}

function handleIframeLoad() {
  alert("Data berhasil disimpan");
  window.location.reload();
  document.getElementById("contactForm").reset();
}
