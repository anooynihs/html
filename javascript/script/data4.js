//window.document.body.style = 'background-color:lightblue';
document.write('250107');
//DOM
//객체는 꼭! 변수에 선언해야함
//변수생성키워드 생성변수명 = 변수에대입되는값;
//변수 선언 시 배열선언표시[]가 없어도 복수형 데이터를 저장하면 자동으로 배열로 인식된다.
//배열 인식 결과 >> 각 데이터들은 [0], [1] … 인덱스로 구분되고 length 속성이 자동 추가된다.
const title1 = document.getElementsByTagName('h1');
const subTitle = document.getElementsByTagName('h2');
console.log(title1);
console.log(subTitle);
//DOM객체.속성;         //기존 속성 읽기
//DOM객체.속성 = '값';  //속성에 값 대입하기
title1[0].style = 'color:tomato';
title1[1].style = 'font-weight:400';
subTitle[0].style = 'background-color:lightyellow';
subTitle[1].style = 'border:2px solid blue';
subTitle[2].style = 'font-size:1rem';
const listWrap = document.getElementsByTagName('ul')[0]; //변수 선언 시 바로 넘버링
const list = listWrap.getElementsByTagName('li'); //CSS작성할 때 상세 태그 경로 쓰는 것과 동일한 작성법
console.log(listWrap);
console.log(list);
listWrap.style = 'background-color:aquamarine'; //listWrap[0] 작성 X
list[0].style = 'color:red';
list[1].style = 'color:blue';
list[2].style = 'color:green';
//=====================================================================
const listWrap2 = document.getElementsByTagName('ul')[1];
const list2 = listWrap2.getElementsByTagName('li');
const link1 = list2[0].getElementsByTagName('a');
const link2 = list2[1].getElementsByTagName('a');
const linkAll = listWrap2.getElementsByTagName('a');
console.log(listWrap2);
console.log(list2);
console.log(link1, link2); // 0 0
console.log(linkAll); // 0 1
listWrap2.style = 'background-color:lightblue';
/*
HTML, CSS 작성 시 HTML의 가족관계를 우선시하여 li가 형제, a는 각각의 외동으로 인식하지만
JS는 최종 선택 대상 앞의 'document'자리에 누굴 쓰냐에 따라 그 안에 있는 태그 전체를 순서대로 인식하기 때문에
실제 HTML 관계에서 a가 외동이든 아니든, 'ul'을 선택했다면 ul 안 모든 a를 순서대로 인식하여
인덱스 번호를 적용한다.
하지만 'li'의 경우 li 안에는 a가 하나씩 밖에 배치 안 되어 있으므로 각 a를 0번째로만 인식하게 된다.
*/
const sub_title = document.getElementsByClassName('sub_title')[0];
console.log(sub_title);
sub_title.style = 'color:blue';
//=====================================================================
const menuWrap = document.getElementsByClassName('menu')[0];
const menuList = menuWrap.getElementsByTagName('li');
const menuLink = menuWrap.getElementsByTagName('a');
console.log(menuWrap); 
console.log(menuList); 
console.log(menuLink);
menuWrap.style = 'background-color:lime';
menuList[0].style = 'background-color:pink';
menuList[1].style = 'background-color:purple';
menuList[2].style = 'background-color:pink';
menuList[3].style = 'background-color:purple';
menuLink[0].style = 'color:#fff';
menuLink[1].style = 'color:yellow';
menuLink[2].style = 'color:#fff';
menuLink[3].style = 'color:yellow';
//=====================================================================
const notice = document.getElementById('notice');
console.log(notice);
notice.style = 'color:red';
//=====================================================================
const conainer = document.getElementById('container');
const c_title = document.getElementById('title');
const c_title_a = c_title.getElementsByTagName('a');
const c_contents = document.getElementById('contents');
const c_contents_a = c_contents.getElementsByTagName('a');
console.log(container);
console.log(c_title, c_title_a);
console.log(c_contents, c_contents_a);
//console.log(contents);
//console.log(contentsA);
container.style = 'background:darkblue';
c_title.style = 'padding:10px 10px';
c_title_a[0].style = 'color:#fff';
c_title_a[1].style = 'color:lime';
c_contents.style = 'background:lightyellow';
c_contents_a[0].style = 'font-weight:600';
c_contents_a[1].style = 'font-weight:600';
//=====================================================================
const nav = document.getElementsByTagName('nav')[0];
const gnb = nav.getElementsByClassName('gnb')[0];
const gnbLi = gnb.getElementsByTagName('li');
const lnb = gnb.getElementsByClassName('lnb')[0];
const lnbLi = lnb.getElementsByTagName('li');
const lnbLiA = lnb.getElementsByTagName('a'); 
console.log(nav, gnb, gnbLi, lnb, lnbLi, lnbLiA);
nav.style = 'background-color:orange';
gnb.style = '';