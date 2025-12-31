const CHAPTERS = {
  day_so_gioi_han: "Dãy số & Giới hạn",
  gioi_han: "Giới hạn hàm số – Dạng vô định",
  lien_tuc: "Tính liên tục",
  dao_ham: "Đạo hàm",
  kha_vi_dao_ham: "Khả vi – Vi phân",
  dao_ham_cap_cao_lopital: "Đạo hàm cấp cao – Lopital",
  ung_dung_dao_ham: "Ứng dụng đạo hàm",
  taylor: "Taylor – Maclaurin",
  tich_phan: "Tích phân",
  chuoi: "Chuỗi số",
  fourier: "Chuỗi Fourier"
};




const DATA = {



  day_so_gioi_han:[
{q:"Điều kiện cần để dãy số hội tụ là:",options:["A.u_n tăng","B.u_n giảm","C.lim u_n=0","D.lim u_n tồn tại hữu hạn"],a:3},
{q:"Dãy số hội tụ thì:",options:["A.không bị chặn","B.bị chặn","C.luôn tăng","D.luôn giảm"],a:1},
{q:"Nếu u_n→a và v_n→b thì u_n+v_n→?",options:["A.a−b","B.ab","C.a+b","D.a/b"],a:2},
{q:"Nếu u_n→a thì ku_n→?",options:["A.ka","B.a/k","C.k+a","D.k−a"],a:0},
{q:"Nếu u_n→a≠0 thì 1/u_n→?",options:["A.0","B.∞","C.1/a","D.không tồn tại"],a:2},
{q:"Dãy u_n=1/n có giới hạn bằng:",options:["A.1","B.0","C.∞","D.không tồn tại"],a:1},
{q:"Dãy u_n=n có giới hạn:",options:["A.0","B.1","C.∞","D.không tồn tại"],a:2},
{q:"Dãy u_n=(-1)^n có tính chất:",options:["A.hội tụ","B.phân kỳ","C.hội tụ về 0","D.hội tụ về 1"],a:1},
{q:"Nếu u_n≤v_n và lim v_n=0 thì:",options:["A.u_n phân kỳ","B.u_n→0","C.u_n→∞","D.không kết luận"],a:1},
{q:"Nếu u_n tăng và bị chặn trên thì:",options:["A.phân kỳ","B.hội tụ","C.→∞","D.không kết luận"],a:1},
{q:"Nếu u_n giảm và bị chặn dưới thì:",options:["A.phân kỳ","B.hội tụ","C.→−∞","D.không kết luận"],a:1},
{q:"Dãy đơn điệu và bị chặn thì:",options:["A.phân kỳ","B.hội tụ","C.không giới hạn","D.luôn tăng"],a:1},
{q:"Nếu lim u_n=+∞ thì:",options:["A.u_n bị chặn","B.u_n hội tụ","C.u_n phân kỳ","D.u_n→0"],a:2},
{q:"Nếu u_n→a thì |u_n|→?",options:["A.|a|","B.a","C.0","D.∞"],a:0},
{q:"Dãy u_n=√n có giới hạn:",options:["A.0","B.1","C.∞","D.không tồn tại"],a:2},
{q:"Dãy u_n=(1+1/n)^n có giới hạn:",options:["A.1","B.e","C.0","D.∞"],a:1},
{q:"Nếu u_n→0 và v_n bị chặn thì u_nv_n→?",options:["A.0","B.1","C.∞","D.không tồn tại"],a:0},
{q:"Dãy u_n=a^n hội tụ khi:",options:["A.|a|≥1","B.a>1","C.|a|<1","D.a=1"],a:2},
{q:"Nếu u_n→a thì u_n^2→?",options:["A.a","B.a^2","C.|a|","D.0"],a:1},
{q:"Nếu u_n→0 thì √u_n→?",options:["A.0","B.1","C.∞","D.không tồn tại"],a:0}
],


lien_tuc:[
{q:"Hàm số f(x) liên tục tại x0 khi:",options:["A.f'(x0) tồn tại","B.lim f(x) tồn tại","C.lim f(x)=f(x0)","D.f(x0)≠0"],a:2},
{q:"Điều kiện để hàm liên tục tại x0 là:",options:["A.có đạo hàm","B.liên tục trái","C.liên tục phải","D.liên tục trái và phải"],a:3},
{q:"Nếu hàm khả vi tại x0 thì:",options:["A.gián đoạn","B.liên tục","C.không xác định","D.không có giới hạn"],a:1},
{q:"Hàm số gián đoạn tại x0 khi:",options:["A.lim f(x) không tồn tại","B.lim f(x)≠f(x0)","C.f(x0) không tồn tại","D.tất cả các ý"],a:3},
{q:"Hàm số liên tục trên (a,b) khi:",options:["A.liên tục tại mọi điểm","B.có đạo hàm","C.bị chặn","D.đơn điệu"],a:0},
{q:"Nếu f và g liên tục tại x0 thì f+g:",options:["A.gián đoạn","B.liên tục","C.không xác định","D.chỉ liên tục phải"],a:1},
{q:"Nếu f liên tục tại x0 thì |f|:",options:["A.không liên tục","B.liên tục","C.chỉ liên tục phải","D.gián đoạn"],a:1},
{q:"Nếu f liên tục tại x0 và f(x0)≠0 thì 1/f:",options:["A.không liên tục","B.liên tục","C.không xác định","D.gián đoạn"],a:1},
{q:"Nếu f liên tục tại x0 và g liên tục tại f(x0) thì g∘f:",options:["A.không liên tục","B.liên tục","C.gián đoạn","D.không xác định"],a:1},
{q:"Hàm đa thức có tính chất:",options:["A.gián đoạn","B.liên tục từng điểm","C.liên tục trên ℝ","D.không liên tục tại 0"],a:2},
{q:"Hàm hữu tỉ liên tục trên:",options:["A.ℝ","B.ℝ trừ điểm làm mẫu 0","C.chỉ tại 0","D.không liên tục"],a:1},
{q:"Hàm mũ, logarit, lượng giác:",options:["A.gián đoạn","B.liên tục trên TXĐ","C.chỉ liên tục tại 0","D.không liên tục"],a:1},
{q:"Nếu f liên tục trên [a,b] thì:",options:["A.không bị chặn","B.có GTLN, GTNN","C.không đạt cực trị","D.phân kỳ"],a:1},
{q:"Định lý giá trị trung gian áp dụng cho:",options:["A.hàm khả vi","B.hàm liên tục","C.hàm đơn điệu","D.hàm chẵn"],a:1},
{q:"Nếu f(a)·f(b)<0 và f liên tục trên [a,b] thì:",options:["A.không nghiệm","B.có ít nhất một nghiệm","C.vô số nghiệm","D.không kết luận"],a:1},
{q:"Hàm liên tục trên đoạn đóng thì ảnh của đoạn là:",options:["A.tập rời rạc","B.tập đóng","C.khoảng","D.tập không bị chặn"],a:2},
{q:"Hàm liên tục trên đoạn đóng thì đạt:",options:["A.giá trị lớn nhất","B.giá trị nhỏ nhất","C.cả hai","D.không cái nào"],a:2},
{q:"Nếu f liên tục và đơn điệu trên [a,b] thì:",options:["A.không có nghịch đảo","B.có nghịch đảo liên tục","C.không liên tục","D.không xác định"],a:1},
{q:"Điểm gián đoạn có thể là:",options:["A.không xác định","B.gián đoạn loại 1","C.gián đoạn loại 2","D.tất cả các ý"],a:3},
{q:"Gián đoạn có thể khử được khi:",options:["A.lim không tồn tại","B.lim vô hạn","C.lim tồn tại hữu hạn","D.f không xác định"],a:2}
]
,

  // ================== 1. GIỚI HẠN – DẠNG VÔ ĐỊNH ==================
  gioi_han: [
    { q: "Giới hạn sin(x)/x khi x→0 bằng:", options: ["A. 0","B. 1","C. ∞","D. Không tồn tại"], a:1 },
    { q: "Giới hạn (1−cosx)/x² khi x→0 bằng:", options:["A. 0","B. 1","C. 1/2","D. ∞"], a:2 },
    { q: "Vô cùng bé tương đương của sin u(x) là:", options:["A. u(x)","B. u²(x)","C. cos u(x)","D. 1/u(x)"], a:0 },
    { q: "Vô cùng bé tương đương của tan u(x) là:", options:["A. u(x)","B. u²(x)","C. 1−u(x)","D. cos u(x)"], a:0 },
    { q: "Vô cùng bé tương đương của 1−cos u(x) là:", options:["A. u(x)","B. u²(x)","C. u²(x)/2","D. u(x)/2"], a:2 },
    { q: "Vô cùng bé tương đương của e^u − 1 là:", options:["A. u","B. u²","C. ln u","D. 1/u"], a:0 },
    { q: "Vô cùng bé tương đương của ln(1+u) là:", options:["A. u","B. u²","C. 1/u","D. ln u"], a:0 },
    { q: "Vô cùng bé tương đương của arctan u là:", options:["A. u","B. u²","C. tan u","D. cos u"], a:0 },
    { q: "Điều kiện tồn tại giới hạn tại x₀ là:", options:["A. Trái = phải","B. Có đạo hàm","C. Hàm bị chặn","D. Hàm liên tục"], a:0 },
    { q: "Quy tắc L'Hospital dùng cho dạng:", options:["A. 0/0, ∞/∞","B. 0·∞","C. ∞−∞","D. 1^∞"], a:0 },
    {q:"Giới hạn hàm số tại x0 tồn tại khi:",options:["A.có đạo hàm","B.liên tục","C.giới hạn trái = phải","D.bị chặn"],a:2},
{q:"lim(sin x)/x khi x→0 bằng:",options:["A.0","B.1","C.∞","D.không tồn tại"],a:1},
{q:"lim(1-cos x)/x^2 khi x→0 bằng:",options:["A.0","B.1","C.1/2","D.∞"],a:2},
{q:"Vô cùng bé là hàm số có giới hạn bằng:",options:["A.1","B.∞","C.0","D.không tồn tại"],a:2},
{q:"Hai vô cùng bé tương đương khi:",options:["A.tích →0","B.tỉ số →1","C.hiệu →0","D.tổng →0"],a:1},
{q:"sin x ~ x khi:",options:["A.x→∞","B.x→0","C.x→1","D.x→π"],a:1},
{q:"ln(1+x) ~ x khi:",options:["A.x→∞","B.x→0","C.x→1","D.x→−1"],a:1},
{q:"e^x−1 ~ x khi:",options:["A.x→∞","B.x→0","C.x→1","D.x→−1"],a:1},
{q:"Nếu f~g và g~h thì:",options:["A.f~h","B.f=h","C.f/g→0","D.không kết luận"],a:0},
{q:"Dạng vô định 0/0 có thể dùng:",options:["A.Taylor","B.Lopital","C.vô cùng bé","D.tất cả"],a:3},
{q:"Dạng vô định ∞−∞ xử lý bằng:",options:["A.quy đồng","B.đổi dạng","C.Lopital","D.tất cả"],a:3},
{q:"Nếu lim f(x)=∞ thì f(x) là:",options:["A.vô cùng bé","B.vô hạn","C.liên tục","D.hữu hạn"],a:1},
{q:"Giới hạn một bên dùng để xét:",options:["A.liên tục","B.giới hạn hai bên","C.gián đoạn","D.đạo hàm"],a:1},
{q:"Giới hạn tại vô cực xét hành vi:",options:["A.gần điểm","B.x→±∞","C.tại 0","D.tại 1"],a:1},
{q:"Tiệm cận đứng khi:",options:["A.lim f(x)=0","B.lim f(x)=±∞","C.f liên tục","D.f khả vi"],a:1}
  ],

  // ================== 2. ĐẠO HÀM – VI PHÂN ==================
  dao_ham:[
{q:"Đạo hàm của sin x là:",options:["A. cos x","B. −cos x","C. sin x","D. −sin x"],a:0},
{q:"Đạo hàm của cos x là:",options:["A. sin x","B. −sin x","C. cos x","D. −cos x"],a:1},
{q:"Đạo hàm của tan x là:",options:["A. cos²x","B. 1/cos²x","C. sin²x","D. 1/sin²x"],a:1},
{q:"Đạo hàm của ln x là:",options:["A. ln x","B. 1/x","C. x","D. e^x"],a:1},
{q:"Đạo hàm của logₐx là:",options:["A. 1/x","B. 1/(x ln a)","C. ln a","D. a^x"],a:1},
{q:"Đạo hàm của e^x là:",options:["A. e^x","B. x e^x","C. ln x","D. 1/x"],a:0},
{q:"Đạo hàm của a^x là:",options:["A. a^x","B. a^x ln a","C. ln a","D. x a^(x−1)"],a:1},
{q:"Đạo hàm của arctan x là:",options:["A. 1/(1−x²)","B. 1/(1+x²)","C. x/(1+x²)","D. −1/(1+x²)"],a:1},
{q:"Đạo hàm của arcsin x là:",options:["A. 1/√(1−x²)","B. −1/√(1−x²)","C. √(1−x²)","D. 1/(1+x²)"],a:0},
{q:"Đạo hàm của arccos x là:",options:["A. 1/√(1−x²)","B. −1/√(1−x²)","C. √(1−x²)","D. 1/(1+x²)"],a:1},

{q:"Đạo hàm cấp n của x^m (m hằng) là:",options:["A. m·x^(m−1)","B. m!·x^(m−n)","C. m(m−1)…(m−n+1)x^(m−n)","D. x^(m−n)"],a:2},
{q:"Đạo hàm cấp n của e^x là:",options:["A. e^x","B. x·e^x","C. n·e^x","D. (−1)^n e^x"],a:0},
{q:"Đạo hàm cấp n của a^x là:",options:["A. a^x","B. a^x(ln a)^n","C. n·a^x","D. a^(x−n)"],a:1},
{q:"Đạo hàm cấp n của sin x là:",options:["A. sin(x+nπ/2)","B. cos(x+nπ/2)","C. sin(x−nπ/2)","D. sin(x+n)"],a:0},
{q:"Đạo hàm cấp n của cos x là:",options:["A. cos(x+nπ/2)","B. sin(x+nπ/2)","C. cos(x−nπ/2)","D. −sin(x+nπ/2)"],a:0},
{q:"Công thức đạo hàm hàm hợp y=f(u(x)) là:",options:["A. y'=f'(x)","B. y'=f(u)·u'","C. y'=f'(u)·u'","D. y'=u·f'(x)"],a:2},
{q:"Đạo hàm của y=u(x)^n là:",options:["A. n·u^(n−1)","B. u^n·u'","C. n·u^(n−1)·u'","D. u^(n−1)"],a:2},
{q:"Đạo hàm của y=ln u(x) là:",options:["A. 1/u","B. u'/u","C. ln u·u'","D. u·u'"],a:1},
{q:"Đạo hàm của y=e^{u(x)} là:",options:["A. e^u","B. e^u·u'","C. u·e^u","D. e^{u'}"],a:1},
{q:"Đạo hàm của thương y=u/v là:",options:["A. (u'+v')/v","B. (u'v−uv')/v²","C. (u−v)'/v","D. u'/v'"],a:1}
]
,

kha_vi_dao_ham:[
{q:"Đạo hàm tại x0 là giới hạn của:",options:["A.tỉ số gia tăng","B.hàm số","C.vi phân","D.tích phân"],a:0},
{q:"Ý nghĩa hình học của đạo hàm là:",options:["A.diện tích","B.hệ số góc tiếp tuyến","C.độ cong","D.thể tích"],a:1},
{q:"Hàm khả vi tại x0 thì:",options:["A.gián đoạn","B.liên tục","C.không xác định","D.không có giới hạn"],a:1},
{q:"Nếu hàm liên tục thì:",options:["A.luôn khả vi","B.có thể không khả vi","C.không đạo hàm","D.phân kỳ"],a:1},
{q:"Đạo hàm của hằng số bằng:",options:["A.1","B.0","C.hằng số","D.không tồn tại"],a:1},
{q:"(x^n)' bằng:",options:["A.nx^{n-1}","B.x^{n-1}","C.nx^n","D.x^n"],a:0},
{q:"(e^x)' bằng:",options:["A.e^x","B.xe^x","C.ln x","D.1/x"],a:0},
{q:"(ln x)' bằng:",options:["A.ln x","B.1/x","C.x","D.e^x"],a:1},
{q:"(sin x)' bằng:",options:["A.cos x","B.sin x","C.-sin x","D.-cos x"],a:0},
{q:"(cos x)' bằng:",options:["A.sin x","B.-sin x","C.cos x","D.-cos x"],a:1},
{q:"Đạo hàm hàm hợp dùng:",options:["A.quy tắc tích","B.quy tắc thương","C.quy tắc dây chuyền","D.Lopital"],a:2},
{q:"Đạo hàm tích hai hàm dùng:",options:["A.dây chuyền","B.tích","C.thương","D.vi phân"],a:1},
{q:"Đạo hàm thương hai hàm dùng:",options:["A.dây chuyền","B.tích","C.thương","D.vi phân"],a:2},
{q:"Vi phân dy của y=f(x) là:",options:["A.dy=f'(x)dx","B.dy=f(x)dx","C.dy=dx","D.dy=df"],a:0},
{q:"Vi phân dùng để:",options:["A.xấp xỉ hàm","B.tính tích phân","C.giải PT","D.tính giới hạn"],a:0},
{q:"Tiếp tuyến tại x0 có phương trình:",options:["A.y=f(x0)","B.y=f'(x0)","C.y=f(x0)+f'(x0)(x−x0)","D.y=f(x)+f'(x)"],a:2},
{q:"Pháp tuyến tại x0 có hệ số góc:",options:["A.f'(x0)","B.-1/f'(x0)","C.f(x0)","D.0"],a:1},
{q:"Điểm không khả vi thường xảy ra tại:",options:["A.điểm góc","B.điểm trơn","C.đa thức","D.hàm mũ"],a:0},
{q:"Hàm |x| không khả vi tại:",options:["A.1","B.-1","C.0","D.∞"],a:2}
]
,

  // ================== 3. TAYLOR – MACLAURIN ==================
  taylor: [
    { q:"Khai triển Maclaurin của e^x là:", options:["A. 1+x+x²/2!+…","B. 1−x+x²/2!−…","C. x+x³/3!+…","D. 1+x²/2!"], a:0 },
    { q:"Khai triển Maclaurin của sin x là:", options:["A. x−x³/3!+x⁵/5!−…","B. 1−x²/2!+…","C. x+x³/3!+…","D. x²/2!"], a:0 },
    { q:"Khai triển Maclaurin của cos x là:", options:["A. 1−x²/2!+x⁴/4!−…","B. x−x³/3!","C. 1+x","D. x²/2!"], a:0 },
    { q:"Khai triển ln(1+x) là:", options:["A. x−x²/2+x³/3−…","B. 1+x+x²","C. ln x","D. x+x²"], a:0 },
    { q:"Khai triển arctan x là:", options:["A. x−x³/3+x⁵/5−…","B. ln(1+x)","C. sin x","D. cos x"], a:0 },
    { q:"Khai triển (1+x)^α là:", options:["A. ∑C(α,n)x^n","B. e^x","C. ln x","D. x^α"], a:0 }
  ],

  // ================== 4. TÍCH PHÂN – SUY RỘNG ==================
  tich_phan: [
    { q:"∫x^n dx (n≠−1) bằng:", options:["A. x^(n+1)/(n+1)+C","B. x^n/n+C","C. ln|x|+C","D. e^x+C"], a:0 },
    { q:"∫1/x dx bằng:", options:["A. ln|x|+C","B. x+C","C. 1/x+C","D. e^x+C"], a:0 },
    { q:"∫e^x dx bằng:", options:["A. e^x+C","B. x e^x","C. ln x","D. 1/x"], a:0 },
    { q:"∫a^x dx bằng:", options:["A. a^x ln a","B. a^x/ln a + C","C. ln a","D. x a^(x−1)"], a:1 },
    { q:"∫cos x dx bằng:", options:["A. −sin x","B. sin x + C","C. cos x","D. −cos x"], a:1 },
    { q:"∫sin x dx bằng:", options:["A. cos x","B. −cos x + C","C. sin x","D. −sin x"], a:1 },
    { q:"∫dx/(x²+1) bằng:", options:["A. arctan x + C","B. arcsin x + C","C. ln|x|+C","D. 1/x+C"], a:0 },
    { q:"∫dx/√(1−x²) bằng:", options:["A. arcsin x + C","B. arctan x + C","C. ln x","D. cos x"], a:0 },
    {q:"Nguyên hàm của f(x) là:",options:["A.đạo hàm","B.hàm F sao cho F'=f","C.giới hạn","D.vi phân"],a:1},
{q:"∫x^n dx (n≠−1) bằng:",options:["A.x^(n+1)/(n+1)+C","B.x^n/n+C","C.ln|x|+C","D.e^x+C"],a:0},
{q:"∫1/x dx bằng:",options:["A.1/x+C","B.ln|x|+C","C.e^x+C","D.x+C"],a:1},
{q:"∫e^x dx bằng:",options:["A.e^x+C","B.xe^x+C","C.ln x+C","D.1/x+C"],a:0},
{q:"∫cos x dx bằng:",options:["A.sin x+C","B.-sin x+C","C.cos x+C","D.-cos x+C"],a:0},

/* ===== TÍCH PHÂN XÁC ĐỊNH ===== */
{q:"Ý nghĩa hình học của tích phân xác định là:",options:["A.độ dài","B.diện tích có hướng","C.thể tích","D.chu vi"],a:1},
{q:"Công thức Newton–Leibniz là:",options:["A.∫f'=f","B.∫_a^b f=F(b)-F(a)","C.∫f dx=F","D.f(b)-f(a)"],a:1},
{q:"Nếu đổi cận tích phân thì:",options:["A.không đổi","B.đổi dấu","C.bằng 0","D.không xác định"],a:1},
{q:"∫_a^a f(x)dx bằng:",options:["A.1","B.f(a)","C.0","D.không xác định"],a:2},

/* ===== TÍCH PHÂN SUY RỘNG ===== */
{q:"Tích phân suy rộng loại 1 là tích phân:",options:["A.có cận vô hạn","B.hàm gián đoạn","C.hàm âm","D.hàm chẵn"],a:0},
{q:"Tích phân suy rộng loại 2 là tích phân:",options:["A.cận vô hạn","B.hàm gián đoạn","C.hàm dương","D.hàm tuần hoàn"],a:1},
{q:"Tích phân suy rộng hội tụ khi:",options:["A.giới hạn tồn tại","B.giới hạn hữu hạn","C.liên tục","D.đạo hàm tồn tại"],a:1},
{q:"Nếu tích phân suy rộng không hội tụ thì:",options:["A.bằng 0","B.phân kỳ","C.không xác định","D.hữu hạn"],a:1}
  ],

  // ================== 5. CHUỖI SỐ ==================
chuoi: [
{q:"Điều kiện cần để chuỗi hội tụ là:",options:["A. lim aₙ=0","B. aₙ tăng","C. aₙ>0","D. aₙ giảm"],a:0},
{q:"Chuỗi ∑1/n^p hội tụ khi:",options:["A. p≤1","B. p>1","C. p=1","D. mọi p"],a:1},
{q:"Tiêu chuẩn D'Alembert kết luận hội tụ khi:",options:["A. D<1","B. D>1","C. D=1","D. D≤0"],a:0},
{q:"Tiêu chuẩn Cauchy kết luận hội tụ khi:",options:["A. C<1","B. C>1","C. C=1","D. C≤0"],a:0},
{q:"Chuỗi đan dấu hội tụ nếu:",options:["A. aₙ tăng","B. lim aₙ≠0","C. aₙ giảm và lim aₙ=0","D. luôn hội tụ"],a:2},


{q:"Chuỗi hội tụ tuyệt đối thì:",options:["A. luôn phân kỳ","B. luôn hội tụ","C. chỉ hội tụ có điều kiện","D. không kết luận"],a:1},
{q:"Chuỗi hội tụ có điều kiện là chuỗi:",options:["A. hội tụ tuyệt đối","B. phân kỳ","C. hội tụ nhưng không tuyệt đối","D. có số hạng âm"],a:2},
{q:"Chuỗi ∑(-1)ⁿ/n là:",options:["A. phân kỳ","B. hội tụ tuyệt đối","C. hội tụ có điều kiện","D. hội tụ nhanh"],a:2},
{q:"Tiêu chuẩn so sánh trực tiếp dùng cho:",options:["A. mọi chuỗi","B. chuỗi bất kỳ","C. chuỗi dương","D. chuỗi đan dấu"],a:2},
{q:"Tiêu chuẩn so sánh giới hạn áp dụng khi:",options:["A. so sánh với chuỗi phân kỳ","B. so sánh với chuỗi hội tụ","C. giới hạn tỉ số tồn tại","D. chuỗi có dấu"],a:2},
{q:"Chuỗi hình học ∑qⁿ hội tụ khi:",options:["A. |q|≥1","B. q>1","C. |q|<1","D. q<0"],a:2},
{q:"Chuỗi ∑1/√n là:",options:["A. hội tụ","B. hội tụ tuyệt đối","C. phân kỳ","D. không xác định"],a:2},
{q:"Nếu ∑aₙ hội tụ tuyệt đối thì:",options:["A. ∑|aₙ| phân kỳ","B. ∑|aₙ| hội tụ","C. ∑(-1)ⁿaₙ phân kỳ","D. không kết luận"],a:1},
{q:"Tiêu chuẩn tích phân dùng để xét:",options:["A. chuỗi bất kỳ","B. chuỗi dương","C. chuỗi đan dấu","D. chuỗi lũy thừa"],a:1},
{q:"Chuỗi có số hạng tổng quát aₙ = 1/n là:",options:["A. hội tụ","B. hội tụ tuyệt đối","C. phân kỳ","D. hội tụ có điều kiện"],a:2}
],

dao_ham_cap_cao_lopital:[
{q:"Đạo hàm cấp hai của hàm y=f(x) là:",options:["A.f'(x)","B.f''(x)","C.(f')²","D.f'''(x)"],a:1},
{q:"Nếu f''(x)>0 trên khoảng thì đồ thị:",options:["A.lõm xuống","B.lõm lên","C.thẳng","D.gấp khúc"],a:1},
{q:"Nếu f''(x)<0 trên khoảng thì đồ thị:",options:["A.lõm lên","B.lõm xuống","C.thẳng","D.song song trục"],a:1},
{q:"Điểm uốn là điểm mà tại đó:",options:["A.f'(x)=0","B.f''(x)=0 và đổi dấu","C.f(x)=0","D.f'(x) không tồn tại"],a:1},
{q:"Đạo hàm cấp n của đa thức là:",options:["A.luôn tồn tại","B.có thể không tồn tại","C.bằng 0","D.vô hạn"],a:0},
{q:"Quy tắc L'Hospital áp dụng cho dạng:",options:["A.0/0","B.∞/∞","C.0/0 hoặc ∞/∞","D.∞−∞"],a:2},
{q:"Điều kiện áp dụng L'Hospital là:",options:["A.liên tục","B.có đạo hàm","C.dạng vô định","D.tất cả các ý"],a:3},
{q:"Khi áp dụng L'Hospital ta lấy:",options:["A.nguyên hàm","B.đạo hàm tử và mẫu","C.vi phân","D.khai triển"],a:1},
{q:"Nếu sau khi áp dụng L'Hospital giới hạn vẫn vô định thì:",options:["A.dừng","B.lặp lại","C.không kết luận","D.đổi dạng"],a:1},
{q:"L'Hospital không áp dụng trực tiếp cho dạng:",options:["A.0/0","B.∞/∞","C.0·∞","D.∞/∞"],a:2}
],


ung_dung_dao_ham:[
{q:"Hàm số đồng biến trên khoảng khi:",options:["A.f'(x)<0","B.f'(x)>0","C.f''(x)>0","D.f(x)>0"],a:1},
{q:"Hàm số nghịch biến trên khoảng khi:",options:["A.f'(x)>0","B.f'(x)<0","C.f''(x)<0","D.f(x)<0"],a:1},
{q:"Điều kiện cần để x0 là điểm cực trị là:",options:["A.f(x0)=0","B.f'(x0)=0","C.f''(x0)=0","D.f liên tục"],a:1},
{q:"Nếu f'(x0)=0 và f''(x0)>0 thì x0 là:",options:["A.cực đại","B.cực tiểu","C.điểm uốn","D.không kết luận"],a:1},
{q:"Nếu f'(x0)=0 và f''(x0)<0 thì x0 là:",options:["A.cực đại","B.cực tiểu","C.điểm uốn","D.không kết luận"],a:0},
{q:"Cực trị là:",options:["A.GTLN","B.GTNN","C.cực đại hoặc cực tiểu","D.giá trị biên"],a:2},
{q:"GTLN, GTNN trên đoạn đạt được khi:",options:["A.hàm liên tục","B.hàm khả vi","C.hàm đơn điệu","D.f'(x)=0"],a:0},
{q:"Để tìm GTLN, GTNN trên [a,b] cần xét:",options:["A.f'(x)=0","B.các điểm tới hạn","C.hai đầu mút","D.tất cả các ý"],a:3},
{q:"Điểm tới hạn là điểm:",options:["A.f(x)=0","B.f'(x)=0 hoặc không tồn tại","C.f''(x)=0","D.f liên tục"],a:1},
{q:"Bảng biến thiên dùng để:",options:["A.tính đạo hàm","B.xét đơn điệu và cực trị","C.tính tích phân","D.tìm giới hạn"],a:1}
]
,




fourier:[
{q:"Chuỗi Fourier dùng để:",options:["A.xấp xỉ hàm tuần hoàn","B.tính đạo hàm","C.tính tích phân","D.giải PT"],a:0},
{q:"Chuỗi Fourier gồm các thành phần:",options:["A.đa thức","B.sin và cos","C.exponential","D.logarit"],a:1},
{q:"Chuỗi Fourier áp dụng cho hàm:",options:["A.không liên tục","B.tuần hoàn","C.bất kỳ","D.hữu hạn"],a:1},
{q:"Hệ số Fourier a₀ biểu diễn:",options:["A.biên độ","B.giá trị trung bình","C.pha","D.chu kỳ"],a:1},
{q:"Chuỗi Fourier trên (0,l) dùng cho:",options:["A.hàm tuần hoàn","B.hàm trên đoạn hữu hạn","C.hàm chẵn","D.hàm lẻ"],a:1},
{q:"Chuỗi sine Fourier tương ứng với hàm:",options:["A.chẵn","B.lẻ","C.tuần hoàn","D.liên tục"],a:1},
{q:"Chuỗi cosine Fourier tương ứng với hàm:",options:["A.chẵn","B.lẻ","C.gián đoạn","D.không xác định"],a:0},
{q:"Chuỗi Fourier hội tụ về:",options:["A.giá trị hàm","B.trung bình hai giới hạn","C.0","D.vô hạn"],a:1}
]



};
