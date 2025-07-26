let generatedOTP = '';

function sendOTP() {
  const phone = document.getElementById("phone").value;
  if (!phone.match(/^\d{10}$/)) {
    alert("Enter valid 10-digit phone number");
    return;
  }

  generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
  alert(`OTP sent to ${phone}: ${generatedOTP}`); // Simulated
  document.getElementById("otpSection").style.display = "block";
}

function verifyOTP() {
  const entered = document.getElementById("otp").value;
  if (entered === generatedOTP) {
    alert("OTP Verified Successfully!");
    document.getElementById("submitBtn").disabled = false;
    document.getElementById("statusMsg").innerText = "✅ OTP Verified. You can now register.";
  } else {
    alert("Incorrect OTP. Try again.");
  }
}

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("statusMsg").innerText = "✅ Registration successful!";
});
