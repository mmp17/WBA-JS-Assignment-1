//Kiritish, chiqarish va o'zlashtirish operatoriga oid masalalar

//1. Kvadratning tomoni a berilgan. Uning perimetri aniqlansin. 
// var a = 5
// var P = 4 * a
// console.log(P) ; //=20

//2. Kvadratning tomoni a berilgan. Uning yuzasi aniqlansin. .
// var a = 5
// var S = a * a
// console.log(S) ; //=25

//3) 3. To`g`ri to`rtburchakning tomonlari a va b berilgan. Uning yuzasi S = a * b; va P = 2 * (a + b) perimetri aniqlansin.
// var a = 5
// var b = 4
// var S = a * b
// var P = 2 * (a+b)
// console.log(S) ; //=20
// console.log(P) ; //=18

//4. Aylananing diametri d berilgan. Uning uzunligi aniqlansin
// var d = 5
 const pi = 3.14
// var L = pi * d
// console.log(L) ; //uzunligi=15.700000000000001

//5. Kubning yon tomoni a berilgan. Uning hajmini  va to`la sirti  aniqlansin.
// var a = 5
// var V = Math.pow(a,3);
// var S = 6 * Math.pow(a,2);
// console.log(V); //Uning hajmi=125
// console.log(S); //to`la sirti=150

//6. Paralelepepidning tomonlari a, b, c berilgan. Uning hajmini  va to’la sirti  aniqlansin.
// var a = 3
// var b = 4
// var c = 5
// var V = a * b * c
// var S = 2 * (a*b + b*c + a*c)
// console.log(V); //=60
// console.log(S); //=94

//7. Doiraning radiusi R berilgan. Uning uzunligi L va yuzasi S aniqlansin.
// var R = 4
// var L = 2 * pi * R
// var S = pi * Math.pow(R,2)
// console.log(L); //=25.12
// console.log(S); //=50.24

//8. Ikkita son a va b berilgan. Ularning o`rta arifmetigi aniqlansin.
// var a = 4
// var b = 6
// var AM = (a + b)/2
// console.log(AM); //=5

//9. Ikkita manfiy bo`lmagan son a va b berilgan. Ularning o`rta geometrigi aniqlansin. 
// var a = 4
// var b = 6
// var AG = Math.sqrt(a * b)
// console.log(AG); //=4.898979485566356

//10. Nolga teng bo`lmagan ikkita son berilgan. Ularning yig`indisini, ko’paytmasini va har birining kvadrati aniqlansin. 
// var a = 4
// var b = 5
// var ADD = a + b
// var MULT = a * b
// console.log(ADD); //=9
// console.log(MULT); //=20
// console.log(Math.pow(a,2)); //=16
// console.log(Math.pow(b,2)); //=25

//11. Nolga teng bo`lmagan ikkita son berilgan. Ularning yig`indisini, ko’paytmasini va har birining moduli aniqlansin. 
// var a = -5
// var b = -6
// var ADD = a + b
// var MULT = a * b
// console.log(ADD); //=-11
// console.log(MULT); //=30
// console.log(Math.abs(a)); //=5
// console.log(Math.abs(b)); //=6

//12. To`gri uchburchakning katetlari a va b berilgan. Uning gipotenuzasi c va perimetri P aniqlansin
// var a = 3
// var b = 4
// var c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2))
// var P = a + b + c
// console.log(c); //=5
// console.log(P); //=60

//13. Umumiy markazga bo`lgan ikkita aylana radiusi berilgan. Ularnig yuzalari  va , ularning ayirmasi  aniqlansin.
// var R1 = 5
// var R2 = 4
// var S1 = pi * R1
// var S2 = pi * R2
// var S3 = pi * (R1 - R2)
// console.log(S1); //=15.700000000000001
// console.log(S2); //=12.56
// console.log(S3); //=3.14

//14. Aylananing uzunligi L berilgan. Uning radiusi R va yuzasi S aniqlansin 
// var L = 40
// var R = L / (2 * pi)
// var S = pi * Math.pow(R,2)
// console.log(R); //=3.184713375796178
// console.log(S); //=31.847133757961778

//15. Aylananing yuzasi S berilgan. Uning diametri d va radiusi R aniqlansin 
// var S = 60
// var R = Math.sqrt(S / pi)
// var d = 2 * R
// console.log(d); //=8.74260378943872
// console.log(R); //=4.37130189471936

//16. Sonlar o`qida ikkita nuqta orasidagi masofa aniqlansin.
// var x1 = 8
// var x2 = 12
// console.log(Math.abs(x2 - x1)); //=4

//17. Sonlar o`qida A, B, C nuqtalar berilgan. AC va BC kesmalarning uzunligini va kesmalar uzunligining yig`indisini topuvchi programma tuzilsin.

//18. Sonlar o`qida A, B, C nuqtalar berilgan. C nuqta A va B nuqtalar orasida joylashgan. AC va BC kesmalar uzunligining ko`paytmasini toping.

//19. To`g`ri to`rtburchakning qarama–qarshi uchlari koordinatlari berilgan. Uning tomonlari koordinata o`qiga parallel. To`g`ri to`rtburchakning perimetri va yuzasi aniqlansin.

//20. Tekislikdagi berilgan ikki nuqta (x1,y1) va (x2,y2) orasidagi masofa topilsin.
// var x1 = 8
// var x2 = 12
// var y1 = 18
// var y2 = 15
// var absX = Math.abs(x2 - x1)
// var absY = Math.abs(y2 - y1)
// console.log(Math.sqrt(Math.pow(absX,2) + Math.pow(absY,2))); //=5

//21. Uchburchakning uchta tomoni uchlari koordinatlari berilgan . Ikki nuqta orasidagi masofani topish 20 da berilgan. Uchburchakning yuzasini va perimatrini toping. 

//22. Berilgan A va B sonlarining qiymatlarini almashtiring. A va B ning yangi qiymati ekranga chiqarilsin.

//23. A, B va C sonlari berilgan. A ni qiymati B ga, B ni qiymati C ga va C ni qiymati A ga almashtirilsin. A, B va C ning yangi qiymatilari ekranga chiqarilsin.
