let login = document.getElementById('login')

let loginArea = document.getElementById('login-area');

let transactionArea = document.getElementById('transaction-area')


login.addEventListener('click', function () {
    loginArea.style.display = 'none';
    transactionArea.style.display = 'block'
})