const arrayApprenant = [
	{
		firstname:'Bilane',
		lastname:'Abdi Djama',
		photoUrl:'assets/img/photos/small/bilane.jpg',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Jessica',
		lastname:'Anschutz',
		photoUrl:'assets/img/photos/small/jessica.jpg',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Alexandre',
		lastname:'Beauverger',
		photoUrl:'assets/img/photos/small/alexandre-beauverger.jpg',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Alexandre',
		lastname:'Bouttier',
		photoUrl:'https://alexandrebouttier.github.io/Portfolio/images/Alexandre-Bouttier.png',
		cvUrl: 'https://github.com/alexandrebouttier/Portfolio/blob/master/files/CV.pdf',
		portfolioUrl:'https://alexandrebouttier.github.io/Portfolio',
		desc:'',
		love:'',
	},
	{
		firstname:'Marine',
		lastname:'Cormier',
		photoUrl:'assets/img/photos/small/marine-cormier.jpg',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Delcourt',
		lastname:'Déborah',
		photoUrl:'assets/img/photos/small/déborah.jpg',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Vassily',
		lastname:'Dubois',
		photoUrl:'assets/img/photos/small/vassily.jpg',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Alexandre',
		lastname:'Douard',
		photoUrl:'https://github.com/DouardAlexandre/cvphoto/blob/master/photo.png?raw=true',
		cvUrl: 'https://github.com/DouardAlexandre/cvphoto/blob/master/AlexandreDouard.pdf',
		portfolioUrl:'https://douardalexandre.github.io/porfolio/',
		desc:'Je suis Alexandre, j\'aime les nouvelles technologies et les sciences.Dans mon expérience du graphisme et plus tard, du commerce, j\'ai toujours recherché la plus simple et la plus efficace façon de répondre au besoin de l\'utilisateur ou du client, tout en privilégiant une créativitée épurée.',
		love:'',
	},
	{
		firstname:'Mhamed',
		lastname:'El haddioui',
		photoUrl:'assets/img/photos/small/mhamed.jpg',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Roxane',
		lastname:'Gervais',
		photoUrl:'assets/img/photos/small/roxanne.jpg',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Jean-Claude',
		lastname:'Grondin',
		photoUrl:'assets/img/photos/small/jean-claude.jpg',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Jonathan',
		lastname:'Guillou',
		photoUrl:'assets/img/photos/small/jonathan.jpg',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Léa',
		lastname:'Hennebert',
		photoUrl:'assets/img/photos/small/lea.jpg',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Benoit',
		lastname:'Laurent',
		photoUrl:'assets/img/photos/small/benoit.jpg',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Carole',
		lastname:'Le Roux',
		photoUrl:'assets/img/photos/small/carole.jpg',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Eliez',
		lastname:'Maigné',
		photoUrl:'assets/img/photos/small/eliez.jpg',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'François',
		lastname:'Massiot',
		photoUrl:'assets/img/photos/small/françois.jpg',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Benjamin',
		lastname:'Mellec',
		photoUrl:'assets/img/photos/small/benjamin.jpg',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Claudia',
		lastname:'Mendoza',
		photoUrl:'assets/img/photos/small/claudia.jpg',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Régis',
		lastname:'Nicolo',
		photoUrl:'assets/img/photos/small/regis.jpg',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Olivier',
		lastname:'Romer',
		photoUrl:'assets/img/photos/small/olivier.jpg',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Florian',
		lastname:'Rouxel',
		photoUrl:'assets/img/photos/small/florian.jpg',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Romain',
		lastname:'Seite',
		photoUrl:'assets/img/photos/small/romain-seite.jpg',
		cvUrl: 'assets/cv/romain.pdf',
		portfolioUrl:'https://saromase.github.io/portfolio',
		desc:'',
		love:'Php, Laravel',
	},
];

// function Apprenant (firstname, lastname, photoUrl, cvUrl, portfolioUrl, desc ) {
// 	this.firstname = firstname
// 	this.lastname = lastname
// 	this.photoUrl = photoUrl
// 	this.cvUrl = cvUrl
// 	this.portfolioUrl = porfolioUrl
// 	this.desc = desc
// }

let randomButton = document.getElementById('random')
let promotionButton = document.getElementById('promotion')
let mainElement = document.getElementById('main');
//let lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

// Smooth scroll
let scroll = new SmoothScroll('a[href*="#"]', {
	header: 'nav'
});

randomButton.onclick = function(){
	populateTheDom(arrayApprenant)
}

function shuffle(array) {
  let currentIndex = array.length,
			temporaryValue,
			randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function populateTheDom(array) {
	array = shuffle(array);
	// Remove all child nodes in <main>
	while (mainElement.lastChild) {
		mainElement.removeChild(mainElement.lastChild)
	}
	let i = 0;
	array.forEach(function(apprenant){
		let apprenantWrapper = document.createElement('div')
		apprenantWrapper.classList.add('apprenant-wrapper')

		let apprenantElement = document.createElement('div')
		apprenantElement.classList.add('apprenant')
		apprenantWrapper.appendChild(apprenantElement)

		let photoElement = document.createElement('div')
		photoElement.classList.add('photo')
		// let photoImg = document.createElement('img')
		// photoImg.src = apprenant.photoUrl || 'https://lorempixel.com/640/400/people/' + Math.floor(Math.random()*10)
		// photoElement.appendChild(photoImg)
		let imgUrl = apprenant.photoUrl || 'https://lorempixel.com/640/400/people/' + Math.floor(Math.random()*10)
		photoElement.style.backgroundImage = 'url('+ imgUrl +')'
		apprenantElement.appendChild(photoElement)

		let nameElement = document.createElement('div')
		nameElement.classList.add('name')
		nameElement.innerHTML = apprenant.firstname +' '+ apprenant.lastname.toUpperCase()
		apprenantElement.appendChild(nameElement)

		let portfolioElement = document.createElement('div')
		portfolioElement.classList.add('portfolio')
		let portfolioLink = document.createElement('a')
		portfolioLink.innerHTML = 'Portfolio'
		!apprenant.portfolioUrl ? portfolioElement.classList.add('disable') : portfolioLink.href = apprenant.portfolioUrl
		portfolioElement.appendChild(portfolioLink)
		apprenantElement.appendChild(portfolioElement)

		let cvElement = document.createElement('div')
		cvElement.classList.add('cv')
		let cvLink = document.createElement('a')
		cvLink.innerHTML = 'Curriculum Vitae'
		!apprenant.cvUrl ? cvElement.classList.add('disable') : cvLink.href = apprenant.cvUrl
		cvElement.appendChild(cvLink)
		apprenantElement.appendChild(cvElement)

		let loveElement = document.createElement('div')
		loveElement.classList.add('love')
		loveElement.innerHTML = apprenant.love || '<3 Code Académie <3'
		apprenantElement.appendChild(loveElement)

		let descElement = document.createElement('div')
		descElement.classList.add('desc')
		descElement.innerHTML = apprenant.desc || '' 
		apprenantElement.appendChild(descElement)

		mainElement.appendChild(apprenantWrapper)

		// Add animation classes
		setTimeout(function(){
			photoElement.classList.add('animation-photo')
		}, i * 600);
		setTimeout(function(){
			nameElement.classList.add('animation-default')
		}, i * 600 + 400);
		setTimeout(function(){
			portfolioElement.classList.add('animation-default')
		}, i * 600 + 600);
		setTimeout(function(){
			cvElement.classList.add('animation-default')
		}, i * 600 + 800);
		setTimeout(function(){
			loveElement.classList.add('animation-default')
		}, i * 600 + 1000);
		i++;

	});
}
populateTheDom(arrayApprenant)
