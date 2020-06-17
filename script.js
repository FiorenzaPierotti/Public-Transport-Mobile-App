let wrapper = 'wrapper';
let classColumn = 'column';
let classTitle = 'title';
let greyText = 'grey-text';
let classIcon = 'icon';
let spanMenu = 'span-menu';

let classFirstBlock = 'first-block';

let firstBlock = `<div class="${classFirstBlock}"></div>`
document.querySelector('body').innerHTML = firstBlock;

let classMenu = 'menu';
let dotsIcon = 'las la-ellipsis-h';

let menu = `
<div class="${classMenu} ${wrapper}">
    <span class="${spanMenu}"><img class="${classIcon}" src="imgs/bell.png"></span>
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
            <span class="${classTitle}">${dataOne}</span>
            <span class="${greyText}">${rides}</span>
        </div>
        <div class="${data} ${classColumn}">
            <span class="${classTitle}">${dataTwo}</span>
            <span class="${greyText}">${spent}</span>
        </div>
        <div class="${data} ${classColumn}">
            <span class="${classTitle}">${dataThree}</span>
            <span class="${greyText}">${tikets}</span>
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

let title = 'Saved routes';
let classSection = 'section';
let classVeicols = 'veicols';
let veicolWrapper = 'veicol-wrapper';
let veicolCard = 'veicol-card';
let veicols = [
    'taxi',
    'trolley',
    'tram',
    'car',
    'subway',
    'bicycle',
    'bus'
]

let section = `
<section class="${classSection}">
    <p class="${classTitle}">${title}</p>
    <div class="${wrapper} ${classVeicols}">
    </div>
</section>`
document.querySelector('body').innerHTML += section;

veicols.forEach(veicol => v(veicol));
function v(veicol){
    let sectionVeicols = `
    <div class="${classColumn} ${veicolCard}">
        <div class="${veicolWrapper} ${spanMenu}"><img class="${classIcon}" src="imgs/`+veicol+`.png"></div>
        <span class="${greyText}">`+veicol+`</span>
    </div>`
    document.querySelector('.veicols').innerHTML += sectionVeicols;
}