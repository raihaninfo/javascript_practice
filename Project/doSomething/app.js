// button function
const doSomethingBtn = document.getElementById('do-btn')
doSomethingBtn.addEventListener('click', () => {
    //    fetch api
    fetch('http://www.boredapi.com/api/activity/')
        .then(response => response.json())
        .then(data => activityWork(data))
})

// all activity data
function activityWork(data) {
    const activity = document.getElementById('activity')
    activity.innerText = data.activity
    const activityType = document.getElementById('type')
    activityType.innerText = data.type
    const activityPrice = document.getElementById('price')
    activityPrice.innerText = data.price
    const workLink = data.link
    const activityLink = document.getElementById('link')
    activityLink.href = workLink
    if (workLink === '') {
        activityLink.style.display = 'none'
    } else {
        activityLink.style.display = 'inline-block'
    }
    console.log(data);

}