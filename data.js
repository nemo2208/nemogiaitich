const DATA = {

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
    { q: "Quy tắc L'Hospital dùng cho dạng:", options:["A. 0/0, ∞/∞","B. 0·∞","C. ∞−∞","D. 1^∞"], a:0 }
  ],

  // ================== 2. ĐẠO HÀM – VI PHÂN ==================
  dao_ham: [
    { q:"Đạo hàm của sin x là:", options:["A. cos x","B. −cos x","C. sin x","D. −sin x"], a:0 },
    { q:"Đạo hàm của cos x là:", options:["A. sin x","B. −sin x","C. cos x","D. −cos x"], a:1 },
    { q:"Đạo hàm của tan x là:", options:["A. cos²x","B. 1/cos²x","C. sin²x","D. 1/sin²x"], a:1 },
    { q:"Đạo hàm của ln x là:", options:["A. ln x","B. 1/x","C. x","D. e^x"], a:1 },
    { q:"Đạo hàm của logₐx là:", options:["A. 1/x","B. 1/(x ln a)","C. ln a","D. a^x"], a:1 },
    { q:"Đạo hàm của e^x là:", options:["A. e^x","B. x e^x","C. ln x","D. 1/x"], a:0 },
    { q:"Đạo hàm của a^x là:", options:["A. a^x","B. a^x ln a","C. ln a","D. x a^(x−1)"], a:1 },
    { q:"Đạo hàm của arctan x là:", options:["A. 1/(1−x²)","B. 1/(1+x²)","C. x/(1+x²)","D. −1/(1+x²)"], a:1 },
    { q:"Đạo hàm của arcsin x là:", options:["A. 1/√(1−x²)","B. −1/√(1−x²)","C. √(1−x²)","D. 1/(1+x²)"], a:0 },
    { q:"Đạo hàm của arccos x là:", options:["A. 1/√(1−x²)","B. −1/√(1−x²)","C. √(1−x²)","D. 1/(1+x²)"], a:1 },
// ====== ĐẠO HÀM TỔNG QUÁT & CẤP CAO ======
{
  q: "Đạo hàm cấp n của x^m (m hằng) là:",
  options: [
    "A. m·x^(m−1)",
    "B. m!·x^(m−n)",
    "C. m(m−1)…(m−n+1)x^(m−n)",
    "D. x^(m−n)"
  ],
  a: 2
},
{
  q: "Đạo hàm cấp n của e^x là:",
  options: [
    "A. e^x",
    "B. x·e^x",
    "C. n·e^x",
    "D. (−1)^n e^x"
  ],
  a: 0
},
{
  q: "Đạo hàm cấp n của a^x là:",
  options: [
    "A. a^x",
    "B. a^x(ln a)^n",
    "C. n·a^x",
    "D. a^(x−n)"
  ],
  a: 1
},
{
  q: "Đạo hàm cấp n của sin x là:",
  options: [
    "A. sin(x+nπ/2)",
    "B. cos(x+nπ/2)",
    "C. sin(x−nπ/2)",
    "D. sin(x+n)"
  ],
  a: 0
},
{
  q: "Đạo hàm cấp n của cos x là:",
  options: [
    "A. cos(x+nπ/2)",
    "B. sin(x+nπ/2)",
    "C. cos(x−nπ/2)",
    "D. −sin(x+nπ/2)"
  ],
  a: 0
},
{
  q: "Công thức đạo hàm hàm hợp y = f(u(x)) là:",
  options: [
    "A. y' = f'(x)",
    "B. y' = f(u)·u'",
    "C. y' = f'(u)·u'",
    "D. y' = u·f'(x)"
  ],
  a: 2
},
{
  q: "Đạo hàm của y = u(x)^n là:",
  options: [
    "A. n·u^(n−1)",
    "B. u^n·u'",
    "C. n·u^(n−1)·u'",
    "D. u^(n−1)"
  ],
  a: 2
},
{
  q: "Đạo hàm của y = ln u(x) là:",
  options: [
    "A. 1/u",
    "B. u'/u",
    "C. ln u · u'",
    "D. u·u'"
  ],
  a: 1
},
{
  q: "Đạo hàm của y = e^{u(x)} là:",
  options: [
    "A. e^u",
    "B. e^u·u'",
    "C. u·e^u",
    "D. e^{u'}"
  ],
  a: 1
},
{
  q: "Đạo hàm của thương y = u/v là:",
  options: [
    "A. (u'+v')/v",
    "B. (u'v−uv')/v²",
    "C. (u−v)'/v",
    "D. u'/v'"
  ],
  a: 1
}
  ],

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
    { q:"∫dx/√(1−x²) bằng:", options:["A. arcsin x + C","B. arctan x + C","C. ln x","D. cos x"], a:0 }
  ],

  // ================== 5. CHUỖI SỐ ==================
  chuoi: [
    { q:"Điều kiện cần để chuỗi hội tụ là:", options:["A. lim aₙ=0","B. aₙ tăng","C. aₙ>0","D. aₙ giảm"], a:0 },
    { q:"Chuỗi ∑1/n^p hội tụ khi:", options:["A. p≤1","B. p>1","C. p=1","D. mọi p"], a:1 },
    { q:"Tiêu chuẩn D'Alembert kết luận hội tụ khi:", options:["A. D<1","B. D>1","C. D=1","D. D≤0"], a:0 },
    { q:"Tiêu chuẩn Cauchy kết luận hội tụ khi:", options:["A. C<1","B. C>1","C. C=1","D. C≤0"], a:0 },
    { q:"Chuỗi đan dấu hội tụ nếu:", options:["A. aₙ tăng","B. lim aₙ≠0","C. aₙ giảm và lim aₙ=0","D. luôn hội tụ"], a:2 }
  ]

};
