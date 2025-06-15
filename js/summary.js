function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;

// Validasi nama lengkap (alfabet dan spasi)
function validateFullName(fullName) {
    const nameRegex = /^[a-zA-Z\s]{4}$/;
    if (!fullName) {
        showError('fullNameError', 'Nama Kelompok Pengirim wajib diisi');
        return false;
    }
    if (!nameRegex.test(fullName)) {
        showError('fullNameError', 'Nama hanya boleh berisi huruf dan spasi (4 karakter)');
        return false;
    }
    clearError('fullNameError');
    return true;
}
 // Melakukan semua validasi
    const isFullNameValid = validateFullName(fullName);
