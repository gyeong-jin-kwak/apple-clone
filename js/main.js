// 함수 바로 호출 = (function(){})()
// 전역 함수 호출을 피하기 위해서 사용 
(()=>{

  let yOffset = 0; // yOffset 현재 스크롤 위치
  let preScrollHeight = 0; // yOffset 보다 이전에 위치한 스크롤 섹션들의 높이 값
  let currentScene = 0; // 현재 활성화 scene

  const sceneInfo = [
    {
      //0
      type: 'sticky',
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-0'),
        messageA: document.querySelector('#scroll-section-0 .main-message.a'),
        messageB: document.querySelector('#scroll-section-0 .main-message.b'),
        messageC: document.querySelector('#scroll-section-0 .main-message.c'),
        messageD: document.querySelector('#scroll-section-0 .main-message.d')
      },
      values: {
        messageA_opacity: [0, 1]
      }
    },
    {
      //1
      type: 'normal',
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-1')
      }
    },
    {
      //2
      type: 'sticky',
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-2')
      }
    },
    {
      //3
      type: 'sticky',
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-3')
      }
    }
  ];

  function setLayout() {
    // 각 스크롤 섹션의 높이 세팅
    for (let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`
    }
    // console.log(sceneInfo);
    // console.log(`windowInnerHeight: ${window.innerHeight}`);

    yOffset = window.pageYOffset;

    let totalScrollHeight = 0;
    for(let i=0; i < sceneInfo.length; i++){
      totalScrollHeight += sceneInfo[i].scrollHeight;
      if(totalScrollHeight >= yOffset){
        currentScene = i;
        break;
      }
    }
    document.body.setAttribute('id', `show-scene-${currentScene}`);
  };

  function calcValues(values, currentYOffset) {
  }

  function playAnimation() {
    const objs = sceneInfo[currentScene].objs;
    const values = sceneInfo[currentScene].values;
    const currentYOffset = yOffset - preScrollHeight;

    console.log(currentScene, currentYOffset)

    switch(currentScene) {
      case 0:
        // console.log('0 play')
        let messageA_opacity_0 = values.messageA_opacity[0];
        let messageA_opacity_1 = values.messageA_opacity[1];
        // console.log(calcValues(values.messageA_opacity, currentYOffset));
        break;

      case 1:
        // console.log('1 play')
        break;

      case 2:
        // console.log('2 play')
        break;

      case 3:
        // console.log('3 play')
        break;
    }
  }

  function scrollLoop() {
    preScrollHeight = 0;
    for(i=0; i<currentScene; i++){
      preScrollHeight += sceneInfo[i].scrollHeight;
    }
    // console.log(`preScrollheight: ${preScrollHeight}`);
    
    if(yOffset > preScrollHeight + sceneInfo[currentScene].scrollHeight){
      currentScene++;
      document.body.setAttribute('id', `show-scene-${currentScene}`);
    }
    
    if(yOffset < preScrollHeight){
      if(currentScene === 0) return;
      currentScene--;
      document.body.setAttribute('id', `show-scene-${currentScene}`);
    }

    // console.log(currentScene);
    // document.body.setAttribute('id', `show-scene-${currentScene}`);

    playAnimation();
  }

  window.addEventListener('scroll', () => {
    yOffset = window.pageYOffset;
    scrollLoop();
  });
  // window.addEventListener('DOMContentLoaded', setLayout); 실행 시점이 더 빠름
  window.addEventListener('load', setLayout);
  window.addEventListener('resize', setLayout);
})();