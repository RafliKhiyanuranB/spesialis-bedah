// Membuat Tampilan Tabel
function change(checkbox){
    const row=checkbox.closest('tr');
    if (checkbox.checked) {
        row.style.backgroundColor='lightgreen';
    }else{
        row.style.backgroundColor='lightcoral';
    }
}

// Untuk mengubah warna baris tabel saat halaman dimuat
window.onload=function(){
    const allbox=document.querySelectorAll('input[type="checkbox"]');
    for(let i=0; i,allbox.length; i++){
        change(allbox[i]);
    }
}