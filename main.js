let yearOfBirth = prompt("What is your year of birth?")
let monthOfBirth = prompt("What is your month of birth?")
let currentDate = new Date()
let currentMonth = currentDate.getMonth()
let currentYear = currentDate.getFullYear()
let secondsInMonth = 60 * 60 * 24 * 30
let secondsInYear = 12 * secondsInMonth
let secondsInBirthYear = secondsInMonth * (12 - monthOfBirth)
let secondsInCurrentYear = secondsInMonth * currentMonth
let secondsInBetweenYears = (currentYear - yearOfBirth -1) * secondsInYear
let secondsSinceBirth = secondsInBirthYear + secondsInCurrentYear + secondsInBetweenYears
document.write("The number of you have lived is " + secondsSinceBirth)