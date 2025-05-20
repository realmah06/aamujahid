//   document.getElementById("loginForm").addEventListener('submit', function(event) {
//     event.preventDefault();
  
//     const number = document.getElementById("number").value.trim();
//     const password = document.getElementById("password").value.trim();
  
//     if (number === "") {
//       Swal.fire({
//         icon: 'error',
//         title: 'Something Went Wrong!',
//         text: 'Please fill in the Number field.',
//         cancelButtonText: 'Ok',
//         showCancelButton: true,
//         showConfirmButton: false,
//         cancelButtonColor: 'darkred'
//       });
//       return;
//     }
  
//     if (password === "") {
//       Swal.fire({
//         icon: 'error',
//         title: 'Something Went Wrong!',
//         text: 'Please fill in the Password field.',
//         cancelButtonText: 'Ok',
//         showCancelButton: true,
//         showConfirmButton: false,
//         cancelButtonColor: 'darkred'
//       });
//       return;
//     }
  
//     const user = {
//       name: 'ADMIN',
//       role: 'Proprietor',
//       v_number: '07044696542',
//       v_password: 'admin'
//     };
  
//     if (number !== user.v_number || password !== user.v_password) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Login Failed!',
//         text: 'Invalid Number or Password.',
//         cancelButtonText: 'Ok',
//         showCancelButton: true,
//         showConfirmButton: false,
//         cancelButtonColor: 'darkred'
//       });
//       return;
//     }
  
//     Swal.fire({
//       icon: 'question',
//       title: 'Login to System?',
//       showConfirmButton: true,
//       showCancelButton: true,
//       confirmButtonText: 'Login',
//       cancelButtonText: 'Cancel',
//       confirmButtonColor: '#276dc9',
//       cancelButtonColor: 'darkred',
//       allowOutsideClick: false,
//       preConfirm: () => {
//         return new Promise((resolve) => {
//           Swal.showLoading();
//           setTimeout(() => {
//             resolve();
//           }, 2000);
//         });
//       }
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire({
//           icon: 'success',
//           title: 'Congratulations',
//           text: 'Welcome back to ADMIN Dashboard',
//           timer: 3000,
//           showConfirmButton: true,
//           confirmButtonColor: '#276dc9',
//         }).then(() => {
//           window.location.href = 'dashboard.html';
//         });
//       }
//     });
//   });
  

document.getElementById("loginForm").addEventListener('submit', function(event) {
  event.preventDefault();

  const number = document.getElementById("number").value.trim();
  const password = document.getElementById("password").value.trim();

  if (number === "") {
    Swal.fire({
      icon: 'error',
      title: 'Something Went Wrong!',
      text: 'Please fill in the Number field.',
      position: 'bottom-end',
      cancelButtonText: 'Ok',
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonColor: 'darkred',
      position: 'bottom-end',
      toast: true
    });
    return;
  }

  if (password === "") {
    Swal.fire({
      icon: 'error',
      title: 'Something Went Wrong!',
      text: 'Please fill in the Password field.',
      position: 'bottom-end',
      cancelButtonText: 'Ok',
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonColor: 'darkred',
      position: 'bottom-end',
      toast: true
    });
    return;
  }

  const user = {
    name: 'ADMIN',
    role: 'Proprietor',
    v_number: '07044696542',
    v_password: 'admin'
  };

  if (number !== user.v_number || password !== user.v_password) {
    Swal.fire({
      icon: 'error',
      title: 'Login Failed!',
      text: 'Invalid Number or Password.',
      position: 'bottom-end',
      cancelButtonText: 'Ok',
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonColor: 'darkred',
      position: 'bottom-end',
      toast: true
    });
    return;
  }

  Swal.fire({
    icon: 'question',
    title: 'Login to System?',
    position: 'bottom-end',
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: 'Login',
    cancelButtonText: 'Cancel',
    confirmButtonColor: '#276dc9',
    cancelButtonColor: 'darkred',
    position: 'bottom-end',
    allowOutsideClick: false,
    toast: true,
    preConfirm: () => {
      return new Promise((resolve) => {
        Swal.showLoading();
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: 'success',
        title: 'Congratulations',
        text: 'Welcome back to ADMIN Dashboard',
        position: 'bottom-end',
        timer: 3000,
        showConfirmButton: true,
        confirmButtonColor: '#276dc9',
        position: 'bottom-end',
        toast: true
      }).then(() => {
        window.location.href = 'dashboard.html';
      });
    }
  });
});
