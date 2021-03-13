function slider(slider){
  let oUl=slider.getElementsByTagName('ul')[0];
  let oPrev=slider.getElementsByTagName('a')[0];
  let oNext=slider.getElementsByTagName('a')[1];
  let oOl=slider.getElementsByTagName('ol')[0];

  let cur=0;

  //宽度自适应
  oUl.style.width=800*oUl.children.length+'px';
  oOl.style.width=40*oOl.children.length+'px';
  oOl.style.marginLeft=-40*oOl.children.length/2+'px';

  for(let i=0;i<oOl.children.length;i++){
    oOl.children[i].onmouseover=function (){
      cur=i;
      setCur();
    };
  }

  oPrev.onclick=function (){
    if(cur==0){
      cur=oOl.children.length-1;
    }else{
      cur--;
    }

    setCur();
  };


  function next(){
    if(cur==oOl.children.length-1){
      cur=0;
    }else{
      cur++;
    }

    setCur();
  }

  oNext.onclick=next;

  function setCur(){
    for(let i=0;i<oOl.children.length;i++){
      oOl.children[i].className='';
    }
    oOl.children[cur].className='active';
    oUl.style.left=-800*cur+'px';
  }

  let timer=setInterval(next, 1000);

  slider.onmouseover=function (){
    clearInterval(timer);
  };
  slider.onmouseout=function (){
    timer=setInterval(next, 1000);
  };
}
