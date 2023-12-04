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

    alert("회원가입 완료!!");

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