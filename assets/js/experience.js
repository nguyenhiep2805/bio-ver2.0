AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Nghiên cứu VBA for AutoCAD/ Marketing",
    cardImage: "assets/images/experience-page/htcenter.jpg",
    place: "HT Center",
    time: "(Tháng 08/2022 - Nay)",
    desp: "<li>Nghiên cứu tự động hoá cho AutoCAD.</li> <li>Tạo chiến dịch truyền thông cho fanpage/ website</li> <li>Thiết kế ấn phẩm truyền thông</li>",
  },
  {
    title: "Người sáng lập",
    cardImage: "assets/images/experience-page/hiepcode.jpg",
    place: "Hiệp Code",
    time: "(Tháng 07/2019 - Nay)",
    desp: "<li>Quản lý fanpge</li><li>Truyền thông cho fanpage/ website</li>",
  },
  {
    title: "Cộng tác viên",
    cardImage: "assets/images/experience-page/ktx.jpg",
    place: "Liên chi hội Sinh viên Khu nội trú - ĐH GTVT TP.HCM",
    time: "(Tháng 09/2021 - Tháng 09/2022)",
    desp: "<li>Lên lịch truyền thông cho fanpage</li><li>Viết content cho fanpage</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const googledev = document.querySelector(".googledev-section");
const mentor = [
  {
    title: "Accessibility, testing, and performance",
    image: "assets/images/experience-page/1.svg",
    desp: "Completed the 'Accessibility, testing, and performance' learning pathway and quiz of the Jetpack Compose for Android Developers course.",
    link: "https://blog.nguyenhiep.me"
  },
  {
    title: "Adaptive layouts",
    image: "assets/images/experience-page/2.svg",
    desp: "Completed the 'Adapt for different screen sizes' learning pathway and quiz.",
  },
  {
    title: "Architecture and state",
    image: "assets/images/experience-page/3.svg",
    desp: "Completed the 'Architecture and state' learning pathway and quiz.",
  },
  {
    title: "Build a Basic Layout",
    image: "assets/images/experience-page/4.svg",
    desp: "Completed 'Android Basics—build a basic layout' learning pathway and quiz.",
  },
  {
    title: "Completed 100+ Codelabs",
    image: "assets/images/experience-page/5.svg",
    desp: "Keep it going.",
  },
  {
    title: "Advanced navigation app examples",
    image: "assets/images/experience-page/6.svg",
    desp: "Completed 'Advanced navigation app examples' learning pathway and quiz.",
  },
  {
    title: "Build a scrollable list",
    image: "assets/images/experience-page/7.svg",
    desp: "Completed the 'Build a scrollable list' learning pathway and quiz in Unit 3 of the Android Basics with Compose course.",
  },
  {
    title: "Compose essentials",
    image: "assets/images/experience-page/8.svg",
    desp: "Completed the 'Compose essentials' learning pathway and quiz.",
  },
  {
    title: "First App in Android Studio",
    image: "assets/images/experience-page/9.svg",
    desp: "Completed 'Android Basics—create your first Android app' learning pathway and quiz.",
  },
  {
    title: "Form factors",
    image: "assets/images/experience-page/10.svg",
    desp: "Completed the 'Form factors' learning pathway and quiz.",
  },
  {
    title: "Introduction to SQL, Room, and Flow",
    image: "assets/images/experience-page/11.svg",
    desp: "Completed 'Introduction to SQL, Room, and Flow' learning pathway and quiz.",
  },
  {
    title: "Get data from the internet",
    image: "assets/images/experience-page/12.svg",
    desp: "Completed the 'Get data from the internet' learning pathway and quiz.",
  },
  {
    title: "Room for data persistence",
    image: "assets/images/experience-page/13.svg",
    desp: "Completed 'Use Room for data persistence' learning pathway and quiz.",
  },
  {
    title: "Modern Android App Architecture badge",
    image: "assets/images/experience-page/14.svg",
    desp: "Completed the 'Android Architecture' learning pathway and quiz.",
  },
  {
    title: "Make your Android app accessible",
    image: "assets/images/experience-page/15.svg",
    desp: "Completed the 'Make your Android app accessible' learning pathway and quiz.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <div class="blog-slider__text">${desp}</div>
          <a href="https://g.dev/hiepcode" target="_blank" class="blog-slider__button">Xem thêm</a>   
        </div>
      </div>
      `)
  );
  googledev.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
