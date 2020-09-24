
function correctDate(x) {
    if(x.length == 1) x = `0${x}`
    return x
}

function getActualDate() {
    const actualMs = Date.now()
    const transitionDate = new Date(actualMs)

    var day = transitionDate.getDay().toString()
    day = correctDate(day)

    var month = transitionDate.getMonth().toString()
    month = correctDate(month)

    var year = transitionDate.getFullYear().toString()

    var hours = transitionDate.getHours().toString()
    hours = correctDate(hours)

    var minutes = transitionDate.getMinutes().toString()
    minutes = correctDate(minutes)

    const actualDate = `${day}/${month}/${year} - ${hours}:${minutes}`
    return actualDate
}

module.exports = getActualDate