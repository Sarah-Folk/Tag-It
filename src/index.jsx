import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Root from './routes/Root';
import ErrorPage from './ErrorPage';
import Entries from './routes/Entries'
import Entry from './routes/Entry';
import { Auth0Provider } from'@auth0/auth0-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles.css';

const entries = [
  {
    id: 1,
    name: `Assassin's Creed II`,
    type: `Video Game`,
    description: `action-adventure video game developed by Ubisoft Montreal which takes place during the height of the Renaissance in Italy; second installment in the Assassin's Creed franchise`,
    year: `2009`,
    img: `https://gaming-cdn.com/images/products/2172/orig/assassin-s-creed-ii-pc-spiel-ubisoft-connect-cover.jpg?v=1669908139`,
    publisher: `Ubisoft`,
    tags: ['Florence', 'Venice', 'San Gimignano', 'Rome', 'Tuscany', 'Italy', 'Michelangelo']
  },
  {
    id: 2,
    name: `Roman Holiday`,
    type: `Movie`,
    description: `romantic comedy starring Audrey Hepburn and Gregory Peck set in Rome`,
    year: `1953`,
    img: `https://cdn.britannica.com/81/90681-050-55ADEE61/Audrey-Hepburn-Roman-Holiday-Gregory-Peck-William.jpg`,
    publisher: `Paramount`,
    tags: ['Rome', 'Paramount', 'Oscar-winning', 'Audrey Hepburn', 'Gregory Peck', 'Bocca della Verita']
  },
  {
    id: 3,
    name: `Gladiator`,
    type: `Movie`,
    description: `epic historical drama starring Russell Crowe`,
    year: `2000`,
    img: `https://media.npr.org/assets/img/2015/11/25/gettyimages-156473199_custom-60c5ab37668dfcb743f85117f0117e28abdd7041-s1100-c50.jpg`,
    publisher: `Universal`,
    tags: ['Rome', 'Oscar-winning', 'Russell Crowe', 'historical', 'epic', 'brutal', 'Orcia Valley', `Val d'Orcia`, 'Pienza', 'Siena', 'Tuscany', 'Italy', 'Colosseum']
  },
  {
    id: 4,
    name: `Eat Pray Love`,
    type: `Movie`,
    description: `biographical romantic drama starring Julia Roberts as author Elizabeth Gilbert`,
    year: `2010`,
    img: `https://bilder.fernsehserien.de/epg/epg-archiv/2022/09/13/7d1899c324c443831eadf3808fcde9d5cb2b583e_b-w-970.jpg.jpg`,
    publisher: `Sony`,
    tags: ['Julia Roberts', 'Javier Bardem', 'James Franco', 'New York', 'Naples', 'Rome', 'Italy', 'pizza', 'food', 'Bali', 'Indonesia', 'Delhi', 'India', 'meditation', 'inner peace', 'memoir', 'biographical']
  },
  {
    id: 5,
    name: `Notting Hill`,
    type: `Movie`,
    description: `romantic comedy starring Julia Roberts and Hugh Grant`,
    year: `1999`,
    img: `https://media.gq.com/photos/61f3057416792ff88dd157f7/master/pass/MSDNOHI_EC034.jpg`,
    publisher: `Universal`,
    tags: ['Julia Roberts', 'Hugh Grant', 'London', 'Notting Hill', 'Portobello Road Market', 'England', 'art', 'Chagall', 'romantic comedy']
  },
  {
    id: 6,
    name: `Sherlock`,
    type: `TV Show`,
    description: `British mystery crime drama series based on Sir Arthur Conan Doyle's Sherlock Holmes detective stories`,
    year: `2010 - 2017`,
    img: `https://flxt.tmsimg.com/assets/p8992561_b_h9_aa.jpg`,
    publisher: `BBC`,
    tags: ['crime', 'mystery', 'detective', 'Sherlock Holmes', 'Watson', 'Doyle', 'Benedict Cumberbatch', 'Martin Freeman', 'Baker Street', 'London', 'England', 'British', 'Adventures of Sherlock Holmes', 'modern']
  },
  {
    id: 7,
    name: `Elementary`,
    type: `TV Show`,
    description: `Procedural crime drama series based on a contemporary imagining of Sir Arthur Conan Doyle's Sherlock Holmes detective stories set in New York`,
    year: `2012 - 2019`,
    img: `https://flxt.tmsimg.com/assets/p9260096_b_h8_ac.jpg`,
    publisher: `CBS`,
    tags: ['crime', 'mystery', 'detective', 'Sherlock Holmes', 'Watson', 'Doyle', 'Sir Arthur Conan Doyle', 'Jonny Lee Miller', 'Lucy Liu', 'New York', 'London', 'Adventures of Sherlock Holmes', 'modern']
  },
  {
    id: 8,
    name: `When Harry Met Sally`,
    type: `Movie`,
    description: `romantic comedy starring Meg Ryan and Billy Crystal`,
    year: `1989`,
    img: `https://s3.amazonaws.com/nightjarprod/content/uploads/sites/192/2022/02/16150328/3wkbKeowUp1Zpkw1KkBqMWbt0P9.jpg`,
    publisher: `Columbia`,
    tags: ['New York', 'Meg Ryan', 'Billy Crystal', 'romantic comedy', 'romcom', 'friendship', 'love', `Katz's Delicatessen`, 'road trip']
  },
  {
    id: 9,
    name: `Seinfeld`,
    type: `TV Show`,
    description: `sitcom starring Jerry Seinfeld`,
    year: `1989 - 1998`,
    img: `https://assets.cdn.moviepilot.de/files/450541bd5aa1ad4abf555a23ad135b8ad6754b9f46df07d6e7f01f96504e/limit/1024/2000/538eb939-316e-4665-8076-d3bfd15a5824.jpg`,
    publisher: `Columbia`,
    tags: ['New York', 'biographical', 'comedy', 'sitcom', 'Jerry Seinfeld', 'Larry David', `Monk's Cafe`, `Tom's Restaurant`, 'funny']
  },
  {
    id: 10,
    name: `The Godfather`,
    type: `Movie`,
    description: `crime film starring Marlon Brando`,
    year: `1972`,
    img: `https://ntvb.tmsimg.com/assets/p6326_v_h8_be.jpg?w=960&h=540`,
    publisher: `Paramount`,
    tags: ['crime', 'Oscar-winning', 'Marlon Brando', 'Al Pacino', 'mafia', 'gangster', 'brutal', 'New York', 'Sicily', 'Italy', 'Paramount']
  },
  {
    id: 11,
    name: `Top Gun`,
    type: `Movie`,
    description: `action drama starring Tom Cruise`,
    year: `1986`,
    img: `https://cdn.prod.www.spiegel.de/images/aaf3d2cc-0001-0004-0000-000000992849_w1528_r1.551848512173129_fpx66.94_fpy49.96.jpg`,
    publisher: `Paramount`,
    tags: ['Tom Cruise', 'Anthony Edwards', 'Meg Ryan', 'Val Kilmer', 'naval aviator', 'Navy', 'action', 'San Diego', 'dogfighting', 'F-14', 'volleyball', 'Paramount']
  },
  {
    id: 12,
    name: `Top Gun: Maverick`,
    type: `Movie`,
    description: `action drama starring Tom Cruise`,
    year: `2022`,
    img: `https://www.ndr.de/kultur/film/topgun106_v-quadratl.jpg`,
    publisher: `Paramount`,
    tags: ['Tom Cruise', 'Jennifer Connelly', 'Val Kilmer', 'Miles Teller', 'Glen Powell', 'Monica Barbaro', 'Jon Hamm', 'naval aviator', 'Navy', 'action', 'nostalgic', 'San Diego', 'dogfighting', 'F-18', 'F-14', 'football', 'Paramount']
  },
  {
    id: 13,
    name: `Kansas City BBQ`,
    type: `Restaurant`,
    description: `BBQ restaurant in San Diego where a scene from Top Gun was filmed`,
    img: `https://static.spotapps.co/spots/9f/f1adf07ed511e891668f75e5799495/full`,
    tags: ['San Diego', 'BBQ', 'barbecue', 'food', 'restaurant', 'Top Gun', 'Tom Cruise', 'Anthony Edwards', 'Meg Ryan']
  },
  {
    id: 14,
    name: `Phil's BBQ`,
    type: `Restaurant`,
    description: `BBQ restaurant in San Diego`,
    img: `https://external-preview.redd.it/G2Qmtv5m8AAmK4FXMXwYv6yXA4TljBjj-eHqSJ8Ffak.jpg?auto=webp&s=e337b0d1d1aeae39709da38889a300e28f33bfbd`,
    tags: ['San Diego', 'BBQ', 'barbecue', 'restaurant', 'food', 'ribs']
  },
  {
    id: 15,
    name: `Tacos El Gordo`,
    type: `Restaurant`,
    description: `Mexican restaurant in San Diego which serves amazing tacos and other Mexican fare`,
    img: `https://dobianchi.files.wordpress.com/2021/09/tacos-el-gordo-san-diego.jpg`,
    tags: ['San Diego', 'restaurant', 'food', 'Mexican', 'tacos']
  },
  {
    id: 16,
    name: `Katz's Delicatessen`,
    type: `Restaurant`,
    description: `New York deli in which a famous scene from When Harry Met Sally was filmed`,
    img: `https://d1ralsognjng37.cloudfront.net/991ab809-e32f-45f1-b9b5-3ac239983608`,
    tags: ['New York', 'deli', 'restaurant', 'When Harry Met Sally', 'Meg Ryan', 'Billy Crystal']
  },
  {
    id: 17,
    name: `The Avengers`,
    type: `Movie`,
    description: `Superhero film based on the Marvel comic books`,
    year: `2012`,
    img: `https://assets.cdn.moviepilot.de/files/9a378e42049aa4030a0d56fc2219d346cc7deef961ca929376192d95d07a/fill/1200/576/marvels-the-avengers-wallpapers-logo.jpg`,
    publisher: `Disney`,
    tags: ['New York', 'superhero', 'Marvel', 'MCU', 'schwarma', 'Disney']
  },
  {
    id: 18,
    name: `Tom's Restaurant`,
    type: `Restaurant`,
    description: `New York restaurant known as Monk's Cafe in Seinfeld`,
    img: `https://i0.wp.com/unusualplaces.org/wp-content/uploads/2022/07/seinfield.jpg?ssl=1`,
    tags: ['restaurant', 'food', 'cafe', `Monk's Cafe`, 'Seinfeld']
  },
  {
    id: 19,
    name: `Henry V`,
    type: `Play`,
    description: `history play by William Shakespeare`,
    year: `1599`,
    img: `https://upload.wikimedia.org/wikipedia/commons/b/b4/Henry_V_1600_Q_titlepage.JPG`,
    author: `William Shakespeare`,
    tags: ['London', 'England', 'France', 'Shakespeare', 'historical', 'play', 'history play', 'British']
  },
  {
    id: 20,
    name: `The Adventures of Sherlock Holmes`,
    type: `Book`,
    description: `stories written by Sir Arthur Conan Doyle`,
    year: `1892`,
    author: `Sir Arthur Conan Doyle`,
    img: `https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/513VTCDLp9L.jpg`,
    publisher: `George Newnes`,
    tags: ['crime', 'mystery', 'detective', 'Sherlock Holmes', 'Watson', 'Doyle', 'Baker Street', 'London', 'England', 'British']
  },
  {
    id: 21,
    name: `Mary Poppins`,
    type: `Book`,
    description: `children's book about a magical nanny written by P. L. Travers`,
    year: `1934`,
    author: `P. L. Travers`,
    img: `https://m.media-amazon.com/images/I/71UcPhblGbL.jpg`,
    publisher: `HarperCollins`,
    tags: ['London', 'magical', 'P.L. Travers', `children's book`, 'fantasy', 'England', 'British']
  },
  { id: 22,
    name: `Mary Poppins`,
    type: `Movie`,
    description: `musical fantasy film based on the character created by P. L. Travers`,
    year: `1964`,
    img: `https://image.stern.de/8564508/t/9E/v2/w1440/r1.3333/-/98102962.jpg`,
    publisher: `Disney`,
    tags: ['London', 'magical', 'Oscar-winning', 'Julie Andrews', 'Dick Van Dyke', 'England', 'fantasy', 'British']
  },
  {
    id: 23,
    name: `Mission: Impossible III`,
    type: `Movie`,
    description: `action spy film starring Tom Cruise`,
    year: `2006`,
    img: `https://cdn.kinocheck.com/i/qtvr4oj823.jpg`,
    publisher: `Paramount`,
    tags: ['Tom Cruise', 'Chicago', 'Drake Hotel', 'action', 'spy', 'Prague', 'Czech Republic', 'London', 'Liverpool Street', 'England']
  },
  {
    id: 24,
    name: `Mission: Impossible`,
    type: `Movie`,
    description: `action spy film starring Tom Cruise`,
    year: `1996`,
    img: `https://www.denofgeek.com/wp-content/uploads/2021/05/Tom-Cruise-in-Mission-Impossible-Vault.jpeg?resize=768%2C432`,
    publisher: `Paramount`,
    tags: ['Tom Cruise', 'action', 'spy', 'Rome', 'Vatican', 'Berlin', 'Germany', 'Chesapeake Bay Bridge–Tunnel', 'Virginia']
  },
  {
    id: 25,
    name: `Afro-Ken`,
    type: `TV Show`,
    description: `life-changing anime about a dog with a rainbow-colored afro`,
    year: `2001`,
    img: `https://64.media.tumblr.com/a9f6780fa463c6bc479f89b1f8cf3f86/tumblr_p274lvvbix1whu5rwo1_640.jpg`,
    publisher: `Xiao Wen "Train" Wu`,
    tags: [`Xiao Wen "Train" Wu`, `life-changing`, 'anime', 'dog', 'afro']
  }
];

// const handleTags = () => {

// };

const router = createBrowserRouter([
  {
    path: '/',
    element:
    <Auth0Provider
      domain="dev-d65ug44s1wn7ivu3.us.auth0.com"
      clientId="R1WTVmO04jtltBfgCh4xD9K9W10XQ1xX"
      authorizationParams={{
        redirect_uri: 'http://127.0.0.1:8080/'
      }}
    >
      <Root />
    </Auth0Provider>,
    errorElement: <ErrorPage />
  },
  {
    path: 'entries',
    element: <Entries entries={entries} />,
    errorElement: <ErrorPage />
  },
  {
    path: 'entries/:id',
    element: <Entry entries={entries} />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

  // <Auth0Provider
  //   domain="dev-d65ug44s1wn7ivu3.us.auth0.com"
  //   clientId="R1WTVmO04jtltBfgCh4xD9K9W10XQ1xX"
  //   authorizationParams={{
  //     redirect_uri: 'http://127.0.0.1:8080/'
  //   }}
  // >
  //   <App />
  // </Auth0Provider>