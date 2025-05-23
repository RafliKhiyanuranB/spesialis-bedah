// Fungsi untuk menampilkan pesan error
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

// Fungsi untuk menghapus pesan error
function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = '';
}

// Validasi nama lengkap (alfabet dan spasi)
function validateFullName(fullName) {
    const nameRegex = /^[a-zA-Z\s]{3,50}$/;
    if (!fullName) {
        showError('fullNameError', 'Nama lengkap wajib diisi');
        return false;
    }
    if (!nameRegex.test(fullName)) {
        showError('fullNameError', 'Nama hanya boleh berisi huruf dan spasi (3-50 karakter)');
        return false;
    }
    clearError('fullNameError');
    return true;
}

// Validasi NIM (16 digit numerik)
function validateNIM(nim) {
    const nimRegex = /^\d{16}$/;
    if (!nim) {
        showError('nimError', 'NIM wajib diisi');
        return false;
    }
    if (!nimRegex.test(nim)) {
        showError('nimError', 'NIM harus berupa 16 digit angka');
        return false;
    }
    clearError('nimError');
    return true;
}

// Validasi email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        showError('emailError', 'Email wajib diisi');
        return false;
    }
    if (!emailRegex.test(email)) {
        showError('emailError', 'Format email tidak valid');
        return false;
    }
    clearError('emailError');
    return true;
}

// Validasi nomor telepon (format Indonesia)
function validatePhone(phone) {
    const phoneRegex = /^08[1-9][0-9]{7,10}$/;
    if (!phone) {
        showError('phoneError', 'Nomor telepon wajib diisi');
        return false;
    }
    if (!phoneRegex.test(phone)) {
        showError('phoneError', 'Format nomor telepon tidak valid (contoh: 08123456789)');
        return false;
    }
    clearError('phoneError');
    return true;
}

// Validasi tanggal lahir (tidak boleh di masa depan)
function validateBirthDate(birthDate) {
    if (!birthDate) {
        showError('birthDateError', 'Tanggal lahir wajib diisi');
        return false;
    }
    const today = new Date();
    const selectedDate = new Date(birthDate);
    if (selectedDate > today) {
        showError('birthDateError', 'Tanggal lahir tidak boleh di masa depan');
        return false;
    }
    clearError('birthDateError');
    return true;
}

// Validasi jenis kelamin (radio button)
function validateGender() {
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        showError('genderError', 'Jenis kelamin wajib dipilih');
        return false;
    }
    clearError('genderError');
    return true;
}

// Validasi golongan darah (dropdown)
function validateBloodType(bloodType) {
    if (!bloodType) {
        showError('bloodTypeError', 'Golongan darah wajib dipilih');
        return false;
    }
    clearError('bloodTypeError');
    return true;
}

// Validasi riwayat penyakit (checkbox)
function validateDiseases() {
    const diseasesSelected = document.querySelectorAll('input[name="diseases"]:checked');
    if (diseasesSelected.length === 0) {
        showError('diseasesError', 'Pilih minimal satu riwayat penyakit');
        return false;
    }
    clearError('diseasesError');
    return true;
}

// Validasi tanggal konsultasi (harus di masa depan)
function validateAppointmentDate(appointmentDate) {
    if (!appointmentDate) {
        showError('appointmentDateError', 'Tanggal konsultasi wajib diisi');
        return false;
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(appointmentDate);
    if (selectedDate < today) {
        showError('appointmentDateError', 'Tanggal konsultasi harus di masa depan');
        return false;
    }
    clearError('appointmentDateError');
    return true;
}

// Validasi gejala/keluhan (text area)
function validateSymptoms(symptoms) {
    if (!symptoms) {
        showError('symptomsError', 'Gejala/keluhan wajib diisi');
        return false;
    }
    if (symptoms.length < 10) {
        showError('symptomsError', 'Gejala/keluhan minimal 10 karakter');
        return false;
    }
    clearError('symptomsError');
    return true;
}

// Fungsi validasi utama
function validateForm(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const nim = document.getElementById('nim').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const birthDate = document.getElementById('birthDate').value;
    const bloodType = document.getElementById('bloodType').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const symptoms = document.getElementById('symptoms').value;

    // Melakukan semua validasi
    const isFullNameValid = validateFullName(fullName);
    const isNIMValid = validateNIM(nim);
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);
    const isBirthDateValid = validateBirthDate(birthDate);
    const isGenderValid = validateGender();
    const isBloodTypeValid = validateBloodType(bloodType);
    const isDiseasesValid = validateDiseases();
    const isAppointmentDateValid = validateAppointmentDate(appointmentDate);
    const isSymptomsValid = validateSymptoms(symptoms);

    // Jika semua validasi berhasil
    if (isFullNameValid && isNIMValid && isEmailValid && isPhoneValid && 
        isBirthDateValid && isGenderValid && isBloodTypeValid && 
        isDiseasesValid && isAppointmentDateValid && isSymptomsValid) {
        alert('Form berhasil dikirim!');
        document.getElementById('patientForm').reset();
        return true;
    }

    return false;
} 