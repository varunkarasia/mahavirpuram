(function(){
"use strict";
var $=function(s,r){return (r||document).querySelector(s);};
var main=$('#main');
var fmt=function(n){return '₹'+Number(Math.round(n||0)).toLocaleString('en-IN');};
var today=function(){return new Date().toISOString().slice(0,10);};
var uid=function(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6);};
var esc=function(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');};
function curFY(){var d=new Date();var y=d.getFullYear();var s=(d.getMonth()>=3)?y:y-1;return s+'-'+String((s+1)).slice(2);}
function toast(m){var t=$('#toast');t.textContent=m;t.classList.add('show');setTimeout(function(){t.classList.remove('show');},2600);}
function inWords(n){n=Math.round(n);if(n===0)return 'Zero Rupees Only';
 var a=['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
 var b=['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];
 function two(x){return x<20?a[x]:b[Math.floor(x/10)]+(x%10?' '+a[x%10]:'');}
 function three(x){return (Math.floor(x/100)?a[Math.floor(x/100)]+' Hundred'+(x%100?' ':''):'')+(x%100?two(x%100):'');}
 var out='';var cr=Math.floor(n/10000000);n%=10000000;var la=Math.floor(n/100000);n%=100000;var th=Math.floor(n/1000);n%=1000;
 if(cr)out+=(cr>99?three(cr):two(cr))+' Crore ';if(la)out+=two(la)+' Lakh ';if(th)out+=two(th)+' Thousand ';if(n)out+=three(n);
 return out.trim()+' Rupees Only';}

var KEY='mp_desk_v1', S, USER=null;
function seed(){
 var fy=curFY();
 var funds=['General Donation','Shri Vardhman Gaushala','Knowledge City','Karuna Samvardhan Nidhi','Chaityavriksha Udhyan'].map(function(n){return {id:uid(),name:n};});
 var nm=[['Mahavir Shah','Ahmedabad'],['Rishabh Doshi','Mumbai'],['Vardhman Sanghvi','Surat'],['Padmavati Sheth','Rajkot'],['Jinendra Mehta','Pune'],['Shreyans Kothari','Ahmedabad'],['Hemchandra Jhaveri','Palitana'],['Chandanbala Parekh','Mumbai'],['Abhay Bafna','Pune'],['Nemichand Lodha','Surat'],['Anand Vora','Gandhinagar'],['Hiral Gandhi','Ahmedabad'],['Devansh Munot','Mumbai'],['Khushali Surana','Rajkot'],['Parshva Bhansali','Surat']];
 var donors=nm.map(function(x,i){return {id:uid(),name:x[0],city:x[1],pan:('ABCPJ'+(1000+i*37)+'K').slice(0,10).toUpperCase(),phone:'+91 9'+(800000000+i*111111),email:x[0].toLowerCase().split(' ')[0]+'@example.com'};});
 var modes=['UPI','Cash','Cheque','Bank Transfer','Card','Online'];
 var dons=[];var seq=0;
 for(var i=0;i<12;i++){
  var dn=donors[i%donors.length];var amt=[1100,2100,5100,11000,18000,21000,500,2500][i%8];
  var md=modes[i%modes.length];var fd=funds[i%funds.length];
  seq++;
  var dt=new Date();dt.setDate(dt.getDate()-i*3);
  dons.push({id:uid(),receiptNo:'MVP/'+fy+'/'+String(seq).padStart(4,'0'),date:dt.toISOString().slice(0,10),donorId:dn.id,donorName:dn.name,pan:dn.pan,anonymous:false,amount:amt,mode:md,fundId:fd.id,fund:fd.name,note:'',by:'Seed'});
 }
 // one anonymous hundi sample
 seq++;dons.push({id:uid(),receiptNo:'MVP/'+fy+'/'+String(seq).padStart(4,'0'),date:today(),donorId:null,donorName:'Anonymous (Hundi)',pan:'',anonymous:true,amount:8500,mode:'Cash',fundId:funds[0].id,fund:funds[0].name,note:'Daan box collection',by:'Seed'});
 return {funds:funds,donors:donors,donations:dons,seq:seq,settings:{trust:'Shree Mahavirpuram',regOffice:'7 Gokul Complex, Opp. Nagri Eye Hospital, Ellisbridge, Ahmedabad 380007',project:'FP No. 47/1 & 2, Koba-Raisan Rd., Near Raheja Mindspace, Off PDPU Rd., Juna Koba, Gandhinagar 382421, Gujarat, India',pan:'AAETS1715Q',reg80g:'AAETS1715QF20215',trustReg:'E/12724 AMD dt. 03 Dec 1999',panThreshold:2000,fy:fy}};
}
function load(){try{var r=localStorage.getItem(KEY);if(r)return JSON.parse(r);}catch(e){}return seed();}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
S=load();

function nextReceipt(){S.seq++;return 'MVP/'+S.settings.fy+'/'+String(S.seq).padStart(4,'0');}
function fundName(id){var f=S.funds.filter(function(x){return x.id===id;})[0];return f?f.name:'General Donation';}
function addDonation(d){d.id=uid();d.receiptNo=nextReceipt();S.donations.unshift(d);save();}
function fyDonations(){return S.donations;}
function total(){return fyDonations().reduce(function(a,b){return a+Number(b.amount);},0);}
function anonTotal(){return fyDonations().filter(function(d){return d.anonymous;}).reduce(function(a,b){return a+Number(b.amount);},0);}
function anonThreshold(){return Math.max(100000,0.05*total());}

/* ---------- receipt ---------- */
window.showReceipt=function(id){
 var d=S.donations.filter(function(x){return x.id===id;})[0];if(!d)return;
 var st=S.settings; var donor=S.donors.filter(function(x){return x.id===d.donorId;})[0]||{};
 var addr=donor.address||donor.city||'';
 var regOffice=st.regOffice||st.addr||''; var project=st.project||'';
 var cashWarn=(d.mode==='Cash'&&d.amount>2000)?'<div class="note" style="color:#b5862a">Note: Cash donations above &#8377;2,000 are not eligible for deduction under Section 80G.</div>':'';
 var verifyUrl='https://varunkarasia.github.io/mahavirpuram/verify.html?r='+encodeURIComponent(d.receiptNo)+'&a='+d.amount+'&d='+encodeURIComponent(d.date)+'&n='+encodeURIComponent(d.donorName);
 $('#receiptBody').innerHTML=
 '<div class="rh">'+
   '<div style="display:flex;gap:14px;align-items:center">'+
     '<img src="https://www.mahavirpuram.com/images/logo.png" alt="Mahavirpuram" style="height:56px">'+
     '<div><h2 style="margin:0">'+esc(st.trust)+'</h2>'+
     '<div style="font-size:.68rem;color:#555;max-width:330px;line-height:1.45">'+(regOffice?('<b>Reg. Office:</b> '+esc(regOffice)):'')+(project?('<br><b>Project:</b> '+esc(project)):'')+'</div></div>'+
   '</div>'+
   '<div class="reg">'+(st.trustReg?('Trust Reg.: '+esc(st.trustReg)+'<br>'):'')+'PAN: '+esc(st.pan)+'<br>80G: '+esc(st.reg80g)+'</div>'+
 '</div>'+
 '<div class="rtitle">DONATION RECEIPT &middot; SECTION 80G</div>'+
 '<div class="rrow"><span>Receipt No: <b>'+esc(d.receiptNo)+'</b></span><span>Date: <b>'+esc(d.date)+'</b></span></div>'+
 '<div class="rbox">'+
   '<div class="rrow"><span>Received with thanks from</span><b>'+esc(d.donorName)+'</b></div>'+
   (d.pan?'<div class="rrow"><span>PAN of donor</span><b>'+esc(d.pan)+'</b></div>':'')+
   (addr?'<div class="rrow"><span>Address</span><b style="max-width:300px;text-align:right">'+esc(addr)+'</b></div>':'')+
 '</div>'+
 '<table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:.85rem">'+
   '<thead><tr>'+
     '<th style="background:#f5e8c6;text-align:left;padding:7px 10px;color:#6E1512">Description / Fund</th>'+
     '<th style="background:#f5e8c6;text-align:left;padding:7px 10px;color:#6E1512">Mode</th>'+
     '<th style="background:#f5e8c6;text-align:right;padding:7px 10px;color:#6E1512">Amount</th>'+
   '</tr></thead>'+
   '<tbody><tr>'+
     '<td style="padding:8px 10px;border-bottom:1px solid #eee">'+esc(d.fund||fundName(d.fundId))+(d.note?(' <span style="color:#888;font-size:.78rem">('+esc(d.note)+')</span>'):'')+'</td>'+
     '<td style="padding:8px 10px;border-bottom:1px solid #eee">'+esc(d.mode)+'</td>'+
     '<td style="padding:8px 10px;border-bottom:1px solid #eee;text-align:right" class="amt">'+fmt(d.amount)+'</td>'+
   '</tr></tbody>'+
 '</table>'+
 '<div class="words">Amount in words: '+inWords(d.amount)+'</div>'+
 '<div class="note" style="margin-top:10px">Cheque subject to realisation. This receipt must be produced when demanded. Subject to Ahmedabad jurisdiction.</div>'+
 cashWarn+
 '<div class="sign" style="align-items:flex-end;margin-top:22px">'+
   '<div style="text-align:center"><canvas id="qrCanvas"></canvas><div style="font-size:.64rem;color:#666;margin-top:3px">Scan to verify &middot; '+esc(d.receiptNo)+'</div></div>'+
   '<div style="text-align:center"><div style="height:42px"></div><div class="ln">For '+esc(st.trust)+' &middot; Authorised Signatory</div><div style="font-size:.64rem;color:#888;margin-top:3px">Computer-generated receipt</div></div>'+
 '</div>';
 try{ if(window.QRious){ new QRious({element:document.getElementById('qrCanvas'),value:verifyUrl,size:116,foreground:'#6E1512',background:'#ffffff',level:'M'}); } }catch(e){}
 $('#receiptModal').classList.add('open');
};

/* ---------- views ---------- */
function setActive(v){var ls=document.querySelectorAll('.navlink');for(var i=0;i<ls.length;i++)ls[i].classList.toggle('active',ls[i].dataset.view===v);}
function top(t,extra){return '<div class="toprow"><div><h2>'+t+'</h2><div class="who">Signed in: '+esc(USER.name)+' &middot; '+esc(USER.role)+'</div></div><div>'+(extra||'')+'</div></div>';}
var PROTO='<div class="banner">⚠ Prototype — General Donor List (Till 2026), stored in this browser. Replace registration numbers in Settings, connect a real payment gateway &amp; backend, and have a CA validate before live use. This tool will not split a donation across other donors&rsquo; names (non-compliant under Indian tax/trust norms).</div>';

function nav(v){setActive(v);(R[v]||R.dashboard)();window.scrollTo(0,0);}
var R={};

R.dashboard=function(){
 var t=total(),aT=anonTotal(),thr=anonThreshold();
 var online=fyDonations().filter(function(d){return d.mode==='Online'||d.mode==='Card'||d.mode==='UPI';}).reduce(function(a,b){return a+ +b.amount;},0);
 var cash=fyDonations().filter(function(d){return d.mode==='Cash';}).reduce(function(a,b){return a+ +b.amount;},0);
 var byFund={};fyDonations().forEach(function(d){var n=d.fund||fundName(d.fundId);byFund[n]=(byFund[n]||0)+ +d.amount;});
 var maxF=Math.max.apply(null,Object.keys(byFund).map(function(k){return byFund[k];}).concat([1]));
 var bars=Object.keys(byFund).map(function(k){return '<div style="margin-bottom:10px"><div class="row" style="justify-content:space-between"><span class="small">'+esc(k)+'</span><span class="small amt">'+fmt(byFund[k])+'</span></div><div class="bar"><i style="width:'+(byFund[k]/maxF*100)+'%"></i></div></div>';}).join('');
 var pct=Math.min(100,aT/thr*100);
 var rec=fyDonations().slice(0,8).map(function(d){return '<tr><td>'+esc(d.date)+'</td><td>'+esc(d.donorName)+(d.anonymous?' <span class="tag anon">anon</span>':'')+'</td><td>'+esc(d.fund||fundName(d.fundId))+'</td><td><span class="tag '+(d.mode==='Cash'?'cash':(d.mode==='Online'||d.mode==='UPI'||d.mode==='Card'?'online':''))+'">'+esc(d.mode)+'</span></td><td class="amt right">'+fmt(d.amount)+'</td><td class="right"><button class="btn ghost sm" data-act="receipt" data-id="'+d.id+'">Receipt</button></td></tr>';}).join('');
 main.innerHTML=top('Dashboard','<button class="btn" data-go="new">+ New Donation</button>')+PROTO+
  '<div class="cards">'+
   '<div class="kpi"><div class="lbl">Total receipts ('+S.settings.fy+')</div><div class="val">'+fmt(t)+'</div><div class="sub">'+fyDonations().length+' donations</div></div>'+
   '<div class="kpi"><div class="lbl">Donors on file</div><div class="val">'+S.donors.length+'</div><div class="sub">master list</div></div>'+
   '<div class="kpi"><div class="lbl">Online / Digital</div><div class="val">'+fmt(online)+'</div><div class="sub">UPI · Card · Online</div></div>'+
   '<div class="kpi"><div class="lbl">Cash received</div><div class="val">'+fmt(cash)+'</div><div class="sub">watch 80G &amp; 115BBC</div></div>'+
  '</div>'+
  '<div class="grid2">'+
   '<div class="panel"><h3>Collections by fund</h3>'+bars+'</div>'+
   '<div class="panel"><h3>Anonymous donations · Section 115BBC</h3><div class="small muted" style="margin-bottom:8px">Anonymous donations above the higher of ₹1,00,000 or 5% of total donations are taxed at 30%. Keep named, verifiable donor records wherever possible.</div><div class="row" style="justify-content:space-between"><span class="small">Anonymous: <b>'+fmt(aT)+'</b></span><span class="small">Threshold: <b>'+fmt(thr)+'</b></span></div><div class="bar" style="height:12px;margin-top:6px"><i style="width:'+pct+'%;background:'+(aT>thr?'#c0392b':'linear-gradient(90deg,var(--gold),var(--red))')+'"></i></div>'+(aT>thr?'<div class="warn">Anonymous donations exceed the 115BBC threshold — excess may be taxable at 30%. Consult your CA.</div>':'<div class="ok small" style="margin-top:8px">Within threshold.</div>')+'</div>'+
  '</div>'+
  '<div class="panel"><h3>Recent donations</h3><table><thead><tr><th>Date</th><th>Donor</th><th>Fund</th><th>Mode</th><th class="right">Amount</th><th></th></tr></thead><tbody>'+rec+'</tbody></table></div>';
};

function fundOptions(sel){return S.funds.map(function(f){return '<option'+(f.name===sel?' selected':'')+'>'+esc(f.name)+'</option>';}).join('');}
var MODES=['UPI','Cash','Cheque','Bank Transfer','Card','Online'];
function modeOptions(sel){return MODES.map(function(m){return '<option'+(m===sel?' selected':'')+'>'+m+'</option>';}).join('');}

R.new=function(){
 main.innerHTML=top('New Donation')+PROTO+
 '<div class="panel" style="max-width:760px">'+
 '<div class="row" style="margin-bottom:14px"><label style="margin:0"><input type="checkbox" id="anon" style="width:auto;margin-right:6px">This is an anonymous / hundi donation</label></div>'+
 '<div class="grid2">'+
  '<div><label>Donor name</label><input id="dName" list="donorList" placeholder="Start typing…"><datalist id="donorList">'+S.donors.map(function(d){return '<option value="'+esc(d.name)+'">';}).join('')+'</datalist></div>'+
  '<div><label>Donor PAN (for 80G / Form 10BD)</label><input id="dPan" placeholder="ABCDE1234F" maxlength="10"></div>'+
  '<div><label>Amount (₹)</label><input id="dAmt" type="number" min="1" placeholder="0"></div>'+
  '<div><label>Date</label><input id="dDate" type="date" value="'+today()+'"></div>'+
  '<div><label>Mode</label><select id="dMode">'+modeOptions('UPI')+'</select></div>'+
  '<div><label>Fund / Purpose</label><select id="dFund">'+fundOptions('General Donation')+'</select></div>'+
 '</div>'+
 '<div style="margin-top:12px"><label>Note (optional)</label><input id="dNote" placeholder="Reference, cheque no, etc."></div>'+
 '<div id="dWarn"></div>'+
 '<div class="row" style="margin-top:16px"><button class="btn" id="saveDon">Save &amp; generate receipt</button><button class="btn ghost" id="clearDon">Clear</button></div>'+
 '</div>';
 function chkWarn(){var amt=+$('#dAmt').value, md=$('#dMode').value, w=$('#dWarn');
  if(md==='Cash'&&amt>2000){w.innerHTML='<div class="warn">Cash donation above ₹2,000 — not eligible for 80G deduction (Income Tax Act). Consider UPI/cheque/bank for an 80G-eligible receipt.</div>';}else{w.innerHTML='';}}
 $('#dAmt').addEventListener('input',chkWarn);$('#dMode').addEventListener('change',chkWarn);
 $('#anon').addEventListener('change',function(){var a=this.checked;$('#dName').disabled=a;$('#dPan').disabled=a;$('#dName').value=a?'':$('#dName').value;});
 $('#dName').addEventListener('change',function(){var d=S.donors.filter(function(x){return x.name.toLowerCase()===this.value.toLowerCase();}.bind(this))[0];if(d)$('#dPan').value=d.pan||'';}.bind(null));
 $('#dName').addEventListener('blur',function(){var v=this.value;var d=S.donors.filter(function(x){return x.name.toLowerCase()===v.toLowerCase();})[0];if(d&&!$('#dPan').value)$('#dPan').value=d.pan||'';});
 $('#clearDon').addEventListener('click',function(){R.new();});
 $('#saveDon').addEventListener('click',function(){
  var anon=$('#anon').checked;var name=$('#dName').value.trim();var amt=+$('#dAmt').value;
  if(!amt||amt<=0){toast('Enter a valid amount');return;}
  if(!anon&&!name){toast('Enter donor name or mark anonymous');return;}
  var fund=$('#dFund').value;var pan=anon?'':$('#dPan').value.trim().toUpperCase();
  var donorId=null;
  if(!anon){var ex=S.donors.filter(function(x){return x.name.toLowerCase()===name.toLowerCase();})[0];
   if(ex){donorId=ex.id;if(pan&&!ex.pan)ex.pan=pan;}else{var nd={id:uid(),name:name,pan:pan,city:'',phone:'',email:''};S.donors.push(nd);donorId=nd.id;}}
  addDonation({date:$('#dDate').value||today(),donorId:donorId,donorName:anon?'Anonymous (Hundi)':name,pan:pan,anonymous:anon,amount:amt,mode:$('#dMode').value,fundId:S.funds.filter(function(f){return f.name===fund;})[0].id,fund:fund,note:$('#dNote').value,by:USER.name});
  save();toast('Donation saved · receipt generated');showReceipt(S.donations[0].id);R.new();
 });
};

R.bulk=function(){
 main.innerHTML=top('Bulk Entry')+PROTO+
 '<div class="tabs"><button data-bt="hundi" class="active">Hundi / Anonymous</button><button data-bt="csv">CSV import (real donors)</button><button data-bt="grid">Quick multi-row</button></div><div id="bulkBody"></div>';
 var tabs=main.querySelectorAll('.tabs button');
 tabs.forEach(function(b){b.addEventListener('click',function(){tabs.forEach(function(x){x.classList.remove('active');});b.classList.add('active');bt(b.dataset.bt);});});
 function bt(which){
  var bb=$('#bulkBody');
  if(which==='hundi'){
   bb.innerHTML='<div class="panel" style="max-width:560px"><h3>Record a hundi / anonymous collection</h3><div class="small muted" style="margin-bottom:12px">Recorded as a single <b>anonymous</b> entry (not split into named receipts), and tracked against the Section 115BBC threshold.</div><div class="grid2"><div><label>Amount (₹)</label><input id="hAmt" type="number" min="1"></div><div><label>Date</label><input id="hDate" type="date" value="'+today()+'"></div><div><label>Fund</label><select id="hFund">'+fundOptions('General Donation')+'</select></div><div><label>Note</label><input id="hNote" placeholder="Daan box / event"></div></div><div class="row" style="margin-top:14px"><button class="btn" id="hSave">Save anonymous entry</button></div></div>'
    +'<div class="panel" style="max-width:560px"><h3>Upload anonymous collections (bulk)</h3><div class="small muted" style="margin-bottom:10px">For many hundi / daan-box collections at once &mdash; e.g. one row per box, event or day. Columns: <code>date,amount,fund,note</code>. Every row is recorded as <b>anonymous</b> (no donor name, no named 80G receipt) and counts toward the Section 115BBC threshold.</div><div class="row" style="gap:10px;margin-bottom:10px;flex-wrap:wrap"><input type="file" id="hFile" accept=".csv" style="max-width:300px"><button class="btn ghost sm" id="hTmpl">Download template</button></div><div id="hPrev"></div></div>';
   $('#hSave').addEventListener('click',function(){var amt=+$('#hAmt').value;if(!amt){toast('Enter amount');return;}var fund=$('#hFund').value;addDonation({date:$('#hDate').value||today(),donorId:null,donorName:'Anonymous (Hundi)',pan:'',anonymous:true,amount:amt,mode:'Cash',fundId:S.funds.filter(function(f){return f.name===fund;})[0].id,fund:fund,note:$('#hNote').value,by:USER.name});toast('Anonymous collection recorded');bt('hundi');});
   $('#hTmpl').addEventListener('click',function(){download('anonymous-collections-template.csv','date,amount,fund,note\n'+today()+',8500,General Donation,Main hundi box\n'+today()+',3200,General Donation,Temple gate daan box\n'+today()+',15000,General Donation,Paryushan event collection\n');});
   $('#hFile').addEventListener('change',function(e){var f=e.target.files[0];if(!f)return;var rd=new FileReader();rd.onload=function(){parseHundiCsv(rd.result);};rd.readAsText(f);});
  } else if(which==='csv'){
   bb.innerHTML='<div class="panel"><h3>Import genuine donors from CSV</h3><div class="small muted" style="margin-bottom:10px">Columns: <code>name,pan,amount,mode,fund,date</code>. Each row creates one real receipt tied to a real donor.</div><input type="file" id="csvFile" accept=".csv" style="max-width:340px"><div id="csvPrev"></div></div>';
   $('#csvFile').addEventListener('change',function(e){var f=e.target.files[0];if(!f)return;var rd=new FileReader();rd.onload=function(){parseCsv(rd.result);};rd.readAsText(f);});
  } else {
   bb.innerHTML='<div class="panel"><h3>Quick multi-row entry</h3><div class="small muted" style="margin-bottom:10px">Type several separate real donations; each becomes its own receipt.</div><table id="gridT"><thead><tr><th>Donor name</th><th>PAN</th><th>Amount</th><th>Mode</th><th>Fund</th></tr></thead><tbody></tbody></table><div class="row" style="margin-top:12px"><button class="btn ghost sm" id="gAdd">+ Add row</button><button class="btn" id="gSave">Save all</button></div></div>';
   var tb=$('#gridT tbody');
   function addRow(){var tr=document.createElement('tr');tr.innerHTML='<td><input class="gN"></td><td><input class="gP" maxlength="10"></td><td><input class="gA" type="number" min="0"></td><td><select class="gM">'+modeOptions('UPI')+'</select></td><td><select class="gF">'+fundOptions('General Donation')+'</select></td>';tb.appendChild(tr);}
   for(var i=0;i<4;i++)addRow();
   $('#gAdd').addEventListener('click',addRow);
   $('#gSave').addEventListener('click',function(){var rows=tb.querySelectorAll('tr');var c=0;rows.forEach(function(r){var n=r.querySelector('.gN').value.trim();var amt=+r.querySelector('.gA').value;if(!n||!amt)return;var pan=r.querySelector('.gP').value.trim().toUpperCase();var fund=r.querySelector('.gF').value;var ex=S.donors.filter(function(x){return x.name.toLowerCase()===n.toLowerCase();})[0];var did;if(ex){did=ex.id;}else{var nd={id:uid(),name:n,pan:pan,city:'',phone:'',email:''};S.donors.push(nd);did=nd.id;}addDonation({date:today(),donorId:did,donorName:n,pan:pan,anonymous:false,amount:amt,mode:r.querySelector('.gM').value,fundId:S.funds.filter(function(f){return f.name===fund;})[0].id,fund:fund,note:'',by:USER.name});c++;});save();toast(c+' donations saved');bt('grid');});
  }
 }
 function parseHundiCsv(text){
  var lines=text.trim().split(/\r?\n/);if(lines.length<2){toast('Empty file');return;}
  var hd=lines[0].split(',').map(function(s){return s.trim().toLowerCase();});
  var ix=function(k){return hd.indexOf(k);};
  var rows=lines.slice(1).map(function(l){var c=l.split(',');return {date:(c[ix('date')]||today()).trim(),amount:+(c[ix('amount')]||0),fund:(c[ix('fund')]||'General Donation').trim(),note:(c[ix('note')]||'').trim()};}).filter(function(r){return r.amount>0;});
  if(!rows.length){toast('No valid rows — each row needs an amount');return;}
  var tot=rows.reduce(function(a,b){return a+b.amount;},0);
  $('#hPrev').innerHTML='<div style="margin-top:14px"><div class="small muted">'+rows.length+' anonymous collections · total <b>'+fmt(tot)+'</b></div><table><thead><tr><th>Date</th><th>Amount</th><th>Fund</th><th>Note</th></tr></thead><tbody>'+rows.slice(0,12).map(function(r){return '<tr><td>'+esc(r.date)+'</td><td class="amt">'+fmt(r.amount)+'</td><td>'+esc(r.fund)+'</td><td>'+esc(r.note)+'</td></tr>';}).join('')+'</tbody></table>'+(rows.length>12?'<div class="small muted">…and '+(rows.length-12)+' more</div>':'')+'<div class="warn" style="margin-top:10px">Saved as <b>anonymous</b> entries — no donor names, no named 80G receipts. Added to the Section 115BBC anonymous total.</div><div class="row" style="margin-top:12px"><button class="btn" id="hImport">Import '+rows.length+' anonymous collections</button></div></div>';
  $('#hImport').addEventListener('click',function(){rows.forEach(function(r){var fn=S.funds.filter(function(f){return f.name.toLowerCase()===r.fund.toLowerCase();})[0]||S.funds[0];addDonation({date:r.date,donorId:null,donorName:'Anonymous (Hundi)',pan:'',anonymous:true,amount:r.amount,mode:'Cash',fundId:fn.id,fund:fn.name,note:r.note||'Bulk hundi upload',by:USER.name});});save();toast(rows.length+' anonymous collections imported');nav('register');});
 }
 function parseCsv(text){
  var lines=text.trim().split(/\r?\n/);if(lines.length<2){toast('Empty CSV');return;}
  var hd=lines[0].split(',').map(function(s){return s.trim().toLowerCase();});
  var ix=function(k){return hd.indexOf(k);};
  var rows=lines.slice(1).map(function(l){var c=l.split(',');return {name:(c[ix('name')]||'').trim(),pan:(c[ix('pan')]||'').trim(),amount:+(c[ix('amount')]||0),mode:(c[ix('mode')]||'UPI').trim(),fund:(c[ix('fund')]||'General Donation').trim(),date:(c[ix('date')]||today()).trim()};}).filter(function(r){return r.name&&r.amount;});
  $('#csvPrev').innerHTML='<div style="margin-top:14px"><div class="small muted">'+rows.length+' valid rows</div><table><thead><tr><th>Name</th><th>PAN</th><th>Amount</th><th>Mode</th><th>Fund</th></tr></thead><tbody>'+rows.slice(0,12).map(function(r){return '<tr><td>'+esc(r.name)+'</td><td>'+esc(r.pan)+'</td><td class="amt">'+fmt(r.amount)+'</td><td>'+esc(r.mode)+'</td><td>'+esc(r.fund)+'</td></tr>';}).join('')+'</tbody></table>'+(rows.length>12?'<div class="small muted">…and '+(rows.length-12)+' more</div>':'')+'<div class="row" style="margin-top:12px"><button class="btn" id="csvImport">Import '+rows.length+' donations</button></div></div>';
  $('#csvImport').addEventListener('click',function(){rows.forEach(function(r){var ex=S.donors.filter(function(x){return x.name.toLowerCase()===r.name.toLowerCase();})[0];var did;if(ex){did=ex.id;if(r.pan&&!ex.pan)ex.pan=r.pan;}else{var nd={id:uid(),name:r.name,pan:r.pan,city:'',phone:'',email:''};S.donors.push(nd);did=nd.id;}var fn=S.funds.filter(function(f){return f.name.toLowerCase()===r.fund.toLowerCase();})[0]||S.funds[0];addDonation({date:r.date,donorId:did,donorName:r.name,pan:r.pan,anonymous:false,amount:r.amount,mode:r.mode,fundId:fn.id,fund:fn.name,note:'CSV import',by:USER.name});});save();toast(rows.length+' donations imported');nav('register');});
 }
 bt('hundi');
};

R.register=function(){
 main.innerHTML=top('Donations','<button class="btn ghost" id="expReg">Export CSV</button>')+
 '<div class="panel"><div class="row" style="margin-bottom:14px"><div><label>From</label><input type="date" id="fFrom"></div><div><label>To</label><input type="date" id="fTo"></div><div><label>Fund</label><select id="fFund"><option value="">All</option>'+fundOptions('')+'</select></div><div><label>Mode</label><select id="fMode"><option value="">All</option>'+modeOptions('')+'</select></div><div><label>Type</label><select id="fType"><option value="">All</option><option value="named">Named</option><option value="anon">Anonymous</option></select></div></div><div id="regBody"></div></div>';
 function rows(){
  var f=$('#fFrom').value,t=$('#fTo').value,fu=$('#fFund').value,mo=$('#fMode').value,ty=$('#fType').value;
  return S.donations.filter(function(d){if(f&&d.date<f)return false;if(t&&d.date>t)return false;if(fu&&(d.fund||fundName(d.fundId))!==fu)return false;if(mo&&d.mode!==mo)return false;if(ty==='anon'&&!d.anonymous)return false;if(ty==='named'&&d.anonymous)return false;return true;});
 }
 function draw(){var rs=rows();var sum=rs.reduce(function(a,b){return a+ +b.amount;},0);
  $('#regBody').innerHTML='<div class="small muted" style="margin-bottom:8px">'+rs.length+' donations · Total '+fmt(sum)+'</div><table><thead><tr><th>Receipt</th><th>Date</th><th>Donor</th><th>PAN</th><th>Fund</th><th>Mode</th><th class="right">Amount</th><th></th></tr></thead><tbody>'+rs.map(function(d){return '<tr><td class="small">'+esc(d.receiptNo)+'</td><td>'+esc(d.date)+'</td><td>'+esc(d.donorName)+(d.anonymous?' <span class="tag anon">anon</span>':'')+'</td><td class="small">'+esc(d.pan||'—')+'</td><td>'+esc(d.fund||fundName(d.fundId))+'</td><td>'+esc(d.mode)+'</td><td class="amt right">'+fmt(d.amount)+'</td><td class="right"><button class="btn ghost sm" data-act="receipt" data-id="'+d.id+'">Receipt</button></td></tr>';}).join('')+'</tbody></table>';}
 ['fFrom','fTo','fFund','fMode','fType'].forEach(function(id){$('#'+id).addEventListener('change',draw);});
 $('#expReg').addEventListener('click',function(){var rs=rows();var csv='Receipt,Date,Donor,PAN,Fund,Mode,Amount,Anonymous\n'+rs.map(function(d){return [d.receiptNo,d.date,'"'+d.donorName+'"',d.pan,'"'+(d.fund||fundName(d.fundId))+'"',d.mode,d.amount,d.anonymous?'Yes':'No'].join(',');}).join('\n');download('donation-register.csv',csv);});
 draw();
};

R.donors=function(){
 var totalsBy={};S.donations.forEach(function(d){if(d.donorId)totalsBy[d.donorId]=(totalsBy[d.donorId]||0)+ +d.amount;});
 main.innerHTML=top('General Donor List · Till 2026')+
 '<div class="panel" style="max-width:760px"><h3>Add donor</h3><div class="grid3"><input id="ndN" placeholder="Name"><input id="ndP" placeholder="PAN" maxlength="10"><input id="ndC" placeholder="City"></div><div class="grid2" style="margin-top:10px"><input id="ndPh" placeholder="Phone"><input id="ndE" placeholder="Email"></div><div class="row" style="margin-top:12px"><button class="btn" id="addDonor">Add donor</button></div></div>'+
 '<div class="panel"><h3>General Donor List — Till 2026 ('+S.donors.length+')</h3><table><thead><tr><th>Name</th><th>PAN</th><th>City</th><th>Phone</th><th class="right">Total given</th></tr></thead><tbody>'+S.donors.map(function(d){return '<tr><td>'+esc(d.name)+'</td><td class="small">'+esc(d.pan||'—')+'</td><td>'+esc(d.city||'—')+'</td><td class="small">'+esc(d.phone||'—')+'</td><td class="amt right">'+fmt(totalsBy[d.id]||0)+'</td></tr>';}).join('')+'</tbody></table></div>';
 $('#addDonor').addEventListener('click',function(){var n=$('#ndN').value.trim();if(!n){toast('Enter name');return;}S.donors.push({id:uid(),name:n,pan:$('#ndP').value.trim().toUpperCase(),city:$('#ndC').value.trim(),phone:$('#ndPh').value.trim(),email:$('#ndE').value.trim()});save();toast('Donor added');R.donors();});
};

R.funds=function(){
 var byFund={};S.donations.forEach(function(d){var n=d.fund||fundName(d.fundId);byFund[n]=(byFund[n]||0)+ +d.amount;});
 main.innerHTML=top('Funds / Purposes')+
 '<div class="panel" style="max-width:520px"><h3>Add fund</h3><div class="row"><input id="nfN" placeholder="Fund name"><button class="btn" id="addFund">Add</button></div></div>'+
 '<div class="panel"><table><thead><tr><th>Fund</th><th class="right">Collected</th></tr></thead><tbody>'+S.funds.map(function(f){return '<tr><td>'+esc(f.name)+'</td><td class="amt right">'+fmt(byFund[f.name]||0)+'</td></tr>';}).join('')+'</tbody></table></div>';
 $('#addFund').addEventListener('click',function(){var n=$('#nfN').value.trim();if(!n)return;S.funds.push({id:uid(),name:n});save();toast('Fund added');R.funds();});
};

R.online=function(){
 var thr=Number(S.settings.panThreshold!=null?S.settings.panThreshold:2000);
 var INDUS='https://induscollect.indusind.com/pay/index.php/easyPay/SHREE_MAHAVIR_PURAM/makePayment?mid=VlVZMVBKUFRMdzRlYXRZS0JwOHIwZz09&role_id=&emp_id=&cmp=UjdkRHhoTDZ6VE9NcVNqbDVYYXJ3dz09';
 main.innerHTML=top('Online Payments')+PROTO+
 '<div class="grid2"><div class="panel"><h3>Donor online payment</h3><div class="small muted" style="margin-bottom:10px">Demo of the donor-facing flow. In production this calls Razorpay/Cashfree with your live keys (server-side order + signature verification) and auto-creates the receipt on success.</div><div class="grid2"><div><label>Donor name <span style="color:#BE2A1E">*</span></label><input id="oN" placeholder="Name"></div><div><label id="oPlab">PAN (optional)</label><input id="oP" maxlength="10" placeholder="ABCDE1234F" style="text-transform:uppercase"></div><div><label>Amount (₹) <span style="color:#BE2A1E">*</span></label><input id="oA" type="number" min="1" value="1100"></div><div><label>Fund</label><select id="oF">'+fundOptions('General Donation')+'</select></div></div><div id="oMsg" class="small" style="margin-top:10px;min-height:18px"></div><div class="row" style="margin-top:10px"><button class="btn green" id="rzp">Pay with Razorpay (demo)</button><button class="btn ghost" id="indus">Pay via IndusInd</button></div></div>'+
 '<div class="panel"><h3>Recent online donations</h3><table><thead><tr><th>Date</th><th>Donor</th><th class="right">Amount</th><th></th></tr></thead><tbody id="onlineList"></tbody></table></div></div>';
 function panOk(p){return /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(p);}
 function setBtn(sel,on){var b=$(sel);if(!b)return;b.disabled=!on;b.style.opacity=on?'':'0.45';b.style.cursor=on?'':'not-allowed';}
 function validate(){
  var n=$('#oN').value.trim();var amt=+$('#oA').value;var p=$('#oP').value.trim().toUpperCase();
  var needPan=amt>=thr;
  $('#oPlab').innerHTML=needPan?'PAN <span style="color:#BE2A1E">* required above '+fmt(thr)+'</span>':'PAN (optional)';
  var ok=true,msg='',err=false;
  if(!n){ok=false;msg='Enter the donor name to continue.';err=true;}
  else if(!(amt>=1)){ok=false;msg='Enter a valid amount.';err=true;}
  else if(needPan&&!p){ok=false;msg='PAN is mandatory for donations of '+fmt(thr)+' or more.';err=true;}
  else if(needPan&&!panOk(p)){ok=false;msg='Enter a valid PAN, e.g. ABCDE1234F.';err=true;}
  else {msg=needPan?'PAN captured — required at this amount.':'Ready. PAN optional below '+fmt(thr)+'.';}
  var m=$('#oMsg');m.textContent=msg;m.style.color=err?'#BE2A1E':'#6E5C4D';
  setBtn('#rzp',ok);setBtn('#indus',ok);
  return ok;
 }
 function drawList(){$('#onlineList').innerHTML=S.donations.filter(function(d){return d.mode==='Online'||d.mode==='Card'||d.mode==='UPI';}).slice(0,8).map(function(d){return '<tr><td>'+esc(d.date)+'</td><td>'+esc(d.donorName)+'</td><td class="amt right">'+fmt(d.amount)+'</td><td class="right"><button class="btn ghost sm" data-act="receipt" data-id="'+d.id+'">Receipt</button></td></tr>';}).join('');}
 ['#oN','#oP','#oA'].forEach(function(s){$(s).addEventListener('input',validate);});
 $('#rzp').addEventListener('click',function(){if(!validate())return;var n=$('#oN').value.trim();var amt=+$('#oA').value;var fund=$('#oF').value;var pan=$('#oP').value.trim().toUpperCase();
  setTimeout(function(){var ex=S.donors.filter(function(x){return x.name.toLowerCase()===n.toLowerCase();})[0];var did;if(ex){did=ex.id;if(pan&&!ex.pan)ex.pan=pan;}else{var nd={id:uid(),name:n,pan:pan,city:'',phone:'',email:''};S.donors.push(nd);did=nd.id;}addDonation({date:today(),donorId:did,donorName:n,pan:pan,anonymous:false,amount:amt,mode:'Online',fundId:S.funds.filter(function(f){return f.name===fund;})[0].id,fund:fund,note:'Razorpay (demo) txn '+uid().toUpperCase(),by:'Online'});save();toast('Payment success (demo) · receipt generated');showReceipt(S.donations[0].id);drawList();},500);
 });
 $('#indus').addEventListener('click',function(){if(!validate())return;window.open(INDUS,'_blank','noopener');});
 drawList();validate();
};

R.reports=function(){
 var byFund={},byMode={},byMonth={};
 S.donations.forEach(function(d){var fn=d.fund||fundName(d.fundId);byFund[fn]=(byFund[fn]||0)+ +d.amount;byMode[d.mode]=(byMode[d.mode]||0)+ +d.amount;var m=d.date.slice(0,7);byMonth[m]=(byMonth[m]||0)+ +d.amount;});
 function tbl(o){return Object.keys(o).sort().map(function(k){return '<tr><td>'+esc(k)+'</td><td class="amt right">'+fmt(o[k])+'</td></tr>';}).join('');}
 var named=S.donations.filter(function(d){return !d.anonymous;});var withPan=named.filter(function(d){return d.pan;});
 main.innerHTML=top('Reports & Compliance')+PROTO+
 '<div class="grid3">'+
  '<div class="panel"><h3>By fund</h3><table><tbody>'+tbl(byFund)+'</tbody></table></div>'+
  '<div class="panel"><h3>By mode</h3><table><tbody>'+tbl(byMode)+'</tbody></table></div>'+
  '<div class="panel"><h3>By month</h3><table><tbody>'+tbl(byMonth)+'</tbody></table></div>'+
 '</div>'+
 '<div class="panel"><h3>Form 10BD — Statement of Donations</h3><div class="small muted" style="margin-bottom:10px">Trusts must file Form 10BD annually and issue Form 10BE certificates to donors. Export below includes named donations; rows missing PAN are flagged (PAN is required for most reportable donations).</div><div class="row"><button class="btn" id="exp10bd">Export 10BD data (CSV)</button><span class="small muted">'+named.length+' named donations · '+withPan.length+' with PAN · '+(named.length-withPan.length)+' missing PAN</span></div></div>'+
 '<div class="panel"><h3>Anonymous donations · 115BBC</h3><div class="row" style="justify-content:space-between"><span class="small">Anonymous total: <b>'+fmt(anonTotal())+'</b></span><span class="small">Threshold: <b>'+fmt(anonThreshold())+'</b></span></div>'+(anonTotal()>anonThreshold()?'<div class="warn">Above threshold — excess may be taxed at 30%.</div>':'<div class="ok small" style="margin-top:8px">Within threshold.</div>')+'</div>';
 $('#exp10bd').addEventListener('click',function(){var csv='DonorName,PAN,Address,DonationType,Mode,Amount,Date,ReceiptNo\n'+named.map(function(d){var dn=S.donors.filter(function(x){return x.id===d.donorId;})[0]||{};return ['"'+d.donorName+'"',d.pan||'MISSING','"'+(dn.city||'')+'"','Voluntary',d.mode,d.amount,d.date,d.receiptNo].join(',');}).join('\n');download('form-10BD-data.csv',csv);});
};

R.settings=function(){
 var s=S.settings;
 main.innerHTML=top('Settings')+
 '<div class="panel" style="max-width:720px"><h3>Trust details (printed on receipts)</h3><div style="display:grid;gap:12px">'+
 '<div><label>Trust name</label><input id="sTrust" value="'+esc(s.trust)+'"></div>'+
 '<div><label>Registered office</label><input id="sRO" value="'+esc(s.regOffice||s.addr||'')+'"></div>'+
 '<div><label>Project address</label><input id="sPR" value="'+esc(s.project||'')+'"></div>'+
 '<div class="grid2"><div><label>PAN</label><input id="sPan" value="'+esc(s.pan)+'"></div><div><label>Financial year</label><input id="sFy" value="'+esc(s.fy)+'"></div></div>'+
 '<div class="grid2"><div><label>80G registration</label><input id="s80" value="'+esc(s.reg80g)+'"></div><div><label>Trust registration</label><input id="sTR" value="'+esc(s.trustReg||'')+'"></div></div>'+
 '<div class="grid2"><div><label>PAN-mandatory threshold (₹)</label><input id="sThr" type="number" min="0" value="'+esc(String(s.panThreshold!=null?s.panThreshold:2000))+'"></div><div><label>&nbsp;</label><div class="small muted" style="padding-top:9px">Donors paying this amount or more online must enter a valid PAN before the pay buttons activate.</div></div></div>'+
 '</div><div class="row" style="margin-top:14px"><button class="btn" id="saveSet">Save settings</button></div>'+
 '<div class="banner" style="margin-top:16px">These details print on every receipt. For foreign donations a separate FCRA-registered account and reporting are required.</div></div>';
 $('#saveSet').addEventListener('click',function(){s.trust=$('#sTrust').value;s.regOffice=$('#sRO').value;s.project=$('#sPR').value;s.pan=$('#sPan').value;s.fy=$('#sFy').value;s.reg80g=$('#s80').value;s.trustReg=$('#sTR').value;s.panThreshold=+$('#sThr').value||0;save();toast('Settings saved');});
};
function download(name,content){var b=new Blob([content],{type:'text/csv'});var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;a.click();}

/* ---------- wiring ---------- */
document.querySelectorAll('.navlink').forEach(function(l){l.addEventListener('click',function(){nav(l.dataset.view);});});
main.addEventListener('click',function(e){var el=e.target.closest('[data-act],[data-go]');if(!el)return;if(el.dataset.act==='receipt')showReceipt(el.dataset.id);if(el.dataset.go)nav(el.dataset.go);});
$('#logoutBtn').addEventListener('click',function(){USER=null;document.getElementById('app').style.display='none';document.getElementById('login').style.display='grid';});
$('#resetBtn').addEventListener('click',function(){if(confirm('Reset to the General Donor List (Till 2026)?')){S=seed();save();nav('dashboard');toast('General Donor List reset');}});
$('#loginBtn').addEventListener('click',function(){
 var name=$('#liName').value.trim()||'Staff';var role=$('#liRole').value;
 USER={name:name,role:role};
 document.getElementById('login').style.display='none';
 document.getElementById('app').style.display='grid';
 $('#whoFoot').textContent=name+' · '+role;
 nav('dashboard');
});
})();
