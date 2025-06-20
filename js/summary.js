document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("summaryForm");

  form.addEventListener("submit", function (e) {
    let isValid = true;

    // Ambil nilai input
    const groupName = document.getElementById("groupName").value;
    const memberCount = document.getElementById("memberCount").value;
    const websiteTitle = document.getElementById("websiteTitle").value;
    const supervisorName = document.getElementById("supervisorName").value;
    const description = document.getElementById("description").value;
    const progress = document.getElementById("progress").value;
    const problems = document.getElementById("problems").value;

    // Validasi semua field
    if (!validateText(groupName, "groupNameError", "Masukkan minimal 4 huruf")) isValid = false;
    if (!validateAngka(memberCount, "memberCountError", "Harus berupa angka dan tidak kosong")) isValid = false;
    if (!validateText(websiteTitle, "websiteTitleError", "Masukkan minimal 4 huruf")) isValid = false;
    if (!validateText(supervisorName, "supervisorNameError", "Masukkan minimal 4 huruf")) isValid = false;
    if (!validateText(description, "descriptionError", "Deskripsi tidak boleh kosong")) isValid = false;
    if (!validateText(progress, "progressError", "Capaian tidak boleh kosong")) isValid = false;
    if (!validateText(problems, "problemsError", "Permasalahan tidak boleh kosong")) isValid = false;

    if (!isValid) e.preventDefault();
  });

  // Event input langsung (real-time)
  const inputs = document.querySelectorAll("input");
  inputs.forEach(input => {
    input.addEventListener("input", function () {
      const id = input.id;
      const value = input.value;
      const errorId = id + "Error";

      if (id === "memberCount") {
        validateAngka(value, errorId, "Harus berupa angka dan tidak kosong");
      } else {
        validateText(value, errorId, "Masukkan minimal 4 huruf");
      }
    });
  });
});

// Validasi teks
function validateText(value, errorId, message) {
  if (!value || value.trim().length < 4) {
    showError(errorId, message);
    return false;
  }
  clearError(errorId);
  return true;
}

// Validasi angka
function validateAngka(value, errorId, message) {
  if (!value || isNaN(value)) {
    showError(errorId, message);
    return false;
  }
  clearError(errorId);
  return true;
}

// Tampilkan pesan error
function showError(id, message) {
  const errorElement = document.getElementById(id);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.color = "red";
  }
}

// Hapus pesan error
function clearError(id) {
  const errorElement = document.getElementById(id);
  if (errorElement) {
    errorElement.textContent = "";
  }
}
