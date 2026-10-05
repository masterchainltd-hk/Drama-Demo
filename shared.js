// Local demonstration store; never use this for production authentication.
window.BabarStore=(()=>{
const KEY='babar-demo-v1';
const sample=[['午夜之後與你約定','A Promise After Midnight','Шөнө дундын амлалт',48,'photo-1515886657613-9f3515b0c78f','浪漫愛情'],['她的華麗歸來','Her Return','Түүний эргэн ирэлт',62,'photo-1534528741775-53994a69daeb','復仇逆襲'],['秘密契約','The Secret Contract','Нууц гэрээ',56,'photo-1500648767791-00dcc994a43e','浪漫愛情'],['消失的那一夜','The Missing Night','Алга болсон шөнө',40,'photo-1483985988355-763728e1935b','懸疑反轉'],['再一次愛上你','Love, Once Again','Дахин хайрлая',36,'photo-1524504388940-b1c1722653e1','浪漫愛情'],['豪門的秘密','A Family of Secrets','Гэр бүлийн нууц',52,'photo-1519085360753-af0119f7cbe7','家庭故事']];
const initial={dramas:sample.map((a,i)=>({id:i+1,zh:a[0],en:a[1],mn:a[2],episodes:a[3],image:a[4],category:a[5],free:2,published:true,synopsis:'示範短劇簡介，正式文案將由編輯及蒙古語校對人員提供。'})),invites:[{id:1,email:'viewer@example.com',code:'BABAR2026',status:'可使用',expiry:'2026-11-05'}],prices:{month:12900,quarter:32900,year:119000,p1:2500,p2:6900,p3:14900,p4:29900,c1:300,c2:900,c3:2100,c4:4500,unlock:120,free:2,registration:'invite'},orders:[{id:'DEMO-1001',email:'viewer@example.com',product:'月費 VIP',amount:12900,status:'成功',time:'2026-10-05 10:30'},{id:'DEMO-1002',email:'sample@example.com',product:'示範金幣包',amount:6900,status:'成功',time:'2026-10-05 11:15'},{id:'DEMO-1003',email:'sample@example.com',product:'年費 VIP',amount:119000,status:'待付款',time:'2026-10-05 12:00'}],audit:[{time:'2026-10-05 09:00',text:'系統載入示範劇庫與價格',actor:'示範系統'}]};

function read(){try{return JSON.parse(localStorage.getItem(KEY))||structuredClone(initial)}catch{return structuredClone(initial)}}
function save(db){localStorage.setItem(KEY,JSON.stringify(db));window.dispatchEvent(new Event('babar-change'))}
function update(fn){const db=read();fn(db);save(db);return db}
if(!localStorage.getItem(KEY))save(initial);
return {read,save,update};})();
