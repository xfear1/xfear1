$(document).ready(function() {
  $(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
  
});

//store quotes in array
var quotes = [
  {content: "0", source: "0" , pic: '<img src="./source' + "/pic/WhatYouEat.gif" + '" height="320" width="320"'},
  {content: "ตามใจใต้สะพาน", source: "เขาว่าตามสั่งอร่่อยนะ" , pic: '<img src="./source' + "/pic/UnderTheBridge.jpg" + '" height="320" width="320">'},
  {content: "Maru Kuma", source: "กินหมีภูเขาญี่ปุ่นกัน..." , pic: '<img src="./source' + "/pic/MaruKuma.jpg" + '" height="320" width="320">'},
  {content: "Park ลึกในสวนตึกใหญ่ ใครจะไปเอาทิชชู่ไปซับจั๊กกะแร้ด้วยนะ", source: "การทรมานตนระหว่างกินข้าวถึงเป็นการฝึกจิต", pic: '<img src="./source' + "/pic/WhatYouEat.gif" + '" height="320" width="320">'},
  {content: "หมูแดงนายไซ ใครจะไปพกปืนไปด้วย", source: "อารมณ์ดีก็ขาย อารมณ์ไม่ดีก็ขาย" , pic: '<img src="./source' + "/pic/NaiSai.jpg" + '" height="320" width="320">'},
  {content: "กะเพราไข่ระเบิด ไปกันเถิด กููไม่ไป กูร้อน...!!!", source: "ฟ้าครื้ม ๆ ลมดี ๆ ก็โอนะ" , pic: '<img src="./source' + "/pic/KaPrawKaiRaBirt.jpeg" + '" height="320" width="320">'},
  {content: "สิ้นคิด จิตตก หมกงานแล้วนายรู้....", source: "เซ่เว่นไปนะเมิง...!!!" , pic: '<img src="./source' + "/pic/711.JPG" + '" height="320" width="320">'},
  {content: "อยากทางเดินทาง มีเวลา งานน้อย....เชิญแดก", source: "ก๊วยจับจรัสพัฒน์...." , pic: '<img src="./source' + "/pic/KuiJubJaratpat.PNG" + '" height="320" width="320">'},
  {content: "ข้าวมันไก่ ถูกกว่า อร่อยกว่าใต้สะพาน คนก็น้อยกว่า", source: "เพราะเขาไม่เดินกันไปถึงนั่นหรอกเมิง...!!!" , pic: '<img src="./source' + "/pic/Kowmunkai.jpg" + '" height="320" width="320">'},
  {content: "9", source: "9" , pic: '<img src="./source' + "/pic/WhatYouEat.gif" + '" height="320" width="320">'},
  
]
function getQuote() {
//generate random number within array length
var randomNumber = Math.floor(Math.random() * quotes.length + 1);

//use random number to get quote and source, append to paragraph
var quoteContent = quotes[randomNumber].content;
var PicSource = quotes[randomNumber].pic;
var quoteSource = quotes[randomNumber].source;
document.getElementById("quote-text").innerHTML = quoteContent;
document.getElementById("pic-source").innerHTML = PicSource;
document.getElementById("quote-source").innerHTML = quoteSource;
 
  // send to Tweet button
  $(".twitter-share-button").attr("href", 'https://twitter.com/intent/tweet?text=' + quoteContent + " " + quoteSource);
  
};
