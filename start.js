const a0_0x14ee69=a0_0x7f1d;(function(_0x3b0754,_0x4b6dc9){const _0x241c57=a0_0x7f1d,_0x5276cb=_0x3b0754();while(!![]){try{const _0x41e27f=-parseInt(_0x241c57(0x21f))/0x1+parseInt(_0x241c57(0x202))/0x2*(-parseInt(_0x241c57(0x214))/0x3)+-parseInt(_0x241c57(0x20c))/0x4+parseInt(_0x241c57(0x1ee))/0x5+parseInt(_0x241c57(0x1e0))/0x6+-parseInt(_0x241c57(0x22c))/0x7+parseInt(_0x241c57(0x1d8))/0x8;if(_0x41e27f===_0x4b6dc9)break;else _0x5276cb['push'](_0x5276cb['shift']());}catch(_0x40b8f5){_0x5276cb['push'](_0x5276cb['shift']());}}}(a0_0x18be,0x68416));import a0_0x4ddc12 from'axios';import a0_0x5ab6c8 from'chalk';import a0_0x162875 from'figlet';import a0_0x1da514 from'fs';import a0_0x3521e8 from'inquirer';function printLogo(){const _0x55c3cb=a0_0x7f1d;a0_0x162875[_0x55c3cb(0x1f3)](_0x55c3cb(0x1fc),{'font':_0x55c3cb(0x1f2)},(_0x11662e,_0x4de3df)=>{const _0x468123=_0x55c3cb;if(_0x11662e){console[_0x468123(0x229)](_0x468123(0x1d6)),console[_0x468123(0x1f6)](_0x11662e);return;}console[_0x468123(0x229)](a0_0x5ab6c8['blue'](_0x4de3df));});}let settings={'accounts':[]};const url=a0_0x14ee69(0x1dd),P=[{'id':'farstray','price':0x64},{'id':a0_0x14ee69(0x1ea),'price':0x3e8},{'id':a0_0x14ee69(0x217),'price':0x2710},{'id':a0_0x14ee69(0x1dc),'price':0xc350},{'id':a0_0x14ee69(0x213),'price':0x124f8},{'id':'faryote','price':0x186a0},{'id':a0_0x14ee69(0x1e7),'price':0x249f0},{'id':a0_0x14ee69(0x1de),'price':0x30d40},{'id':a0_0x14ee69(0x234),'price':0x7a120}],priceIncreasePercentage=0.1,q={'farstray':0.1,'farbeaver':0.2,'farligator':0.4,'farinu':0.8,'farpossum':0x1,'faryote':1.2,'farsune':1.6,'farllama':0x2,'farlucky':0x3};function calculateCurrentBoostPrice(_0x543412,_0x51f6a9){const _0x535e61=a0_0x14ee69;return _0x543412*Math[_0x535e61(0x1f1)](0x1+priceIncreasePercentage,_0x51f6a9);}function getHeaders(_0x28430b){const _0xf23aaa=a0_0x14ee69;return{'Accept':_0xf23aaa(0x207),'Accept-Encoding':_0xf23aaa(0x1e5),'Accept-Language':_0xf23aaa(0x1fd),'Api-Key':_0xf23aaa(0x22e),'Origin':_0xf23aaa(0x20d),'Priority':_0xf23aaa(0x21b),'Referer':_0xf23aaa(0x1d7),'Sec-Ch-Ua':_0xf23aaa(0x1e3),'Sec-Ch-Ua-Platform':'\x22iOS\x22','Sec-Ch-Ua-Mobile':'?1','Sec-Fetch-Dest':_0xf23aaa(0x1f0),'Sec-Fetch-Mode':_0xf23aaa(0x1df),'Sec-Fetch-Site':_0xf23aaa(0x1d5),'User-Agent':_0xf23aaa(0x1d3),'Authorization':_0x28430b?_0xf23aaa(0x1d9)+_0x28430b:''};}const payload_template={'taps':null,'boosts':{},'invite':null,'quests':{'followWieldLabs':!![],'likeWieldLabsLatest':!![],'followTgAnnouncement':!![],'checkedDotCast':!![],'checkedDotCast3':!![],'followJcdenton':!![],'followNico':!![],'followTg':!![],'followTwitch':!![]}};function getRandomTaps(_0x6ea00,_0x4fff8e){const _0x1fd1db=a0_0x14ee69;return Math[_0x1fd1db(0x22d)](Math[_0x1fd1db(0x20f)]()*(_0x4fff8e-_0x6ea00+0x1))+_0x6ea00;}function calculateBoostEfficiency(_0x227e11,_0x173fa1){return _0x173fa1/_0x227e11;}function selectMostEfficientBoostWithReserve(_0xd03dfb,_0x484276,_0x50500a,_0x5d1654){const _0x2c35ed=a0_0x14ee69;let _0x4234a0=null,_0x2f07d7=0x0;for(const [_0x10c95e,_0x300304]of Object[_0x2c35ed(0x21a)](_0xd03dfb)){const _0x29baf8=_0x484276[_0x2c35ed(0x20e)](_0x56ce71=>_0x56ce71['id']===_0x10c95e);if(_0x29baf8){const _0x347fb4=_0x29baf8[_0x2c35ed(0x1ec)],_0x1dc1b1=calculateCurrentBoostPrice(_0x347fb4,_0x300304),_0x5ba7af=calculateBoostEfficiency(_0x1dc1b1,q[_0x10c95e]);_0x5ba7af>_0x2f07d7&&_0x50500a-_0x1dc1b1>=_0x5d1654&&(_0x2f07d7=_0x5ba7af,_0x4234a0=_0x10c95e);}}return _0x4234a0;}async function buyBoostWithReserve(_0x27bc40,_0x37d6f3,_0x7586a8,_0x2c2d50){const _0x218ff0=a0_0x14ee69,_0x16858d=P[_0x218ff0(0x20e)](_0x5d90dc=>_0x5d90dc['id']===_0x37d6f3);if(!_0x16858d)return console[_0x218ff0(0x229)](a0_0x5ab6c8['red']('Boost\x20type\x20'+_0x37d6f3+_0x218ff0(0x228))),![];const _0x214759=_0x16858d['price'],_0x300717=calculateCurrentBoostPrice(_0x214759,settings[_0x218ff0(0x203)][_0x27bc40][_0x218ff0(0x1ef)][_0x37d6f3]+_0x7586a8),_0x44fb79=settings[_0x218ff0(0x203)][_0x27bc40]['score'];if(_0x44fb79-_0x300717<_0x2c2d50)return console['log'](a0_0x5ab6c8['red']('Account\x20'+(_0x27bc40+0x1)+_0x218ff0(0x1ed)+_0x7586a8+'\x20'+_0x37d6f3+_0x218ff0(0x22b)+_0x44fb79+_0x218ff0(0x211)+(_0x300717+_0x2c2d50))),![];const _0x29b12d={...payload_template,'boosts':{...settings['accounts'][_0x27bc40][_0x218ff0(0x1ef)],[_0x37d6f3]:(settings[_0x218ff0(0x203)][_0x27bc40][_0x218ff0(0x1ef)][_0x37d6f3]||0x0)+_0x7586a8}};try{const _0x1b566a=await a0_0x4ddc12[_0x218ff0(0x225)](url,_0x29b12d,{'headers':getHeaders(settings[_0x218ff0(0x203)][_0x27bc40][_0x218ff0(0x1e9)]),'proxy':settings['accounts'][_0x27bc40]['proxy']?{'host':settings['accounts'][_0x27bc40][_0x218ff0(0x208)]['host'],'port':settings[_0x218ff0(0x203)][_0x27bc40]['proxy'][_0x218ff0(0x1f5)]}:undefined});return _0x1b566a[_0x218ff0(0x221)][_0x218ff0(0x1fb)]?(console[_0x218ff0(0x229)](a0_0x5ab6c8['yellow'](_0x218ff0(0x206)+(_0x27bc40+0x1)+_0x218ff0(0x1eb)+_0x7586a8+'\x20'+_0x37d6f3+_0x218ff0(0x226))),!![]):(console[_0x218ff0(0x229)](a0_0x5ab6c8[_0x218ff0(0x201)](_0x218ff0(0x206)+(_0x27bc40+0x1)+_0x218ff0(0x233)+JSON[_0x218ff0(0x1db)](_0x1b566a[_0x218ff0(0x221)]))),![]);}catch(_0xc6ddef){return console[_0x218ff0(0x229)](a0_0x5ab6c8['red'](_0x218ff0(0x206)+(_0x27bc40+0x1)+_0x218ff0(0x219)+_0xc6ddef['message'])),![];}}async function sendRequest(_0x516076){const _0x3fe608=a0_0x14ee69,_0x53a73d=getRandomTaps(0x7a120,0x2dc6c0),_0x23ea3c=getRandomTaps(0x1,0x32),_0x1ba898={...payload_template,'taps':_0x23ea3c,'boosts':settings[_0x3fe608(0x203)][_0x516076][_0x3fe608(0x1ef)]};try{const _0x200212=await a0_0x4ddc12[_0x3fe608(0x225)](url,_0x1ba898,{'headers':getHeaders(settings[_0x3fe608(0x203)][_0x516076]['token']),'proxy':settings[_0x3fe608(0x203)][_0x516076][_0x3fe608(0x208)]?{'host':settings['accounts'][_0x516076][_0x3fe608(0x208)][_0x3fe608(0x232)],'port':settings[_0x3fe608(0x203)][_0x516076][_0x3fe608(0x208)][_0x3fe608(0x1f5)]}:undefined});if(_0x200212[_0x3fe608(0x221)][_0x3fe608(0x1fb)]){settings[_0x3fe608(0x203)][_0x516076][_0x3fe608(0x1f8)]=_0x200212['data'][_0x3fe608(0x221)][_0x3fe608(0x1f8)],console[_0x3fe608(0x229)](a0_0x5ab6c8[_0x3fe608(0x220)]('Account\x20'+(_0x516076+0x1)+_0x3fe608(0x21d)+settings['accounts'][_0x516076][_0x3fe608(0x1f8)]+_0x3fe608(0x237)+_0x23ea3c+'\x20|\x20Reserve:\x20'+_0x53a73d+'\x20|\x20FarStray:\x20'+_0x200212[_0x3fe608(0x221)][_0x3fe608(0x221)][_0x3fe608(0x1ef)][_0x3fe608(0x1e2)]+_0x3fe608(0x1da)+_0x200212[_0x3fe608(0x221)][_0x3fe608(0x221)][_0x3fe608(0x1ef)]['farbeaver']+'\x20|\x20FarLigator:\x20'+_0x200212[_0x3fe608(0x221)][_0x3fe608(0x221)][_0x3fe608(0x1ef)]['farligator']+_0x3fe608(0x223)+_0x200212[_0x3fe608(0x221)]['data'][_0x3fe608(0x1ef)][_0x3fe608(0x1dc)]+'\x20|\x20FarPossum:\x20'+_0x200212[_0x3fe608(0x221)][_0x3fe608(0x221)]['boosts'][_0x3fe608(0x213)]+'\x20|\x20FarYote:\x20'+_0x200212[_0x3fe608(0x221)]['data']['boosts'][_0x3fe608(0x205)]+'\x20|\x20FarSune:\x20'+_0x200212[_0x3fe608(0x221)][_0x3fe608(0x221)][_0x3fe608(0x1ef)][_0x3fe608(0x1e7)]+_0x3fe608(0x222)+_0x200212[_0x3fe608(0x221)][_0x3fe608(0x221)][_0x3fe608(0x1ef)][_0x3fe608(0x1de)]+_0x3fe608(0x215)+_0x200212[_0x3fe608(0x221)][_0x3fe608(0x221)][_0x3fe608(0x1ef)][_0x3fe608(0x234)]+_0x3fe608(0x210))),settings[_0x3fe608(0x203)][_0x516076]['boosts']=_0x200212[_0x3fe608(0x221)][_0x3fe608(0x221)][_0x3fe608(0x1ef)];const _0x455311=selectMostEfficientBoostWithReserve(settings[_0x3fe608(0x203)][_0x516076]['boosts'],P,settings['accounts'][_0x516076][_0x3fe608(0x1f8)],_0x53a73d);if(_0x455311){const _0x5d46c6=0x1;await buyBoostWithReserve(_0x516076,_0x455311,_0x5d46c6,_0x53a73d);}}else console['log'](a0_0x5ab6c8[_0x3fe608(0x201)](_0x3fe608(0x206)+(_0x516076+0x1)+_0x3fe608(0x1e1)+JSON[_0x3fe608(0x1db)](_0x200212['data'])+'\x20|\x20Reserve\x20Score:\x20'+_0x53a73d));}catch(_0x4107e9){_0x4107e9['response']&&_0x4107e9[_0x3fe608(0x1ff)][_0x3fe608(0x221)]?console['log'](a0_0x5ab6c8[_0x3fe608(0x201)]('Account\x20'+(_0x516076+0x1)+_0x3fe608(0x218)+_0x4107e9[_0x3fe608(0x1ff)]['data'])):console[_0x3fe608(0x229)](a0_0x5ab6c8[_0x3fe608(0x201)](_0x3fe608(0x206)+(_0x516076+0x1)+_0x3fe608(0x219)+_0x4107e9[_0x3fe608(0x1d4)]));}}async function startScript(){async function _0x4bc983(){const _0x3bf300=a0_0x7f1d,_0x48f92f=settings[_0x3bf300(0x203)][_0x3bf300(0x224)]((_0x134f9d,_0x29c1cf)=>sendRequest(_0x29c1cf));await Promise['all'](_0x48f92f),setTimeout(_0x4bc983,0x7d0);}_0x4bc983();}async function showMenu(){const _0x252610=a0_0x14ee69,_0x2ce7e2=[_0x252610(0x20b),_0x252610(0x22f),_0x252610(0x1fa)],{option:_0x1c1ff2}=await a0_0x3521e8[_0x252610(0x212)]([{'type':'list','name':_0x252610(0x1f7),'message':_0x252610(0x1f9),'choices':_0x2ce7e2}]);switch(_0x1c1ff2){case'Start\x20Script':settings[_0x252610(0x203)][_0x252610(0x1e8)]===0x0?(console[_0x252610(0x229)](a0_0x5ab6c8[_0x252610(0x201)](_0x252610(0x1fe))),await showSettings()):await startScript();break;case'Settings':await showSettings();break;case _0x252610(0x1fa):console[_0x252610(0x229)](_0x252610(0x1e4)),process['exit'](0x0);break;default:console['log'](a0_0x5ab6c8['red'](_0x252610(0x231))),await showMenu();break;}}async function showSettings(){const _0x5ed056=a0_0x14ee69,{accountCount:_0x2c4f94}=await a0_0x3521e8[_0x5ed056(0x212)]([{'type':_0x5ed056(0x200),'name':_0x5ed056(0x21c),'message':_0x5ed056(0x216),'default':settings[_0x5ed056(0x203)]['length']||0x1}]),_0x46ba55=[];for(let _0x1caf1a=0x0;_0x1caf1a<_0x2c4f94;_0x1caf1a++){const {token:_0x995fc5}=await a0_0x3521e8['prompt']([{'type':_0x5ed056(0x209),'name':_0x5ed056(0x1e9),'message':_0x5ed056(0x21e)+(_0x1caf1a+0x1)+':','default':settings[_0x5ed056(0x203)][_0x1caf1a]?.['token']||''}]),{proxy:_0x4ce62e}=await a0_0x3521e8[_0x5ed056(0x212)]([{'type':'input','name':_0x5ed056(0x208),'message':_0x5ed056(0x1e6)+(_0x1caf1a+0x1)+_0x5ed056(0x227),'default':settings[_0x5ed056(0x203)][_0x1caf1a]?.[_0x5ed056(0x208)]?'http://'+settings[_0x5ed056(0x203)][_0x1caf1a][_0x5ed056(0x208)]['host']+':'+settings[_0x5ed056(0x203)][_0x1caf1a][_0x5ed056(0x208)][_0x5ed056(0x1f5)]:''}]),_0x4c085f=_0x4ce62e?{'host':_0x4ce62e[_0x5ed056(0x235)](':')[0x1][_0x5ed056(0x1f4)]('//',''),'port':parseInt(_0x4ce62e[_0x5ed056(0x235)](':')[0x2])}:undefined;_0x46ba55[_0x5ed056(0x20a)]({'token':_0x995fc5,'score':0x0,'boosts':{},'proxy':_0x4c085f});}settings[_0x5ed056(0x203)]=_0x46ba55,a0_0x1da514[_0x5ed056(0x236)](_0x5ed056(0x22a),JSON['stringify'](settings,null,0x2)),console[_0x5ed056(0x229)](a0_0x5ab6c8[_0x5ed056(0x220)]('Settings\x20saved\x20successfully.')),await showMenu();}function a0_0x7f1d(_0x131b59,_0x4bae38){const _0x18be69=a0_0x18be();return a0_0x7f1d=function(_0x7f1d2b,_0x4c8766){_0x7f1d2b=_0x7f1d2b-0x1d3;let _0x2255a1=_0x18be69[_0x7f1d2b];return _0x2255a1;},a0_0x7f1d(_0x131b59,_0x4bae38);}async function main(){const _0x1d0177=a0_0x14ee69;printLogo();if(a0_0x1da514[_0x1d0177(0x238)](_0x1d0177(0x22a))){const _0x250176=a0_0x1da514[_0x1d0177(0x230)](_0x1d0177(0x22a));settings=JSON[_0x1d0177(0x204)](_0x250176);}setTimeout(async()=>{await showMenu();},0x64);}function a0_0x18be(){const _0x3363f5=['post','\x20boosts','\x20(Leave\x20empty\x20for\x20default):','\x20not\x20found','log','settings.json','\x20boosts.\x20Current\x20Score:\x20','3848159ZHjdIW','floor','far.quest-default-5477272','Settings','readFileSync','Invalid\x20option.\x20Please\x20choose\x20again.','host',':\x20Error\x20buying\x20boost:\x20','farlucky','split','writeFileSync','\x20|\x20Taps:\x20','existsSync','Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2016_0\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/16.0\x20Mobile/15E148\x20Safari/604.1','message','same-site','Something\x20went\x20wrong...','https://far.quest/','14401016RRnCcy','Bearer\x20','\x20|\x20FarBeaver:\x20','stringify','farinu','https://build.far.quest/wtf/v1/fartap/game','farllama','cors','877020xlVIMo',':\x20Error\x20|\x20Response:\x20','farstray','\x22;Not\x20A\x20Brand\x22;v=\x2299\x22,\x20\x22Safari\x22;v=\x22605\x22','Exiting...','gzip,\x20deflate,\x20br,\x20zstd','Enter\x20HTTP\x20Proxy\x20(http://host:port)\x20for\x20Account\x20','farsune','length','token','farbeaver',':\x20Bought\x20','price',':\x20Not\x20enough\x20score\x20to\x20buy\x20','3619805SxqiBp','boosts','empty','pow','Big','text','replace','port','dir','option','score','Hello!\x20Choose\x20one\x20option:','Exit','success','0nCode','en-US,en;q=0.9','Please\x20set\x20up\x20accounts\x20in\x20settings\x20before\x20starting\x20the\x20script.','response','number','red','94sqNPkr','accounts','parse','faryote','Account\x20','*/*','proxy','input','push','Start\x20Script','559528sKnzir','https://far.quest','find','random','\x0a\x09\x09\x09\x09\x09',',\x20Needed:\x20','prompt','farpossum','49941bJQzRD','\x20|\x20FarLucky:\x20','Enter\x20the\x20number\x20of\x20accounts:','farligator',':\x20Response\x20JSON\x20error:\x20',':\x20Error:\x20','entries','u=1,\x20i','accountCount',':\x20Success\x20|\x20Score:\x20','Enter\x20API\x20token\x20for\x20Account\x20','771200CRgVAP','green','data','\x20|\x20FarLlama:\x20','\x20|\x20FarInu:\x20','map'];a0_0x18be=function(){return _0x3363f5;};return a0_0x18be();}main();