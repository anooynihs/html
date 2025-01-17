// 'month' 태어난 월 '숫자'로 입력 후
// 'btn' 확인버튼을 누르면
// 'resultFlower' 태어난 월에 따른 꽃이 출력된다 
// 'resultSymbol' 태어난 월에 따른 상징이 출력된다
const month = document.querySelector('#month');
const btn = document.querySelector('#btn');
const resultFlower = document.querySelector('.result h2');
const resultSymbol = document.querySelector('.result p');
console.log(month, btn, resultFlower, resultSymbol);

btn.addEventListener('click', ()=>{
    if(month >= 1 && month <= 12){
        if(month == 1) resultFlower.textContent = '1월의 탄생화는 수선화입니다.';
        else{resultSymbol.textContent = '1~12 사이의 숫자를 입력해 주세요.'}
}})


/*if(month >= 1 && month <= 12){
    if(month == 1){alert('1월의 탄생화는 수선화입니다. 수선화는 자기애, 자존심, 외로움을 상징합니다.');}
    else if(month == 2){alert('2월의 탄생화는 제비꽃입니다. 제비꽃은 겸손, 양보를 상징합니다.');}
    else if(month == 3){alert('3월의 탄생화는 수선화입니다. 수선화는 자기애, 자존심, 외로움을 상징합니다.');}
    else if(month == 4){alert('4월의 탄생화는 스위트피입니다. 스위트피는 추억, 즐거움을 상징합니다.');}
    else if(month == 5){alert('5월의 탄생화는 은방울꽃입니다. 은방울꽃은 희망, 섬세함을 상징합니다.');}
    else if(month == 6){alert('6월의 탄생화는 백합니다. 백합은 순결을 상징합니다.');}
    else if(month == 7){alert('7월 탄생화는 미나리아재비입니다. 미나리아재비는 아름다움, 인격을 상징합니다.');}
    else if(month == 8){alert('8월의 탄생화는 글라디올러스입니다. 글라디올러스는 비밀, 상상, 견고함을 상징합니다.');}
    else if(month == 9){alert('9월의 탄생화는 물망초입니다. 물망초는 진실한 사랑을 상징합니다.');}
    else if(month == 10){alert('10월 탄생화는 금잔화입니다. 금잔화는 실망, 비애를 상징합니다.');}
    else if(month == 11){alert('11월의 탄생화는 국화입니다. 국화는 성실, 진실을 상징합니다.');}
    else(month == 12){alert('12월의 탄생화는 포인세티아입니다. 포인세티아는 축하, 감사를 상징합니다.');}
    }else{alert('1부터 12 사이의 숫자를 입력해 주세요.');}*/