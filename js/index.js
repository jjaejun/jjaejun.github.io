document.querySelector("#welcome").addEventListener('click', (e) => {
    const box = document.querySelector("#inside");

    box.innerHTML = `<button id="buttonLogin" onclick="goMain();">로그인</button>
    <button id="buttonJoin"><a href="http://192.168.20.110:5501/membership.html" target="_blank">회원가입</button>`;
});

const goMain = () => {
    const box = document.querySelector("#inside");

    box.innerHTML = `<button id="myPage" onclick="goMyPage();">자기소개</button>
        <button id="tour" onclick="goTour();">여행</button>
        <button id="roadmap onclick="goRoadmap();">로드맵</button>
        <button id="members" onclick="goMembers();">회원목록</button>`;
};

const goMyPage = () => {
    const box = document.querySelector("#inside");

    box.innerHTML = ``;
};

const goTour = () => {
    const box = document.querySelector("#inside");

    box.innerHTML = ``;
};

const goRoadmap = () => {
    const box = document.querySelector("#inside");

    box.innerHTML = ``;
};

const goMembers = () => {
    const box = document.querySelector("#inside");

    box.innerHTML = ``;
};