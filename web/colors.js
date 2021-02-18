var Links={
  setColor:function(color) {
    //var alist = document.querySelectorAll('a');
    //var i = 0 ;

    //while(i<alist.length){
    //console.log(alist[i]);
    //alist[i].style.color = color;
    //i= i+1;
    //  }
    $('a').css('color',color);  // 이 페이지에 있는 모든 a 태그들을 jquery로 제어하겠다
  }
};
  var body ={
    setColor: function(color){
      //document.querySelector('body').style.color = color;
      $('body').css('color',color);
    },
    setBackgroundColor: function(color){
    //  document.querySelector('body').style.backgroundColor = color;
      $('body').css('backgroundColor',color);
    }
  };

  function nightdayHandler(self){
    var target = document.querySelector('body');
    if(self.value ==='night')
    {
      target.style.backgroundColor = 'black';
      target.style.color = 'white';
      self.value = 'day';
      Links.setColor('powderblue');
    }
    else{
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        self.value = 'night';
        Links.setColor('blue');
      }
    }
