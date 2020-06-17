let wrapper = 'wrapper';
let classColumn = 'column';

let classFirstBlock = 'first-block';

let firstBlock = `<div class="${classFirstBlock}"></div>`
document.querySelector('body').innerHTML = firstBlock;

let classMenu = 'menu';
let spanMenu = 'span-menu';
let dotsIcon = 'las la-ellipsis-h';

let menu = `
<div class="${classMenu} ${wrapper}">
    <span class="${spanMenu}"><img src="imgs/bell.png"></span>
    <span class="${spanMenu}"><i class="${dotsIcon}"></i></span>
</div>`
document.querySelector('body').innerHTML += menu;

let classProfile = 'profile';
let personWrapper = 'person-wrapper';
let personImage = 'person-image';
let className = 'name';
let name = 'Lindsey Ainsley';

let profile = `
<div class="${classProfile} ${classColumn}">
    <div class="${personWrapper}"><img class="${personImage}" src="imgs/profile.jpg"></div>
    <span class="${className}">${name}</span>
</div>`
document.querySelector('body').innerHTML += profile;

let classCalendar = 'calendar';
let datas = 'datas';
let data = 'data';
let dataOne = '8';
let rides = 'Rides';
let dataTwo = '14$';
let spent = 'Spent';
let dataThree = '1';
let tikets = 'Tikets';
let date = 'date';
let calendarSection = 'calendar-section';
let day = 'Day';
let week = 'Week';
let month = 'Month';


let calendar = `
<div class="${classCalendar} ${classColumn}">
    <div class="${datas} ${wrapper}">
        <div class="${data} ${classColumn}">
            <span>${dataOne}</span>
            <span>${rides}</span>
        </div>
        <div class="${data} ${classColumn}">
            <span>${dataTwo}</span>
            <span>${spent}</span>
        </div>
        <div class="${data} ${classColumn}">
            <span>${dataThree}</span>
            <span>${tikets}</span>
        </div>
    </div>
    <div class="${wrapper} ${calendarSection}">
        <div class="${date} ${classColumn}">
            <span>${day}</span>
        </div>
        <div class="${date} ${classColumn}">
            <span>${week}</span>
        </div>
        <div class="${date} ${classColumn}">
            <span>${month}</span>
        </div>
    </div>
</div>`
document.querySelector('body').innerHTML += calendar;
