const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');

const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');
const toStep3Btn = document.getElementById('toStep3Btn');
const backToStep2Btn = document.getElementById('backToStep2Btn');
const finalSubmitBtn = document.getElementById('finalSubmitBtn');

// Hàm reset tất cả input/select trong 1 step
function resetStep(stepElement) {
  const inputs = stepElement.querySelectorAll('input, select');
  inputs.forEach(input => {
    if(input.tagName === 'SELECT') input.selectedIndex = 0;
    else input.value = '';
  });
}

// Step 1 → Step 2
nextBtn.addEventListener('click', function(e){
  e.preventDefault();
  const familyName = document.getElementById('familyName').value;
  const familySize = document.getElementById('familySize').value;
  if(familyName === "" || familySize === "Chọn số lượng đinh"){
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }
  step1.style.display = "none";

  // Reset step 2 mỗi lần đi tới
  resetStep(step2);
  step2.style.display = "block";
});

// Step 2 → Step 1
backBtn.addEventListener('click', function(e){
  e.preventDefault();
  step2.style.display = "none";
  step1.style.display = "block";
});

// Step 2 → Step 3
toStep3Btn.addEventListener('click', function(e){
  e.preventDefault();
  const province = document.getElementById('province').value;
  const district = document.getElementById('district').value;
  const ward = document.getElementById('ward').value;
  if(province === "Chọn tỉnh/thành phố" || district === "" || ward === ""){
    alert("Vui lòng nhập đầy đủ thông tin địa chỉ!");
    return;
  }

  step2.style.display = "none";

  // Reset step 3 mỗi lần đi tới
  resetStep(step3);
  step3.style.display = "block";
});

// Step 3 → Step 2
backToStep2Btn.addEventListener('click', function(e){
  e.preventDefault();
  step3.style.display = "none";
  step2.style.display = "block";
});

// Step 3 → Hoàn tất
finalSubmitBtn.addEventListener('click', function(e){
  e.preventDefault();
  const managerName = document.getElementById('managerName').value;
  const managerEmail = document.getElementById('managerEmail').value;
  const managerPhone = document.getElementById('managerPhone').value;
  const managerRelation = document.getElementById('managerRelation').value;

  if(managerName === "" || managerEmail === "" || managerPhone === "" || managerRelation === ""){
    alert("Vui lòng nhập đầy đủ thông tin người quản lý!");
    return;
  }
  alert("Đăng ký thành công!");
  // TODO: gửi dữ liệu lên server nếu muốn
});

