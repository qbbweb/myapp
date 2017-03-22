angular.module('starter.services', [])
  .factory('shi',function () {
    var datas=[
      {listId:"望岳",poetry:"岱宗夫如何，齐鲁青未了。造化钟神秀，阴阳割昏晓。荡胸生层云，决眦入归鸟。会当凌绝顶，一览众山小。",id:'0'},
      {listId:"九月九日忆山东兄弟",poetry:"独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。",id:'1'},
      {listId:"终南别业",poetry:"中岁颇好道，晚家南山陲。兴来每独往，胜事空自知。行到水穷处，坐看云起时。偶然值林叟，谈笑无还期。",id:'2'},
      {listId:"赤壁",poetry:"折戟沉沙铁未销，自将磨洗认前朝。东风不与周郎便，铜雀春深锁二乔。",id:'3'},
      {listId:"闺怨",poetry:"闺中少妇不知愁，春日凝妆上翠楼。忽见陌头杨柳色，悔教夫婿觅封侯。",id:'4'},
      {listId:"寄人",poetry:"别梦依依到谢家，小廊回合曲阑斜。多情只有春庭月，犹为离人照落花。",id:'5'},
      {listId:"蝉",poetry:"本以高难饱，徒劳恨费声。五更疏欲断，一树碧无情。薄宦梗犹泛，故园芜已平。烦君最相警，我亦举家清。",id:'6'},
      {listId:"游子吟",poetry:"慈母手中线，游子身上衣。临行密密缝，意恐迟迟归。谁言寸草心，报得三春晖。",id:'7'},
      {listId:"梦李白·死别已吞声",poetry:"死别已吞声，生别常恻恻。江南瘴疠地，逐客无消息。故人入我梦，明我常相忆。君今在罗网，何以有羽翼？恐非平生魂，路远不可测。魂来枫林青，魂返关塞黑。落月满屋梁，犹疑照颜色。水深波浪阔，无使蛟龙得。",id:'8'},
      {listId:"送别",poetry:"下马饮君酒，问君何所之。君言不得意，归卧南山陲。但去莫复问，白云无尽时。",id:'9'},
      {listId:"春思",poetry:"燕草如碧丝，秦桑低绿枝。当君怀归日，是妾断肠时。春风不相识，何事入罗帏？",id:'10'},
      {listId:"望岳",poetry:"岱宗夫如何，齐鲁青未了。造化钟神秀，阴阳割昏晓。荡胸生层云，决眦入归鸟。会当凌绝顶，一览众山小。",id:'11'},
      {listId:"佳人",poetry:"绝代有佳人，幽居在空谷。自云良家女，零落依草木。关中昔丧乱，兄弟遭杀戮。官高何足论，不得收骨肉。世情恶衰歇，万事随转烛。夫婿轻薄儿，新人美如玉。合昏尚知时，鸳鸯不独宿。但见新人笑，那闻旧人哭。在山泉水清，出山泉水浊。侍婢卖珠回，牵萝补茅屋。摘花不插发，采柏动盈掬。天寒翠袖薄，日暮倚修竹。",id:'12'}
    ];
    return {
      all:function(){
        return datas;
      }
    }
  })
  .factory("ci",function () {
    var datac=[
      {name:"虞美人·宜州见梅作",poe:"天涯也有江南信。梅破知春近。夜阑风细得香迟。不道晓来开遍、向南枝。玉台弄粉花应妒。飘到眉心住。平生个里愿杯深。去国十年老尽、少年心。",id:"0"},
      {name:"汉宫春·梅",poe:"潇洒江梅，向竹梢疏处，横两三枝。东君也不爱惜，雪压霜欺。无情燕子，怕春寒、轻失花期。却是有，年年塞雁，归来曾见开时。清浅小溪如练，问玉堂何似，茅舍疏篱。伤心故人去后，冷落新诗。微云淡月，对江天、分付他谁。空自忆，清香未减，风流不在人知。",id:"1"},
      {name:"念奴娇·登多景楼",poe:"危楼还望，叹此意、今古几人曾会？鬼设神施，浑认作、天限南疆北界。一水横陈，连岗三面，做出争雄势。六朝何事，只成门户私计？因笑王谢诸人，登高怀远，也学英雄涕。凭却长江，管不到，河洛腥膻无际。正好长驱，不须反顾，寻取中流誓。小儿破贼，势成宁问强对！",id:"2"},
      {name:"虞美人·宜州见梅作",poe:"天涯也有江南信。梅破知春近。夜阑风细得香迟。不道晓来开遍、向南枝。玉台弄粉花应妒。飘到眉心住。平生个里愿杯深。去国十年老尽、少年心。",id:"3"},
      {name:"汉宫春·梅",poe:"潇洒江梅，向竹梢疏处，横两三枝。东君也不爱惜，雪压霜欺。无情燕子，怕春寒、轻失花期。却是有，年年塞雁，归来曾见开时。清浅小溪如练，问玉堂何似，茅舍疏篱。伤心故人去后，冷落新诗。微云淡月，对江天、分付他谁。空自忆，清香未减，风流不在人知。",id:"4"}
    ]
    return {
      all:function(){
        return datac;
      }
    }

  })
  .factory('wen',function () {
    var dataw=[
      {name:"青春",wen:"有一段青春，留作永恒。剪一段时光，放在最美的段落。好好保存留作永远，时间过去岁月的路过。只是多了一道曾经，流年一路改变了我们的模样。送走了我们的青春，留给了我们曾经。这样的夜别样的心情，倒影的年华。深夜想用文字表达我内心的段落，可是终究写不出整个心情。背着这些流年在岁月里流浪，终究没有安静的场所。来安放我这沉淀的一切，似乎不能放也不能放。",id:"0"},
      {name:"布鞋",wen:"或是寒风料峭，或是身子每况愈下，时序渐近严冬，阵阵寒意从脚底直往上窜， 我回家从门后取下尘封已久的布鞋，掸掉蛛网，拍去灰尘，穿在脚上，顿觉舒适、温暖，股股暖流遍布全身。穿上布鞋，一桩桩往事涌上心头。现在母亲已经年逾古稀，步履不再矫健，手脚不再灵敏，老眼已经昏花，无法在白炽灯下对准针眼，再也不能做布鞋活儿了。可母亲的布鞋带给我的温暖却深深留在我的心坎上。",id:"1"}
    ]
    return {
      all:function(){
        return dataw;
      }
    }

  })

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
