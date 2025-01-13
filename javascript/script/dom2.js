//자바스크립트 동적기능에 의해서 요소가 생성될 경우 createElemet();
const new_child = document.createElement('div'); //''안에는 태그명만 작성! class, id 등은 작성하지 않음
const new_child2 = document.createElement('h1');
const parent = document.querySelector('#parent');
const childNode = document.querySelectorAll('.child'); //0, 1, 2 Nods
const prt1 = document.createElement('span');
const prt2 = document.createElement('span');
const li = document.querySelectorAll('.list li');
const addBtn = document.querySelector('#add');
const onoffBtn = document.querySelector('#onoff');
const reBtn = document.querySelector('#re');

console.log(new_child, new_child2, parent)
console.log(parent.children[2].previousElementSibling);
console.log(childNode);
console.log(prt1, prt2);
console.log(li);
console.log(addBtn, onoffBtn);

//기준부모변수.appendChild(마지막 자식 위치에 추가하고 싶은 노드변수);
new_child.innerText = '새로운 요소';
new_child2.innerHTML = '<em>새로운 제목</em>';
parent.appendChild(new_child);
document.body.appendChild(new_child2);
parent.firstElementChild.appendChild(new_child2);
parent.children[2].previousElementSibling.appendChild(new_child);

//기준부모변수.insertBefore(추가요소, 기준요소);
parent.insertBefore(new_child2, childNode[2]);
prt1.innerHTML = 'insertBefore 연습<br>';
prt2.innerText = 'insertBefore 연습2';
parent.insertBefore(prt1, childNode[1]);
parent.insertBefore(prt2, childNode[1]);

//삭제대상변수.remove
//숨기는 개념(style.display = ‘none’;)이 아닌 요소 삭제(’’, remove) 개념! 쇼핑몰 장바구니 삭제 등으로 이용
//childNode[0].remove(); // 장바구니 삭제 기능에서 사용
//숨기는대상의부모변수.removeChild(부모의n번째자식변수)
parent.removeChild(childNode[0]);

//style속성을 이용한 CSS (최종 적용 속성이 1, 2개로 적을 경우)
li[0].style.backgroundColor = 'aqua';
li[0].style.fontSize = '2rem';
//동시에 적용해야 하는 CSS속성이 3개 이상 등 많은 경우 class를 이용
//처음부터 적용된 클래스가 아닌 JS 동적결과에 의해 나중에 적용되는 디자인에 이용
//li[1].className = 'set1';
li[1].classList = 'set1';
li[1].classList += ' set2';
li[2].classList.add('set1', 'set2');
li[1].classList.remove('set1');
li[3].classList = 'set3 set4';
li[4].classList = 'set3';
li[4].classList += ' set4';
li[5].classList.add('set3', 'set4', 'set5')
//버튼으로 제어하는 classList
addBtn.addEventListener('click', ()=>{
    li[6].classList.add('set1');
})
onoffBtn.addEventListener('click', ()=>{
    li[7].classList.toggle('set2');
})
reBtn.addEventListener('click', ()=>{
    li[8].classList.replace('set2', 'set1'); //기존 set2를 제거하고 set1을 적용
})