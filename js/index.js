document.querySelector("#welcome").addEventListener('click', (e) => {
    const box = document.querySelector("#inside");

    box.innerHTML = `<button id="buttonLogin" onclick="goMain();">로그인</button>
    <button id="buttonJoin"><a href="http://192.168.20.110:5501/membership.html" target="_blank">회원가입</button>`;
});

const home = () => {
    const box = document.querySelector("#inside");

    box.innerHTML = `<button id="myPage" onclick="goMyPage();"></button>
    <button id="tour" onclick="goTour();"></button>
    <button id="roadmap" onclick="goRoadmap();"></button>
    <button id="members" onclick="goMembers();"></button>`;
}

const goMain = () => {
    const box = document.querySelector("#inside");

    box.innerHTML = `<button id="myPage" onclick="goMyPage();"></button>
        <button id="tour" onclick="goTour();"></button>
        <button id="roadmap" onclick="goRoadmap();"></button>
        <button id="members" onclick="goMembers();"></button>`;
};

const goMyPage = () => {
    const box = document.querySelector("#inside");

    box.innerHTML = `<div id="myCharacter"></div>
    <div id="myIntroduce">
        <li>이름 : 이재준</li>
        <li>나이 : 26</li>
        <li>사는 곳 : 용인시 마북동</li>
        <li>이메일 : leejj3240@gmail.com</li>
        <li>MBTI : ISFP</li>
        <li>좋아하는 것 : 없음</li>
        <li>싫어하는 것 : 미술, css</li>
    </div>`;
};

const goTour = () => {
    const box = document.querySelector("#inside");

    box.innerHTML = `<div class="slideshow-container">

    <div class="mySlides fade">
      <div class="numbertext">1 / 8</div>
      <img src="../images/tkdcn.jpg" style="width:100%">
      <div class="text">
        <strong>상추</strong><br>
        1. 상처와 이물질이 없으며 잎이 두껍고 윤기가 나는 것
      </div>
    </div>
    
    <div class="mySlides fade">
      <div class="numbertext">2 / 8</div>
      <img src="../images/qocn.jpg" style="width:100%">
      <div class="text">
        <strong>배추</strong><br>
        1. 짧고 통통한 것<br>
        2. 겉잎은 짙은 녹색, 속잎은 노란색인 것<br>
        3. 뿌리 하단의 흰 뿌리 부분을 누를 때 단단한 것
      </div>
    </div>
    
    <div class="mySlides fade">
      <div class="numbertext">3 / 8</div>
      <img src="../images/an.jpg" style="width:100%">
      <div class="text">
        <strong>무</strong><br>
        1. 표면이 매끈하며 상처가 없고 잔뿌리가 적은 것<br>
        2. 색이 너무 진하지 않고 무 길이의 절반 정도만 연녹색인 것<br>
        3. 두드렸을 때 통통거리지 않는 것
      </div>
    </div>

    <div class="mySlides fade">
      <div class="numbertext">4 / 8</div>
      <img src="../images/tlrmacl.jpg" style="width:100%">
      <div class="text">
        <strong>시금치</strong><br>
        1. 잎은 두껍고 진한 녹색, 뿌리는 붉고 선명한 색을 띄는 것
      </div>
    </div>

    <div class="mySlides fade">
      <div class="numbertext">5 / 8</div>
      <img src="../images/rhtkfl.jpg" style="width:100%">
      <div class="text">
        <strong>고사리</strong><br>
        1. 줄기가 길지 않고 통통한 것<br>
        2. 잎이 크게 피지 않고 감겨져 있는 것
      </div>
    </div>

    <div class="mySlides fade">
      <div class="numbertext">6 / 8</div>
      <img src="../images/tnrwnskanf.jpg" style="width:100%">
      <div class="text">
        <strong>숙주</strong><br>
        1. 굵고 흰 줄기와 뿌리부가 단단하며 잔뿌리가 없는 것
      </div>
    </div>

    <div class="mySlides fade">
      <div class="numbertext">7 / 8</div>
      <img src="../images/tothddl.jpg" style="width:100%">
      <div class="text">
        <strong>새송이</strong><br>
        1. 단단하고 탄력이 있으며 향이 좋은 것<br>
        2. 표면이 마르지 않고, 줄기가 굵고 길며, 아래로 갈수록 통통하고 속이 차있는 것
      </div>
    </div>

    <div class="mySlides fade">
      <div class="numbertext">8 / 8</div>
      <img src="../images/smxkfl.jpg" style="width:100%">
      <div class="text">
        <strong>느타리</strong><br>
        1. 갓의 표면이 회색 빛깔이고, 몸통의 길이보다 두께가 도톰한 것<br>
        2. 덩어리가 쪼개지거나 갈라지지 않고 덩어리로 판매되는 것
      </div>
    </div>
    
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br>
    <div style="text-align:center">
      <span class="dot" onclick="currentSlide(1)"></span> 
      <span class="dot" onclick="currentSlide(2)"></span> 
      <span class="dot" onclick="currentSlide(3)"></span> 
      <span class="dot" onclick="currentSlide(4)"></span> 
      <span class="dot" onclick="currentSlide(5)"></span> 
      <span class="dot" onclick="currentSlide(6)"></span> 
      <span class="dot" onclick="currentSlide(7)"></span> 
      <span class="dot" onclick="currentSlide(8)"></span> 
    </div>
</div>`;
};

const goRoadmap = () => {
    const box = document.querySelector("#inside");

    box.innerHTML = `<div id="backend"><strong>Back-end</strong>
    <li id="java"></li>
    <br>
    <li id="oracle"></li>
</div>
<div id="frontend"><strong>Front-end</strong>
    <li id="html"></li>
    <br>
    <li id="css"></li>
    <br>
    <li id="js"></li>
    <br>
    <li id="jquery"></li>
</div>
<div id="after"><strong>After</strong>
    <li id="react"></li>
    <li id="servlet"></li>
    <li id="jsp"></li>
    <li id="springframework"></li>
</div>`;
};

const goMembers = () => {
    const box = document.querySelector("#inside");

    box.innerHTML = `<button id="rerere" onclick="renderMembersList();">새로고침</button><br>
    <table id="membersList">
    <thead>
        <tr>
            <th>아이디</th>
            <th>비밀번호</th>
            <th>이메일</th>
            <th>이름</th>
            <th>생년월일</th>
            <th>전화번호</th>
            <th>생성일자</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>`;
};

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

class Member {
  constructor(memberId, password, email, memberName, birthday, phone, createdAt = Date.now()) {
      this.memberId = memberId;
      this.password = password;
      this.email = email;
      this.memberName = memberName;
      this.birthday = birthday;
      this.phone = phone;
      this.createdAt = createdAt;
  }
}

const joinMembership = () => {
  // localStorage에 저장
  const members = JSON.parse(localStorage.getItem('members')) || [];
  members.push(new Member(memberId.value, password.value, email.value, memberName.value, birthday.value, phone.value));
  console.log(members);

  localStorage.setItem('members', JSON.stringify(members));

  // 초기화
  document.membership.reset();
};

const renderMembersList = () => {
  // localStorage에서 guestbooks 읽어오기
  const members = JSON.parse(localStorage.getItem("members")) || [];

  document.querySelector("table#membersList tbody").innerHTML =
  members.reduce((html, {memberId, password, email, memberName, birthday, phone, createdAt}, index) => {
      return `
          ${html}
          <tr>
              <td>${memberId}</td>
              <td>${password}</td>
              <td>${email}</td>
              <td>${memberName}</td>
              <td>${birthday}</td>
              <td>${phone}</td>
              <td>${convertToDateTime(createdAt)}</td>
          </tr>`;
  }, "");
};


const fillBlank = (n) => n < 10 ? '0' + n : n;
const convertToDateTime = (millis) => {
    const d = new Date(millis);
    const yy = fillBlank(d.getFullYear());
    const mm = fillBlank(d.getMonth() + 1);
    const dd = fillBlank(d.getDate());
    const hh = fillBlank(d.getHours());
    const mi = fillBlank(d.getMinutes());
    return `${yy}/${mm}/${dd} ${hh}:${mi}`;
};

document.querySelector('#memberId').addEventListener('blur', (e) => {
  const warning = document.getElementById('warningId');
  const { target : { value }} = e;
  warning.innerHTML = '';
  if(!value)
      warning.innerHTML = '필수 입력 항목입니다.';
  else
      warning.innerHTML = '';
})

document.querySelector('#password').addEventListener('blur', (e) => {
  const warning = document.getElementById('warningPassword');
  const { target : { value }} = e;
  warning.innerHTML = '';
  if(!value)
      warning.innerHTML = '필수 입력 항목입니다.';
  else
      warning.innerHTML = '';
})

document.querySelector('#memberName').addEventListener('blur', (e) => {
  const warning = document.getElementById('warningName');
  const { target : { value }} = e;
  warning.innerHTML = '';
  if(!value)
      warning.innerHTML = '필수 입력 항목입니다.';
  else
      warning.innerHTML = '';
})

document.querySelector('#birthday').addEventListener('blur', (e) => {
  const warning = document.getElementById('warningBirthday');
  const { target : { value }} = e;
  warning.innerHTML = '';
  if(!value)
      warning.innerHTML = '필수 입력 항목입니다.';
  else
      warning.innerHTML = '';
})

document.querySelector('#phone').addEventListener('blur', (e) => {
  const warning = document.getElementById('warningPhone');
  const { target : { value }} = e;
  warning.innerHTML = '';
  if(!value)
      warning.innerHTML = '필수 입력 항목입니다.';
  else
      warning.innerHTML = '';
})

renderMembersList();