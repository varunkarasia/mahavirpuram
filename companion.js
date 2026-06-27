(function(){
"use strict";
var view=document.getElementById('view');
var LANG='en', TAB='aaradhana';
var esc=function(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');};

var T={
 en:{aaradhana:'Daily Aaradhana',aSub:'Stavan, Stuti & Sajjhay with lyrics in Gujarati, Hindi & English.',mandir:'Jain Mandir Directory',mSub:'Derasars & teerths around the world.',panchang:'Today’s Panchang',pSub:'Tithi, sunrise & sunset for your city.',search:'Search temple, city or country…',directions:'Directions',meaning:'Meaning',listen:'Listen on YouTube',city:'City',sunrise:'Sunrise',sunset:'Sunset',navkarsi:'Navkarsi (after)',chauvihar:'Chauvihar (before)',tithi:'Tithi',parv:'Parv day',food:'Aahar Vichar — Food Checker',foodSub:'Search a food to see if it is Jain-suitable, and why.',ecode:'E-Code & Emulsifier Guide',ecodeSub:'Look up additives and E-numbers for Jain suitability.',foodSearch:'Search a food or ingredient…',ecodeSearch:'Search E-number or additive…',ok:'Jain-suitable',avoid:'Best avoided',caution:'Verify',reason:'Why'},
 hi:{aaradhana:'दैनिक आराधना',aSub:'स्तवन, स्तुति एवं सज्झाय — गुजराती, हिंदी व अंग्रेज़ी में।',mandir:'जैन मंदिर निर्देशिका',mSub:'विश्व भर के देरासर एवं तीर्थ।',panchang:'आज का पंचांग',pSub:'आपके शहर हेतु तिथि, सूर्योदय व सूर्यास्त।',search:'मंदिर, शहर या देश खोजें…',directions:'दिशा',meaning:'अर्थ',listen:'यूट्यूब पर सुनें',city:'शहर',sunrise:'सूर्योदय',sunset:'सूर्यास्त',navkarsi:'नवकारसी (बाद)',chauvihar:'चौविहार (पहले)',tithi:'तिथि',parv:'पर्व दिवस',food:'आहार विचार — फूड चेकर',foodSub:'कोई आहार जैन-योग्य है या नहीं, और क्यों — खोजें।',ecode:'ई-कोड एवं इमल्सीफायर गाइड',ecodeSub:'योजकों एवं ई-नंबर की जैन-योग्यता देखें।',foodSearch:'आहार या सामग्री खोजें…',ecodeSearch:'ई-नंबर या योजक खोजें…',ok:'जैन-योग्य',avoid:'त्याज्य',caution:'जाँचें',reason:'कारण'},
 gu:{aaradhana:'દૈનિક આરાધના',aSub:'સ્તવન, સ્તુતિ અને સજ્ઝાય — ગુજરાતી, હિન્દી અને અંગ્રેજીમાં.',mandir:'જૈન મંદિર નિર્દેશિકા',mSub:'વિશ્વભરના દેરાસર અને તીર્થ.',panchang:'આજનું પંચાંગ',pSub:'તમારા શહેર માટે તિથિ, સૂર્યોદય અને સૂર્યાસ્ત.',search:'મંદિર, શહેર કે દેશ શોધો…',directions:'દિશા',meaning:'અર્થ',listen:'યૂટ્યુબ પર સાંભળો',city:'શહેર',sunrise:'સૂર્યોદય',sunset:'સૂર્યાસ્ત',navkarsi:'નવકારસી (પછી)',chauvihar:'ચૌવિહાર (પહેલાં)',tithi:'તિથિ',parv:'પર્વ દિવસ',food:'આહાર વિચાર — ફૂડ ચેકર',foodSub:'કોઈ આહાર જૈન-યોગ્ય છે કે નહીં, અને શા માટે — શોધો.',ecode:'ઈ-કોડ અને ઇમલ્સિફાયર ગાઇડ',ecodeSub:'યોજકો અને ઈ-નંબરની જૈન-યોગ્યતા જુઓ.',foodSearch:'આહાર કે સામગ્રી શોધો…',ecodeSearch:'ઈ-નંબર કે યોજક શોધો…',ok:'જૈન-યોગ્ય',avoid:'ત્યાજ્ય',caution:'ચકાસો',reason:'કારણ'}
};
function t(k){return (T[LANG]||T.en)[k]||T.en[k];}
function cls(){return LANG==='gu'?'gu':(LANG==='hi'?'hi':'');}

/* ---------------- Aaradhana data ---------------- */
var STAVANS=[
 {cat:'Sutra',title:{en:'Navkar Mahamantra',hi:'णमोकार महामंत्र',gu:'નવકાર મહામંત્ર'},
  lyr:{gu:'નમો અરિહંતાણં\nનમો સિદ્ધાણં\nનમો આયરિયાણં\nનમો ઉવજ્ઝાયાણં\nનમો લોએ સવ્વસાહૂણં\nએસો પંચ નમુક્કારો, સવ્વપાવપ્પણાસણો\nમંગલાણં ચ સવ્વેસિં, પઢમં હવઈ મંગલં',
       hi:'णमो अरिहंताणं\nणमो सिद्धाणं\nणमो आयरियाणं\nणमो उवज्झायाणं\nणमो लोए सव्वसाहूणं\nएसो पंच णमोक्कारो, सव्वपावप्पणासणो\nमंगलाणं च सव्वेसिं, पढमं हवइ मंगलं',
       en:'Namo Arihantanam\nNamo Siddhanam\nNamo Ayariyanam\nNamo Uvajjhayanam\nNamo Loe Savvasahunam\nEso Pancha Namokkaro, Savvapavappanasano\nMangalanam cha Savvesim, Padhamam Havai Mangalam'},
  mean:'I bow to the Arihantas, the Siddhas, the Acharyas, the Upadhyayas and all the Sadhus of the world. This fivefold salutation destroys all sin and is the foremost of all auspicious things.'},
 {cat:'Mangal',title:{en:'Chattari Mangalam',hi:'चत्तारि मंगलं',gu:'ચત્તારિ મંગલં'},
  lyr:{gu:'ચત્તારિ મંગલં — અરિહંતા મંગલં, સિદ્ધા મંગલં, સાહૂ મંગલં, કેવલિ-પન્નત્તો ધમ્મો મંગલં.\nચત્તારિ લોગુત્તમા — અરિહંતા લોગુત્તમા, સિદ્ધા લોગુત્તમા, સાહૂ લોગુત્તમા, કેવલિ-પન્નત્તો ધમ્મો લોગુત્તમો.\nચત્તારિ સરણં પવજ્જામિ — અરિહંતે, સિદ્ધે, સાહૂ, કેવલિ-પન્નત્તં ધમ્મં સરણં પવજ્જામિ.',
       hi:'चत्तारि मंगलं — अरिहंता मंगलं, सिद्धा मंगलं, साहू मंगलं, केवलि-पन्नत्तो धम्मो मंगलं.\nचत्तारि लोगुत्तमा — अरिहंता, सिद्धा, साहू लोगुत्तमा, केवलि-पन्नत्तो धम्मो लोगुत्तमो.\nचत्तारि सरणं पवज्जामि — अरिहंते, सिद्धे, साहू, केवलि-पन्नत्तं धम्मं सरणं पवज्जामि.',
       en:'Chattari mangalam — Arihanta, Siddha, Sahu, and the Dharma proclaimed by the Kevalis are auspicious.\nChattari loguttama — these four are supreme in the world.\nChattari saranam pavajjami — in these four I take refuge.'},
  mean:'Four are auspicious, four are supreme in the world, and in four I take refuge: the Arihantas, the Siddhas, the Sadhus, and the Dharma revealed by the omniscient.'},
 {cat:'Stuti',title:{en:'Bhaktamar (opening verse)',hi:'भक्तामर स्तोत्र (प्रथम श्लोक)',gu:'ભક્તામર સ્તોત્ર (પ્રથમ શ્લોક)'},
  lyr:{gu:'ભક્તામર-પ્રણત-મૌલિ-મણિપ્રભાણાં\nઉદ્યોતકં દલિત-પાપ-તમો-વિતાનમ્\nસમ્યક્ પ્રણમ્ય જિન-પાદ-યુગં યુગાદૌ\nઆલમ્બનં ભવજલે પતતાં જનાનામ્',
       hi:'भक्तामर-प्रणत-मौलि-मणिप्रभाणां\nउद्योतकं दलित-पाप-तमो-वितानम्\nसम्यक् प्रणम्य जिन-पाद-युगं युगादौ\nआलम्बनं भवजले पततां जनानाम्',
       en:'Bhaktamar-pranata-mauli-mani-prabhanam\nudyotakam dalita-papa-tamo-vitanam\nsamyak pranamya jina-pada-yugam yugadav\nalambanam bhavajale patatam jananam'},
  mean:'Bowing reverently to the feet of the first Jina — which dispel the darkness of sin and outshine the jewels in the crowns of the bowing gods — a refuge for beings sinking in the ocean of worldly existence. (Acharya Manatunga, ~7th c.)'},
 {cat:'Sajjhay',title:{en:'Khamemi Savva Jive (forgiveness)',hi:'खामेमि सव्व जीवे',gu:'ખામેમિ સવ્વ જીવે'},
  lyr:{gu:'ખામેમિ સવ્વ-જીવે, સવ્વે જીવા ખમંતુ મે\nમિત્તી મે સવ્વ-ભૂએસુ, વેરં મજ્ઝ ન કેણઈ',
       hi:'खामेमि सव्व-जीवे, सव्वे जीवा खमंतु मे\nमित्ती मे सव्व-भूएसु, वेरं मज्झ न केणइ',
       en:'Khamemi savva-jive, savve jiva khamantu me\nmitti me savva-bhuesu, veram majjha na kenai'},
  mean:'I forgive all living beings, and may all living beings forgive me. I hold friendship toward all and enmity toward none. — Micchami Dukkadam.'}
];

function renderAaradhana(){
 view.innerHTML='<div class="eyebrow">'+esc(t('aaradhana'))+'</div><h2 class="'+cls()+'">'+esc(t('aaradhana'))+'</h2><p style="color:var(--muted);margin:4px 0 16px" class="'+cls()+'">'+esc(t('aSub'))+'</p><div class="grid g3" id="sList"></div>';
 var L=document.getElementById('sList');
 STAVANS.forEach(function(s,i){
  var d=document.createElement('div');d.className='card s-item';
  d.innerHTML='<div><span class="pill">'+s.cat+'</span><h3 class="'+cls()+'" style="margin-top:8px">'+esc(s.title[LANG]||s.title.en)+'</h3></div><div style="color:var(--gold);font-size:1.4rem">›</div>';
  d.addEventListener('click',function(){openStavan(i);});
  L.appendChild(d);
 });
}
function openStavan(i){
 var s=STAVANS[i];var ll=LANG;
 function draw(){
  var lc=ll==='gu'?'gu':(ll==='hi'?'hi':'');
  view.innerHTML='<a class="back" id="bk">← '+esc(t('aaradhana'))+'</a>'+
   '<div class="card"><span class="pill">'+s.cat+'</span><h2 class="'+cls()+'" style="margin:8px 0">'+esc(s.title[LANG]||s.title.en)+'</h2>'+
   '<div class="ltabs"><button data-ll="gu" '+(ll==='gu'?'class=on':'')+'>ગુજરાતી</button><button data-ll="hi" '+(ll==='hi'?'class=on':'')+'>हिन्दी</button><button data-ll="en" '+(ll==='en'?'class=on':'')+'>English</button></div>'+
   '<div class="lyrics '+lc+'">'+esc(s.lyr[ll])+'</div>'+
   '<div class="meaning"><b>'+esc(t('meaning'))+':</b> '+esc(s.mean)+'</div>'+
   '<div style="margin-top:14px"><a class="btn" target="_blank" rel="noopener" href="https://www.youtube.com/results?search_query='+encodeURIComponent((s.title.en)+' jain')+'">▶ '+esc(t('listen'))+'</a></div></div>';
  document.getElementById('bk').addEventListener('click',renderAaradhana);
  view.querySelectorAll('.ltabs button').forEach(function(b){b.addEventListener('click',function(){ll=b.dataset.ll;draw();});});
 }
 draw();
}

/* ---------------- Mandir directory ---------------- */
var TEMPLES=[
 {n:'Shri Shankheshwar Parshvanath',c:'Shankheshwar, Gujarat',k:'India',ty:'Shvetambar Teerth'},
 {n:'Shri Shatrunjay Teerth',c:'Palitana, Gujarat',k:'India',ty:'Shvetambar Teerth'},
 {n:'Ranakpur Jain Temple',c:'Ranakpur, Rajasthan',k:'India',ty:'Shvetambar'},
 {n:'Dilwara Temples',c:'Mount Abu, Rajasthan',k:'India',ty:'Shvetambar'},
 {n:'Shri Mahavirji',c:'Karauli, Rajasthan',k:'India',ty:'Digambar'},
 {n:'Shri Sammet Shikharji',c:'Parasnath, Jharkhand',k:'India',ty:'Teerth'},
 {n:'Gomateshwar Bahubali',c:'Shravanabelagola, Karnataka',k:'India',ty:'Digambar'},
 {n:'Shri Mahavir Jain Aradhana Kendra',c:'Koba, Gandhinagar',k:'India',ty:'Shvetambar'},
 {n:'Jain Center of America',c:'New York',k:'USA',ty:'Derasar'},
 {n:'Jain Center of Greater Boston',c:'Norwood, MA',k:'USA',ty:'Derasar'},
 {n:'Oshwal / Jain Temple',c:'Leicester',k:'United Kingdom',ty:'Derasar'},
 {n:'Jain Temple Antwerp',c:'Antwerp',k:'Belgium',ty:'Derasar'},
 {n:'Shree Visa Oshwal Community',c:'Nairobi',k:'Kenya',ty:'Derasar'},
 {n:'Singapore Jain Religious Society',c:'Singapore',k:'Singapore',ty:'Derasar'}
];
function renderMandir(){
 view.innerHTML='<div class="eyebrow">'+esc(t('mandir'))+'</div><h2 class="'+cls()+'">'+esc(t('mandir'))+'</h2><p style="color:var(--muted);margin:4px 0 14px" class="'+cls()+'">'+esc(t('mSub'))+'</p>'+
  '<input id="tSearch" placeholder="'+esc(t('search'))+'" style="margin-bottom:16px"><div class="grid g3" id="tList"></div>';
 var inp=document.getElementById('tSearch'),L=document.getElementById('tList');
 function draw(){var q=(inp.value||'').toLowerCase();
  var rows=TEMPLES.filter(function(x){return (x.n+' '+x.c+' '+x.k+' '+x.ty).toLowerCase().indexOf(q)>-1;});
  L.innerHTML=rows.map(function(x){var maps='https://www.google.com/maps/search/'+encodeURIComponent(x.n+' '+x.c+' '+x.k);
   return '<div class="card temple"><span class="pill">'+esc(x.ty)+'</span><h3>'+esc(x.n)+'</h3><div class="loc">'+esc(x.c)+' · '+esc(x.k)+'</div><div class="row"><a class="btn ghost" target="_blank" rel="noopener" href="'+maps+'">📍 '+esc(t('directions'))+'</a></div></div>';}).join('')||'<p class="loc">No matches.</p>';
 }
 inp.addEventListener('input',draw);draw();
}

/* ---------------- Panchang ---------------- */
var CITIES=[['Ahmedabad',23.0225,72.5714,5.5],['Mumbai',19.0760,72.8777,5.5],['Surat',21.1702,72.8311,5.5],['Palitana',21.5222,71.8336,5.5],['Delhi',28.6139,77.2090,5.5],['Bengaluru',12.9716,77.5946,5.5],['London',51.5074,-0.1278,0],['New York',40.7128,-74.0060,-5],['Antwerp',51.2194,4.4025,1],['Singapore',1.3521,103.8198,8],['Nairobi',-1.2921,36.8219,3]];
function sunTime(lat,lng,date,tz,rising){
 var rad=Math.PI/180,deg=180/Math.PI,zen=90.833;
 var y=date.getFullYear(),mo=date.getMonth()+1,d=date.getDate();
 var N1=Math.floor(275*mo/9),N2=Math.floor((mo+9)/12),N3=(1+Math.floor((y-4*Math.floor(y/4)+2)/3));
 var N=N1-(N2*N3)+d-30;
 var lngHour=lng/15;
 var tt=rising?N+((6-lngHour)/24):N+((18-lngHour)/24);
 var M=(0.9856*tt)-3.289;
 var L=M+(1.916*Math.sin(M*rad))+(0.020*Math.sin(2*M*rad))+282.634;L=(L+360)%360;
 var RA=deg*Math.atan(0.91764*Math.tan(L*rad));RA=(RA+360)%360;
 var Lq=Math.floor(L/90)*90,RAq=Math.floor(RA/90)*90;RA=(RA+(Lq-RAq))/15;
 var sinDec=0.39782*Math.sin(L*rad),cosDec=Math.cos(Math.asin(sinDec));
 var cosH=(Math.cos(zen*rad)-(sinDec*Math.sin(lat*rad)))/(cosDec*Math.cos(lat*rad));
 if(cosH>1||cosH<-1)return null;
 var H=rising?360-deg*Math.acos(cosH):deg*Math.acos(cosH);H=H/15;
 var Tt=H+RA-(0.06571*tt)-6.622;
 var UT=((Tt-lngHour)%24+24)%24;
 var local=((UT+tz)%24+24)%24;
 var hh=Math.floor(local),mm=Math.round((local-hh)*60);if(mm===60){mm=0;hh=(hh+1)%24;}
 return [hh,mm];
}
function hm(a){return a?(String(a[0]).padStart(2,'0')+':'+String(a[1]).padStart(2,'0')):'—';}
function addMin(a,m){if(!a)return '—';var x=a[0]*60+a[1]+m;x=((x%1440)+1440)%1440;return String(Math.floor(x/60)).padStart(2,'0')+':'+String(x%60).padStart(2,'0');}
function tithi(date){
 var syn=29.530588853,ref=Date.UTC(2000,0,6,18,14);
 var days=(date.getTime()-ref)/86400000;var ph=days/syn;ph=ph-Math.floor(ph);
 var tn=ph*30,idx=Math.floor(tn);var paksha=idx<15?'Shukla':'Krishna';
 var names=['Pratipada','Dwitiya','Tritiya','Chaturthi','Panchami','Shashthi','Saptami','Ashtami','Navami','Dashami','Ekadashi','Dwadashi','Trayodashi','Chaturdashi'];
 var w=idx%15,name=(w===14)?(paksha==='Shukla'?'Purnima':'Amavasya'):names[w];
 var parv=/Ashtami|Chaturdashi|Purnima|Amavasya/.test(name);
 return {label:paksha+' '+name,parv:parv};
}
function renderPanchang(){
 var d=new Date();
 view.innerHTML='<div class="eyebrow">'+esc(t('panchang'))+'</div><h2 class="'+cls()+'">'+esc(t('panchang'))+'</h2><p style="color:var(--muted);margin:4px 0 14px" class="'+cls()+'">'+esc(t('pSub'))+'</p>'+
  '<div class="card" style="max-width:300px;margin-bottom:16px"><label style="font-size:.78rem;color:var(--maroon);font-weight:600">'+esc(t('city'))+'</label><select id="city" style="margin-top:6px">'+CITIES.map(function(c,i){return '<option value="'+i+'"'+(i===0?' selected':'')+'>'+c[0]+'</option>';}).join('')+'</select></div>'+
  '<div id="pBody"></div>';
 function draw(){
  var c=CITIES[+document.getElementById('city').value];
  var sr=sunTime(c[1],c[2],d,c[3],true),ss=sunTime(c[1],c[2],d,c[3],false);
  var ti=tithi(d);
  var dateStr=d.toLocaleDateString('en-IN',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  document.getElementById('pBody').innerHTML=
   '<div style="font-weight:600;color:var(--maroon);margin-bottom:12px">'+esc(dateStr)+' · '+esc(c[0])+'</div>'+
   '<div class="sun" style="margin-bottom:16px">'+
    '<div class="sunbox"><div class="l">🌅 '+esc(t('sunrise'))+'</div><div class="t">'+hm(sr)+'</div></div>'+
    '<div class="sunbox"><div class="l">🌇 '+esc(t('sunset'))+'</div><div class="t">'+hm(ss)+'</div></div>'+
   '</div>'+
   '<div class="grid g3" style="margin-bottom:8px">'+
    '<div class="tithi"><div class="l" style="font-size:.72rem;color:var(--muted);letter-spacing:.06em;text-transform:uppercase">'+esc(t('tithi'))+'</div><div class="big">'+esc(ti.label)+'</div>'+(ti.parv?'<span class="pill" style="background:#f3e3c4;color:#b5862a">'+esc(t('parv'))+'</span>':'')+'</div>'+
    '<div class="tithi"><div class="l" style="font-size:.72rem;color:var(--muted);letter-spacing:.06em;text-transform:uppercase">'+esc(t('navkarsi'))+'</div><div class="big">'+addMin(sr,48)+'</div></div>'+
    '<div class="tithi"><div class="l" style="font-size:.72rem;color:var(--muted);letter-spacing:.06em;text-transform:uppercase">'+esc(t('chauvihar'))+'</div><div class="big">'+hm(ss)+'</div></div>'+
   '</div>'+
   '<div class="note">Sunrise/sunset are computed astronomically (±2 min). Navkarsi shown as 48 minutes after sunrise; Chauvihar at sunset — confirm local pachchakhaan timings. Tithi is approximate; connect an authoritative Jain panchang for exact tithi, parv and festival days.</div>';
 }
 document.getElementById('city').addEventListener('change',draw);draw();
}


/* ---------------- Food checker ---------------- */
var FOODS=[
 ['Potato','avoid','Root vegetable (kandmool/anantkay) — avoided in Jain diet.'],
 ['Onion','avoid','Root/kandmool and tamasic — avoided.'],
 ['Garlic','avoid','Root/kandmool and tamasic — avoided.'],
 ['Carrot','avoid','Root vegetable — avoided.'],
 ['Radish (mooli)','avoid','Root vegetable — avoided.'],
 ['Ginger (fresh)','avoid','Fresh root — avoided; dry sonth is sometimes accepted.'],
 ['Beetroot','avoid','Root vegetable — avoided.'],
 ['Brinjal (eggplant)','avoid','Bahubeej (many seeds) and considered abhakshya by many.'],
 ['Mushroom','avoid','Grows in decay; considered anantkay/abhakshya.'],
 ['Honey','avoid','Involves himsa to bees — avoided.'],
 ['Egg','avoid','Non-vegetarian — avoided.'],
 ['Gular / Fig (udumbar fruit)','avoid','Udumbar fruits harbour tiny life — avoided.'],
 ['Cauliflower','caution','May harbour insects; wash/inspect carefully or avoid.'],
 ['Cabbage','caution','May harbour insects; many avoid.'],
 ['Leafy greens at night','caution','Eating after sunset is avoided; inspect for insects by day.'],
 ['Tomato','caution','Many seeds and red colour — some Jains avoid; views differ.'],
 ['Pickle / Achar','caution','Long storage/fermentation — many avoid after a period.'],
 ['Bread (yeast)','caution','Fermentation/yeast — some avoid; verify.'],
 ['Vinegar','caution','Fermented — verify source and views.'],
 ['Curd kept overnight (basi)','caution','Stale/fermented dairy is avoided; fresh is fine.'],
 ['Paneer (fresh)','ok','Fresh dairy — generally acceptable.'],
 ['Rice','ok','Grain — acceptable; cook fresh.'],
 ['Wheat / Roti','ok','Grain — acceptable.'],
 ['Dal / Lentils','ok','Acceptable; cook fresh.'],
 ['Apple / Banana / Mango','ok','Common fruits — acceptable; eat fresh by day.'],
 ['Milk (boiled, fresh)','ok','Fresh dairy — generally acceptable.']
];
function badge(s){var m={ok:['#e7f3ec','#1f9d57','#bfe3cd'],avoid:['#fdeceb','#c0392b','#f3c4c0'],caution:['#f3e3c4','#b5862a','#e7d29a']}[s];return '<span style="display:inline-block;padding:3px 11px;border-radius:999px;font-size:.74rem;font-weight:700;background:'+m[0]+';color:'+m[1]+';border:1px solid '+m[2]+'">'+t(s)+'</span>';}
var SENS='<div class="note">⚠ Informational guidance compiled from common Jain dietary practice — views differ across traditions and gachhas. Please validate with your sangh/guru. Not a definitive ruling.</div>';
function renderFood(){
 view.innerHTML='<div class="eyebrow">'+esc(t('food'))+'</div><h2 class="'+cls()+'">'+esc(t('food'))+'</h2><p style="color:var(--muted);margin:4px 0 12px" class="'+cls()+'">'+esc(t('foodSub'))+'</p>'+SENS+'<input id="fS" placeholder="'+esc(t('foodSearch'))+'" style="margin:14px 0"><div class="grid g3" id="fL"></div>';
 var inp=document.getElementById('fS'),L=document.getElementById('fL');
 function draw(){var q=(inp.value||'').toLowerCase();var rows=FOODS.filter(function(x){return (x[0]+' '+x[2]).toLowerCase().indexOf(q)>-1;});
  L.innerHTML=rows.map(function(x){return '<div class="card"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px"><h3 style="font-size:1.1rem">'+esc(x[0])+'</h3>'+badge(x[1])+'</div><div style="color:var(--muted);font-size:.88rem;margin-top:6px"><b>'+esc(t('reason'))+':</b> '+esc(x[2])+'</div></div>';}).join('')||'<p class="loc">No matches.</p>';}
 inp.addEventListener('input',draw);draw();
}

/* ---------------- E-code guide ---------------- */
var ECODES=[
 ['E120','Carmine / Cochineal','avoid','From crushed insects — animal origin.'],
 ['E441','Gelatin','avoid','Animal collagen — non-vegetarian.'],
 ['E542','Bone phosphate','avoid','From animal bones.'],
 ['E904','Shellac','avoid','Resin from the lac insect.'],
 ['E1105','Lysozyme','avoid','Usually derived from egg white.'],
 ['E920','L-Cysteine','caution','May be from feathers/hair/animal or synthetic — verify source.'],
 ['E471','Mono- & diglycerides','caution','May be plant or animal sourced — verify with maker.'],
 ['E422','Glycerol / Glycerine','caution','Plant or animal sourced — verify.'],
 ['E631','Disodium inosinate','caution','Often from meat/fish; can be plant — verify.'],
 ['E153','Vegetable carbon','caution','Usually plant but verify processing.'],
 ['E322','Lecithin (usually soy)','ok','Typically plant (soy/sunflower).'],
 ['E160a','Beta-carotene','ok','Plant/synthetic source.'],
 ['E330','Citric acid','ok','Synthetic/plant fermentation.'],
 ['E300','Ascorbic acid (Vit C)','ok','Synthetic/plant.'],
 ['E440','Pectin','ok','From fruit — plant.'],
 ['E407','Carrageenan','ok','From seaweed — plant.'],
 ['E500','Sodium bicarbonate','ok','Mineral — vegetarian.'],
 ['E202','Potassium sorbate','ok','Synthetic preservative.']
];
function renderEcode(){
 view.innerHTML='<div class="eyebrow">'+esc(t('ecode'))+'</div><h2 class="'+cls()+'">'+esc(t('ecode'))+'</h2><p style="color:var(--muted);margin:4px 0 12px" class="'+cls()+'">'+esc(t('ecodeSub'))+'</p>'+SENS+'<input id="eS" placeholder="'+esc(t('ecodeSearch'))+'" style="margin:14px 0"><div class="grid g3" id="eL"></div>';
 var inp=document.getElementById('eS'),L=document.getElementById('eL');
 function draw(){var q=(inp.value||'').toLowerCase();var rows=ECODES.filter(function(x){return (x[0]+' '+x[1]+' '+x[3]).toLowerCase().indexOf(q)>-1;});
  L.innerHTML=rows.map(function(x){return '<div class="card"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px"><div><span class="pill">'+esc(x[0])+'</span><h3 style="font-size:1.05rem;margin-top:6px">'+esc(x[1])+'</h3></div>'+badge(x[2])+'</div><div style="color:var(--muted);font-size:.88rem;margin-top:6px">'+esc(x[3])+'</div></div>';}).join('')||'<p class="loc">No matches.</p>';}
 inp.addEventListener('input',draw);draw();
}

/* ---------------- router ---------------- */
function render(){if(TAB==='aaradhana')renderAaradhana();else if(TAB==='mandir')renderMandir();else if(TAB==='panchang')renderPanchang();else if(TAB==='aahar')renderFood();else renderEcode();}
document.querySelectorAll('#tabs button').forEach(function(b){b.addEventListener('click',function(){TAB=b.dataset.t;document.querySelectorAll('#tabs button').forEach(function(x){x.classList.toggle('on',x===b);});render();});});
document.querySelectorAll('#lang button').forEach(function(b){b.addEventListener('click',function(){LANG=b.dataset.l;document.querySelectorAll('#lang button').forEach(function(x){x.classList.toggle('on',x===b);});render();});});
render();
})();
