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

    let = depositAmount = document.getElementById('deposit-amount').innerText
    let = depositAmountBox = parseFloat(depositAmount)
    let totalDeposit = depositFil + depositAmountBox;

    document.getElementById('deposit-amount').innerText = totalDeposit;
    document.getElementById('deposit-value').value = ''

    let totalBalance = document.getElementById('total-balance').innerText;
    let totalBalanceNum = parseFloat(totalBalance)
    let totalBalanceSum = totalBalanceNum + depositFil;

    document.getElementById('total-balance').innerText = totalBalanceSum;
})