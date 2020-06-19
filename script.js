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
        <div class="${date} ${classColumn} active">
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

let section = `
<section class="${classSection}">
    <p class="${classTitle}">${title}</p>
    <div class="positioning"><div class="${wrapper} ${classVeicols}"></div></div>
    <div class="positioning">
        <div class="${mapWrapper} ${wrapper}">
            <div class="${cardMap} active">
                <div class="${map}"><img class="${image}" src="imgs/map.jpg"></div>
                <div class="${directions}">
                    <p>${whatToDo}</p>
                    <span>${departure}</span>
                    <b></b><b></b><b></b>
                    <span>${arrival}</span>
                    <div class="${howToGo}"><span><i class="las la-bicycle"></i>${min}</span><span>${km}</span></div>
                </div>
            </div>
            <div class="${cardMap}">
                <div class="${map}"><img class="${image}" src="imgs/map.jpg"></div>
                <div class="${directions}">
                    <p>${whatToDo}</p>
                    <span>${departure}</span>
                    <b></b><b></b><b></b>
                    <span>${arrival}</span>
                    <div class="${howToGo}"><span><i class="las la-bicycle"></i>${min}</span><span>${km}</span></div>
                </div>
            </div>
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
      console.log(item); 
      console.log('veicols', veicols);
      debugger 
      if(item.active){
          document.querySelector('#veicol-'+item.id).classList.add('active');
      } else {
        document.querySelector('#veicol-'+item.id).classList.remove('active');
      }
    })    
};   

let classLowMenu = 'low-menu';
let lowMenuDiv = 'low-menu-div';
let lowMenuHidden = 'low-menu-hidden';

let lowMenu = `
<div class="${classLowMenu} ${wrapper}">
    <div class="${lowMenuDiv} active"><i class="las la-user"></i><div class="${lowMenuHidden}"><div><img src="imgs/profile.png"></div><span>Profile</span></div></div>
    <div class="${lowMenuDiv}"><i class="las la-wallet"></i><div class="${lowMenuHidden}"><div><img src="imgs/wallet.png"></div><span>Wallet</span></div></div>
    <div class="${lowMenuDiv}"><i class="las la-map"></i><div class="${lowMenuHidden}"><div><img src="imgs/map.png"></div><span>Map</span></div></div>
</div>`
document.querySelector('body').innerHTML += lowMenu;