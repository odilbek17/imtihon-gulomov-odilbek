// 1-masala

//  primitive oddiy turlar string matn number raqam 

// butun va onlik boolean mantiqiy qiymat true yoki false undefined qiymat hali berilmagan null ataylab bosh deb qoyilgan

//  bigint juda katta sonlar uchun symbol noyob boshqa hech qaysi symbol bilan teng bolmaydigan maxfiy 

// belgi odatda object kaliti uchun ishlatiladi object kalit-qiymat juftliklaridan iborat struktura array function

//  date va hk ham object turiga kiradi

// 2-masala 

// undefined va null undefined bu hali qiymat berilmagan ozgaruvchi misol let a hali a ga hech

//  nima berilmagan null bu esa ataylab bosh deb qoyilgan qiymat yani hech nima yoq degani dasturchi qoyadi number

//  va bigint bigint juda katta sonlarni saqlaydi 2 ustiga 53 dan kattaroq bolsa ishlatamiz string va symbol string matn harflar

//  ketma-ketligi symbol noyob boshqa hech qaysi symbol bilan teng bolmaydigan maxfiy belgi odatda object kaliti uchun ishlatiladi

// 3-masala

//  and operatorining vazifasi ikki yoki undan ortiq shartlarni birgalikda tekshirish hammasi

//  togri true bolsa natija true boladi agar shartlardan bittasi ham notogri false bolsa natija false

// 4-masala

//  or operatorining vazifasi ikki yoki undan ortiq shartlardan birortasi togri true bolsa natija true boladi 

// faqatgina barcha shartlar notogri false bolsa natija false

// 5-masala

//  qanday looplarni bilasiz va ularning plus minus jihatlari for aniq necha marta ishlash kerak bolsa juda

//  qulay minus bazida shart notogri bolsa umuman ishlamaydi yoki cheksiz bolib qolishi mumkin while shart rost bolsa istalgancha aylanishi

//  mumkin minus shartga etibor qilinmasa cheksiz aylanib qolishi mumkin do while hech bolmasa bir marta ishlaydi

//  minus shart keyin tekshiriladi bu bazida noqulay bolishi mumkin for of massivlar array yoki iterable obyektlarda soddalik beradi

//  minus faqat iterable takrorlanadigan tuzilmalar bilan ishlaydi for in obyektning ichidagi kalitlar property names boyicha 

// yuradi tartib kafolatlanmagan arrayda ishlatish tavsiya etilmaydi

// 6-masala 

// this kalit sozi har doim ozining ishlash joyiga qarab turli obyektlarga ishora qiladi keling ochiq va qisqa 

// qilib tushuntiraman funksiya obyekt ichida ishlasa this osha obyektga tegishli global kontekstda function

//  bolmasa this global obyektga window yoki global ishora qiladi klass ichidagi metodda this osha klassning hozirgi

//  instansiyasiga ishora qiladi arrow functionda this atrofdagi yani organilayo

// 7-masala

//  scope ozgaruvchining hayoti qayerda boshlanib qayerda tugashini belgilaydi global scope hamma joyda korinadi local

//  va block scope faqat oz joyida korinadi

// 8-masala

//  funkciya yaratish turlari

// declaration function funksiya nomi bilan chaqiriladi

// expression funksiya o‘zgaruvchiga beriladi anonim bo‘lishi mumkin

// arrow function qisqa yoziladi va this atrofdagi kontekstni oladi

// misol

// function salom() { return salam }

// const salom2 = function() { return salam }

// const salom3 = () => salam

// 9-masala

//  call apply bind

// call funksiya chaqirilganda this ni ozgartirish uchun ishlatiladi va argumentlarni alohida beramiz

// apply xuddi call kabi lekin argumentlarni massiv sifatida oladi

// bind funksiya nusxasini yaratadi va this ni boglaydi keyin chaqirish mumkin

// misol

// fun.callobj,arg1,arg2

// fun.applyobj [arg1,arg2]

// let bound = fun.bind(obj)

// bound()

// 10-masala

//  oop nima va nega kerak

// oop obyektya asoslangan dasturlash usuli kodni modullar va obyektlarga bolib boshqarishni osonlashtiradi

// murakkab loyihalarda kodni takrorlashni kamaytiradi va oson ozgartirish imkonini beradi

// 11-masala

//  class nega kerak

// class obyektlar yaratish uchun shablon

// kodni tartibga soladi va qayta ishlatishni osonlashtiradi

// obyektlarni yaratish va ularga xulq-atvor berishni soddalashtiradi

// 12-masala

//  oop prinsiplar

// encapsulation malumotlarni yashirish va faqat kerakli interfeysni korsatish

// inheritance meros olish yangi klasslar yaratish uchun

// polymorphism bir nechta shaklda ishlash imkoniyati

// abstraction keraksiz detallarni yashirish va asosiy funksiyalarni korsatish

// 13-masala

//  oop dan boshqa dasturlash turlari

// procedural dasturlash ketma-ket amal bajaradi

// functional dasturlash funksiya va side effektlardan qochadi

// har birining oz afzalliklari va ishlatilish joyi bor

// 14-masala

//  oop da super vazifasi va ishlatilishi

// super ota klassning konstruktor va metodlarini chaqirish uchun ishlatiladi

// bu orqali kod takrorlanishini kamaytiradi

// misol

// class otalik { constructor(name) { this.name = name } }

// class bolalik extends otalik { constructor(name, yosh) { super(name) this.yosh = yosh } }

// 15-masala

//  map va set

// map kalit va qiymat juftliklarini saqlaydi kalitlar har xil turda bolishi mumk

// set faqat noyob qiymatlarni saq

// misol

// let map = new Map()

// map.set('kalit','

// let set = new Set([1,2,3,3]) 

// 16-masala

// map va weakmap

// map kalit va qiymat juftligini saqlaydi kalitlari har qanday turda bo‘lishi mumkin

// weakmap faqat obyektlarni kalit sifatida oladi va kalitlardagi obyektlar avtomatik tozalanadi

//  garbage collection yordamida bu xotira boshqarishni osonlashtiradi

// 17-masala
// weakset faqat obyektlarni saqlaydi

// obyektlarga zaif havola boladi agar boshqa joyda havola bolmasa u avtomatik xotiradan ochiriladi

// weakset elementlar ustida aylanish va olchamini bilish mumkin emas

// foydasi xotira oqimini kamaytiradi keraksiz obyektlar avtomatik tozalanadi

// 18-masala

// parsing - kod oqilib xatolar tekshiriladi

// kompilyatsiya - kod mashina tili yoki bytecode ga aylantiriladi

// ijro etish - kod ketma-ket bajariladi

// yani kod yoziladi → o‘qiladi → tarjima qilinadi → bajariladi

// js bitta yolda bajariladi (single-thread) va asinxron ishlarni event loop boshqarad

// 19-masala

// promise nima?


// promise — bu asinxron kod bilan ishlash uchun vosita

// yani bu vada hozir emas keyin natija boladi yoki xat

// 3 holati bor

// pending — kutish holati

// fulfilled — bajarildi natija oldik

// rejected — xato yuz berdi

// 20-masala

// fetch("https://686ff84f46567442480117a8.mockapi.io", {

//   method: "POST",

//   headers: {

//     "content-type": "application/json"

//   },

//   body: JSON.stringify({ ism: "ali", yosh: 20 })

// })

// .then(res => res.json())

// .then(data => console.log(data));

// C — POST, R — GET, U — PUT, D — DELETE

// fetch bilan 4ta asosiy amallar shunday qilinadi

// 21-masala

// nega kerak?

// DOM bilan sahifadagi elementlarni boshqaramiz

// BOM bilan brauzer oynasi va unga bogliq funksiyalarni boshqaramiz


// 24-masala

// git — bu kodning tarixini saqlash va boshqarish uchun dastur kod ozgarishlarini yozib boradi

// github — bu git kodlarini internetda saqlash va boshqalar bilan ulashish uchun sayt/platforma

// git yordamida kodni lokal kompyuterda boshqaramiz

// github yordamida kodni onlayn saqlaymiz va jamoadoshlar bilan ishlaymiz
