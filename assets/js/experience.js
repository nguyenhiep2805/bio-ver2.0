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
