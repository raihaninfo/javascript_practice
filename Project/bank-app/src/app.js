let email = document.getElementById('email')
let pass = document.getElementById('pass')

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

let withdrawBtn = document.getElementById('withdraw-btn')
withdrawBtn.addEventListener('click', function () {
    let withdrawAmount = document.getElementById('withdraw-fil').value;
    if (withdrawAmount == 0 || null) {
        withdrawAmount = '0';
    }
    let withdrawNumber = parseFloat(withdrawAmount)
    //withdrawUpdate('withdraw-amount', withdrawNumber)
    updateSpam('withdraw-amount', withdrawNumber)
    document.getElementById('withdraw-fil').value = ''
    withdrawUpdate('total-balance', withdrawNumber)

})

function withdrawUpdate(id, withdrawNumber) {
    let withdraw = document.getElementById(id).innerText
    let withdrawBalance = parseFloat(withdraw)
    let totalWithdraw = withdrawBalance - withdrawNumber
    document.getElementById(id).innerText = totalWithdraw;
}



function updateSpam(id, depositFil) {
    let totalBalance = document.getElementById(id).innerText;
    let totalBalanceNum = parseFloat(totalBalance)
    let totalBalanceSum = totalBalanceNum + depositFil;
    document.getElementById(id).innerText = totalBalanceSum;
}