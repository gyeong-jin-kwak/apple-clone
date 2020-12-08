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


