# 애플 클론

## 단위 rem, em
### em의 기준은 rem
```
html {
  font-size: 14px
}

.description strong {
  float: left;
  margin-right: 0.2em;
  font-size: 3rem;
  color: #000;
}
```
* 1rem = 14px
* rem의 기준은 '14px'
* .description strong 의 font-size = 14px * 3 = 42px
* .description strong 의 margin-right ( em ) = 42 * 0.2 = 8.4px 

## vw
* 뷰포트의 9% 
```
  #scroll-section-0 h1 {
    font-size: 9vw;
  }

```

## Timeline
* 해당 구역(보여지는 부분)에서만 animation을 재생하는 개념
* 스크롤 구분 단위가 짧으면 애니메이션이 빠르게 움직이고 길면 느리게 움직임
  * 프레임 요소
  * 요소들의 타이밍
  * 정보 -> 배열

### section0 
* 스크롤값에 따라 컵이 회전한다.
* text-animation 

### section1
* 그냥 scroll

### section2
* 컵을 들고 있는 손
* 각각의 설명이 올라옴

### section3
* 스크롤 되면서 이미지가 커짐

## JS
1. 한 섹션의 height를 window innerHeight의 다섯배로 설정
2. yOffset 과 prevScrollHeight, currentHeight를 이용해서 스크롤을 내릴때와 올릴때 함수 구현
