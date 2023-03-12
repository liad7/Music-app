'use client'
export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    debounce,
    getFormattedDate,
    saveToStorage,
    loadFromStorage,
    secondsToMinutesAndSeconds,
    getCurrentTimeGreet,
    shuffle,
    getRandomTimeStamp
}

function shuffle(arr) {

    let shuffledArr = arr.sort(function () {
        return Math.random() - 0.5;
    })
    return shuffledArr
}


function debounce(func, timeout = 700) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    }
}

function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

function secondsToMinutesAndSeconds(seconds) {
    if (!seconds) return '0:00'
    var minutes = Math.floor(seconds / 60);
    var seconds = ((seconds % 60)).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function getRandomTimeStamp() {
    const HOUR = 1000 * 60 * 60
    const DAY = 1000 * 60 * 60 * 24
    const WEEK = 1000 * 60 * 60 * 24 * 7
    const pastTime = getRandomIntInclusive(HOUR, WEEK)
    return Date.now() - pastTime
}

function getFormattedDate(timeStamp) {

    const randomDate = new Date(timeStamp)
    const formatedDate = (getMonthShortName((randomDate.getMonth()) + 1)) + ' ' + randomDate.getDate() + ' , ' + randomDate.getFullYear()
    return formatedDate
}

function getMonthShortName(monthNo) {
    const date = new Date();
    date.setMonth(monthNo - 1);

    return date.toLocaleString('en-US', { month: 'short' });
}

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}


function getCurrentTimeGreet() {
    const hour = new Date().getHours()
    if (hour > 5 && hour < 12) return 'Good morning'
    else if (hour >= 12 && hour < 19) return 'Good afternoon'
    else if (hour >= 19 && hour <= 23) return 'Good evning'
}

