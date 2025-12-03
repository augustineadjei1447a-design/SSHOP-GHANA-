// Very small client-side demo auth (NOT secure; demo only)
function saveUser(user){ const users = JSON.parse(localStorage.getItem('traco_users')||'[]'); users.push(user); localStorage.setItem('traco_users', JSON.stringify(users)); }
function findUser(email,password){ const users = JSON.parse(localStorage.getItem('traco_users')||'[]'); return users.find(u=>u.email===email && u.password===password); }

document.addEventListener('DOMContentLoaded', ()=>{
  const signup = document.getElementById('signupForm');
  const login = document.getElementById('loginForm');
  if(signup){
    signup.addEventListener('submit', e=>{
      e.preventDefault();
      const name = document.getElementById('signupName').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
      saveUser({name,email,password});
      alert('Account created (demo). You may now log in.');
      window.location.href='login.html';
    });
  }
  if(login){
    login.addEventListener('submit', e=>{
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      const u = findUser(email,password);
      if(u){ localStorage.setItem('traco_current', JSON.stringify(u)); alert('Welcome back, ' + u.name + ' (demo).'); window.location.href='index.html'; }
      else alert('Invalid credentials (demo).');
    });
  }
});
