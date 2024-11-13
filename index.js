const btn = document.getElementById("btn")
const input = document.getElementById("input")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

btn.addEventListener("click", function() {
    const inputValue = input.value
    
    const toFeet = (inputValue * 3.281).toFixed(3)
    const toMeters = (inputValue / 3.281).toFixed(3)
    length.textContent = 
    `
    ${inputValue} meters = ${toFeet} feet | ${inputValue} feet = ${toMeters} meters
    `
    
    const toGallons = (inputValue * 0.264).toFixed(3)
    const toLiters = (inputValue / 0.264).toFixed(3)
    volume.textContent = 
    `
    ${inputValue} liters = ${toGallons} gallons | ${inputValue} gallons = ${toLiters} liters
    `
    
    const toPounds = (inputValue * 2.204).toFixed(3)
    const toKilos = (inputValue / 2.204).toFixed(3)
    mass.textContent = 
    `
    ${inputValue} kilos = ${toPounds} pounds | ${inputValue} pounds = ${toKilos} kilos
    `
})