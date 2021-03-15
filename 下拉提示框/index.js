let oSelect = document.getElementById('my-select');
let oTxt = document.getElementById('txt');
let oPlaceholder = document.getElementById('placeholder');
let oDropdown = document.getElementById('dropdown');
let cur = '';
const data = [
  '双皮奶',
  '鱼豆腐',
  '烤冷面',
  '炒菠菜'
]

//生成选项
function fillData(arr) {
  oDropdown.innerHTML = '';

  if (arr.length > 0) {
    arr.forEach(item => {
      let oLi = document.createElement('li');
      oLi.innerHTML = item;
  
      if (item == cur) {
        oLi.className = 'active';
      }
  
      oDropdown.appendChild(oLi);
    });
  } else {
    oDropdown.innerHTML = '<li class="no-data">无数据</li>'
  }
}
fillData(data);

oDropdown.onclick = function (ev) {
  ev.stopPropagation();
  const curLi = ev.srcElement;

  if(curLi.className == 'no-data') return ;
  let arr = Array.from(oDropdown.children); //将类数组转换为数组

  let index = arr.indexOf(curLi);
  cur = curLi.innerHTML;

  arr.forEach(item => item.className = '');
  arr[index].className = 'active';

  oPlaceholder.innerHTML = oTxt.value = cur;

  hide();
}

function hide() {
  oSelect.classList.remove('active');
  if (cur != '') {
    oTxt.value = cur;
    oPlaceholder.style.display = 'none'
  }
  
  oTxt.value = cur;
  document.removeEventListener('click', hide);
}

function show(ev) {
  ev.stopPropagation();
  oSelect.classList.add('active');
  oTxt.focus();
  oTxt.value = '';
  oPlaceholder.style.display = 'block';

  document.addEventListener('click', hide);
}
oSelect.onclick = show;

oTxt.oninput = function () {
  if (this.value) {
    oPlaceholder.style.display = 'none'
  } else {
    oPlaceholder.style.display = 'block'
  }

  fillData(data);

  fillData(data.filter(item => {
    if (item.indexOf(this.value) != -1) {
      return true;
    } else {
      return false;
    }
  }));
};
