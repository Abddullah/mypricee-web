var envoirnment = 'local';
// var envoirnment = 'hosted';

export var adminUserBaseURL = envoirnment === 'hosted' ? 'https://adminuser-dot-peppy-nation-288314.uc.r.appspot.com' : 'http://localhost:9000';

export var scrapperBaseURL = envoirnment === 'hosted' ? 'https://scrapper-dot-peppy-nation-288314.uc.r.appspot.com' : 'http://localhost:8000';

export var runScrapperBaseURL = envoirnment === 'hosted' ? 'https://run-scrapper-dot-peppy-nation-288314.uc.r.appspot.com' : 'http://localhost:7000';

export var productBaseURL = envoirnment === 'hosted' ? 'https://product-dot-peppy-nation-288314.uc.r.appspot.com' : 'http://localhost:4000';

export var categoryBaseURL = envoirnment === 'hosted' ? 'https://category-dot-peppy-nation-288314.uc.r.appspot.com' : 'http://localhost:6060';   
