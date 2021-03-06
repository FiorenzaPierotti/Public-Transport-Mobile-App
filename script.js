let wrapper = 'wrapper';
let classColumn = 'column';
let classTitle = 'title';
let greyText = 'grey-text';
let classIcon = 'icon';
let spanMenu = 'span-menu';
let image = 'image';

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
let className = 'name';
let name = 'Lindsey Ainsley';

let profile = `
<div class="${classProfile} ${classColumn}">
    <div class="${personWrapper}"><img class="${image}" src="imgs/profile.jpg"></div>
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
let calendarItems = [
    {id: 1, label: 'day', active: true},
    {id: 2, label: 'week', active: false},
    {id: 3, label: 'month', active: false}   
]

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

    </div>
</div>`
document.querySelector('body').innerHTML += calendar;

calendarItems.forEach(item => d(item));
function d(item){
    let dateItem = `
    <div id="date-${item.id}" class="${date} ${classColumn}" onclick="calendarClick(${item.id})">
        <span class="d">`+item.label+`</span>
    </div>`    
    document.querySelector('.calendar-section').innerHTML += dateItem;
    if(item.active){
        document.querySelector('.date').classList.add('active');
    } 
} 
function calendarClick(dateId){
    calendarItems.map((item) => {
      item.active = dateId === item.id  
      if(item.active){
          document.querySelector('#date-'+item.id).classList.add('active');
      } else {
        document.querySelector('#date-'+item.id).classList.remove('active');
      }
    })    
};

let title = 'Saved routes';
let classSection = 'section';
let classVeicols = 'veicols';
let veicolWrapper = 'veicol-wrapper';
let veicolCard = 'veicol-card';
let cardMap = 'card-map';
let mapWrapper = 'map-wrapper';
let map = 'map';
let directions = 'directions';
let whatToDo = 'Going to Paul by bike';
let departure = 'Winchester Rd. 29';
let arrival = 'Athlone St 37';
let howToGo = 'how';
let min = '26 min';
let km = '3.5 km';
let veicols = [
    {id: 1, label: 'taxi', active: true},
    {id: 2, label: 'trolley', active: false},
    {id: 3, label: 'tram', active: false},
    {id: 4, label: 'car', active: false},
    {id: 5, label: 'subway', active: false},
    {id: 6, label: 'bicycle', active: false},
    {id: 7, label: 'bus', active: false}    
]  

let mapItems = [
    {id: 1, label: 'first-direction', active: true},
    {id: 2, label: 'second-direction', active: false}   
] 

let section = `
<section class="${classSection}">
    <p class="${classTitle}">${title}</p>
    <div class="positioning"><div class="${wrapper} ${classVeicols}"></div></div></div>
    <div class="positioning">
        <div class="${mapWrapper} ${wrapper}">
            
        </div>
    </div>
</section>`
document.querySelector('body').innerHTML += section;

veicols.forEach(veicol => v(veicol));
function v(veicol){
    let sectionVeicols = `
    <div id="veicol-${veicol.id}" class="${classColumn} ${veicolCard}" onclick="veicolsClick(${veicol.id})">
        <div class="${veicolWrapper} ${spanMenu}"><img class="${classIcon}" src="imgs/`+veicol.label+`.png"></div>
        <span class="${greyText}">`+veicol.label+`</span>
    </div>`
    document.querySelector('.veicols').innerHTML += sectionVeicols;
    if(veicol.active){
        document.querySelector('.veicol-card').classList.add('active');
    } 
} 
function veicolsClick(veicolId){
    veicols.map((item) => {
      item.active = veicolId === item.id  
      if(item.active){
          document.querySelector('#veicol-'+item.id).classList.add('active');
      } else {
        document.querySelector('#veicol-'+item.id).classList.remove('active');
      }
    })    
};   

mapItems.forEach(mapI => m(mapI));
function m(mapI){
    let sectionMaps = `
    <div id="map-${mapI.id}" class="${cardMap}" onclick="mapsClick(${mapI.id})">
        <div class="${map}"><img class="${image}" src="imgs/map.jpg"></div>
        <div class="${directions}">
            <p>${whatToDo}</p>
            <span>${departure}</span>
            <b></b><b></b><b></b>
            <span>${arrival}</span>
            <div class="${howToGo}"><span><i class="las la-bicycle"></i>${min}</span><span>${km}</span></div>
        </div>
    </div>`
    document.querySelector('.map-wrapper').innerHTML += sectionMaps;
    if(mapI.active){
        document.querySelector('.card-map').classList.add('active');
    } 
} 
function mapsClick(mapId){
    mapItems.map((item) => {
      item.active = mapId === item.id  
      if(item.active){
          document.querySelector('#map-'+item.id).classList.add('active');
      } else {
        document.querySelector('#map-'+item.id).classList.remove('active');
      }
    })    
};  

let classLowMenu = 'low-menu';
let lowMenuDiv = 'low-menu-div';
let lowMenuHidden = 'low-menu-hidden';
let lowMenuItems = [
    {id: 1, label: 'profile', icon: 'user', active: true},
    {id: 2, label: 'wallet', icon: 'wallet', active: false},
    {id: 3, label: 'map', icon: 'map', active: false}   
]

let lowMenu = `
<div class="${classLowMenu} ${wrapper}">

</div>`
document.querySelector('body').innerHTML += lowMenu;

lowMenuItems.forEach(item => p(item));
function p(item){
    let sectionLowMenu = `
    <div id="profile-${item.id}" class="${lowMenuDiv}" onclick="lowMenuClick(${item.id})"><i class="las la-${item.icon}"></i><div class="${lowMenuHidden}"><div><img src="imgs/${item.label}.png"></div><span>${item.label}</span></div></div>
    `
    document.querySelector('.low-menu').innerHTML += sectionLowMenu;
    if(item.active){
        document.querySelector('.low-menu-div').classList.add('active');
    } 
} 
function lowMenuClick(profileId){
    lowMenuItems.map((i) => {
      i.active = profileId === i.id  
      if(i.active){
          document.querySelector('#profile-'+i.id).classList.add('active');
      } else {
        document.querySelector('#profile-'+i.id).classList.remove('active');
      }
    })    
};

