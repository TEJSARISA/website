@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap");

@font-face {
  font-family: Typewriter;
  src: url(./assets/fonts/JMH\ Typewriter-Bold.otf);
}

body {
  background: #e3f2fd;
}

svg {
  font-family: "Teko", sans-serif;
  /* position   : absolute; */
  width: 100%;
  height: fit-content;
}

svg text {
  text-transform: uppercase;
  animation: stroke 2s linear forwards;
  stroke-width: 2;
  stroke: var(--primary);
  font-size: 200px;
  font-weight: 500;
}

@keyframes stroke {
  0% {
    fill: rgba(72, 138, 20, 0);
    stroke: var(--primary);
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    stroke-width: 2;
  }

  70% {
    fill: rgba(72, 138, 20, 0);
    stroke: var(--primary);
  }

  80% {
    fill: rgba(72, 138, 20, 0);
    stroke: var(--primary);
    stroke-width: 3;
  }

  100% {
    fill: var(--primary);
    stroke: rgba(54, 95, 160, 0);
    stroke-dashoffset: -25%;
    stroke-dasharray: 50% 0;
    stroke-width: 0;
  }
}

:root {
  --bg-color: #080808;
  /* --primary: #D90A2C; */
  --primary: #d92027;
  --black: #000;
  --white: #fff;

  font-family: "Poppins", sans-serif;

  /* Font sizes */
  /* Headings */
  --font-size-heading-base: 32px;
  --font-size-heading-lg: 28px;

  /* Sub Headings */
  --font-size-subheading-base: 24px;
  --font-size-subheading-lg: 32px;

  /* Paragraphs */
  --font-size-paragraph-base: 14px;
  --font-size-paragraph-lg: 20px;
}

html {
  scroll-behavior: smooth;
}

@media screen and (min-width: 768px) {
  :root {
    --font-size-heading-base: 1px;
    --font-size-subheading-base: 32px;
    --font-size-paragraph-base: 16px;
    --font-size-heading-lg: 38px;
  }
}

h1,
h2 {
  font-stretch: expanded;
  font-weight: 600;

  font-family: "Poppins", sans-serif;
  font-size: var(--font-size-heading-lg);
}

h2 {
  font-size: var(--font-size-heading-base);
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
a {
  margin: 0;
}

h1 {
  line-height: 55px;
  text-align: center;
}

.subheading {
  font-size: 16px;
  letter-spacing: 0.02rem;
  max-width: 90%;
  margin: auto;
  opacity: 0.8;
  font-weight: 300;
  margin: 10px auto;
}

@media screen and (max-width: 550px) {
  .subheading {
    max-width: 100%;
    text-align: left;
  }
}

.not-cursive {
  font-family: "Courier New", Courier, monospace;
  font-weight: 500;
}

h2 {
  line-height: 45px;
}

p {
  text-align: center;
  font-weight: 400;
  line-height: 25px;

  font-size: 14px;
  color: rgba(255, 255, 255, 0.918);
  font-family: "Poppins", sans-serif;
}

@media screen and (max-width: 550px) {
  p {
    font-size: 15px;
    line-height: 23px;
    text-align: left;
  }

  h1 {
    text-align: left;
    line-height: 40px;
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

button {
  font-family: "Poppins", sans-serif;
}

body {
  margin: auto;
  max-width: 1500px;
  font-family: var(--font-family);
  -webkit-tap-highlight-color: var(--bg-color);
  /* padding                             : 20px; */
  /* text-align                          : center; */
  color: var(--white);
  background-color: var(--bg-color);
  font-size: var(--font-size-paragraph-base);
  padding-bottom: 0;
  /* user-select                         : none; */
  overflow-x: hidden;
  /* margin-top                          : 1000px; */
}

/* ::selection {
    background-color: #191919;
    color           : var(--primary);
} */

body > div {
  padding: 0 10%;
  background-color: var(--bg-color);
}

@media screen and (max-width: 600px) {
  body > div {
    padding: 0 3%;
  }
}

body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background-color: var(--primary);
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: var(--primary);
  }
}

.vk {
  /* background-color: #a50000; */
  color: var(--primary);
  /* background-image       : url(./assets/images/red-stroke.png); */
  /* background-position    : 10px 50%; */
  /* -webkit-background-clip: text;
    -webkit-text-fill-color   : transparent; */
  background-repeat: no-repeat;
  padding: 20px 0;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 20px;
  font-size: 60px;
  line-height: 30px;
  text-transform: uppercase;
  word-spacing: 2px;
  padding-right: 8px;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  border-right: 1px solid white;
  max-width: fit-content;
  font-family: "Teko", sans-serif;
  letter-spacing: -1px;
}

@media screen and (max-width: 600px) {
  .vk {
    font-size: 45px;
  }
}

a {
  text-decoration: none;
  color: var(--white);
  width: fit-content;
}

.navbar-container {
  margin: 0 auto;
}

.navbar {
  margin: auto;
  max-width: 1500px;
  /* display              : none; */
  display: flex;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 70px;
  background: #080808;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 2 2px 4px rgb(255, 255, 255);
}

@media only screen and (max-width: 470px) {
  .navbar {
    position: fixed;
  }
}

@media only screen and (max-width: 600px) {
  .navbar__middle {
    display: none;
  }
}

.navbar__middle a {
  display: inline-block;
  margin: 0 10px;
  border: none;
  transition: 0.2s;
}

.navbar__middle a:hover {
  /* scale: 1.05; */
}

.navbar__left {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.vk-logo {
  /* height  : 40px; */
  width: 150px;
  top: 2%;
  left: 2%;
  /* position: fixed; */
}

.navbar__left a {
  z-index: 9999;

  border: none;
  padding: 0;
  -webkit-writing-mode: vertical-lr;
}

.navbar__left img {
  /* height: 40px; */
}

.navbar__right {
  display: flex;
  align-items: center;
}

.navbar__right a:hover {
  scale: 1.05;
}

.navbar__right img {
  width: 40px;
  height: 40px;
  transition: 0.2s;
}

.navbar__right img:hover {
  filter: invert(68%) sepia(58%) saturate(5884%) hue-rotate(102deg)
    brightness(102%) contrast(91%);
}

.navbar__right a {
  border: none;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  /* background-color: rgba(255, 0, 0, 0.055); */
  border-radius: 5px;
  padding: 8px;
  transition: 0.3s;
}

.hero-section {
  /* column-gap           : 20px; */
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* flex-direction    : column; */
  padding-top: 50px;
  padding-bottom: 50px;
  /* border            : 1px solid white; */
}

.hero-img-container {
  width: 80%;
  margin: auto;
  border-radius: 5px;
  overflow: hidden;
}

@keyframes vk-img {
  0% {
    scale: 1;
  }

  50% {
    scale: 1.02;
  }

  100% {
    scale: 1;
  }
}

.hero-img {
  height: 100%;
  width: 100%;
  transition: ease-in-out 0.3s;
  /* animation: 5s vk-img ease-in-out  infinite; */
}

.hero-img-container:hover .hero-img {
  scale: 1.05;
}

.hero-p {
  text-align: center;
  /* letter-spacing: 1px; */
}

.words {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.words p {
  filter: blur(2px);
  z-index: 1;
  color: #4b4b4b;
}

.words p:nth-child(1) {
  position: absolute;
  top: 20%;
}

.words p:nth-child(2) {
  position: absolute;
  top: 30%;
  right: 10%;
}

.words p:nth-child(3) {
  position: absolute;
  top: 10%;
  left: 5%;
}

.words p:nth-child(4) {
  position: absolute;
  top: 20%;
  right: 20%;
}

.words p:nth-child(5) {
  position: absolute;
  bottom: 20%;
  left: 30%;
}

.words p:nth-child(6) {
  position: absolute;
  top: 50%;
}

.words p:nth-child(7) {
  position: absolute;
  right: 0;
  bottom: 5%;
}

.hero-section > p {
  /* margin-top: 10px; */
  margin-bottom: 10px;
}

.social-stats-counter {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
  margin-top: 20px;
}

.social-stats-counter a {
  border: none;
}

.social-stat {
  background-color: rgb(13, 13, 13);
  padding: 15px 20px;
  border-radius: 5px;
  text-align: center;
  max-width: 160px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0;
}

.social-stat img {
  max-width: 50px;
  width: 35px;
  height: auto;
}

.social-stat h3 {
  font-size: var(--font-size-subheading-base);
  font-weight: bold;
}

.social-stat p {
  font-family: "Poppins", serif;
  font-size: 16px;
  text-align: center;
}

.social-stat a {
  display: none;
}

.social-stat:hover {
  background-color: var(--primary);
  color: black;
}

.hero-section a {
  font-weight: 500;
  margin-bottom: 20px;
  width: 260px;
  display: block;
  font-size: calc(var(--font-size-paragraph-base) + 2px);
  text-align: center;
}

.container {
  height: 200px;
  overflow: hidden;
}

@keyframes slide-up {
  0% {
    transform: translateY(0);
  }

  10% {
    transform: translateY(-120%);
  }

  100% {
    transform: translateY(-120%);
  }
}

.raw-talks-section {
  position: relative;
  border-radius: 8px;
  background-color: #0b0b0b;
  padding-top: 40px;
  padding-bottom: 40px;
}

.raw-talks-anim .text-container {
  padding-top: 20px;
  padding-bottom: 20px;

  height: 100px;
  overflow: hidden;
}

.raw-talks-anim {
  padding: 20px 0;
  padding-bottom: 0;
  width: 100%;
}

.raw-talks-text-first {
  padding-top: 10px;
  font-size: 60px;
  line-height: 80px;
}

.go-up-anim {
  animation: slide-up linear 3s;
}

.raw-talks-text-second {
  padding-top: 15px;

  font-size: 60px;
  line-height: 80px;
}

.raw-talks-text-first,
.raw-talks-text-second {
  color: var(--primary);
  text-shadow: 1px 1px rgba(255, 255, 255, 0);
  text-align: center;
  font-family: "Caveat", sans-serif;
}

@media screen and (max-width: 600px) {
  .raw-talks-text-second,
  .raw-talks-text-first {
    font-size: 50px;
  }

  .text {
    position: relative;
  }
}

.about {
  margin-top: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.about img {
  margin: auto;
  width: 90%;
  padding: 2px;
  border-radius: 15px;
  /* border       : 1px solid rgba(255, 255, 255, 0.329); */
}

@media screen and (max-width: 1000px) {
  .about img {
    margin: auto;
    width: 95%;
    height: 300px;
    background-size: auto;
  }
}

.about .text {
  margin: auto;
  width: 95%;
  padding: 20px;
  padding-top: 0px;
  padding-left: 0;
}

.about .text .name {
  line-height: 28px;
  font-family: "Caveat", cursive;
  background-color: rgba(255, 255, 255, 0.884);
  color: var(--primary);
  width: fit-content;
  padding: 0 8px;
  text-align: left;
  margin-bottom: 10px;
  font-size: 35px;
}

@media screen and (min-width: 900px) {
  .about .text .name {
    font-size: 50px;
    line-height: 40px;
    padding: 0 10px;
  }
}

.about .text p {
  /* max-width : 0%; */
  letter-spacing: 0.04rem;
  text-align: left;
}

@media screen and (max-width: 1000px) {
  .about .text p {
    max-width: 90%;
  }
}

.about h1 {
  font-weight: 600;
}

@media screen and (max-width: 1000px) {
  .about {
    grid-template-columns: 1fr;
    column-gap: 0;
    /* margin               : 0 10%; */
  }

  .about .text {
    margin-top: 10px;
    padding: 0;
    text-align: center;
  }
}

.about .text p {
  line-height: 25px;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-340px);
  }
}

.guests {
  /* width: 90%; */
  background-color: #080808;
  padding-top: 40px;
  padding-bottom: 40px;

  /* padding-right           : 0; */
  /* overflow             : hidden; */
  /* display                 : grid; */
  /* grid-template-columns   : 97% 3%; */
}

@media only screen and (max-width: 600px) {
  .guests {
    /* grid-template-columns: 95% 5%; */
  }
}

.guests-container {
  position: relative;
  margin-top: 20px;
  padding: 0 5%;
  overflow: hidden;
  /* display  : flex; */
  /* animation: slide infinite linear 5s; */
}

.guest-card {
  margin: auto;
  transition: 0.2s;
}

.guest-card p {
  text-align: center;
}

.guest-card p {
  text-align: center !important;
}

.guest-card .name {
  margin-top: 5px;
  font-size: 18px;
}

.guest-card .role {
  /* margin-top: 5px; */
  font-size: 12px;
  font-style: italic;
  line-height: normal;
  color: rgba(255, 255, 255, 0.651);
  max-width: 60%;
  margin: auto;
}

.guest-card img {
  border-radius: 5px;
  width: 300px;
  height: 300px;
  display: flex;
  margin: auto;
}

.guest-card.last {
  margin: auto;
  position: relative;
  border-radius: 5px;
  width: 300px;
  height: 300px;
  background-color: #131313;
}

.guest-card:hover {
  cursor: pointer;
  scale: 1.05;
}

.guest-card.last .text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
}

.guest-card.last:hover {
}

.guests-swiper {
  border-radius: 10px;
  padding: 20px 0;
  /* background: linear-gradient(90deg, #ff3f3f09, #ff76ba09); */
}

.youtube {
}

.podcasts-knowledge {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* padding              : 30px; */
  transition: 0.5s;
  border-radius: 20px;
  overflow: hidden;
}

.podcasts-knowledge._0 {
  background-color: #496737;
  background-image: linear-gradient(to left top, #49673788 0%, #49673788 100%),
    url(./assets/images/dollar-padding.png);
  background-size: 100px;
  background-position: 0 50px;
}

.podcasts-knowledge._1 {
  background-color: #3457d5;
  background-image: linear-gradient(to left top, #3457d58f 0%, #3457d58f 100%),
    url(./assets/images/entrepreneur.png);
  background-size: 100px;
  background-position: 0 50px;
}

.podcasts-knowledge._0 .text {
  /* background-color:#496737 ; */
}

.podcasts-knowledge._0 .text h1 {
  /* color: black; */
}

@media screen and (max-width: 600px) {
  .podcasts-knowledge {
    grid-template-columns: 1fr;
  }
}

.podcasts-knowledge .text {
  padding: 20px;
  text-align: left;
  /* border-radius       : 15px; */
  /* box-shadow          : 1px 1px 3px rgba(255, 255, 255, 0.185); */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(2px);
}

.podcasts-knowledge .categories {
  margin-top: 20px;
}

.podcasts-knowledge .categories .star {
  font-size: 12px;
  background-color: white;
  color: black;
  width: fit-content;
  margin: 0 auto;
  border-radius: 5px;
  padding: 0 5px;
}

.podcasts-knowledge .categories .category {
  /* border       : 1px solid white; */
  padding: 10px;
  width: 80%;
  margin: 15px auto;
  border-radius: 10px;
  transition: 0.5s;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.podcasts-knowledge .categories .category {
  font-size: 18px;
  color: white;
  background-color: rgba(255, 255, 255, 0);
}

.podcasts-knowledge .categories .category:hover {
  cursor: pointer;
}

.podcasts-knowledge .categories .category.finance.active-category {
  background-color: #83ba64;
  color: white;
}

.podcasts-knowledge .categories .category.entrepreneur.active-category p {
  color: white;
}

.podcasts-knowledge .categories .category.entreprenuer.active-category {
  background-color: #1d42c7;
  color: white;
}

.mix-youtube-container {
  margin-top: 30px;
}

.mix-youtube-container .grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
}

.mix-youtube-container .podcast-name {
  transition: 0.5s;
}

.mix {
  margin: 10px;
}

@media screen and (max-width: 600px) {
  .mix-youtube-container .grid {
    grid-template-columns: 1fr;
  }
}

.mix-youtube-container iframe {
  /* margin: 50px; */
  max-width: 100%;
}

.podcast-shrink {
}

.podcasts-div {
  /* display: none; */
  margin-top: 30px;
  position: absolute;
  top: 0;

  border: 1px solid white;
  width: 50vw;
  height: 50vw;
  background-color: var(--bg-color);
}

.podcasts-div h1 {
  font-size: 70px;
}

.empty-podcasts {
  height: 50vw;
  position: relative;
}

.spotify-cards {
  display: none;
}

.spotify-height {
  display: none;
}

.spotify-grid {
  padding-top: 80px;
  padding-bottom: 50px;

  background-image: linear-gradient(
    to bottom,
    #050505 0%,
    #050505 80%,
    #0b0b0b 100%
  );
}

.spotify-grid .text h1 {
  margin-bottom: 15px;
}

.spotify-grid .text {
  margin-left: 10px;
}

.spotify-grid-iframe {
  text-align: center;
  filter: brightness(80%);
  margin: 10px 0;
}

.spotify-grid iframe {
  height: 80px;
  width: 80%;
  /* aspect-ratio: 1/1; */
  /* margin      : 10px 0; */
}

.iphone-wrapper {
  width: 70%;
  margin: auto;
  margin-top: 20px;
  position: relative;
  background-image: url("./assets/images/iphone.png");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100%;
  /* overflow-y       : scroll; */
  transition: 1s;
}

@media only screen and (max-width: 600px) {
  .iphone-wrapper {
    width: 90%;
  }
}

.iphone-wrapper .spotify-notification-container {
  z-index: 5;
  width: 100%;
  position: absolute;
  top: 90%;
  bottom: 15%;
  left: 0;
  right: 15%;
  /* padding-top     : 38%; */
  overflow: auto;
  max-height: 100%;
  transition: 0.2s;
}

.iphone-wrapper .spotify-notification-container::-webkit-scrollbar {
  display: none;
}

.iphone-wrapper .spotify-notification-container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.iphone-wrapper .spotify-notification-container::-webkit-scrollbar-thumb {
  background-color: rgb(255, 0, 0);
}

.spotify-img {
  transition: 0.2s;
  width: fit-content;
}

.spotify-img:hover {
  box-shadow: #00afaf;
  /* scale     : 1.05; */
}

.spotify-a {
  display: none;
  padding: 0;
  border: none;
  width: 70%;
  margin: auto;
  height: 100%;
}

.spotify-grid .grid-container .left {
  position: relative;
  /* grid-area: spotify-text; */
}

.spotify-grid .grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-areas     : 'spotify-a spotify-text'; */
  row-gap: 50px;
}

.spotify-grid .grid-container .left .text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
}

.spotify-grid .grid-container .left .text-container h1 {
  text-align: center !important;
}

@media only screen and (max-width: 1000px) {
  .spotify-grid .grid-container .left .text-container {
    position: static;
    transform: none;
    margin: auto;
  }

  .spotify-grid .grid-container {
    display: grid;
    grid-template-columns: 1fr;
  }
}

.spotify-grid .grid-container .left p {
  text-align: center;
  font-size: 60px;
  text-transform: uppercase;
  font-weight: 900;
  line-height: 48px;
  color: var(--color-grey-70);
}

@media only screen and (max-width: 600px) {
  .spotify-grid .grid-container .left p {
    font-size: 30px;
  }
}

.spotify-grid {
  z-index: 9999;
}

.iphone-lock-container {
  position: absolute;
  top: 9%;
  left: 50%;
  transform: translateX(-50%);
}

.iphone-lock-container .lock-bar {
  border-radius: 3px;
  width: 20px;
  height: 20px;
  background-color: white;
}

.spotify-grid .iphone-links {
  position: relative;
  display: none;
}

.spotify-grid .iphone-links .iphone-container {
  position: relative;
  width: 70%;
  margin: auto;
}

.spotify-grid
  .iphone-links
  .iphone-container
  .social-container::-webkit-scrollbar {
  width: 5px;
}

.spotify-grid
  .iphone-links
  .iphone-container
  .social-container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px white;
}

.spotify-grid
  .iphone-links
  .iphone-container
  .social-container::-webkit-scrollbar-thumb {
  background-color: white;
}

.spotify-grid .iphone-links .iphone-container .social-container {
  position: absolute;
  top: 28%;
  left: 0;
  right: 0;
  bottom: 5%;
  width: 80%;
  margin: auto;
  filter: brightness(90%);
  overflow-y: auto;
  max-width: 100%;
  padding-right: 5px;

  overflow-x: hidden;
}

button.red {
  display: flex;
  margin: auto;
  padding: 10px;
  /* border-radius      : 5px; */
  margin-top: 30px;
  background-color: #d92027;
  border: none;
  color: white;
  font-size: 18px;
  transition: 0.2s;
  /* box-shadow         : 3px 3px 1px 1px rgba(255, 255, 255, 0.562); */
}

button.red:hover {
  cursor: pointer;
  /* background-color: #791115; */
  box-shadow: none;
}

.phone-img {
  display: block;
  margin: auto;
  width: 100%;
}

.laptop-img {
  display: none;
  margin: auto;
  margin-top: 20px;
  width: 65vw;
}

@media screen and (max-width: 500px) {
  .phone-img {
    display: flex;
  }

  .laptop-img {
    display: none;
  }
}

.spotify {
  z-index: 0;
  margin-top: 80px;
  position: sticky;
  top: 80px;
}

/* .overflow-hidden{
    overflow: hidden;
} */

.spotify .podcasts-container {
  display: none;
  margin-top: 20px;
  /* display        : flex; */
  justify-content: flex-start;
  width: 100%;
}

.spotify .podcasts-container iframe {
  display: inline-block;
  /* width : 80%; */
  /* height: auto; */
}

.podcasts-container .iframe-container:hover {
  scale: 1.02;
}

.spotify .podcasts-container .iframe-container {
  margin: 0px 10px;
  min-width: 300px;
  transition: 0.2s ease-out;
  /* width  : 50vw;
    height    : 50vw; */
}

.spotify .podcasts-container .iframe-container.last {
  height: 100%;
  background-color: #1ed760;
  border-radius: 0.75rem;
  border: none;
  padding: 50px;
  display: flex;
}

.spotify .podcasts-container .iframe-container.last h1 {
  /* margin-top: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 50px;
  /* height      : auto; */
}

.spotify .podcasts-container a {
  height: auto;
  border: none;
  /* padding : 2px; */
  padding-top: 0;
}

.line-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.dashed-line {
  flex-grow: 1;
  border: none;
  border-top: 2px dashed grey;
}

.usps-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.usps-container .usp-cont {
  align-items: flex-start;
}

.usps-container .usp-cont .text-desc {
  /* display: flex; */
}

.usps-container .usp-cont .text-desc svg {
  overflow: visible;
  align-self: center;
  margin-right: 5px;
}

.usp-cont {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  /* background  : var(--primary); */
  border: 3px solid #d9202650;
  color: var(--white);
  padding: 15px;
}

.usp-cont .num-stat {
  font-size: var(--font-size-heading-base);
  color: var(--white);
  font-weight: 500;
  padding: 10px 0;
}

.usp-cont .text-desc {
  color: var(--font-black);
  font-weight: 500;
  padding: 10px;
}

.usps-container .usp-cont .text-desc p {
  align-self: center;
}

@keyframes downToUp {
  0% {
    transform: translateY(40%);
    opacity: 0;
  }

  80% {
    opacity: 1;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.usps-container {
  animation: downToUp 1s ease-in-out;
}

.from-left {
  /* grid-column: 2 / 3; */
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.from-right {
  /* grid-column: 3 / 4; */
  -webkit-transform: translateX(50%);
  transform: translateX(50%);
}

.from-left,
.from-right {
  transition: opacity 250ms ease-in, -webkit-transform 400ms ease-in;
  transition: opacity 250ms ease-in, transform 400ms ease-in;
  transition: opacity 250ms ease-in, transform 400ms ease-in,
    -webkit-transform 400ms ease-in;
  opacity: 0;
}

.from-left.appear,
.from-right.appear {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
}

.podcasts h3 {
  font-style: italic;
}

.podcast {
  width: 200px;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  border: 2px solid rgba(255, 255, 255, 0.151);
  border-radius: 15px;
  margin-right: 14px;
  padding: 2px;
}

.podcast .img-container img {
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
}

.podcast .text-container {
  /* margin-top: 5px; */
  padding: 10px;
}

.podcast .text-container .name {
  font-weight: 500;
  line-height: 15px;
  font-size: 16px;
}

.podcast .text-container .role {
  color: rgba(255, 255, 255, 0.767);
  margin-top: 5px;
  font-size: 14px;
}

.podcast.spotify {
  border-radius: 15px;
  padding: 3px;
}

.podcast.spotify.name {
}

.podcast a {
  margin: 0;
  padding: 0;
  border-radius: 0;
  border: none;
}

.podcast:last-child {
  margin-right: 0;
}

h3 {
  margin: 0;
  font-size: var(--font-size-subheading-base);
  font-weight: 500;
}

.line-container {
  display: none;
}

.spotify-btn {
  padding: 15px;
  border-radius: 10px;
  /* border          : 1px solid #595959; */
  width: 100%;
  margin: auto;
  margin-bottom: 10px;
  backdrop-filter: blur(10px);
  background-color: #00d95f;
  transition: 0.2s;
  color: black;
}

.spotify-btn.apple {
  background-color: black;
  color: white;
}

.spotify-btn.youtube {
  background-color: red;
  color: white;
}

.spotify-btn:hover {
  scale: 1.1;
}

.spotify-btn .flex-container {
  display: flex;
  /* justify-content: space-between; */
}

.spotify-btn img {
  margin: auto 0;
  width: 20px;
  height: 20px;
}

.spotify-btn h3 {
  font-size: 12px;
  margin-left: 10px;
  /* color      : black; */
}

@keyframes move-right {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-2172px);
  }
}

@keyframes move-left {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-1872px);
  }
}

.testimonial {
  position: relative;
  padding-right: 0;
  padding-left: 0;
  padding-top: 40px;
  padding-bottom: 80px;

  overflow: hidden;
  background-color: var(--primary);
  background-image: url(./design/testimonial-bg.png);
}

.testimonial-cards {
  animation: move-right infinite linear 18s;
}

.reverse-animation {
  margin-top: 20px;
  animation: move-left reverse infinite linear 18s;
}

.testimonial .text {
  margin-left: 3%;
  margin-right: 3%;
}

.testimonial .subheading {
  font-weight: 700;
  margin-bottom: 30px;
}

.testimonial-cards-container .fade-overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* background-color: black; */
  background-image: linear-gradient(
    to right,
    131313 0%,
    transparent 5%,
    transparent 95%,
    black 100%
  );
  z-index: 2;
}

.testimonial-cards-container {
  position: relative;
  margin: auto;
  overflow: hidden;
}

.testimonial .testimonial-card {
  position: relative;
  width: max-content;
  max-width: 300px;
  border: 1px solid rgba(255, 255, 255, 0.253);
  padding: 15px;
  border-radius: 5px;
  background-color: #202020;
}

.testimonial-card .profile {
  display: flex;
}

.testimonial-card .profile .name {
  margin-top: 3px;
  margin-left: 5px;
  font-weight: 600;
  font-size: 15px;
  color: white;
  font-family: "Poppins", sans-serif;
}

.testimonial-card .buttons .like {
  margin-top: 10px;
  display: flex;
}

.testimonial-card .buttons .like img {
  width: 14px;
  height: 14px;
}

.testimonial-card .buttons .like p {
  line-height: 16px;
  margin-left: 5px;
  font-size: 13px;
}

.testimonial-card .profile img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.testimonial-card .para {
  margin-top: 5px;
  font-size: 13px;
  color: white;
  text-align: left;
  line-height: 18px;
  font-family: "Poppins", sans-serif;
}

.testimonial-card .quotation {
  position: absolute;
  font-size: 100px;
  top: 0;
  opacity: 0.6;
  color: red;
  font-family: Arial, Helvetica, sans-serif;
}

.testimonial-card-container:hover {
  scale: 1.06;
}

.testimonial-card-container {
  background-size: cover;
  margin: 5px;
  transition: 0.2s;
  height: fit-content;
}

.testimonial-profile {
  margin-top: 20px;
  width: 100%;
  display: flex;
}

.testimonial-profile-text {
  margin-left: 10px;
}

.testimonial-cards {
  display: flex;
}

.designation {
  font-size: 0.8rem;
  color: rgba(227, 227, 227, 0.861);
}

/* .testimonial-card-container:nth-child(1) {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url(/images/blob-scene-haikei.png);
}

.testimonial-card-container:nth-child(2) {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url(/images/testimonial-white.png);
}

.testimonial-card-container:nth-child(3) {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url(/images/testimonial-red.png);
}

.testimonial-card-container:nth-child(4) {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url(/images/testimonial-yellow.png);

}

.testimonial-card-container:nth-child(5) {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url(/images/blob-scene-haikei.png);

}

.testimonial-card-container:nth-child(6) {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url(/images/testimonial-white.png);

}

.testimonial-card-container:nth-child(7) {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url(/images/testimonial-red.png);

}

.testimonial-card-container:nth-child(8) {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url(/images/testimonial-yellow.png);

}
 */

.contact-form {
  margin: 20px 0;
  /* border-radius: 15px; */
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.button-container button {
  background-color: #000;
  color: #fff;
  flex: 1;
  border: none;
  padding: 10px 20px;
  /* margin-right : 10px; */
  cursor: pointer;
  transition: 1s;
}

.button-container button.active {
  background-color: var(--primary);
  transition: 0.5s;
}

.form-container {
  display: flex;
  justify-content: center;
}

.form-container form {
  padding: 30px;
  padding-top: 20px;
  color: var(--white);
  background: var(--primary);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  /* border-radius: 10px; */
  display: none;
  width: 100%;
}

.form-container form h3 {
  text-align: center;
  margin-bottom: 16px;
}

textarea {
  font-family: inherit;
  color: white;
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-control {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

.form-group:last-of-type {
  margin-bottom: 20px;
}

input[type="text"],
input[type="tel"],
textarea {
  padding: 10px;
  border: none;
  /* border-radius: 5px; */
  font-family: inherit;
}

.btn-primary {
  display: block;
  margin: 0 auto;
  /* width        : 100%; */
  padding: 10px;
  background-color: var(--white);
  color: #000;
  width: 200px;
  font-size: var(--font-size-paragraph-base);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

footer {
  padding-top: 50px;
  padding-bottom: 50px;

  border-top: 1px solid rgba(255, 255, 255, 0.103);
  text-align: center;
  background-color: black;
  /* margin-top   : 100px; */
}

footer .footer-vk {
  text-align: center;
  font-size: 18px;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.651);
}

.h-line {
  width: 80%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.11);
  margin: auto;
}

.social-links {
  margin-top: 15px;
  margin-bottom: 30px;
}

.social-links a {
  border: none;
  padding: 5px;
}

.social-links h2 {
  font-weight: 700;
  margin-bottom: 10px;
}

.social-links a img {
  height: 40px;
  width: 40px;
  transition: 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.589);
  padding: 10px;
  border-radius: 50%;
}

.social-links a img:hover {
  scale: 1.3;
  background-color: #d92027;
}

@media screen and (max-width: 575px) {
  .hero-section > img {
    max-width: 300px;
  }
}

@media screen and (min-width: 576px) {
  .hero-section > img {
    /* width    : 50%; */
    max-width: 450px;
    margin: 0 auto;
  }

  .hero-section > p,
  .raw-talks-section > p {
    /* width : 80%; */
    margin: 0 auto;
  }
}

@media screen and (max-width: 1000px) {
  .hero-section {
    grid-template-columns: 1fr;
    /* gap               : 20px; */
    justify-content: center;
    /* height            : 100vh; */
  }

  .hero-section .hero-container {
    /* display        : flex; */
    /* flex-direction : column; */
    /* gap            : 10px; */
    /* justify-content: end; */
  }

  .hero-section .hero-container .social-stat {
    margin-bottom: 0;
    margin-top: 0;
  }

  .usps-container {
    flex-direction: row;
    gap: 20px;
    justify-content: center;
  }

  .usp-cont .text-desc svg {
    display: none;
  }
}

@media screen and (min-width: 992px) {
  .navbar {
    /* left     : 50%;
        transform: translateX(-50%); */
  }

  .podcasts-container {
    padding-left: 0;
    justify-content: center;
  }

  .contact-form {
    margin: 20px auto;
    width: 70%;
  }
}

.podcast {
  position: relative;
}

.img-container {
  position: relative;
}

.youtube-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url("/assets/icons/youtube.svg");
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

/* Add the desired tint effect to the image */

.podcasts.yt .podcast {
  width: 100%;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  /* Set the aspect ratio (16:9 for most YouTube videos) */
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.spotify-emb .podcast {
  width: auto;
  max-width: 80%;
}

.spotify-emb .podcast iframe {
  width: 232px;
  height: 232px;
}

/* skills */

.data {
  position: absolute;
  height: fit-content;
  width: fit-content;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.scroller-container {
  height: 1000px;
  position: relative;
  /* width: 100%; */
}

.data-container {
  height: 100vh;
  width: 100%;
}

.data:nth-child(1) {
  z-index: 5;
  rotate: 3deg;
}

.data:nth-child(2) {
  z-index: 4;
  rotate: -2deg;
}

.data:nth-child(3) {
  z-index: 3;

  rotate: 2deg;
}

.scroll-division {
  margin-top: 150px;
  position: relative;
  width: 100%;
  height: 400px;
  /* Set an appropriate height */
  /* overflow-x: hidden;  */
}

.scroll-element {
  position: absolute;
  top: 50%;
  left: -100%;
  /* Initial position off-screen to the left */
  transform: translate(-50%, -50%);
  width: 200px;
  /* Adjust according to your element size */
  height: 200px;
  /* Adjust according to your element size */
}

/* FORM  */
:root {
  --form-bg: #131313;
  --form-text: white;
  --form-placeholder: rgb(145, 145, 145);

  --form-border: #888888;
  --form-font: "Poppins", sans-serif;

  /* --form-bg : rgb(241, 241, 241); */
}

.contact-me {
}

.form h2 {
  text-align: center;
}

.form .img-container {
  margin-top: 20px;
  /* margin : auto; */
  width: fit-content;
}

.form .img-container img:hover {
  background-color: #d92027;
  scale: 1.2;
}

.form .img-container img {
  transition: 0.2s;
  padding: 10px;
  width: 50px;
  height: 50px;
  /* border       : 1px solid rgba(255, 255, 255, 0.24); */
}

.form .img-container a {
  height: 100%;
  width: 100%;
  border: none;
}

.form {
  display: grid;
  /* display              : none; */
  grid-template-columns: 1fr 1fr;
  margin-top: 50px;
  padding: 20px;
  background-color: #202020;
  border-radius: 5px;
  column-gap: 20px;
}

.form .left {
  margin: auto;
  color: var(--form-text);
}

@media screen and (max-width: 800px) {
  .form .left {
    margin: 0;
  }

  .form {
    grid-template-columns: 1fr;
  }
}

.form .left h2 {
  font-family: "Poppins", sans-serif;
}

.form .left p {
  font-family: var(--form-font);
  line-height: 25px;
  max-width: 95%;
  font-weight: 300;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.74);
}

.form p {
  text-align: left;
  font-family: var(--form-font);
  letter-spacing: 1px;
  padding-left: 2px;
  /* color         : var(--form-text); */
}

.form input {
  border-radius: 5px;
  font-family: var(--form-font);
  background-color: transparent;
  color: white;
  border-bottom: 1px solid var(--form-border);
  box-shadow: none;
}

.form input::placeholder,
.form textarea::placeholder {
  color: var(--form-placeholder);
}

.form textarea {
  font-family: var(--form-font);
  background-color: transparent;
}

.form-input-container {
  margin: 20px 0;
}

.form-input-container span {
  display: inline-block;
  margin-left: 8px;
  font-size: 16px !important;
  margin-top: 10px;
}

.form-input-container .subheading {
  margin: none !important;
}

.form-input-container input {
  /* -webkit-appearance: none; */
  color: var(--form-text);
  font-weight: 500;
  font-size: 16px;
}

.form-input-container input[type="text"],
input[type="tel"] {
  transition: 0.3s;
  -webkit-appearance: none;
}

/* 
.form-input-container input[type="radio"]: {
    background-color: #0f0f0f;
} */

.form-input-container input:focus,
.form-input-container input:hover,
.form-input-container textarea:hover {
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  scale: 1.02;
}

.form-input-container input:focus {
  outline: none;
}

.form-input-container textarea {
  border-radius: 5px;
  transition: 0.3s;
  font-size: 17px;
  border: none;
  border-bottom: 1px solid var(--form-border);
  -webkit-appearance: none;
  font-weight: 500;
}

.form-input-container textarea:focus {
  scale: 1.02;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;

  outline: none;
}

.form-input-container.radio {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
}

.form-input-container.radio label {
  color: var(--form-text);
  /* background-color: red; */
  border: 1px solid var(--form-border);
}

.form-input-container.radio label {
  text-align: center;
  margin: auto;
  width: 100%;
  padding: 10px 0;
  border-radius: 5px;
}

.form .submit {
  width: 100%;
  border-radius: 5px;
  border: none;
  border: 1px solid rgba(255, 255, 255, 0.103);
  padding: 10px 0;
  font-size: 17px;
  font-family: var(--form-font);
  color: white;
  background-color: #c31c23;
  transition: 0.3s;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.form .submit:hover {
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;

  scale: 1.02;
}

.form .submit:active {
  scale: 0.98;
}

.card-2 {
  text-align: left;
}

.card-2 {
  border-radius: 10px;
  padding: 5px;
  border: 1px solid rgba(255, 255, 255, 0.26);
  position: relative;
  max-width: 500px;
  width: fit-content;
  margin: 0 auto;
  background-color: var(--bg-color);
  /* scale        : ; */
}

@media screen and (min-width: 800px) {
  .card-2 {
    max-width: 800px;
  }
}

.card-2-text {
  text-align: center;
  width: fit-content;
  margin: 0 auto;
}

@media screen and (max-width: 490px) {
  .card-2 {
    max-width: 350px;
  }
}

.card-2 .type {
  background: #000;
  position: absolute;
  top: 3%;
  left: 3%;
}

.card-2 .type p {
  font-size: 20px;
}

.card-2 img {
  border-radius: 5px;
  width: 300px;
  max-height: 400px;
}

.card-2 h2 {
  font-size: 12px;
  padding-left: 8px;
  margin-bottom: 2px;
  line-height: 25px;
  color: white;
  width: fit-content;
  text-align: center;
  text-transform: uppercase;
}

@media screen and (max-width: 550px) {
  .card-2 h2 {
    font-size: 16px;
  }
}

.card-2 .profile {
  padding-left: 8px;
  width: fit-content;
  margin: 0 auto;
}

.card-2 .profile img {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: auto 0;
}

.card-2 .profile .text {
  margin: 0 auto;
}

.card-2 .profile .text p {
  text-align: center;
}

.card-2 .profile .text .name {
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  /* padding            : 0 5px; */
  /* width              : fit-content; */
  /* color              : black; */
  /* background-color   : rgba(255, 255, 255, 0.678); */
  color: #ffffffdc;
  font-weight: 600;
  font-size: 18px;
  /* font-size          : ; */
}

.card-2 .profile .text .designation {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.596);
}

.swiper-wrapper {
  /* width: fit-content !important; */
}

.podcasts-slider .swiper-wrapper {
  padding-bottom: 50px;
  transition-timing-function: linear !important;
}

.podcasts-slider .finance-category:hover {
  cursor: pointer;
}

.swiper-slide {
  /* margin:  !important; */
}

.swiper-slide a {
  margin: auto;
  display: block;
  width: fit-content;
  border: none;
  text-decoration: none;
}

.swiper-slide iframe {
  margin: auto;
  display: flex;
}

@keyframes podcast-bg-animate {
  0% {
    background-position: 0% 0%;
  }

  50% {
    background-position: 100% 0%;
  }

  100% {
    background-position: 0% 00%;
  }
}

.podcasts {
  /* border-radius    : 20%; */
  padding-top: 30px;
  padding-bottom: 20px;

  background-color: var(--primary);
  /* background-image    : linear-gradient(to bottom, #d92026a8, #d92026a8), url(./design/Rect\ Light.png); */
  /* background-image    : linear-gradient(to bottom, #050505e0, #050505c9), url(./design/Rect\ Light.png); */
  /* background-size     : cover; */
  background-repeat: no-repeat;
  /* transform           : rotate(30deg); */
  background-size: 200% 110%;

  animation: podcast-bg-animate 10s ease-in-out infinite;
}

@media screen and (max-width: 550px) {
  .podcasts {
    margin: 0;
  }
}

.podcasts .text {
  padding: 0 5%;
  /* transform: rotateZ(-6deg); */
}

.podcasts .text h1 {
  margin-bottom: 8px;
}

.podcasts .finance-category {
  margin-top: 20px;
}

.podcasts .finance-category .category {
  background-color: rgb(204 255 173 / 90%);
}

.podcasts .entrepreneur-category {
  margin-top: 15px;
}

.podcasts .entrepreneur-category .category {
  background-color: rgba(173, 211, 255, 0.9);
}

.podcasts .third-category {
  margin-top: 20px;
}

.podcasts .third-category .category {
  background-color: rgba(255, 255, 255, 0.9);
}

.podcasts-iframe-container {
  width: fit-content;
}

.podcasts-iframe-container iframe {
  margin: 0 auto;
}

.podcasts .category {
  border-radius: 5px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 10px;
  padding: 2px 8px;
  width: fit-content;
  line-height: 25px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.904);
  color: black;
}

.podcasts .finance-category {
  /* background-color: rgb(0, 155, 0); */
}

.podcasts .entrepreneur-category {
  /* background-color: rgb(33, 33, 161); */
}

.podcasts .third-category {
  /* background-color: #D90A2C; */
}

.podcasts .slides {
  /* display                    : none; */
  /* display                 : grid;
    grid-template-columns      : 1fr 1fr; */
  /* flex-wrap               : wrap; */
  margin: 0 10%;
  overflow: hidden;
  /* display                 : grid; */
  /* grid-template-columns   : 1fr ; */
}

.swiper-slide {
  /* width: fit-content !important; */
}

.swiper-btn {
  opacity: 0.8;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  z-index: 2;
  transform: translateY(-50%);
}

.swiper-btn:hover {
  cursor: pointer;
}

@media screen and (max-width: 550px) {
  .swiper-btn {
    /* opacity: 0.5; */
    width: 25px;
    height: 25px;
  }
}

.swiperg-button-prev {
  z-index: 2;
  left: 0%;
  /* filter: invert(67%) sepia(27%) saturate(612%) hue-rotate(55deg) brightness(95%) contrast(93%); */
}

.swiperg-button-next {
  z-index: 2;
  right: 3%;
  /* filter: invert(67%) sepia(27%) saturate(612%) hue-rotate(55deg) brightness(95%) contrast(93%); */
}

.swipere-button-prev,
.swiperf-button-prev,
.swiperr-button-prev {
  left: 0%;
  /* filter: invert(67%) sepia(27%) saturate(612%) hue-rotate(55deg) brightness(95%) contrast(93%); */
}

.swiperf-button-next,
.swipere-button-next,
.swiperr-button-next {
  right: 0%;
  /* filter: invert(67%) sepia(27%) saturate(612%) hue-rotate(55deg) brightness(95%) contrast(93%); */
}

@media (min-width: 660px) and (max-width: 1150px) {
  .swipere-button-prev,
  .swiperf-button-prev,
  .swiperr-button-prev {
    left: 10%;
  }

  .swiperf-button-next,
  .swipere-button-next,
  .swiperr-button-next {
    right: 10%;
  }
}

@media screen and (min-width: 1050px) {
  .swiperf-button-next,
  .swipere-button-next,
  .swiperr-button-next {
    /* right     : 10%; */
    /* display: none; */
  }

  .swiperf-button-prev,
  .swipere-button-prev,
  .swiperr-button-prev {
    /* left      : 10%; */
    /* display: none; */
  }

  .swiperg-button-next {
    right: 0%;
  }

  .swiperg-button-prev {
    left: 0%;
  }
}

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  top: 100% !important;
}

.finance-swiper,
.entrepreneur-swiper,
.third-swiper {
  position: relative;
}

.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets
  .swiper-pagination-bullet {
  background-color: white;
}

.brand-form-bg {
  background-image: linear-gradient(to bottom, black, black);
  padding-bottom: 50px;
}

.brands {
  padding-top: 80px;
  padding-bottom: 90px;
}

.brand-img-container {
}

.brands h1 {
  margin-bottom: 10px;
}

.brands .subheading {
  margin-bottom: 15px;
}

.brand-img-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  row-gap: 20px;
}

.img-container.extra {
  display: none;
}

@media screen and (max-width: 750px) {
  .brand-img-container {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .img-container.extra {
    display: block;
  }
}

.brand-img-container .img-container {
  width: 100px;
  height: 100px;
  background-color: white;
  margin: auto;
  position: relative;
  transition: 0.2s;
}

.brand-img-container .img-container img {
  padding: 10px;

  width: 100%;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.brand-img-container .img-container:hover {
  scale: 1.5;
}

.floating-contact-me {
  background-image: url(./design/contact-me-bg.svg);
  padding: 0;
  background-size: cover;
  margin: 0;
  position: fixed;
  bottom: 3%;
  right: 3%;
  z-index: 9999;
  border-radius: 10px;
  /* display         : none; */
  transition: 0.1s;
}

.floating-contact-me:hover {
  background-image: none;

  background-color: #d90a2c;
}

.floating-contact-me .vk-logo-c {
  z-index: 9999;
  width: 30px;
  height: 30px;
  margin-right: 5px;
}

.floating-contact-me .navbar__right a {
  /* background-color: white; */
  color: black;
  font-weight: 500;
}

.floating-contact-me:hover a {
  color: white;
}

.floating-contact-me a {
  font-size: 16px;
  /* margin       : 2px; */
  margin: 0;
  /* border-radius: 5px; */
  border: none;
}

.red {
  color: var(--primary);
}

.black {
  color: black;
}

.black-gradient {
  background: rgb(43, 43, 43);
  background: -moz-linear-gradient(
    270deg,
    rgba(43, 43, 43, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -webkit-linear-gradient(
    270deg,
    rgba(43, 43, 43, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  background: linear-gradient(
    270deg,
    rgba(43, 43, 43, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2b2b2b", endColorstr="#000000", GradientType=1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.spotify-gradient {
  background: rgb(30, 215, 96);
  background: -moz-linear-gradient(
    90deg,
    rgba(30, 215, 96, 1) 0%,
    rgba(255, 255, 255, 0.8687850140056023) 88%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(30, 215, 96, 1) 0%,
    rgba(255, 255, 255, 0.8687850140056023) 88%
  );
  background: linear-gradient(
    90deg,
    rgba(30, 215, 96, 1) 0%,
    rgba(255, 255, 255, 0.8687850140056023) 88%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1ed760", endColorstr="#ffffff", GradientType=1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.default-gradient {
  background: linear-gradient(90deg, #ff3f3f, #ff76ba);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.podcasts-gradient {
  background: linear-gradient(90deg, #00ffff, #00afaf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.spotify-gradient:hover {
  scale: 1.1;
}

.default-gradient:hover {
  scale: 1.1;
}

.podcasts-gradient:hover {
  scale: 1.1;
}

.red {
  color: #d92027;
}

/* RADIO BUTTON  */
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;700&display=swap");

:root {
  --font-barlow: "Barlow", sans-serif;
  --font-barlowCondensed: "Barlow Condensed", sans-serif;
  --time-nav-hover: 0.25s;
  --color-fire: #e300009c;
  --color-black: #191919;
  --color-grey-5: #fbfbfb;
  --color-grey-10: transparent;
  --color-grey-cool-10: #eeeeef;
  --color-grey-15: #e8e8e8;
  --color-grey-20: #d5d6d8;
  --color-grey-60: #abadb1;
  --color-grey-70: #888891;
  --color-grey-80: #6b6a6a;
  --color-grey-85: #59595f;
  --shadow-fire: 0 4px 12px 4px rgba(227, 0, 0, 0.2),
    0 1px 3px 0 rgba(137, 7, 7, 0.4);
  --focus-style: dotted 2px var(--color-black);
  --focus-offset: 2px;
}

select {
  font-weight: 500;
  text-transform: uppercase;
  font-size: 16px;
  width: 100%;
  background-color: transparent;
  color: white;
  padding: 10px 5px;
  border: none;
  border-bottom: 1px solid var(--form-border);
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  transition: 0.2s;
  -webkit-appearance: none;
  appearance: none;
}

.select-container {
  display: grid;
  grid-template-columns: 95% 5%;
}

.select-container img {
  margin: auto;
  width: 20px;
  height: 20px;
}

select:hover {
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  scale: 1.02;
}

select:focus-visible {
  border: none;
  outline: none;
}

option {
  padding: 15px 5px;
  background-color: black;
  color: white;
}

.label {
  font-size: 14px;
  font-family: var(--form-font);
}

.label:hover {
  cursor: pointer;
  /* scale : 1.1; */
}

.segmentedControl {
  --options: 2;
  --options-active: 1;
  --options-gap: 0.5em;
  background: var(--color-grey-10);
  border-radius: 0.25em;
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
}

.segmentedControl .segmentedControl--group {
  flex: 0 0 auto;
  margin: var(--options-gap);
  width: calc(
    (100% - ((var(--options) * var(--options-gap)) * 2)) / var(--options)
  );
  display: flex;
  flex-flow: row;
  justify-content: stretch;
  align-items: stretch;
}

.segmentedControl .segmentedControl--group input {
  opacity: 0;
  position: absolute;
}

.segmentedControl .segmentedControl--group input + label {
  border-radius: 0.25em;
  flex: 1 1 100%;
  font-size: 16px;
  font-weight: normal;
  line-height: 1;
  margin: 0;
  padding: 0.5em 0;
  position: relative;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  z-index: 1;
  border: 1px solid #ffffff1c;
}

.segmentedControl .segmentedControl--group input + label::before,
.segmentedControl .segmentedControl--group input + label::after {
  border-radius: inherit;
  content: "";
  display: block;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
}

.segmentedControl .segmentedControl--group input + label::before {
  background: #ad1a20;
  /* color  : black !important; */
  transition: opacity 0.15s ease;
}

.segmentedControl .segmentedControl--group input + label::after {
  background: var(--color-fire);
  box-shadow: var(--shadow-fire);
  transition: opacity 0.15s ease;
}

.segmentedControl .segmentedControl--group input + label:hover::before {
  opacity: 1;
}

.segmentedControl .segmentedControl--group input:focus + label {
  outline: none;
}

.segmentedControl .segmentedControl--group input:focus-visible + label {
  outline: var(--focus-style);
  outline-offset: var(--focus-offset);
}

.segmentedControl .segmentedControl--group input:-moz-focusring + label {
  outline: var(--focus-style);
  outline-offset: var(--focus-offset);
}

.segmentedControl .segmentedControl--group input:checked + label {
  background: var(--color-grey-10);
  color: #fff;
  font-weight: 500;
  border: none;
}

.segmentedControl .segmentedControl--group input:checked + label::after {
  opacity: 1;
  transform: scale(1);
}

@media (prefers-reduced-motion: no-preference) {
  .segmentedControl .segmentedControl--group input + label {
    transition: color 0.2s ease;
  }

  .segmentedControl .segmentedControl--group input + label::before {
    transition: opacity 0.3s ease;
  }

  .segmentedControl .segmentedControl--group input + label::after {
    transform: scale(0.85, 0.5);
    transition: opacity 0.15s ease,
      transform 0.3s cubic-bezier(0, 0.99, 0.52, 1.29);
  }

  .segmentedControl.useSlidingAnimation::before {
    border: 1px solid #0000001a;
    /* background   : #ab191f; */
    border-radius: 0.375em;
    box-shadow: var(--shadow-fire);
    content: "";
    display: block;
    height: calc(100% - (var(--options-gap) * 2));
    position: absolute;
    top: var(--options-gap);
    left: var(--options-gap);
    transform: translateX(
      calc((100% + (var(--options-gap) * 2)) * (var(--options-active) - 1))
    );
    transition: transform cubic-bezier(0.8, 0.34, 0.28, 1.15) 0.35s;
    width: calc(
      (100% - ((var(--options) * var(--options-gap)) * 2)) / var(--options)
    );
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }

  .segmentedControl.useSlidingAnimation .segmentedControl--group input + label {
    background: none;
    transition: color 0.3s ease;
  }

  .segmentedControl.useSlidingAnimation
    .segmentedControl--group
    input
    + label::after {
    content: none;
  }

  .segmentedControl.useSlidingAnimation
    .segmentedControl--group
    input:checked
    + label:hover::before {
    opacity: 0;
  }
}

/* utilities */
.visually-hidden:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.hidden {
  display: none !important;
}

.offscreen {
  height: 1px;
  left: -10000px;
  overflow: hidden;
  position: absolute;
  top: auto;
  width: 1px;
}

.a-no-border {
  border: none;
}

.radio-label {
  font-weight: 400;
  color: white;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes shine {
  0% {
    background-position: -50%;
  }

  60% {
    background-position: 100%;
  }

  100% {
    background-position: 100%;
  }
}

.bottom-bar {
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  margin: 0 auto;
  /* background-color                : rgb(233, 233, 233); */
  /* background-color                : rgb(114, 0, 0); */
  background: #131313;
  /* border-top                      : 1px solid #ff000044; */
  padding: 10px 15px;
  z-index: 9999;
  transition: 0.2s;
  /* border-radius                   : 10px; */
  /* background                      : linear-gradient(-45deg, white, #ddb0b2); */
  /* background-size                 : 400% 400%; */
  /* animation                       : gradientAnimation 10s ease infinite; */
  font-size: 25px;
  overflow: hidden;
}

.bottom-bar p {
  text-align: center;
  margin: auto 0;
  margin-left: 10px;
  font-weight: 600;
  color: black;
  background: linear-gradient(
    to right,
    #4d4d4d 0,
    #fff 10%,
    #fff 20%,
    #4d4d4d 30%,
    #4d4d4d 100%
  );
  scale: 1;
  animation: shine 3s linear infinite;
  animation-delay: 2s;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% 400%;
}

.bottom-bar img {
  filter: invert(60%);

  width: 50px;
  height: 50px;
  margin: auto 0;
}

.bottom-bar .content {
  display: flex;
}

@media screen and (max-width: 500px) {
  .bottom-bar img {
    width: 30px;
    height: 30px;
  }

  .bottom-bar p {
    text-align: center;
    margin: auto 0;
    margin-left: 10px;
    font-size: 14px;
    /* white-space: nowrap; */
  }

  .bottom-bar {
    width: 100%;
  }
}

@media screen and (min-width: 500px) {
  .bottom-bar {
    display: none;
  }

  .contact-me {
    display: block;
  }
}

.bottom-bar:hover {
  cursor: pointer;
}

.bottom-bar:hover {
  /* scale           : 1.01; */
  /* background-color: rgb(175, 175, 175); */
}

.bottom-bar:hover p {
  /* color      : black; */
  /* font-weight:600; */
}

.bottom-bar a {
  /* margin         : 0; */
  text-decoration: none;
  border: none;
}

#form {
  /* padding: 0; */
  /* margin: 0 5%; */
}

.bottom-bar .emoji {
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.164);
  font-size: 18px;
}

@keyframes cta-gradient {
  from {
    background-position: 0%;
  }

  to {
    background-position: 100%;
  }
}

.cta-1 {
  white-space: nowrap;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 10px;
  /* border-radius             : 5px; */
  background: var(--primary);
  /* background-image          : linear-gradient(to right, #d90a0ab4 0%, rgba(127, 0, 11, 0.753) 40%, #d90a0ab4 100%); */
  /* box-shadow                : 0 4px 15px 0 rgba(252, 104, 110, 0.75); */
  background-size: 200% 200%;
  /* background-color          : #e4081a; */
  text-transform: uppercase;
  /* background-color          : #e4081a; */
  margin-top: 20px;
  /* animation                 : cta-gradient 1.2s linear ; */
  transition: 0.2s;
  box-shadow: 3px 3px 1px 1px rgb(255, 255, 255);
  letter-spacing: 1px;
  font-size: 18px !important;
}

.cta-1:hover {
  box-shadow: none;
  background-position: 100%;
  /* scale              : 1.05; */
}

.slider-btn-container {
  /* padding: 0 50px; */
  position: relative;
}

@media screen and (max-width: 1050px) {
  .slider-btn-container {
    /* padding: 0 50px; */
  }
}

@media screen and (max-width: 550px) {
  .slider-btn-container {
    padding: 0;
  }
}

#guests,
#brands {
  transform: translateY(-60px);
}

#contact-me {
  transform: translateY(-80px);
}

/* :::::::::::::: Presentation css */
* {
  --locked-color: #ffafab;
  --unlocked-color: #ffafab;
}

@keyframes lock-animation {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.2;
  }

  100% {
    opacity: 1;
  }
}

.lock-text-container {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translateX(-50%);
  animation: lock-animation 1.5s infinite;
}

.lock-text-container h1 {
  text-align: center;
}

.lock-container {
  position: absolute;
  top: 8.5%;
  left: 50%;
  transform: translateX(-50%);
}

/* :::::::::::::: Required CSS */
/* Locked */
.lock {
  display: inline-block;
  width: 24px;
  height: 21px;
  border: 3px solid var(--locked-color);
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  -webkit-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}

.lock:after {
  content: "";
  display: block;
  background: var(--locked-color);
  width: 3px;
  height: 7px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -3.5px 0 0 -2px;
  -webkit-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}

.lock:before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  bottom: 100%;
  position: absolute;
  left: 50%;
  margin-left: -8px;
  border: 3px solid var(--locked-color);
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom: 0;
  -webkit-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}

/* Locked Hover */
.lock:hover:before {
  height: 12px;
}

/* Unlocked */
.unlocked {
  /* transform: rotate(10deg); */
}

.unlocked:before {
  bottom: 130%;
  left: 31%;
  margin-left: -11.5px;
  transform: rotate(-45deg);
}

.unlocked,
.unlocked:before {
  border-color: var(--unlocked-color);
}

.unlocked:after {
  background: var(--unlocked-color);
}

/* Unlocked Hover */
.unlocked:hover {
  transform: rotate(3deg);
}

.unlocked:hover:before {
  height: 10px;
  left: 40%;
  bottom: 124%;
  transform: rotate(-30deg);
}

.custom-shape-divider-bottom-1693549050 {
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  background-image: linear-gradient(to bottom, #030303ee 0%, #030303ee 100%),
    url(./design/ask-bg.png);
  background-size: 120px;
}

.custom-shape-divider-bottom-1693549050 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 52px;
  transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1693549050 .shape-fill {
  fill: #d92027;
}

.custom-shape-divider-top-1693549128 {
  /* background :linear-gradient(to bottom,var(--primary) 0%,white 100%); */
  background-color: #050505;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1693549128 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 52px;
  transform: rotateY(180deg);
  /* background-color: white !important; */
}

.custom-shape-divider-top-1693549128 .shape-fill {
  fill: #d92027;
}

.custom-shape-divider-bottom-1693550250 {
  background-color: #0b0b0b;
  /* margin-top   : 50px; */
  /* position     : absolute; */
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1693550250 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 47px;
  transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1693550250 .shape-fill {
  fill: #d92027;
}

.ask-me-strip-container {
  position: relative;
}

.ask-the-right-questions {
  background-color: #cccccc;
}

.typewriter-container {
  z-index: 2;
  /* background-color   : var(--primary); */
  background: linear-gradient(to bottom, white 0%, white 80%, #aaaaaa 100%);
  width: 100%;
  padding: 30px 5px;
  /* padding-bottom     : 100px; */
  height: 92%;
  /* position           : absolute; */
  /* top                : 0px; */
  /* right              : 0;   */
}

.typewriter {
  position: sticky;
  top: 50px;
  max-height: fit-content;
  margin: auto;
}

@media only screen and (max-width: 470px) {
  .typewriter {
    top: 70px;
  }
}

.typewriter h1 {
  margin: auto;
  padding: 10px 0;
  /* writing-mode  : vertical-lr; */
  width: fit-content;
  color: black;
  font-family: Typewriter, monospace;
  overflow: hidden;
  border-right: 0.15em solid black;
  white-space: nowrap;
  letter-spacing: 0.15em;
  animation: typing 3.5s steps(30, end) infinite,
    blink-caret 0.5s step-end infinite;
  font-size: 15px;
  line-height: 16px;
  max-width: fit-content;
}

/* @media only screen and (max-width: 600px) {
    .typewriter h1 {
        font-size: 20px;
    }
} */

@keyframes typing {
  0% {
    width: 0;
  }

  50% {
    width: 100%;
  }

  100% {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: black;
  }
}

.ask {
  background-color: #080808;
  /* background-color   : #dddddd; */
  background-image: linear-gradient(to bottom, #030303d9 0%, #030303d9 100%),
    url(./design/ask-bg.png);
  padding-top: 60px;
  padding-bottom: 80px;
  background-size: 120px;
}

/* .ask h1{
    color: black;
} */

.ask-swiper {
  position: relative;
}

.ask video {
  border-radius: 10px;
  display: flex;
  margin: 0 auto;
  width: 60%;
  border: 1px solid rgba(255, 255, 255, 0.158);
}

.ask a {
  display: inline-block;
  width: fit-content;
}

.ask .yt-btn {
  z-index: 1;
  filter: brightness(80%);
  border: 0;
  width: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ask .img-container {
  width: 60%;
  margin: 0 auto;
}

.ask img {
  border-radius: 10px;
  display: flex;
  margin: 0 auto;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.158);
}

.ask-swiper {
  overflow: hidden;
  margin-top: 30px;
}

.ask .swiper-btn {
  border-radius: 50%;
  border: none;
  width: 30px;
  height: 30px;
}

#mail-connect,
#insta-connect,
#youtube-connect,
#linkedin-connect,
#spotify-connect,
#whatsapp-connect,
#twitter-connect,
#appleMusic-connect,
#threads-connect {
  transition: 0.5s ease;
  border: 1.5px solid white;
}
#mail-connect:hover,
#mail-connect:active {
  background-color: #d90a2c;
}

#insta-connect:hover,
#insta-connect:active {
  background-color: #fc01cc !important;
}

#youtube-connect:hover,
#youtube-connect:active {
  background-color: red;
}

#linkedin-connect:hover,
#linkedin-connect:active {
  background-color: #0a63bc;
}

#spotify-connect:hover,
#spotify-connect:active {
  background-color: #1ed860;
}

#whatsapp-connect:hover,
#whatsapp-connect:active {
  background-color: #4aca59;
}

#twitter-connect:hover,
#twitter-connect:active {
  background-color: #000;
}

#appleMusic-connect:hover,
#appleMusic-connect:active {
  background-color: #ff5268;
}

#threads-connect:hover,
#threads-connect:active {
  background-color: #000;
}



