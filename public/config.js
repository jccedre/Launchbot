var launchbotConfig = {

  // Enter absolute URIs 'http://', 'https://', 'ftp://' …
  sets: [

    // First example set
    {
      name: 'Daily',
      items: [
        'http://learn.digitalharbor.org',
        'http://youth.digitalharbor.org',
        'https://mail.google.com',
        'https://drive.google.com',
        'http://www.fabhive.buzz/megalab/'
      ]
    },

    // Second example set
    {
      name: 'Members',
      items: [
        'http://michaelxander.com/static/nyc-cams.html',
        'http://skyscanner.de',
        'http://kayak.com',
        'http://en.wikivoyage.org',
        'http://wikitravel.org'
      ]
    }

    // Add more sets below, don’t forget to add a comma after the previous set.

  ],

  // For favorites bar, enter absolute URIs 'http://', 'https://', 'ftp://' …
  favs: [
    'http://digitalharbor.org',
    'https://news.ycombinator.com',
    'https://mail.google.com',
    'https://drive.google.com',
    'https://app.asana.com',
    'https://twitter.com',
    'https://hootsuite.com',
    'http://nytimes.com',
    'https://news.ycombinator.com',
    'http://onethingwell.org',
    'http://brettterpstra.com'
  ],
    
    images: [
        'images/DHF-Logo-Learn.png',
        'images/DHF-Logo.png',
        'images/New_Logo_Gmail.png',
        'images/Logo_of_Google_Drive.png',
        'images/FabHive_art-logo.png'
        
    ],

  // Optional settings
  options: {
    searchEngine: 'https://www.google.com/search',
    faviconSize: 16,
    faviconService: 'http://www.google.com/s2/favicons?domain=',
    linkTarget: '_blank'
  },
  plugins: {
    weather: {
      enabled: true,
      zipCode: 21230,
      country: 'United States',
      useCelcius: true
    }
  },
    
 options2: {
    size: 60,
   //add image paths for each image icon
    //the for loop in the getLinks function will select the image
     //in order from 0,1,2,3,...
     /*image: [
        '/images/DHF-Logo.png',
         '/images/DHF-Logo-Learn.png'
    
        
    ],*/
     
     image: [
         'images/DHF-Logo.png',
         'images/DHF-Logo-Learn.png'
             
            ],
    linkTarget: '_blank'
  }
};