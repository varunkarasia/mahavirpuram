/* Mahavirpuram — award-level interactions + i18n */
(function(){
  "use strict";

  /* ---------- i18n dictionary (UI + key content) ---------- */
  var I18N=window.__I18N={
    en:{
      "nav.home":"Home","nav.about":"About","nav.mp":"Mahavirpuram","nav.blessings":"Blessings",
      "nav.donations":"Donations","nav.news":"News","nav.contact":"Contact","cta.donate":"Donate Now",
      "lang.label":"Language",
      "top.announce":"Paryushan Parva Pratikraman 2025 — join the observance & live aaradhana",
      "hero.read":"Read More","hero.scroll":"Scroll to explore",
      "vows.eyebrow":"The Five Vows of Bhagwan Mahavir","vows.title":"Timeless principles, for every seeker",
      "vows.sub":"Mahavirpuram carries the invaluable sermons of Bhagwan Mahavir to the entire world — not for one community alone, but for students, thinkers and all humankind.",
      "vow.ahimsa":"Non-violence","vow.ahimsa.d":"Compassion toward every living being in thought, word and deed.",
      "vow.satya":"Truth","vow.satya.d":"A life rooted in honesty and inner clarity.",
      "vow.asteya":"Non-stealing","vow.asteya.d":"Integrity that takes nothing which is not freely given.",
      "vow.brahma":"Self-discipline","vow.brahma.d":"Mastery of the senses and purity of conduct.",
      "vow.aparigraha":"Non-attachment","vow.aparigraha.d":"Freedom from possessiveness and the weight of desire.",
      "navkar.eyebrow":"The Eternal Prayer","navkar.title":"Navkar Mahamantra",
      "navkar.meaning":"I bow to the Arihantas, the Siddhas, the Acharyas, the Upadhyayas and all the Sadhus of the world. This fivefold salutation destroys all sin and is the foremost of all that is auspicious.",
      "navkar.play":"Play Aum","navkar.pause":"Pause Aum",
      "dd.eyebrow":"Sacred Calendar","dd.title":"Daily Darshan & Observances",
      "dd.sub":"Join the rhythm of devotion — from daily darshan to the great festivals of the Jain year.",
      "dd.panel.tag":"Featured Observance","dd.panel.h":"Paryushan Parva 2025","dd.panel.p":"The holiest days of the Jain calendar — eight days of pratikraman, reflection and forgiveness. Join us in person or through live aaradhana.","dd.panel.btn":"View Programme",
      "teach.eyebrow":"Wisdom of Bhagwan Mahavir","teach.title":"Teachings to live by",
      "dev.eyebrow":"Current Development","dev.title":"Taking shape, step by step",
      "dev.udhyan":"Updhyan — The Garden","dev.udhyan.d":"As an antidote to environmental harm, a sacred garden is rising — three trees for each of the 24 Tirthankars, seventy-two in all.","dev.udhyan.cta":"Explore the Udhyan",
      "dev.gaushala":"Shri Vardhman Gaushala","dev.gaushala.d":"A protective shelter where cattle are cared for with dignity and reverence — compassion at the heart of the project.","dev.gaushala.cta":"Visit the Gaushala",
      "mp.eyebrow":"Master Plan","mp.title":"A divine city of knowledge",
      "mp.sub":"Spread across two lakh square metres on the Ahmedabad–Gandhinagar highway, Mahavirpuram unites darshan, learning, healing and stillness.",
      "yt.eyebrow":"Live & Latest","yt.title":"From our YouTube channel","yt.sub":"Watch darshan, discourses and project updates — and subscribe for live aaradhana.",
      "yt.live":"Live aaradhana on festival days","yt.watch":"Watch on YouTube","yt.subscribe":"Subscribe",
      "stat.area":"Square metres of sacred ground","stat.tirth":"Tirthankars honoured","stat.trees":"Sacred trees in the Udhyan","stat.all":"Vision for all humankind",
      "cta.title":"Be part of building a divine city","cta.body":"Mahavirpuram is not about religion alone — it serves the social, cultural and character-building needs of society. Your gift of time, service or means brings this vision to life.","cta.note":"Contributions are eligible for benefits under Section 80-G of the Income Tax Act, 1961.",
      "foot.blurb":"A knowledge commune and cultural & spiritual museum dedicated to Bhagwan Mahavir, rising on the Ahmedabad–Gandhinagar highway to share compassion, truth and non-violence with the world.",
      "foot.explore":"Explore","foot.support":"Support","foot.reach":"Reach Us","foot.news":"Newsletter","foot.news.sub":"Receive updates on milestones and observances.","foot.subscribe":"Join","foot.rights":"All rights reserved.","foot.tax":"Tax benefits under Section 80-G, Income Tax Act 1961","wa.title":"Chat with us","wa.status":"Mahavirpuram · replies quickly","wa.msg":"Jai Jinendra! How can we help you today?","wa.start":"Start chat on WhatsApp","app.eyebrow":"Mobile App","app.title":"Take Mahavirpuram with you","app.sub":"Navkar Mantra, daily darshan, live aarti and one-tap donations — coming soon to Android.","app.f1":"Navkar Mantra & Aum","app.f2":"Daily Darshan & events","app.f3":"Live aarti on YouTube","app.f4":"Donate in a tap","app.soon":"Coming soon on","app.cta":"Get notified","search.ph":"Search the site…","search.hint":"Try: donations, gaushala, Navkar Mantra, contact","search.empty":"No matches. Try another word.","search.label":"Search","nav.companion":"Companion","comp.eyebrow":"In the App","comp.title":"Jain Daily Companion","comp.sub":"Stavan, Stuti & Sajjhay with lyrics, a worldwide Mandir directory, daily panchang with sunrise & sunset, and Jain food guidance — in English, Hindi & Gujarati.","comp.cta":"Open the Companion"
    },
    hi:{
      "nav.home":"मुख्य पृष्ठ","nav.about":"परिचय","nav.mp":"महावीरपुरम","nav.blessings":"आशीर्वाद",
      "nav.donations":"दान","nav.news":"समाचार","nav.contact":"संपर्क","cta.donate":"दान करें",
      "lang.label":"भाषा",
      "top.announce":"पर्युषण पर्व प्रतिक्रमण २०२५ — पधारें एवं लाइव आराधना में सम्मिलित हों",
      "hero.read":"और पढ़ें","hero.scroll":"नीचे देखें",
      "vows.eyebrow":"भगवान महावीर के पाँच व्रत","vows.title":"हर साधक के लिए शाश्वत सिद्धांत",
      "vows.sub":"महावीरपुरम भगवान महावीर के अमूल्य उपदेशों को समस्त विश्व तक पहुँचाता है — किसी एक समुदाय के लिए नहीं, बल्कि विद्यार्थियों, विचारकों और समस्त मानवता के लिए।",
      "vow.ahimsa":"अहिंसा","vow.ahimsa.d":"मन, वचन और कर्म से हर जीव के प्रति करुणा।",
      "vow.satya":"सत्य","vow.satya.d":"ईमानदारी और आंतरिक स्पष्टता पर आधारित जीवन।",
      "vow.asteya":"अचौर्य","vow.asteya.d":"जो स्वेच्छा से न मिले, उसे न लेने की निष्ठा।",
      "vow.brahma":"ब्रह्मचर्य","vow.brahma.d":"इंद्रियों पर संयम और आचरण की पवित्रता।",
      "vow.aparigraha":"अपरिग्रह","vow.aparigraha.d":"संग्रह और इच्छाओं के बोझ से मुक्ति।",
      "navkar.eyebrow":"शाश्वत प्रार्थना","navkar.title":"णमोकार महामंत्र",
      "navkar.meaning":"मैं अरिहंतों, सिद्धों, आचार्यों, उपाध्यायों और संसार के समस्त साधुओं को नमन करता हूँ। यह पंच नमस्कार समस्त पापों का नाश करने वाला और सभी मंगलों में प्रथम मंगल है।",
      "navkar.play":"ॐ सुनें","navkar.pause":"रोकें",
      "dd.eyebrow":"पावन पंचांग","dd.title":"दैनिक दर्शन एवं पर्व",
      "dd.sub":"भक्ति की लय से जुड़ें — दैनिक दर्शन से लेकर जैन वर्ष के महान पर्वों तक।",
      "dd.panel.tag":"विशेष पर्व","dd.panel.h":"पर्युषण पर्व २०२५","dd.panel.p":"जैन पंचांग के सबसे पावन दिन — आठ दिन प्रतिक्रमण, चिंतन और क्षमा के। प्रत्यक्ष अथवा लाइव आराधना से सम्मिलित हों।","dd.panel.btn":"कार्यक्रम देखें",
      "teach.eyebrow":"भगवान महावीर की वाणी","teach.title":"जीवन में उतारने योग्य उपदेश",
      "dev.eyebrow":"वर्तमान विकास","dev.title":"क्रमशः आकार लेता हुआ",
      "dev.udhyan":"उद्यान — पावन वाटिका","dev.udhyan.d":"पर्यावरण की रक्षा हेतु एक पावन उद्यान बन रहा है — 24 तीर्थंकरों के लिए तीन-तीन वृक्ष, कुल बहत्तर।","dev.udhyan.cta":"उद्यान देखें",
      "dev.gaushala":"श्री वर्धमान गौशाला","dev.gaushala.d":"एक सुरक्षित आश्रय जहाँ गौवंश की सेवा सम्मान और श्रद्धा से होती है — परियोजना के हृदय में करुणा।","dev.gaushala.cta":"गौशाला देखें",
      "mp.eyebrow":"मास्टर प्लान","mp.title":"ज्ञान की एक दिव्य नगरी",
      "mp.sub":"अहमदाबाद–गांधीनगर राजमार्ग पर दो लाख वर्ग मीटर में फैला महावीरपुरम दर्शन, ज्ञान, उपचार और शांति को एक साथ लाता है।",
      "yt.eyebrow":"लाइव एवं नवीनतम","yt.title":"हमारे यूट्यूब चैनल से","yt.sub":"दर्शन, प्रवचन और परियोजना अपडेट देखें — और लाइव आराधना हेतु सदस्यता लें।",
      "yt.live":"पर्व के दिनों में लाइव आराधना","yt.watch":"यूट्यूब पर देखें","yt.subscribe":"सदस्यता लें",
      "stat.area":"वर्ग मीटर पावन भूमि","stat.tirth":"तीर्थंकरों को नमन","stat.trees":"उद्यान में पावन वृक्ष","stat.all":"समस्त मानवता हेतु संकल्प",
      "cta.title":"एक दिव्य नगरी के निर्माण का हिस्सा बनें","cta.body":"महावीरपुरम केवल धर्म नहीं — यह समाज की सामाजिक, सांस्कृतिक और चरित्र-निर्माण की आवश्यकताओं की सेवा करता है। आपका समय, सेवा या योगदान इस स्वप्न को साकार करता है।","cta.note":"योगदान आयकर अधिनियम, 1961 की धारा 80-G के अंतर्गत लाभ के पात्र हैं।",
      "foot.blurb":"भगवान महावीर को समर्पित एक ज्ञान-समुदाय एवं सांस्कृतिक व आध्यात्मिक संग्रहालय, जो अहमदाबाद–गांधीनगर राजमार्ग पर करुणा, सत्य और अहिंसा का संदेश विश्व तक पहुँचाने हेतु आकार ले रहा है।",
      "foot.explore":"जानें","foot.support":"सहयोग","foot.reach":"संपर्क करें","foot.news":"न्यूज़लेटर","foot.news.sub":"पड़ावों और पर्वों की जानकारी पाएँ।","foot.subscribe":"जुड़ें","foot.rights":"सर्वाधिकार सुरक्षित।","foot.tax":"धारा 80-G, आयकर अधिनियम 1961 के अंतर्गत कर लाभ","wa.title":"हमसे चैट करें","wa.status":"महावीरपुरम · शीघ्र उत्तर","wa.msg":"जय जिनेन्द्र! हम आपकी कैसे सहायता करें?","wa.start":"WhatsApp पर चैट शुरू करें","app.eyebrow":"मोबाइल ऐप","app.title":"महावीरपुरम को साथ रखें","app.sub":"णमोकार मंत्र, दैनिक दर्शन, लाइव आरती और एक-टैप दान — शीघ्र ही Android पर।","app.f1":"णमोकार मंत्र एवं ॐ","app.f2":"दैनिक दर्शन एवं पर्व","app.f3":"YouTube पर लाइव आरती","app.f4":"एक टैप में दान","app.soon":"शीघ्र आ रहा है","app.cta":"सूचना पाएँ","search.ph":"साइट खोजें…","search.hint":"आज़माएं: दान, गौशाला, णमोकार मंत्र, संपर्क","search.empty":"कोई परिणाम नहीं। दूसरा शब्द आज़माएं।","search.label":"खोजें","nav.companion":"साथी","comp.eyebrow":"ऐप में","comp.title":"जैन दैनिक साथी","comp.sub":"स्तवन, स्तुति व सज्झाय (गीत सहित), विश्वभर की मंदिर निर्देशिका, सूर्योदय-सूर्यास्त सहित दैनिक पंचांग, और जैन आहार मार्गदर्शन — अंग्रेज़ी, हिन्दी व गुजराती में।","comp.cta":"साथी खोलें"
    },
    gu:{
      "nav.home":"મુખ્ય પૃષ્ઠ","nav.about":"પરિચય","nav.mp":"મહાવીરપુરમ","nav.blessings":"આશીર્વાદ",
      "nav.donations":"દાન","nav.news":"સમાચાર","nav.contact":"સંપર્ક","cta.donate":"દાન કરો",
      "lang.label":"ભાષા",
      "top.announce":"પર્યુષણ પર્વ પ્રતિક્રમણ ૨૦૨૫ — પધારો અને લાઇવ આરાધનામાં જોડાઓ",
      "hero.read":"વધુ વાંચો","hero.scroll":"નીચે જુઓ",
      "vows.eyebrow":"ભગવાન મહાવીરનાં પાંચ વ્રત","vows.title":"દરેક સાધક માટે શાશ્વત સિદ્ધાંતો",
      "vows.sub":"મહાવીરપુરમ ભગવાન મહાવીરના અમૂલ્ય ઉપદેશોને સમગ્ર વિશ્વ સુધી પહોંચાડે છે — કોઈ એક સમુદાય માટે નહીં, પણ વિદ્યાર્થીઓ, વિચારકો અને સમગ્ર માનવજાત માટે.",
      "vow.ahimsa":"અહિંસા","vow.ahimsa.d":"મન, વચન અને કર્મથી દરેક જીવ પ્રત્યે કરુણા.",
      "vow.satya":"સત્ય","vow.satya.d":"પ્રામાણિકતા અને આંતરિક સ્પષ્ટતા પર આધારિત જીવન.",
      "vow.asteya":"અચૌર્ય","vow.asteya.d":"જે સ્વેચ્છાએ ન મળે તે ન લેવાની નિષ્ઠા.",
      "vow.brahma":"બ્રહ્મચર્ય","vow.brahma.d":"ઇન્દ્રિયો પર સંયમ અને આચરણની પવિત્રતા.",
      "vow.aparigraha":"અપરિગ્રહ","vow.aparigraha.d":"સંગ્રહ અને ઇચ્છાઓના ભારથી મુક્તિ.",
      "navkar.eyebrow":"શાશ્વત પ્રાર્થના","navkar.title":"નવકાર મહામંત્ર",
      "navkar.meaning":"હું અરિહંતો, સિદ્ધો, આચાર્યો, ઉપાધ્યાયો અને જગતના સર્વ સાધુઓને નમન કરું છું. આ પંચ નમસ્કાર સર્વ પાપનો નાશ કરનાર અને સર્વ મંગલોમાં પ્રથમ મંગલ છે.",
      "navkar.play":"ૐ સાંભળો","navkar.pause":"થોભો",
      "dd.eyebrow":"પાવન પંચાંગ","dd.title":"દૈનિક દર્શન અને પર્વ",
      "dd.sub":"ભક્તિની લયમાં જોડાઓ — દૈનિક દર્શનથી લઈને જૈન વર્ષનાં મહાન પર્વો સુધી.",
      "dd.panel.tag":"વિશેષ પર્વ","dd.panel.h":"પર્યુષણ પર્વ ૨૦૨૫","dd.panel.p":"જૈન પંચાંગના સૌથી પાવન દિવસો — આઠ દિવસ પ્રતિક્રમણ, ચિંતન અને ક્ષમાના. પ્રત્યક્ષ અથવા લાઇવ આરાધનાથી જોડાઓ.","dd.panel.btn":"કાર્યક્રમ જુઓ",
      "teach.eyebrow":"ભગવાન મહાવીરની વાણી","teach.title":"જીવનમાં ઉતારવા યોગ્ય ઉપદેશ",
      "dev.eyebrow":"વર્તમાન વિકાસ","dev.title":"ક્રમશઃ આકાર લેતું",
      "dev.udhyan":"ઉદ્યાન — પાવન વાટિકા","dev.udhyan.d":"પર્યાવરણની રક્ષા માટે એક પાવન ઉદ્યાન બની રહ્યું છે — 24 તીર્થંકરો માટે ત્રણ-ત્રણ વૃક્ષ, કુલ બોંતેર.","dev.udhyan.cta":"ઉદ્યાન જુઓ",
      "dev.gaushala":"શ્રી વર્ધમાન ગૌશાળા","dev.gaushala.d":"એક સુરક્ષિત આશ્રય જ્યાં ગૌવંશની સેવા સન્માન અને શ્રદ્ધાથી થાય છે — પ્રોજેક્ટના હૃદયમાં કરુણા.","dev.gaushala.cta":"ગૌશાળા જુઓ",
      "mp.eyebrow":"માસ્ટર પ્લાન","mp.title":"જ્ઞાનની એક દિવ્ય નગરી",
      "mp.sub":"અમદાવાદ–ગાંધીનગર હાઇવે પર બે લાખ ચોરસ મીટરમાં ફેલાયેલું મહાવીરપુરમ દર્શન, જ્ઞાન, ઉપચાર અને શાંતિને એકસાથે લાવે છે.",
      "yt.eyebrow":"લાઇવ અને નવીનતમ","yt.title":"અમારી યૂટ્યુબ ચેનલ પરથી","yt.sub":"દર્શન, પ્રવચન અને પ્રોજેક્ટ અપડેટ જુઓ — અને લાઇવ આરાધના માટે સબ્સ્ક્રાઇબ કરો.",
      "yt.live":"પર્વના દિવસોમાં લાઇવ આરાધના","yt.watch":"યૂટ્યુબ પર જુઓ","yt.subscribe":"સબ્સ્ક્રાઇબ",
      "stat.area":"ચોરસ મીટર પાવન ભૂમિ","stat.tirth":"તીર્થંકરોને નમન","stat.trees":"ઉદ્યાનમાં પાવન વૃક્ષ","stat.all":"સમગ્ર માનવજાત માટે સંકલ્પ",
      "cta.title":"એક દિવ્ય નગરીના નિર્માણનો ભાગ બનો","cta.body":"મહાવીરપુરમ માત્ર ધર્મ નથી — તે સમાજની સામાજિક, સાંસ્કૃતિક અને ચારિત્ર્ય-ઘડતરની જરૂરિયાતોની સેવા કરે છે. તમારો સમય, સેવા કે યોગદાન આ સ્વપ્નને સાકાર કરે છે.","cta.note":"યોગદાન આવકવેરા અધિનિયમ, 1961ની કલમ 80-G હેઠળ લાભને પાત્ર છે.",
      "foot.blurb":"ભગવાન મહાવીરને સમર્પિત એક જ્ઞાન-સમુદાય અને સાંસ્કૃતિક તથા આધ્યાત્મિક સંગ્રહાલય, જે અમદાવાદ–ગાંધીનગર હાઇવે પર કરુણા, સત્ય અને અહિંસાનો સંદેશ વિશ્વ સુધી પહોંચાડવા આકાર લઈ રહ્યું છે.",
      "foot.explore":"જાણો","foot.support":"સહયોગ","foot.reach":"સંપર્ક કરો","foot.news":"ન્યૂઝલેટર","foot.news.sub":"પડાવો અને પર્વોની માહિતી મેળવો.","foot.subscribe":"જોડાઓ","foot.rights":"સર્વ હક્ક સુરક્ષિત.","foot.tax":"કલમ 80-G, આવકવેરા અધિનિયમ 1961 હેઠળ કર લાભ","wa.title":"અમારી સાથે ચેટ કરો","wa.status":"મહાવીરપુરમ · ઝડપી જવાબ","wa.msg":"જય જિનેન્દ્ર! અમે કેવી રીતે મદદ કરી શકીએ?","wa.start":"WhatsApp પર ચેટ શરૂ કરો","app.eyebrow":"મોબાઇલ એપ","app.title":"મહાવીરપુરમ સાથે રાખો","app.sub":"નવકાર મંત્ર, દૈનિક દર્શન, લાઇવ આરતી અને એક-ટેપ દાન — ટૂંક સમયમાં Android પર.","app.f1":"નવકાર મંત્ર અને ૐ","app.f2":"દૈનિક દર્શન અને પર્વ","app.f3":"YouTube પર લાઇવ આરતી","app.f4":"એક ટેપમાં દાન","app.soon":"ટૂંક સમયમાં","app.cta":"જાણ મેળવો","search.ph":"સાઇટ શોધો…","search.hint":"અજમાવો: દાન, ગૌશાળા, નવકાર મંત્ર, સંપર્ક","search.empty":"કોઈ પરિણામ નથી. બીજો શબ્દ અજમાવો.","search.label":"શોધો","nav.companion":"સાથી","comp.eyebrow":"એપમાં","comp.title":"જૈન દૈનિક સાથી","comp.sub":"સ્તવન, સ્તુતિ અને સજ્ઝાય (ગીત સહિત), વિશ્વભરની મંદિર નિર્દેશિકા, સૂર્યોદય-સૂર્યાસ્ત સહિત દૈનિક પંચાંગ, અને જૈન આહાર માર્ગદર્શન — અંગ્રેજી, હિન્દી અને ગુજરાતીમાં.","comp.cta":"સાથી ખોલો"
    }
  };
  var LANGS=[["en","English","English"],["hi","Hindi","हिन्दी"],["gu","Gujarati","ગુજરાતી"]];

  function applyLang(lang){
    if(!I18N[lang]) lang="en";
    var d=I18N[lang];
    document.documentElement.lang=lang;
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var k=el.getAttribute("data-i18n"); if(d[k]!=null) el.textContent=d[k];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function(el){
      var k=el.getAttribute("data-i18n-ph"); if(d[k]!=null) el.setAttribute("placeholder",d[k]);
    });
    try{localStorage.setItem("mp_lang",lang);}catch(e){}
    var cur=document.getElementById("langCur"); if(cur){var f=LANGS.filter(function(l){return l[0]===lang})[0]; if(f) cur.textContent=f[2];}
    document.querySelectorAll(".lang-menu button").forEach(function(b){b.classList.toggle("active",b.dataset.lang===lang);});
  }

  function initLang(){
    var saved="en"; try{saved=localStorage.getItem("mp_lang")||"en";}catch(e){}
    var menu=document.getElementById("langMenu");
    if(menu){
      menu.innerHTML=LANGS.map(function(l){return '<button data-lang="'+l[0]+'"><span>'+l[1]+'</span><span class="native">'+l[2]+'</span></button>';}).join("");
      menu.querySelectorAll("button").forEach(function(b){
        b.addEventListener("click",function(){applyLang(b.dataset.lang);menu.classList.remove("open");});
      });
    }
    var btn=document.getElementById("langBtn");
    if(btn&&menu){
      btn.addEventListener("click",function(e){e.stopPropagation();menu.classList.toggle("open");});
      document.addEventListener("click",function(){menu.classList.remove("open");});
    }
    applyLang(saved);
  }

  /* ---------- nav ---------- */
  function initNav(){
    var burger=document.querySelector('.hamburger'), navList=document.getElementById('navList');
    if(burger&&navList) burger.addEventListener('click',function(){navList.classList.toggle('open');});
    document.querySelectorAll('.nav-toggle-link').forEach(function(t){
      t.addEventListener('click',function(e){
        if(window.matchMedia('(max-width:880px)').matches){e.preventDefault();t.closest('.has-mega').classList.toggle('expand');}
      });
    });
    document.querySelectorAll('.nav-list a[href]:not([href^="#"])').forEach(function(a){
      a.addEventListener('click',function(){if(navList)navList.classList.remove('open');});
    });
    var hd=document.querySelector('.site-header');
    if(hd) window.addEventListener('scroll',function(){hd.classList.toggle('scrolled',window.scrollY>10);},{passive:true});
  }

  /* ---------- reveal + counters ---------- */
  function initReveal(){
    var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});},{threshold:0.12});
    document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
    var cio=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){count(en.target);cio.unobserve(en.target);}});},{threshold:0.5});
    document.querySelectorAll('[data-count]').forEach(function(el){cio.observe(el);});
  }
  function count(el){
    var target=parseFloat(el.getAttribute('data-count')), suf=el.getAttribute('data-suffix')||'', dur=1400, t0=null;
    function step(ts){if(!t0)t0=ts;var p=Math.min((ts-t0)/dur,1);var e=1-Math.pow(1-p,3);
      el.textContent=Math.round(target*e).toLocaleString('en-IN')+suf; if(p<1)requestAnimationFrame(step);}
    requestAnimationFrame(step);
  }

  /* ---------- teachings slider ---------- */
  function initSlider(){
    var root=document.getElementById('teachSlider'); if(!root) return;
    var slides=root.querySelectorAll('.tt-slide'), dotsWrap=root.querySelector('.tt-dots');
    var i=0, timer;
    slides.forEach(function(_,n){var b=document.createElement('button');b.setAttribute('aria-label','Go to teaching '+(n+1));b.addEventListener('click',function(){go(n);reset();});dotsWrap.appendChild(b);});
    var dots=dotsWrap.querySelectorAll('button');
    function go(n){slides[i].classList.remove('active');dots[i].classList.remove('active');i=(n+slides.length)%slides.length;slides[i].classList.add('active');dots[i].classList.add('active');}
    function next(){go(i+1);} function prev(){go(i-1);}
    function reset(){clearInterval(timer);timer=setInterval(next,6000);}
    root.querySelector('.tt-next').addEventListener('click',function(){next();reset();});
    root.querySelector('.tt-prev').addEventListener('click',function(){prev();reset();});
    root.addEventListener('mouseenter',function(){clearInterval(timer);});
    root.addEventListener('mouseleave',reset);
    go(0);reset();
  }

  /* ---------- scroll progress + back to top ---------- */
  function initScrollUI(){
    var bar=document.getElementById('progress'), top=document.getElementById('toTop');
    window.addEventListener('scroll',function(){
      var h=document.documentElement, st=h.scrollTop||document.body.scrollTop, sh=(h.scrollHeight-h.clientHeight)||1;
      if(bar) bar.style.width=(st/sh*100)+'%';
      if(top) top.classList.toggle('show',st>500);
    },{passive:true});
    if(top) top.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
  }

  /* ---------- Aum ambience (Web Audio, self-contained) ---------- */
  function initAum(){
    var btn=document.getElementById('aumBtn'); if(!btn) return;
    var ctx,nodes=[],playing=false;
    function start(){
      ctx=ctx||new (window.AudioContext||window.webkitAudioContext)();
      var master=ctx.createGain();master.gain.value=0;master.connect(ctx.destination);
      [136.1,272.2,68.05].forEach(function(f,n){
        var o=ctx.createOscillator();o.type='sine';o.frequency.value=f;
        var g=ctx.createGain();g.gain.value=n===0?0.5:(n===1?0.18:0.3);
        o.connect(g);g.connect(master);o.start();nodes.push(o);
      });
      master.gain.linearRampToValueAtTime(0.18,ctx.currentTime+1.2);
      nodes.master=master;playing=true;btn.classList.add('playing');
      var t=btn.querySelector('.txt'); if(t) t.setAttribute('data-i18n','navkar.pause'),t.textContent=(I18N[document.documentElement.lang]||I18N.en)['navkar.pause'];
    }
    function stop(){
      if(nodes.master){nodes.master.gain.linearRampToValueAtTime(0,ctx.currentTime+0.6);}
      setTimeout(function(){nodes.forEach(function(o){try{o.stop();}catch(e){}});nodes=[];},700);
      playing=false;btn.classList.remove('playing');
      var t=btn.querySelector('.txt'); if(t) t.setAttribute('data-i18n','navkar.play'),t.textContent=(I18N[document.documentElement.lang]||I18N.en)['navkar.play'];
    }
    btn.addEventListener('click',function(){playing?stop():start();});
  }

  var SEARCH_INDEX=[
   {t:"Home",d:"Welcome to Mahavirpuram, the knowledge commune.",u:"index.html",k:"home welcome mahavir hero"},
   {t:"Navkar Mahamantra",d:"The eternal prayer, with Aum ambience.",u:"index.html",k:"navkar namokar mantra aum prayer"},
   {t:"Daily Darshan & Observances",d:"Sacred calendar, Paryushan and events.",u:"index.html",k:"darshan paryushan calendar events aarti samvatsari"},
   {t:"The Five Vows",d:"Ahimsa, Satya, Asteya, Brahmacharya, Aparigraha.",u:"index.html",k:"vows ahimsa satya asteya brahmacharya aparigraha"},
   {t:"Live & Latest (YouTube)",d:"Darshan, discourses and live aarti.",u:"index.html",k:"youtube live video aarti channel"},
   {t:"About the Concept",d:"The vision and mission of Mahavirpuram.",u:"about-concept.html",k:"about concept vision mission museum"},
   {t:"Management & Guidance",d:"Revered Gurus and trustees leading the mission.",u:"about-management.html",k:"management guru acharya leadership trustees"},
   {t:"At a Glance",d:"The master plan and zones of the divine city.",u:"at-a-glance.html",k:"glance master plan zones facilities"},
   {t:"Shri Vardhman Gaushala",d:"A shelter of compassion for cattle.",u:"gaushala.html",k:"gaushala cow shelter compassion adopt"},
   {t:"Blessings",d:"Auspicious words that grace the beginning.",u:"blessings.html",k:"blessings aashirwad"},
   {t:"Donation Plans",d:"Schemes, 80-G benefits and how to give.",u:"donation-plan.html",k:"donation donate daan schemes 80g contribute"},
   {t:"Knowledge City",d:"MBA, MCA and Design education.",u:"donation-plan.html#knowledge",k:"knowledge city university education college mba mca design"},
   {t:"Mobile App",d:"Take Mahavirpuram with you, coming soon to Android.",u:"donation-plan.html#app",k:"app android mobile play store"},
   {t:"News & Events",d:"Milestones and observances.",u:"news.html",k:"news events updates"},
   {t:"Contact Us",d:"Addresses, phone and enquiry form.",u:"contact.html",k:"contact address phone email map enquiry"}
  ];
  function initSearch(){
    var ov=document.getElementById('searchOverlay'); if(!ov) return;
    var inp=document.getElementById('searchInput'), res=document.getElementById('searchResults');
    var openB=document.getElementById('searchOpen'), closeB=document.getElementById('searchClose');
    var ic='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
    function dict(){return (window.__I18N&&window.__I18N[document.documentElement.lang])||{};}
    function render(q){
      q=(q||'').trim().toLowerCase();
      var list = q? SEARCH_INDEX.filter(function(e){return (e.t+' '+e.d+' '+e.k).toLowerCase().indexOf(q)>-1;}) : SEARCH_INDEX.slice(0,8);
      if(!list.length){var d=dict();res.innerHTML='<div class="search-empty">'+((d['search.empty'])||'No matches. Try another word.')+'</div>';return;}
      res.innerHTML=list.map(function(e){return '<a href="'+e.u+'"><div class="rt">'+ic+e.t+'</div><div class="rd">'+e.d+'</div></a>';}).join('');
    }
    function open(){ov.classList.add('open');setTimeout(function(){inp.focus();},60);render(inp.value);}
    function close(){ov.classList.remove('open');}
    if(openB)openB.addEventListener('click',open);
    if(closeB)closeB.addEventListener('click',close);
    ov.addEventListener('click',function(e){if(e.target===ov)close();});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
    if(inp){
      inp.addEventListener('input',function(){render(inp.value);});
      inp.addEventListener('keydown',function(e){if(e.key==='Enter'){var a=res.querySelector('a');if(a)window.location.href=a.getAttribute('href');}});
    }
    try{var q=new URLSearchParams(location.search).get('q');if(q){inp.value=q;open();}}catch(e){}
  }

  function initWidget(){
    var w=document.getElementById('waWidget'); if(!w) return;
    var f=document.getElementById('waFab'), c=document.getElementById('waClose');
    if(f) f.addEventListener('click',function(e){e.stopPropagation();w.classList.toggle('open');});
    if(c) c.addEventListener('click',function(){w.classList.remove('open');});
    document.addEventListener('click',function(ev){ if(!w.contains(ev.target)) w.classList.remove('open'); });
  }

  /* ---------- preloader + year ---------- */
  function initMisc(){
    var y=document.getElementById('yr'); if(y) y.textContent=new Date().getFullYear();
  }
  window.addEventListener('load',function(){document.body.classList.add('loaded');});
  setTimeout(function(){document.body.classList.add('loaded');},2500);

  document.addEventListener('DOMContentLoaded',function(){
    initLang();initNav();initReveal();initSlider();initScrollUI();initAum();initWidget();initSearch();initMisc();
  });
})();
