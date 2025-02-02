// ملف script.js
// يمكنك إضافة تفاعلية هنا
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
      alert('سيتم تحويلك إلى صفحة الإجابة الكاملة.');
    });
  });
  
  document.querySelector('.cta').addEventListener('click', () => {
    alert('سيتم تحويلك إلى صفحة طرح السؤال.');
  });