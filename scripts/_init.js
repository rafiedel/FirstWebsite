// mendapatkan modal element dari DOM
const failBox = document.querySelector('#failed');

// fungsi untuk menampilkan modal
function showFail() {
  failBox.classList.add('display');

  // menyembunyikan modal setelah 3 detik
  setTimeout(function() {
    failBox.classList.remove('display')
  }, 3000)
}


function goToWeb()
{
    location.href = './aboutme.html';
}

