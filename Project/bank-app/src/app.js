let login = document.getElementById('login')

let loginArea = document.getElementById('login-area');

let transactionArea = document.getElementById('transaction-area')


login.addEventListener('click', function () {
    loginArea.style.display = 'none';
    transactionArea.style.display = 'block'
})



let depositBtn = document.getElementById('deposit-btn');

depositBtn.addEventListener('click', function () {
    let depositValue = document.getElementById('deposit-value').value;
    if (depositValue == 0 || null) {
        depositValue = '0';
    }
    let depositFil = parseFloat(depositValue)
    updateSpam('deposit-amount', depositFil)
    document.getElementById('deposit-value').value = ''
    updateSpam('total-balance', depositFil)
})

function updateSpam(id, depositFil) {
    let totalBalance = document.getElementById(id).innerText;
    let totalBalanceNum = parseFloat(totalBalance)
    let totalBalanceSum = totalBalanceNum + depositFil;
    document.getElementById(id).innerText = totalBalanceSum;
}