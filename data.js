const CHALISA_VERSES = [
  {id:1,type:'Opening Doha',hindi:'श्रीगुरु चरन सरोज रज, निज मनु मुकुरु सुधारि।\nबरनऊँ रघुबर बिमल जसु, जो दायकु फल चारि॥',english:'Shri Guru charan saroj raj, nij manu mukuru sudhaari; Baranau Raghuvar bimal jasu, jo daayaku phal chaari.',meaning:'With the dust of the Guru’s lotus feet, I clean the mirror of my mind and sing the pure glory of Shri Ram, giver of the four fruits of life.',audio:'assets/audio/chalisa/001.mp3'},
  {id:2,type:'Opening Doha',hindi:'बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार।\nबल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार॥',english:'Buddhiheen tanu jaanike, sumirau Pavan-Kumar; Bal buddhi vidya dehu mohi, harahu kalesh vikaar.',meaning:'Knowing myself to be without wisdom, I remember Hanuman, son of the Wind. Grant me strength, intellect, knowledge, and remove my troubles.',audio:'assets/audio/chalisa/002.mp3'},
  {id:3,type:'Chaupai 1',hindi:'जय हनुमान ज्ञान गुण सागर।\nजय कपीस तिहुँ लोक उजागर॥',english:'Jai Hanuman gyaan gun saagar; Jai Kapis tihun lok ujaagar.',meaning:'Victory to Hanuman, ocean of wisdom and virtue. Victory to the Lord of Vanaras, who illumines the three worlds.',audio:'assets/audio/chalisa/003.mp3'},
  {id:4,type:'Chaupai 2',hindi:'रामदूत अतुलित बल धामा।\nअंजनि-पुत्र पवनसुत नामा॥',english:'Ramdoot atulit bal dhaama; Anjani-putra Pavansut naama.',meaning:'You are Shri Ram’s messenger, abode of incomparable strength, son of Anjani and known as the son of the Wind.',audio:'assets/audio/chalisa/004.mp3'},
  {id:5,type:'Chaupai 3',hindi:'महाबीर बिक्रम बजरंगी।\nकुमति निवार सुमति के संगी॥',english:'Mahabir Bikram Bajrangi; Kumati nivaar sumati ke sangi.',meaning:'Great hero, mighty as the thunderbolt, remover of wrong thinking and companion of noble wisdom.',audio:'assets/audio/chalisa/005.mp3'},
  {id:6,type:'Chaupai 4',hindi:'कंचन बरन बिराज सुबेसा।\nकानन कुंडल कुंचित केसा॥',english:'Kanchan baran biraaj subesa; Kaanan kundal kunchit kesa.',meaning:'Your golden form shines in beautiful attire, with earrings in your ears and curly hair.',audio:'assets/audio/chalisa/006.mp3'},
  {id:7,type:'Chaupai 5',hindi:'हाथ बज्र औ ध्वजा बिराजै।\nकाँधे मूँज जनेऊ साजै॥',english:'Haath bajra au dhwaja biraajai; Kandhe moonj janeu saajai.',meaning:'In your hands shine the thunderbolt and flag, and the sacred thread adorns your shoulder.',audio:'assets/audio/chalisa/007.mp3'},
  {id:8,type:'Chaupai 6',hindi:'शंकर सुवन केसरी नंदन।\nतेज प्रताप महा जग बंदन॥',english:'Shankar suvan Kesari nandan; Tej prataap maha jag vandan.',meaning:'You are considered an aspect of Shiva and son of Kesari. Your radiance and glory are revered throughout the world.',audio:'assets/audio/chalisa/008.mp3'},
  {id:9,type:'Chaupai 7',hindi:'विद्यावान गुनी अति चातुर।\nराम काज करिबे को आतुर॥',english:'Vidyavaan guni ati chaatur; Ram kaaj karibe ko aatur.',meaning:'You are learned, virtuous, and very wise, ever eager to perform Shri Ram’s work.',audio:'assets/audio/chalisa/009.mp3'},
  {id:10,type:'Chaupai 8',hindi:'प्रभु चरित्र सुनिबे को रसिया।\nराम लखन सीता मन बसिया॥',english:'Prabhu charitra sunibe ko rasiya; Ram Lakhan Sita man basiya.',meaning:'You delight in hearing the Lord’s stories; Shri Ram, Lakshman, and Sita dwell in your heart.',audio:'assets/audio/chalisa/010.mp3'},
  {id:11,type:'Chaupai 9',hindi:'सूक्ष्म रूप धरि सियहिं दिखावा।\nबिकट रूप धरि लंक जरावा॥',english:'Sukshma roop dhari Siyahi dikhava; Bikat roop dhari Lanka jarava.',meaning:'You appeared before Sita in a subtle form and burned Lanka in a fearsome form.',audio:'assets/audio/chalisa/011.mp3'},
  {id:12,type:'Chaupai 10',hindi:'भीम रूप धरि असुर संहारे।\nरामचंद्र के काज संवारे॥',english:'Bhim roop dhari asur sanhaare; Ramchandra ke kaaj sanvaare.',meaning:'You destroyed demons in a mighty form and fulfilled Shri Ramchandra’s mission.',audio:'assets/audio/chalisa/012.mp3'},
  {id:13,type:'Chaupai 11',hindi:'लाय सजीवन लखन जियाये।\nश्रीरघुबीर हरषि उर लाये॥',english:'Laay sanjeevan Lakhan jiyaaye; Shri Raghuveer harashi ur laaye.',meaning:'You brought the Sanjeevani herb and revived Lakshman; Shri Ram joyfully embraced you.',audio:'assets/audio/chalisa/013.mp3'},
  {id:14,type:'Chaupai 12',hindi:'रघुपति कीन्ही बहुत बड़ाई।\nतुम मम प्रिय भरतहि सम भाई॥',english:'Raghupati keenhi bahut badaai; Tum mam priya Bharat-hi sam bhai.',meaning:'Raghupati praised you greatly, saying you are as dear to him as his brother Bharat.',audio:'assets/audio/chalisa/014.mp3'},
  {id:15,type:'Chaupai 13',hindi:'सहस बदन तुम्हरो जस गावैं।\nअस कहि श्रीपति कंठ लगावैं॥',english:'Sahas badan tumharo jas gaavai; As kahi Shripati kanth lagaavai.',meaning:'The thousand-mouthed Sheshnag sings your glory; saying this, the Lord embraced you.',audio:'assets/audio/chalisa/015.mp3'},
  {id:16,type:'Chaupai 14',hindi:'सनकादिक ब्रह्मादि मुनीसा।\nनारद सारद सहित अहीसा॥',english:'Sanakaadik Brahmaadi muneesa; Narad Saarad sahit Aheesa.',meaning:'Sages like Sanak, Brahma, Narad, Saraswati, and Sheshnag all praise you.',audio:'assets/audio/chalisa/016.mp3'},
  {id:17,type:'Chaupai 15',hindi:'जम कुबेर दिगपाल जहाँ ते।\nकवि कोविद कहि सके कहाँ ते॥',english:'Yam Kuber Digpal jahan te; Kavi kovid kahi sake kahan te.',meaning:'Even Yama, Kubera, guardians of directions, poets, and scholars cannot fully describe your glory.',audio:'assets/audio/chalisa/017.mp3'},
  {id:18,type:'Chaupai 16',hindi:'तुम उपकार सुग्रीवहिं कीन्हा।\nराम मिलाय राज पद दीन्हा॥',english:'Tum upkaar Sugreevahin keenha; Ram milaay raj pad deenha.',meaning:'You helped Sugriva by bringing him to Shri Ram and restoring his kingdom.',audio:'assets/audio/chalisa/018.mp3'},
  {id:19,type:'Chaupai 17',hindi:'तुम्हरो मंत्र बिभीषण माना।\nलंकेश्वर भए सब जग जाना॥',english:'Tumharo mantra Vibhishan maana; Lankeshwar bhaye sab jag jaana.',meaning:'Vibhishan followed your counsel and became king of Lanka, as the whole world knows.',audio:'assets/audio/chalisa/019.mp3'},
  {id:20,type:'Chaupai 18',hindi:'जुग सहस्त्र जोजन पर भानू।\nलील्यो ताहि मधुर फल जानू॥',english:'Yug sahastra jojan par bhaanu; Leelyo taahi madhur phal jaanu.',meaning:'You leapt toward the sun, thousands of yojanas away, thinking it to be a sweet fruit.',audio:'assets/audio/chalisa/020.mp3'},
  {id:21,type:'Chaupai 19',hindi:'प्रभु मुद्रिका मेलि मुख माहीं।\nजलधि लाँघि गये अचरज नाहीं॥',english:'Prabhu mudrika meli mukh maahi; Jaladhi langhi gaye acharaj naahi.',meaning:'Carrying the Lord’s ring in your mouth, you crossed the ocean; no wonder, with your power.',audio:'assets/audio/chalisa/021.mp3'},
  {id:22,type:'Chaupai 20',hindi:'दुर्गम काज जगत के जेते।\nसुगम अनुग्रह तुम्हरे तेते॥',english:'Durgam kaaj jagat ke jete; Sugam anugrah tumhare tete.',meaning:'All difficult tasks in the world become easy by your grace.',audio:'assets/audio/chalisa/022.mp3'},
  {id:23,type:'Chaupai 21',hindi:'राम दुआरे तुम रखवारे।\nहोत न आज्ञा बिनु पैसारे॥',english:'Ram duaare tum rakhwaare; Hot na aagya binu paisaare.',meaning:'You guard the doorway of Shri Ram; no one enters without your permission.',audio:'assets/audio/chalisa/023.mp3'},
  {id:24,type:'Chaupai 22',hindi:'सब सुख लहै तुम्हारी सरना।\nतुम रक्षक काहू को डरना॥',english:'Sab sukh lahai tumhaari sarna; Tum rakshak kaahu ko darna.',meaning:'Those who take refuge in you receive all happiness. With you as protector, there is no fear.',audio:'assets/audio/chalisa/024.mp3'},
  {id:25,type:'Chaupai 23',hindi:'आपन तेज सम्हारो आपै।\nतीनों लोक हाँक तें काँपै॥',english:'Aapan tej samhaaro aapai; Teenon lok haank te kaampai.',meaning:'Only you can contain your radiance; the three worlds tremble at your roar.',audio:'assets/audio/chalisa/025.mp3'},
  {id:26,type:'Chaupai 24',hindi:'भूत पिशाच निकट नहिं आवै।\nमहाबीर जब नाम सुनावै॥',english:'Bhoot pishaach nikat nahi aavai; Mahabir jab naam sunaavai.',meaning:'Negative forces do not come near when the name of Mahabir Hanuman is heard.',audio:'assets/audio/chalisa/026.mp3'},
  {id:27,type:'Chaupai 25',hindi:'नासै रोग हरै सब पीरा।\nजपत निरंतर हनुमत बीरा॥',english:'Naasai rog harai sab peera; Japat nirantar Hanumat beera.',meaning:'Continuous remembrance of brave Hanuman removes ailments and pain.',audio:'assets/audio/chalisa/027.mp3'},
  {id:28,type:'Chaupai 26',hindi:'संकट तें हनुमान छुड़ावै।\nमन क्रम बचन ध्यान जो लावै॥',english:'Sankat te Hanuman chhudaavai; Man kram bachan dhyaan jo laavai.',meaning:'Hanuman frees devotees from troubles when they remember him in thought, action, and speech.',audio:'assets/audio/chalisa/028.mp3'},
  {id:29,type:'Chaupai 27',hindi:'सब पर राम तपस्वी राजा।\nतिन के काज सकल तुम साजा॥',english:'Sab par Ram tapasvi raja; Tin ke kaaj sakal tum saaja.',meaning:'Shri Ram, the ascetic king, is supreme; you fulfill all his tasks.',audio:'assets/audio/chalisa/029.mp3'},
  {id:30,type:'Chaupai 28',hindi:'और मनोरथ जो कोई लावै।\nसोई अमित जीवन फल पावै॥',english:'Aur manorath jo koi laavai; Soi amit jeevan phal paavai.',meaning:'Whoever brings sincere wishes to you receives abundant fruits in life.',audio:'assets/audio/chalisa/030.mp3'},
  {id:31,type:'Chaupai 29',hindi:'चारों जुग परताप तुम्हारा।\nहै परसिद्ध जगत उजियारा॥',english:'Chaaron jug prataap tumhaara; Hai prasiddh jagat ujiyaara.',meaning:'Your glory shines through all four ages and is renowned throughout the world.',audio:'assets/audio/chalisa/031.mp3'},
  {id:32,type:'Chaupai 30',hindi:'साधु संत के तुम रखवारे।\nअसुर निकंदन राम दुलारे॥',english:'Saadhu sant ke tum rakhwaare; Asur nikandan Ram dulaare.',meaning:'You protect sages and saints, destroy demons, and are beloved of Shri Ram.',audio:'assets/audio/chalisa/032.mp3'},
  {id:33,type:'Chaupai 31',hindi:'अष्ट सिद्धि नौ निधि के दाता।\nअस बर दीन्ह जानकी माता॥',english:'Ashta siddhi nau nidhi ke daata; As bar deenh Janaki mata.',meaning:'Mother Janaki blessed you to grant the eight siddhis and nine treasures.',audio:'assets/audio/chalisa/033.mp3'},
  {id:34,type:'Chaupai 32',hindi:'राम रसायन तुम्हरे पासा।\nसदा रहो रघुपति के दासा॥',english:'Ram rasaayan tumhare paasa; Sada raho Raghupati ke daasa.',meaning:'You possess the nectar of devotion to Ram and remain forever his servant.',audio:'assets/audio/chalisa/034.mp3'},
  {id:35,type:'Chaupai 33',hindi:'तुम्हरे भजन राम को पावै।\nजनम जनम के दुख बिसरावै॥',english:'Tumhare bhajan Ram ko paavai; Janam janam ke dukh bisraavai.',meaning:'Through devotion to you, one reaches Shri Ram and forgets sorrows of many lifetimes.',audio:'assets/audio/chalisa/035.mp3'},
  {id:36,type:'Chaupai 34',hindi:'अन्त काल रघुबर पुर जाई।\nजहाँ जन्म हरि-भक्त कहाई॥',english:'Ant kaal Raghubar pur jaai; Jahan janm Hari-bhakt kahaai.',meaning:'At the end, one reaches the abode of Shri Ram and is born again as a devotee of Hari.',audio:'assets/audio/chalisa/036.mp3'},
  {id:37,type:'Chaupai 35',hindi:'और देवता चित्त न धरई।\nहनुमत सेई सर्व सुख करई॥',english:'Aur devta chitt na dharai; Hanumat sei sarv sukh karai.',meaning:'One who serves Hanuman with steady devotion receives all happiness.',audio:'assets/audio/chalisa/037.mp3'},
  {id:38,type:'Chaupai 36',hindi:'संकट कटै मिटै सब पीरा।\nजो सुमिरै हनुमत बलबीरा॥',english:'Sankat katai mitai sab peera; Jo sumirai Hanumat balbeera.',meaning:'Troubles and pain are removed for those who remember mighty Hanuman.',audio:'assets/audio/chalisa/038.mp3'},
  {id:39,type:'Chaupai 37',hindi:'जय जय जय हनुमान गोसाईं।\nकृपा करहु गुरुदेव की नाईं॥',english:'Jai jai jai Hanuman Gosai; Kripa karahu Gurudev ki naai.',meaning:'Victory, victory, victory to Hanuman Gosain. Bless me like a revered Guru.',audio:'assets/audio/chalisa/039.mp3'},
  {id:40,type:'Chaupai 38',hindi:'जो सत बार पाठ कर कोई।\nछूटहि बंदि महा सुख होई॥',english:'Jo sat baar paath kar koi; Chhootahi bandi maha sukh hoi.',meaning:'One who recites this a hundred times is freed from bondage and gains great happiness.',audio:'assets/audio/chalisa/040.mp3'},
  {id:41,type:'Chaupai 39',hindi:'जो यह पढ़ै हनुमान चालीसा।\nहोय सिद्धि साखी गौरीसा॥',english:'Jo yah padhai Hanuman Chalisa; Hoy siddhi saakhi Gaurisa.',meaning:'One who reads this Hanuman Chalisa attains success, with Lord Shiva as witness.',audio:'assets/audio/chalisa/041.mp3'},
  {id:42,type:'Chaupai 40',hindi:'तुलसीदास सदा हरि चेरा।\nकीजै नाथ हृदय महँ डेरा॥',english:'Tulsidas sada Hari chera; Keejai Nath hriday mah dera.',meaning:'Tulsidas, forever servant of Hari, prays: O Lord, reside in my heart.',audio:'assets/audio/chalisa/042.mp3'},
  {id:43,type:'Closing Doha',hindi:'पवन तनय संकट हरन, मंगल मूरति रूप।\nराम लखन सीता सहित, हृदय बसहु सुर भूप॥',english:'Pavan tanay sankat haran, mangal murti roop; Ram Lakhan Sita sahit, hriday basahu sur bhoop.',meaning:'O son of the Wind, remover of troubles and embodiment of auspiciousness, dwell in my heart with Ram, Lakshman, and Sita.',audio:'assets/audio/chalisa/043.mp3'}
];

// Full synced Hanuman Chalisa audio uploaded with this project.
// Timings are calibrated for hanuman-chalisa-hariharan-gulshan-kumar.mp3.
// The player also gives an offset control so you can fine-tune sync instantly on any browser.
const CHALISA_FULL_AUDIO = {
  title: 'Hanuman Chalisa — Hariharan / Gulshan Kumar',
  src: 'assets/audio/hanuman-chalisa-hariharan-gulshan-kumar.mp3',
  introEnd: 43.20,
  lyricsEnd: 500.25,
  duration: 581.66
};

const CHALISA_SYNC = [
  { id: 1, start: 0.00, end: 22.80 },
  { id: 2, start: 22.80, end: 43.20 },
  { id: 3, start: 43.20, end: 66.75 },
  { id: 4, start: 66.75, end: 84.75 },
  { id: 5, start: 84.75, end: 98.50 },
  { id: 6, start: 98.50, end: 109.00 },
  { id: 7, start: 109.00, end: 117.99 },
  { id: 8, start: 117.99, end: 129.25 },
  { id: 9, start: 129.25, end: 137.50 },
  { id: 10, start: 137.50, end: 148.50 },
  { id: 11, start: 148.50, end: 160.00 },
  { id: 12, start: 160.00, end: 172.25 },
  { id: 13, start: 172.25, end: 183.25 },
  { id: 14, start: 183.25, end: 193.50 },
  { id: 15, start: 193.50, end: 204.50 },
  { id: 16, start: 204.50, end: 214.75 },
  { id: 17, start: 214.75, end: 223.25 },
  { id: 18, start: 223.25, end: 235.25 },
  { id: 19, start: 235.25, end: 244.75 },
  { id: 20, start: 244.75, end: 257.25 },
  { id: 21, start: 257.25, end: 267.50 },
  { id: 22, start: 267.50, end: 278.50 },
  { id: 23, start: 278.50, end: 289.25 },
  { id: 24, start: 289.25, end: 299.75 },
  { id: 25, start: 299.75, end: 310.25 },
  { id: 26, start: 310.25, end: 323.00 },
  { id: 27, start: 323.00, end: 331.50 },
  { id: 28, start: 331.50, end: 342.75 },
  { id: 29, start: 342.75, end: 352.75 },
  { id: 30, start: 352.75, end: 363.00 },
  { id: 31, start: 363.00, end: 374.25 },
  { id: 32, start: 374.25, end: 384.25 },
  { id: 33, start: 384.25, end: 395.00 },
  { id: 34, start: 395.00, end: 405.75 },
  { id: 35, start: 405.75, end: 417.50 },
  { id: 36, start: 417.50, end: 426.50 },
  { id: 37, start: 426.50, end: 437.63 },
  { id: 38, start: 437.63, end: 448.00 },
  { id: 39, start: 448.00, end: 458.00 },
  { id: 40, start: 458.00, end: 468.75 },
  { id: 41, start: 468.75, end: 479.25 },
  { id: 42, start: 479.25, end: 489.75 },
  { id: 43, start: 489.75, end: 500.25 }
];

const CHALISA_LINE_SYNC = [
  { verse: 0, line: 0, start: 0.00, end: 11.80 },
  { verse: 0, line: 1, start: 11.80, end: 22.80 },
  { verse: 1, line: 0, start: 22.80, end: 32.90 },
  { verse: 1, line: 1, start: 32.90, end: 43.20 },
  { verse: 2, line: 0, start: 43.20, end: 55.28 },
  { verse: 2, line: 1, start: 55.28, end: 66.75 },
  { verse: 3, line: 0, start: 66.75, end: 75.52 },
  { verse: 3, line: 1, start: 75.52, end: 84.75 },
  { verse: 4, line: 0, start: 84.75, end: 91.67 },
  { verse: 4, line: 1, start: 91.67, end: 98.50 },
  { verse: 5, line: 0, start: 98.50, end: 103.68 },
  { verse: 5, line: 1, start: 103.68, end: 109.00 },
  { verse: 6, line: 0, start: 109.00, end: 113.35 },
  { verse: 6, line: 1, start: 113.35, end: 117.99 },
  { verse: 7, line: 0, start: 117.99, end: 123.58 },
  { verse: 7, line: 1, start: 123.58, end: 129.25 },
  { verse: 8, line: 0, start: 129.25, end: 133.45 },
  { verse: 8, line: 1, start: 133.45, end: 137.50 },
  { verse: 9, line: 0, start: 137.50, end: 142.93 },
  { verse: 9, line: 1, start: 142.93, end: 148.50 },
  { verse: 10, line: 0, start: 148.50, end: 154.36 },
  { verse: 10, line: 1, start: 154.36, end: 160.00 },
  { verse: 11, line: 0, start: 160.00, end: 166.39 },
  { verse: 11, line: 1, start: 166.39, end: 172.25 },
  { verse: 12, line: 0, start: 172.25, end: 177.99 },
  { verse: 12, line: 1, start: 177.99, end: 183.25 },
  { verse: 13, line: 0, start: 183.25, end: 188.41 },
  { verse: 13, line: 1, start: 188.41, end: 193.50 },
  { verse: 14, line: 0, start: 193.50, end: 198.89 },
  { verse: 14, line: 1, start: 198.89, end: 204.50 },
  { verse: 15, line: 0, start: 204.50, end: 209.59 },
  { verse: 15, line: 1, start: 209.59, end: 214.75 },
  { verse: 16, line: 0, start: 214.75, end: 218.97 },
  { verse: 16, line: 1, start: 218.97, end: 223.25 },
  { verse: 17, line: 0, start: 223.25, end: 229.40 },
  { verse: 17, line: 1, start: 229.40, end: 235.25 },
  { verse: 18, line: 0, start: 235.25, end: 239.94 },
  { verse: 18, line: 1, start: 239.94, end: 244.75 },
  { verse: 19, line: 0, start: 244.75, end: 251.15 },
  { verse: 19, line: 1, start: 251.15, end: 257.25 },
  { verse: 20, line: 0, start: 257.25, end: 262.47 },
  { verse: 20, line: 1, start: 262.47, end: 267.50 },
  { verse: 21, line: 0, start: 267.50, end: 273.00 },
  { verse: 21, line: 1, start: 273.00, end: 278.50 },
  { verse: 22, line: 0, start: 278.50, end: 284.00 },
  { verse: 22, line: 1, start: 284.00, end: 289.25 },
  { verse: 23, line: 0, start: 289.25, end: 294.40 },
  { verse: 23, line: 1, start: 294.40, end: 299.75 },
  { verse: 24, line: 0, start: 299.75, end: 304.90 },
  { verse: 24, line: 1, start: 304.90, end: 310.25 },
  { verse: 25, line: 0, start: 310.25, end: 316.71 },
  { verse: 25, line: 1, start: 316.71, end: 323.00 },
  { verse: 26, line: 0, start: 323.00, end: 327.11 },
  { verse: 26, line: 1, start: 327.11, end: 331.50 },
  { verse: 27, line: 0, start: 331.50, end: 337.23 },
  { verse: 27, line: 1, start: 337.23, end: 342.75 },
  { verse: 28, line: 0, start: 342.75, end: 347.72 },
  { verse: 28, line: 1, start: 347.72, end: 352.75 },
  { verse: 29, line: 0, start: 352.75, end: 357.81 },
  { verse: 29, line: 1, start: 357.81, end: 363.00 },
  { verse: 30, line: 0, start: 363.00, end: 368.55 },
  { verse: 30, line: 1, start: 368.55, end: 374.25 },
  { verse: 31, line: 0, start: 374.25, end: 379.22 },
  { verse: 31, line: 1, start: 379.22, end: 384.25 },
  { verse: 32, line: 0, start: 384.25, end: 389.69 },
  { verse: 32, line: 1, start: 389.69, end: 395.00 },
  { verse: 33, line: 0, start: 395.00, end: 400.38 },
  { verse: 33, line: 1, start: 400.38, end: 405.75 },
  { verse: 34, line: 0, start: 405.75, end: 411.81 },
  { verse: 34, line: 1, start: 411.81, end: 417.50 },
  { verse: 35, line: 0, start: 417.50, end: 422.00 },
  { verse: 35, line: 1, start: 422.00, end: 426.50 },
  { verse: 36, line: 0, start: 426.50, end: 432.10 },
  { verse: 36, line: 1, start: 432.10, end: 437.63 },
  { verse: 37, line: 0, start: 437.63, end: 442.78 },
  { verse: 37, line: 1, start: 442.78, end: 448.00 },
  { verse: 38, line: 0, start: 448.00, end: 452.94 },
  { verse: 38, line: 1, start: 452.94, end: 458.00 },
  { verse: 39, line: 0, start: 458.00, end: 463.34 },
  { verse: 39, line: 1, start: 463.34, end: 468.75 },
  { verse: 40, line: 0, start: 468.75, end: 473.90 },
  { verse: 40, line: 1, start: 473.90, end: 479.25 },
  { verse: 41, line: 0, start: 479.25, end: 484.43 },
  { verse: 41, line: 1, start: 484.43, end: 489.75 },
  { verse: 42, line: 0, start: 489.75, end: 495.07 },
  { verse: 42, line: 1, start: 495.07, end: 500.25 }
];

const HANUMAN_VIDEO_LIBRARY = [
  {
    id: 'ram-setu-vanar-sena',
    title: 'Rama Setu — Vanar Sena Bhakti Animation',
    subtitle: 'Muted video + external synced audio',
    video: 'assets/video/ram-setu-vanar-sena.mp4',
    audio: 'assets/audio/shree-raghuvar-ki-vanar-sena.mp3',
    mantra: 'श्री रघुवर की वानर सेना',
    note: 'Video audio is muted automatically. The external bhakti audio drives the experience.'
  }
];

const DEVOTIONAL_TEXTS = [
  {id:'bajrang-baan', title:'श्री बजरंग बाण', type:'Protective Path', desc:'A powerful Hanuman Ji prayer traditionally recited for courage, protection and removal of obstacles.', lines:[
    {text:'निश्चय प्रेम प्रतीति ते, बिनय करैं सनमान।\nतेहि के कारज सकल शुभ, सिद्ध करैं हनुमान॥', meaning:'With faith and love, one prays humbly; Hanuman Ji fulfils auspicious tasks.'},
    {text:'जय हनुमंत संत हितकारी।\nसुन लीजै प्रभु अरज हमारी॥', meaning:'Victory to Hanuman, benefactor of saints. O Lord, hear my prayer.'},
    {text:'जन के काज विलम्ब न कीजै।\nआतुर दौरि महा सुख दीजै॥', meaning:'Do not delay the work of your devotee; come quickly and grant comfort.'},
    {text:'जैसे कूदि सिन्धु महिपारा।\nसुरसा बदन पैठि विस्तारा॥', meaning:'As you leapt across the ocean and overcame Surasa.'},
    {text:'आगे जाय लंकिनी रोका।\nमारेहु लात गई सुरलोका॥', meaning:'When Lankini blocked your path, you defeated the obstacle.'},
    {text:'जाय विभीषण को सुख दीन्हा।\nसीता निरखि परम पद लीन्हा॥', meaning:'You comforted Vibhishana and found Mother Sita.'},
    {text:'अक्षय कुमार मारि संहारा।\nलूम लपेटि लंक को जारा॥', meaning:'You defeated Akshay Kumar and burned Lanka with your fiery tail.'},
    {text:'लाह समान लंक जरि गई।\nजय जय धुनि सुरपुर में भई॥', meaning:'Lanka burned like wax and the heavens echoed with victory.'},
    {text:'जय जय लक्ष्मण प्राण के दाता।\nआतुर होइ दुख करहु निपाता॥', meaning:'Victory to the giver of life to Lakshman; remove the devotee’s distress.'},
    {text:'ॐ हनु हनु हनु हनुमंत हठीले।\nबैरिहिं मारु बज्र की कीले॥', meaning:'O determined Hanuman, strike down hostile forces with vajra-like power.'},
    {text:'गदा बज्र लै बैरिहिं मारो।\nमहाराज प्रभु दास उबारो॥', meaning:'With mace and thunderbolt, protect your devotee.'},
    {text:'जय जय जय हनुमंत अगाधा।\nदुःख पावत जन केहि अपराधा॥', meaning:'Victory to boundless Hanuman; protect the suffering devotee.'},
    {text:'पूजा जप तप नेम अचारा।\nनहिं जानत कछु दास तुम्हारा॥', meaning:'The devotee may not know perfect ritual, but comes with faith.'},
    {text:'वन उपवन मग गिरि गृह माहीं।\nतुम्हरे बल हम डरपत नाहीं॥', meaning:'In forests, paths, mountains or home, your strength removes fear.'},
    {text:'जय अंजनि कुमार बलवंता।\nशंकर सुवन वीर हनुमंता॥', meaning:'Victory to powerful son of Anjani, heroic Hanuman.'},
    {text:'चरण शरण कर जोरि मनावौं।\nयही अवसर अब केहि गोहरावौं॥', meaning:'I come to your feet with folded hands; you alone are my refuge.'},
    {text:'ॐ हं हनुमते नमः।\nजय बजरंग बली। जय श्री राम॥', meaning:'Salutations to Hanuman. Victory to Bajrang Bali. Victory to Shri Ram.'}
  ]},
  {id:'hanuman-stuti', title:'श्री हनुमान स्तुति', type:'Stuti', desc:'Classical Sanskrit praises describing Hanuman Ji’s speed, wisdom, strength and devotion.', lines:[
    {text:'मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्।\nवातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये॥', meaning:'I take refuge in Shri Ram’s messenger, swift as the mind and wind, master of senses, and foremost among the wise.'},
    {text:'अतुलितबलधामं हेमशैलाभदेहं दनुजवनकृशानुं ज्ञानिनामग्रगण्यम्।\nसकलगुणनिधानं वानराणामधीशं रघुपतिप्रियभक्तं वातजातं नमामि॥', meaning:'I bow to Hanuman, abode of unmatched strength, golden like a mountain, fire to demons and dear devotee of Raghupati.'},
    {text:'गोष्पदीकृतवारीशं मशकीकृतराक्षसम्।\nरामायणमहामालारत्नं वन्देऽनिलात्मजम्॥', meaning:'I salute the son of Vayu, jewel of the Ramayana, who made the ocean seem tiny.'},
    {text:'यत्र यत्र रघुनाथकीर्तनं तत्र तत्र कृतमस्तकाञ्जलिम्।\nबाष्पवारिपरिपूर्णलोचनं मारुतिं नमत राक्षसान्तकम्॥', meaning:'Wherever Raghunath’s name is sung, Hanuman stands with folded hands and tear-filled eyes.'}
  ]},
  {id:'sankat-mochan', title:'संकट मोचन हनुमान अष्टक', type:'Ashtak', desc:'A traditional prayer remembering how Hanuman Ji removes crisis and fear.', lines:[
    {text:'बाल समय रवि भक्षि लियो तब, तीनहुं लोक भयो अंधियारो।\nताहि सों त्रास भयो जग को, यह संकट काहु सों जात न टारो॥', meaning:'As a child you swallowed the sun and the worlds became dark; no one else could remove that crisis.'},
    {text:'देवन आनि करी बिनती तब, छाड़ि दियो रवि कष्ट निवारो।\nको नहिं जानत है जग में कपि, संकट मोचन नाम तिहारो॥', meaning:'The gods prayed; you released the sun. The world knows your name as Sankat Mochan.'},
    {text:'अंगद के संग लेन गये सिय, खोज कपीस यह बैन उचारो।\nजीवत ना बचिहौं हम सो जु, बिना सुधि लाय इहाँ पगु धारो॥', meaning:'You joined the search for Sita with total dedication to Shri Ram’s task.'},
    {text:'हेरी थके तट सिंधु सबै तब, लाय सिया-सुधि प्राण उबारो।\nको नहिं जानत है जग में कपि, संकट मोचन नाम तिहारो॥', meaning:'At the ocean shore when all were tired, you brought hope through Sita’s news.'}
  ]},
  {id:'ramchandra-kripalu', title:'श्री रामचन्द्र कृपालु भजु मन', type:'Ram Stuti', desc:'Beautiful Shri Ram bhajan by Goswami Tulsidas, beloved by Hanuman devotees.', lines:[
    {text:'श्री रामचन्द्र कृपालु भजु मन हरण भव भय दारुणम्।\nनव कंज लोचन कंज मुख कर कंज पद कंजारुणम्॥', meaning:'O mind, worship compassionate Shri Ram, remover of the dreadful fear of worldly existence, with lotus eyes, face, hands and feet.'},
    {text:'कंदर्प अगणित अमित छवि नव नील नीरद सुंदरम्।\nपट पीत मानहु तड़ित रुचि शुचि नौमि जनक सुतावरम्॥', meaning:'He is more beautiful than countless Cupids, like a fresh blue cloud, wearing yellow garments like lightning.'},
    {text:'भजु दीनबंधु दिनेश दानव दैत्य वंश निकन्दनम्।\nरघुनंद आनंद कंद कोशल चंद दशरथ नंदनम्॥', meaning:'Worship the friend of the humble, destroyer of demons, joy of Raghu’s line and son of Dasharath.'},
    {text:'सिर मुकुट कुंडल तिलक चारु उदारु अंग विभूषणम्।\nआजानुभुज शर चाप धर संग्राम जित खरदूषणम्॥', meaning:'With crown, earrings, tilak and ornaments, long arms holding bow and arrow, he defeated Khara and Dushana.'},
    {text:'इति वदति तुलसीदास शंकर शेष मुनि मन रंजनम्।\nमम हृदय कंज निवास कुरु कामादि खल दल गंजनम्॥', meaning:'Tulsidas prays: O delight of Shiva, Shesh and sages, dwell in my heart and destroy inner enemies.'}
  ]},
  {id:'hanuman-aarti', title:'आरती कीजै हनुमान लला की', type:'Aarti', desc:'Popular Hanuman Ji aarti for daily worship.', lines:[
    {text:'आरती कीजै हनुमान लला की।\nदुष्ट दलन रघुनाथ कला की॥', meaning:'Perform aarti of Hanuman, destroyer of evil and embodiment of Raghunath’s power.'},
    {text:'जाके बल से गिरिवर कांपे।\nरोग दोष जाके निकट न झांके॥', meaning:'By his power mountains tremble; disease and negativity do not come near.'},
    {text:'अंजनि पुत्र महा बलदाई।\nसंतन के प्रभु सदा सहाई॥', meaning:'Son of Anjani, giver of strength, helper of saints.'},
    {text:'दे बीरा रघुनाथ पठाए।\nलंका जारि सिया सुधि लाए॥', meaning:'Sent by Shri Ram, the brave one burned Lanka and brought news of Sita.'}
  ]}
];

const HANUMAN_MANTRAS = [
  {title:'ॐ हनुमते नमः',sanskrit:'ॐ हनुमते नमः',english:'Om Hanumate Namah',meaning:'Daily mantra for courage, devotion and protection.'},
  {title:'हनुमान गायत्री',sanskrit:'ॐ आञ्जनेयाय विद्महे वायुपुत्राय धीमहि। तन्नो हनुमान् प्रचोदयात्॥',english:'Om Anjaneyaya Vidmahe Vayuputraya Dhimahi, Tanno Hanuman Prachodayat.',meaning:'Meditation on Anjaneya, son of Vayu, for wisdom and inspired action.'},
  {title:'मनोजवं मारुततुल्यवेगम्',sanskrit:'मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्। वातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये॥',english:'Manojavam Maruta Tulya Vegam...',meaning:'Praises Hanuman as swift, wise, disciplined, and Shri Ram’s messenger.'},
  {title:'श्री राम जय राम',sanskrit:'श्री राम जय राम जय जय राम',english:'Shri Ram Jai Ram Jai Jai Ram',meaning:'Ram Naam jap, deeply connected to Hanuman Bhakti.'},
  {title:'संकट मोचन मंत्र',sanskrit:'ॐ नमो भगवते आञ्जनेयाय महाबलाय स्वाहा',english:'Om Namo Bhagavate Anjaneyaya Mahabalaya Swaha',meaning:'Prayer to mighty Anjaneya for strength in difficult times.'},
  {title:'रुद्रात्मक हनुमान मंत्र',sanskrit:'ॐ हं हनुमते रुद्रात्मकाय हुं फट्',english:'Om Ham Hanumate Rudratmakaya Hum Phat',meaning:'Protective mantra invoking Hanuman’s fierce energetic form.'},
  {title:'रामदूत मंत्र',sanskrit:'ॐ ऐं भ्रीम हनुमते श्री रामदूताय नमः',english:'Om Aim Bhreem Hanumate Shri Ramdootaya Namah',meaning:'Salutation to Hanuman as Shri Ram’s divine messenger.'},
  {title:'पंचमुखी स्मरण',sanskrit:'ॐ पंचमुखाय हनुमते नमः',english:'Om Panchmukhaya Hanumate Namah',meaning:'Remembrance of Panchmukhi Hanuman, symbol of multi-directional protection.'}
];

const GITA_CHAPTERS = [
  {id:1,name:'Arjuna Vishada Yoga',hindi:'अर्जुन विषाद योग'}, {id:2,name:'Sankhya Yoga',hindi:'सांख्य योग'}, {id:3,name:'Karma Yoga',hindi:'कर्म योग'}, {id:4,name:'Jnana Karma Sannyasa Yoga',hindi:'ज्ञान कर्म संन्यास योग'},
  {id:5,name:'Karma Sannyasa Yoga',hindi:'कर्म संन्यास योग'}, {id:6,name:'Dhyana Yoga',hindi:'ध्यान योग'}, {id:7,name:'Jnana Vijnana Yoga',hindi:'ज्ञान विज्ञान योग'}, {id:8,name:'Akshara Brahma Yoga',hindi:'अक्षर ब्रह्म योग'},
  {id:9,name:'Raja Vidya Raja Guhya Yoga',hindi:'राजविद्या राजगुह्य योग'}, {id:10,name:'Vibhuti Yoga',hindi:'विभूति योग'}, {id:11,name:'Vishvarupa Darshana Yoga',hindi:'विश्वरूप दर्शन योग'}, {id:12,name:'Bhakti Yoga',hindi:'भक्ति योग'},
  {id:13,name:'Kshetra Kshetrajna Vibhaga Yoga',hindi:'क्षेत्र-क्षेत्रज्ञ विभाग योग'}, {id:14,name:'Guna Traya Vibhaga Yoga',hindi:'गुणत्रय विभाग योग'}, {id:15,name:'Purushottama Yoga',hindi:'पुरुषोत्तम योग'},
  {id:16,name:'Daivasura Sampad Vibhaga Yoga',hindi:'दैवासुर सम्पद विभाग योग'}, {id:17,name:'Shraddha Traya Vibhaga Yoga',hindi:'श्रद्धात्रय विभाग योग'}, {id:18,name:'Moksha Sannyasa Yoga',hindi:'मोक्ष संन्यास योग'}
];

const GITA_VERSES = [
  {
    "chapter": 1,
    "verse": 1,
    "sanskrit": "धृतराष्ट्र उवाच।\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥",
    "hindi": "धृतराष्ट्र पूछते हैं: हे संजय, धर्मभूमि कुरुक्षेत्र में युद्ध की इच्छा से एकत्र मेरे और पाण्डु के पुत्रों ने क्या किया?",
    "english": "Dhritarashtra asks what his sons and the sons of Pandu did when they gathered on the field of dharma, Kurukshetra, ready for battle.",
    "transliteration": "Dharmakshetre Kurukshetre samaveta yuyutsavah."
  },
  {
    "chapter": 1,
    "verse": 28,
    "sanskrit": "अर्जुन उवाच।\nदृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्।\nसीदन्ति मम गात्राणि मुखं च परिशुष्यति॥",
    "hindi": "अर्जुन अपने स्वजनों को युद्ध के लिए खड़ा देखकर विषाद में डूब जाते हैं।",
    "english": "Seeing his own relatives ready to fight, Arjuna is overcome with sorrow and confusion.",
    "transliteration": "Drishtvemam svajanam Krishna yuyutsum samupasthitam."
  },
  {
    "chapter": 2,
    "verse": 13,
    "sanskrit": "देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा।\nतथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति॥",
    "hindi": "जैसे शरीर में बाल्य, युवा और वृद्धावस्था आती है, वैसे ही आत्मा दूसरा शरीर प्राप्त करती है।",
    "english": "As the embodied soul passes through childhood, youth and old age, it also passes to another body.",
    "transliteration": "Dehino asmin yatha dehe kaumaram yauvanam jara."
  },
  {
    "chapter": 2,
    "verse": 47,
    "sanskrit": "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    "hindi": "तेरा अधिकार केवल कर्म करने में है, फल में नहीं।",
    "english": "You have the right to action alone, never to its fruits.",
    "transliteration": "Karmanye vadhikaraste ma phaleshu kadachana."
  },
  {
    "chapter": 3,
    "verse": 19,
    "sanskrit": "तस्मादसक्तः सततं कार्यं कर्म समाचर।\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥",
    "hindi": "आसक्ति रहित होकर कर्तव्य कर्म करते रहो।",
    "english": "Perform your duty without attachment; such action leads toward the highest state.",
    "transliteration": "Tasmad asaktah satatam karyam karma samachara."
  },
  {
    "chapter": 3,
    "verse": 21,
    "sanskrit": "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥",
    "hindi": "श्रेष्ठ व्यक्ति जैसा आचरण करता है, लोक उसका अनुसरण करता है।",
    "english": "Whatever a great person does, others follow.",
    "transliteration": "Yad yad acharati shreshthas tat tad evetaro janah."
  },
  {
    "chapter": 4,
    "verse": 7,
    "sanskrit": "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
    "hindi": "जब-जब धर्म की हानि होती है, तब मैं प्रकट होता हूँ।",
    "english": "Whenever righteousness declines, I manifest myself.",
    "transliteration": "Yada yada hi dharmasya glanir bhavati Bharata."
  },
  {
    "chapter": 4,
    "verse": 8,
    "sanskrit": "परित्राणाय साधूनां विनाशाय च दुष्कृताम्।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥",
    "hindi": "साधुओं की रक्षा, दुष्टों के विनाश और धर्म की स्थापना के लिए मैं युग-युग में प्रकट होता हूँ।",
    "english": "For the protection of the noble and the establishment of dharma, I appear age after age.",
    "transliteration": "Paritranaya sadhunam vinashaya cha dushkritam."
  },
  {
    "chapter": 5,
    "verse": 10,
    "sanskrit": "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः।\nलिप्यते न स पापेन पद्मपत्रमिवाम्भसा॥",
    "hindi": "जो आसक्ति त्यागकर कर्म परमात्मा को अर्पित करता है, वह कमल-पत्र की तरह अलिप्त रहता है।",
    "english": "One who acts without attachment remains untouched like a lotus leaf in water.",
    "transliteration": "Brahmany adhaya karmani sangam tyaktva karoti yah."
  },
  {
    "chapter": 5,
    "verse": 18,
    "sanskrit": "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि।\nशुनि चैव श्वपाके च पण्डिताः समदर्शिनः॥",
    "hindi": "सच्चे ज्ञानी सबमें समान आत्मा देखते हैं।",
    "english": "The wise see with equal vision all living beings.",
    "transliteration": "Vidya-vinaya-sampanne brahmane gavi hastini."
  },
  {
    "chapter": 6,
    "verse": 5,
    "sanskrit": "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    "hindi": "मनुष्य को अपने द्वारा अपना उत्थान करना चाहिए; मन ही मित्र है और मन ही शत्रु।",
    "english": "One should uplift oneself by oneself; the mind can be a friend or an enemy.",
    "transliteration": "Uddhared atmanatmanam natmanam avasadayet."
  },
  {
    "chapter": 6,
    "verse": 26,
    "sanskrit": "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम्।\nततस्ततो नियम्यैतदात्मन्येव वशं नयेत्॥",
    "hindi": "चंचल मन जहाँ-जहाँ भटके, उसे फिर आत्मा में स्थिर करो।",
    "english": "Wherever the restless mind wanders, bring it back under the Self.",
    "transliteration": "Yato yato nishcharati manas chanchalam asthiram."
  },
  {
    "chapter": 7,
    "verse": 7,
    "sanskrit": "मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय।\nमयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव॥",
    "hindi": "मुझसे श्रेष्ठ कुछ भी नहीं; सब मुझमें धागे में मोतियों की तरह स्थित है।",
    "english": "There is nothing higher than the Divine; all is strung on Me like pearls on a thread.",
    "transliteration": "Mattah parataram nanyat kinchid asti Dhananjaya."
  },
  {
    "chapter": 7,
    "verse": 14,
    "sanskrit": "दैवी ह्येषा गुणमयी मम माया दुरत्यया।\nमामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते॥",
    "hindi": "मेरी त्रिगुणमयी माया कठिन है, पर शरण लेने वाले उसे पार कर जाते हैं।",
    "english": "This divine maya is hard to cross, but those who take refuge in Me cross it.",
    "transliteration": "Daivi hy esha gunamayi mama maya duratyaya."
  },
  {
    "chapter": 8,
    "verse": 5,
    "sanskrit": "अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम्।\nयः प्रयाति स मद्भावं याति नास्त्यत्र संशयः॥",
    "hindi": "जो अंत समय में मुझे स्मरण करता है, वह मेरे भाव को प्राप्त होता है।",
    "english": "Whoever remembers Me at the final moment attains My being.",
    "transliteration": "Antakale cha mam eva smaran muktva kalevaram."
  },
  {
    "chapter": 8,
    "verse": 7,
    "sanskrit": "तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च।\nमय्यर्पितमनोबुद्धिर्मामेवैष्यस्यसंशयम्॥",
    "hindi": "हर समय मेरा स्मरण करते हुए अपना कर्तव्य करो।",
    "english": "Remember Me at all times and do your duty.",
    "transliteration": "Tasmat sarveshu kaleshu mam anusmara yudhya cha."
  },
  {
    "chapter": 9,
    "verse": 22,
    "sanskrit": "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
    "hindi": "जो अनन्य भक्ति से मेरा चिंतन करते हैं, उनके योगक्षेम का वहन मैं करता हूँ।",
    "english": "For those who worship Me with single-minded devotion, I carry what they lack and preserve what they have.",
    "transliteration": "Ananyash chintayanto mam ye janah paryupasate."
  },
  {
    "chapter": 9,
    "verse": 26,
    "sanskrit": "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति।\nतदहं भक्त्युपहृतमश्नामि प्रयतात्मनः॥",
    "hindi": "भक्ति से अर्पित पत्र, पुष्प, फल या जल मैं स्वीकार करता हूँ।",
    "english": "Whoever offers a leaf, flower, fruit or water with devotion, I accept it.",
    "transliteration": "Patram pushpam phalam toyam yo me bhaktya prayachchhati."
  },
  {
    "chapter": 10,
    "verse": 8,
    "sanskrit": "अहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते।\nइति मत्वा भजन्ते मां बुधा भावसमन्विताः॥",
    "hindi": "मैं सबका स्रोत हूँ; ज्ञानी यह जानकर भक्ति करते हैं।",
    "english": "I am the source of all; knowing this, the wise worship with devotion.",
    "transliteration": "Aham sarvasya prabhavo mattah sarvam pravartate."
  },
  {
    "chapter": 10,
    "verse": 20,
    "sanskrit": "अहमात्मा गुडाकेश सर्वभूताशयस्थितः।\nअहमादिश्च मध्यं च भूतानामन्त एव च॥",
    "hindi": "मैं सभी प्राणियों के हृदय में स्थित आत्मा हूँ।",
    "english": "I am the Self seated in the hearts of all beings.",
    "transliteration": "Aham atma Gudakesha sarva-bhuta-ashaya-sthitah."
  },
  {
    "chapter": 11,
    "verse": 32,
    "sanskrit": "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्तः।\nऋतेऽपि त्वां न भविष्यन्ति सर्वे येऽवस्थिताः प्रत्यनीकेषु योधाः॥",
    "hindi": "मैं समय हूँ, लोकों का संहारक।",
    "english": "I am Time, the mighty destroyer of worlds.",
    "transliteration": "Kalo asmi loka-kshaya-krit pravriddho."
  },
  {
    "chapter": 11,
    "verse": 55,
    "sanskrit": "मत्कर्मकृन्मत्परमो मद्भक्तः सङ्गवर्जितः।\nनिर्वैरः सर्वभूतेषु यः स मामेति पाण्डव॥",
    "hindi": "जो मेरे लिए कर्म करता है, भक्त है और वैर से मुक्त है, वह मुझे प्राप्त होता है।",
    "english": "One who works for Me, is devoted and free from hatred comes to Me.",
    "transliteration": "Mat-karma-krin mat-paramo mad-bhaktah sanga-varjitah."
  },
  {
    "chapter": 12,
    "verse": 13,
    "sanskrit": "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च।\nनिर्ममो निरहङ्कारः समदुःखसुखः क्षमी॥",
    "hindi": "जो द्वेष रहित, मित्रवत, करुणामय, अहंकार रहित और क्षमाशील है, वह प्रिय भक्त है।",
    "english": "One who has no hatred, is friendly, compassionate and forgiving is dear to the Divine.",
    "transliteration": "Adveshta sarva-bhutanam maitrah karuna eva cha."
  },
  {
    "chapter": 12,
    "verse": 15,
    "sanskrit": "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः।\nहर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः॥",
    "hindi": "जो जगत को विचलित नहीं करता और जगत से विचलित नहीं होता, वह मुझे प्रिय है।",
    "english": "One who does not disturb the world and is not disturbed by it is dear to Me.",
    "transliteration": "Yasman nodvijate loko lokan nodvijate cha yah."
  },
  {
    "chapter": 13,
    "verse": 2,
    "sanskrit": "इदं शरीरं कौन्तेय क्षेत्रमित्यभिधीयते।\nएतद्यो वेत्ति तं प्राहुः क्षेत्रज्ञ इति तद्विदः॥",
    "hindi": "यह शरीर क्षेत्र है और जो इसे जानता है वह क्षेत्रज्ञ है।",
    "english": "This body is the field, and the knower of the field is the conscious self.",
    "transliteration": "Idam shariram Kaunteya kshetram ity abhidhiyate."
  },
  {
    "chapter": 13,
    "verse": 23,
    "sanskrit": "उपद्रष्टानुमन्ता च भर्ता भोक्ता महेश्वरः।\nपरमात्मेति चाप्युक्तो देहेऽस्मिन्पुरुषः परः॥",
    "hindi": "परमात्मा साक्षी, अनुमन्ता, धारक और महेश्वर है।",
    "english": "The Supreme in the body is the witness, permitter, sustainer and great Lord.",
    "transliteration": "Upadrashta anumanta cha bharta bhokta Maheshvarah."
  },
  {
    "chapter": 14,
    "verse": 5,
    "sanskrit": "सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाः।\nनिबध्नन्ति महाबाहो देहे देहिनमव्ययम्॥",
    "hindi": "सत्त्व, रज और तम ये प्रकृति के गुण आत्मा को शरीर से बांधते हैं।",
    "english": "Sattva, rajas and tamas arise from nature and bind the soul to the body.",
    "transliteration": "Sattvam rajas tama iti gunah prakriti-sambhavah."
  },
  {
    "chapter": 14,
    "verse": 26,
    "sanskrit": "मां च योऽव्यभिचारेण भक्तियोगेन सेवते।\nस गुणान्समतीत्यैतान्ब्रह्मभूयाय कल्पते॥",
    "hindi": "अविचल भक्ति से मेरी सेवा करने वाला गुणों को पार कर जाता है।",
    "english": "One who serves with unwavering devotion crosses beyond the qualities.",
    "transliteration": "Mam cha yo avyabhicharena bhakti-yogena sevate."
  },
  {
    "chapter": 15,
    "verse": 1,
    "sanskrit": "ऊर्ध्वमूलमधःशाखमश्वत्थं प्राहुरव्ययम्।\nछन्दांसि यस्य पर्णानि यस्तं वेद स वेदवित्॥",
    "hindi": "संसार-वृक्ष की जड़ ऊपर और शाखाएँ नीचे कही गई हैं।",
    "english": "The cosmic tree has roots above and branches below; one who knows it knows the Vedas.",
    "transliteration": "Urdhva-mulam adhah-shakham ashvattham prahur avyayam."
  },
  {
    "chapter": 15,
    "verse": 7,
    "sanskrit": "ममैवांशो जीवलोके जीवभूतः सनातनः।\nमनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति॥",
    "hindi": "जीव मेरा सनातन अंश है।",
    "english": "The living being is My eternal fragment.",
    "transliteration": "Mamaivamsho jiva-loke jiva-bhutah sanatanah."
  },
  {
    "chapter": 16,
    "verse": 1,
    "sanskrit": "अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः।\nदानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम्॥",
    "hindi": "निडरता, शुद्धि, ज्ञान, दान, संयम और सरलता दैवी गुण हैं।",
    "english": "Fearlessness, purity, knowledge, charity, self-control and honesty are divine qualities.",
    "transliteration": "Abhayam sattva-samshuddhir jnana-yoga-vyavasthitih."
  },
  {
    "chapter": 16,
    "verse": 21,
    "sanskrit": "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः।\nकामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्॥",
    "hindi": "काम, क्रोध और लोभ ये पतन के तीन द्वार हैं।",
    "english": "Lust, anger and greed are three gates to self-destruction.",
    "transliteration": "Trividham narakasyedam dvaram nashanam atmanah."
  },
  {
    "chapter": 17,
    "verse": 3,
    "sanskrit": "सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत।\nश्रद्धामयोऽयं पुरुषो यो यच्छ्रद्धः स एव सः॥",
    "hindi": "मनुष्य श्रद्धामय है; जैसी श्रद्धा, वैसा वह।",
    "english": "A person is made of faith; whatever one’s faith is, that one becomes.",
    "transliteration": "Sattvanurupa sarvasya shraddha bhavati Bharata."
  },
  {
    "chapter": 17,
    "verse": 15,
    "sanskrit": "अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत्।\nस्वाध्यायाभ्यसनं चैव वाङ्मयं तप उच्यते॥",
    "hindi": "सत्य, प्रिय, हितकारी और शांत वाणी ही वाणी का तप है।",
    "english": "Speech that is truthful, pleasant, beneficial and peaceful is austerity of speech.",
    "transliteration": "Anudvegakaram vakyam satyam priya-hitam cha yat."
  },
  {
    "chapter": 18,
    "verse": 66,
    "sanskrit": "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
    "hindi": "सभी धर्मों को छोड़कर मेरी शरण में आओ; शोक मत करो।",
    "english": "Take refuge in Me alone; I shall liberate you from all sin, do not grieve.",
    "transliteration": "Sarva-dharman parityajya mam ekam sharanam vraja."
  },
  {
    "chapter": 18,
    "verse": 78,
    "sanskrit": "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।\nतत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥",
    "hindi": "जहाँ कृष्ण और अर्जुन हैं, वहाँ विजय, समृद्धि और नीति है।",
    "english": "Where Krishna and Arjuna stand, there are fortune, victory, prosperity and wise policy.",
    "transliteration": "Yatra yogeshvarah Krishna yatra Partho dhanurdharah."
  }
];

const ONLINE_IMAGES = [
  {title:'Hanuman — Divine Monkey artwork',url:'https://commons.wikimedia.org/wiki/Special:FilePath/Hanuman%2C%20The%20Divine%20Monkey%20LACMA%20M.91.181.jpg?width=1200',credit:'LACMA / Wikimedia Commons, public domain'},
  {title:'Bhakta Hanuman',url:'https://commons.wikimedia.org/wiki/Special:FilePath/Bhaktha%20Hanuman.jpg?width=900',credit:'Wikimedia Commons'},
  {title:'Lord Hanuman statue',url:'https://commons.wikimedia.org/wiki/Special:FilePath/Lord%20Hanuman%20statue%20%28108-feet-high%29.jpg?width=900',credit:'Wikimedia Commons, CC BY-SA'},
  {title:'Hanuman Chalisa image',url:'https://commons.wikimedia.org/wiki/Special:FilePath/Hanuman%20Chalisa.jpg?width=900',credit:'Wikimedia Commons, CC BY-SA'},
  {title:'Hanuman carrying mountain',url:'https://commons.wikimedia.org/wiki/Special:FilePath/Hanuman%20carrying%20the%20mountain.jpg?width=900',credit:'Wikimedia Commons'},
  {title:'Hanuman Ji temple statue',url:'https://commons.wikimedia.org/wiki/Special:FilePath/Hanuman%20Ji%20at%20Batesara%20Group%20of%20Temple%2C%20Morena%2008.jpg?width=900',credit:'Wikimedia Commons'}
];

const ONLINE_AUDIO = [
  {title:'Online Hanuman Chalisa / devotional media',url:'https://commons.wikimedia.org/wiki/Special:FilePath/Best_of_P.B._Sreenivas_Devotional_Hits_-_Sri_Krishna_Ashtaga_-_Sri_Hanuman_Chalisa_-_Carnatic_Music.webm',credit:'Wikimedia Commons hosted media; browser codec/network support may vary.'}
];

const KNOWLEDGE_CARDS = [
  {icon:'🕉️',title:'Who is Hanuman Ji?',text:'Hanuman Ji is revered as the supreme devotee of Shri Ram, a central hero of the Ramayana, and a living symbol of bhakti, strength, courage, humility, wisdom, discipline and selfless service.'},
  {icon:'📿',title:'Sacred Names',text:'Popular names include Hanuman, Maruti, Anjaneya, Bajrangbali, Pavanputra, Kesari Nandan, Ramdoot, Mahavir, Sankat Mochan, Anjanisut, Kapish and Rudra Avatar.'},
  {icon:'🌬️',title:'Birth & Vayu Connection',text:'Traditions describe Hanuman Ji as the son of Anjani and Kesari, blessed by Vayu. His speed, breath, prana and fearless energy are therefore linked with the wind element.'},
  {icon:'☀️',title:'Childhood Sun Leela',text:'As a child, Hanuman Ji leapt toward the Sun, thinking it was a fruit. This story represents innocent courage, limitless energy and divine potential.'},
  {icon:'🙏',title:'Forgotten Power',text:'Several Ramayana traditions say Hanuman Ji was blessed to remember his strength only when needed. Jambavan later reminds him before the leap to Lanka.'},
  {icon:'🏹',title:'Meeting Shri Ram',text:'Hanuman Ji meets Shri Ram and Lakshman in Kishkindha and immediately recognizes divine purpose. From there his life becomes complete Ram-seva.'},
  {icon:'🤝',title:'Sugriva Alliance',text:'Hanuman Ji helps unite Shri Ram and Sugriva. This alliance becomes the foundation for the search for Mata Sita and the dharmic battle against Ravana.'},
  {icon:'🌊',title:'Ocean Leap',text:'Before crossing the ocean, Jambavan reminds Hanuman Ji of his own shakti. The leap teaches that faith awakens hidden strength.'},
  {icon:'🌺',title:'Sita Darshan',text:'In Ashoka Vatika, Hanuman Ji gives Shri Ram’s ring to Mata Sita. This moment is one of hope, humility, proof and divine reassurance.'},
  {icon:'🔥',title:'Lanka Dahan',text:'After warning Ravana, Hanuman Ji burns Lanka. It symbolizes the burning of arrogance, injustice and adharma through fearless devotion.'},
  {icon:'⛰️',title:'Sanjeevani Mountain',text:'When Lakshman is injured, Hanuman Ji carries the mountain containing Sanjeevani. This is the highest symbol of urgent, intelligent and total service.'},
  {icon:'❤️',title:'Open Chest Symbol',text:'Images showing Ram and Sita in Hanuman Ji’s heart express that his power comes from pure love, not ego.'},
  {icon:'🛡️',title:'Protector Form',text:'Devotees remember Hanuman Ji for courage, protection, fearlessness, clarity and freedom from negative tendencies.'},
  {icon:'🧠',title:'Wisdom + Strength',text:'Hanuman Ji is not only power. He is also diplomacy, humility, grammar, knowledge, memory, discipline and perfect timing.'},
  {icon:'🪔',title:'Tuesday & Saturday',text:'Tuesday and Saturday are popular days for Hanuman worship. Devotees recite Chalisa, Bajrang Baan, Hanuman Ashtak, Aarti and Ram Naam.'},
  {icon:'📖',title:'Hanuman Chalisa',text:'Hanuman Chalisa is a forty-chaupai devotional hymn traditionally attributed to Goswami Tulsidas. It praises Hanuman Ji’s virtues and asks for strength, wisdom and freedom from sorrow.'},
  {icon:'🔱',title:'Rudra Bhava',text:'Many traditions connect Hanuman Ji with Shiva or Rudra energy, expressing disciplined force used only for dharma and protection.'},
  {icon:'🌺',title:'Chiranjeevi Belief',text:'Many Hindu traditions regard Hanuman Ji as Chiranjeevi, ever-living, present wherever Shri Ram’s name is sung with devotion.'},
  {icon:'🧘',title:'Inner Lesson',text:'Hanuman Ji teaches that the mind becomes powerful when it serves dharma, remembers the Divine, and acts without selfish pride.'},
  {icon:'🪷',title:'Daily Bhakti Meaning',text:'For daily life, Hanuman bhakti means: keep the body strong, speech truthful, mind humble, work disciplined and heart surrendered to Shri Ram.'}
];

const TIMELINE = [
  {phase:'Birth & Divine Blessings',text:'Hanuman Ji is born to Anjani and Kesari, blessed by Vayu, and receives divine strength, speed and courage.'},
  {phase:'Childhood Sun Leela',text:'As a child he leaps toward the Sun, revealing fearless energy and cosmic potential.'},
  {phase:'Blessings of the Devas',text:'Traditions say various deities bless him with protection, wisdom, speed, strength and freedom from ordinary limitations.'},
  {phase:'Jambavan Reminds Him',text:'Before the leap to Lanka, Jambavan awakens Hanuman Ji’s forgotten strength. This teaches self-belief through satsang.'},
  {phase:'Meeting Shri Ram',text:'He meets Shri Ram and Lakshman and becomes the ideal sevak: alert, humble, wise and powerful.'},
  {phase:'Sugriva Alliance',text:'He helps form the alliance that begins the search for Mata Sita.'},
  {phase:'Leap to Lanka',text:'He crosses the ocean, overcoming Mainaka, Surasa and Simhika—symbols of rest, testing and shadow.'},
  {phase:'Ashoka Vatika',text:'He finds Mata Sita, gives Shri Ram’s ring, speaks with humility and brings hope.'},
  {phase:'Lanka Dahan',text:'He warns Ravana and burns Lanka, showing that devotion can become fearless fire against adharma.'},
  {phase:'Return with News',text:'He returns to Shri Ram with Sita’s message and strengthens the army with confidence.'},
  {phase:'Rama Setu',text:'The Vanar Sena builds the bridge to Lanka through collective devotion, discipline and impossible faith.'},
  {phase:'War Service',text:'In the battle, Hanuman Ji serves as warrior, messenger, healer and protector.'},
  {phase:'Sanjeevani',text:'He carries the mountain to save Lakshman, proving that true service is fast, total and fearless.'},
  {phase:'Eternal Ram Bhakt',text:'After the Ramayana, Hanuman Ji remains the timeless symbol of devotion and strength wherever Ram Naam is sung.'}
];

const TEMPLES = [
  {name:'Sankat Mochan Hanuman Temple, Varanasi',note:'Associated with the Tulsidas tradition and a major center of Hanuman devotion.'},
  {name:'Hanuman Garhi, Ayodhya',note:'Important Hanuman temple in Shri Ram’s sacred city.'},
  {name:'Salasar Balaji, Rajasthan',note:'Famous Hanuman Ji shrine visited by devotees for sankalp and blessings.'},
  {name:'Mehandipur Balaji, Rajasthan',note:'Known for intense devotional practice and Balaji worship.'},
  {name:'Jakhu Temple, Shimla',note:'Known for a tall Hanuman statue and Ramayana-linked local tradition.'},
  {name:'Mahavir Mandir, Patna',note:'Major Hanuman temple and devotional center.'},
  {name:'Namakkal Anjaneyar, Tamil Nadu',note:'Famous South Indian Anjaneya temple.'},
  {name:'Karmanghat Hanuman Temple, Hyderabad',note:'Historic Hanuman temple known for strength and protection prayers.'},
  {name:'Kashtbhanjan Hanuman, Sarangpur',note:'A prominent Hanuman temple in Gujarat with strong devotee following.'},
  {name:'Pracheen Hanuman Mandir, Connaught Place, Delhi',note:'Well-known Hanuman temple in central Delhi.'}
];

const PRACTICE_PLAN = [
  {day:'Daily',text:'11 times ॐ हनुमते नमः + one Chalisa verse reflection.'},
  {day:'Tuesday',text:'Full Hanuman Chalisa + Bajrang Baan or Hanuman Ashtak.'},
  {day:'Saturday',text:'Chalisa + Ram Naam + quiet reflection.'},
  {day:'Before exams/work',text:'Manojavam stuti + 21 Ram Naam jap for focus and courage.'},
  {day:'Night',text:'Shri Ram Jai Ram jap for peace and sleep.'}
];

const CHAKRA_FLOW = [
  {name:'मूलाधार / Root',text:'Grounding, discipline, courage'}, {name:'स्वाधिष्ठान / Flow',text:'Purity and emotional balance'}, {name:'मणिपूर / Fire',text:'Confidence, energy, sankalp'},
  {name:'अनाहत / Heart',text:'Bhakti, compassion, Ram Naam'}, {name:'विशुद्ध / Voice',text:'Mantra, truth, prayer'}, {name:'आज्ञा / Insight',text:'Focus, clarity, wisdom'}, {name:'सहस्रार / Divine',text:'Surrender, grace, silence'}
];

const CREDITS = [
  {title:'Wikimedia Commons — Hanuman category',url:'https://commons.wikimedia.org/wiki/Category:Hanuman',text:'Online Hanuman image assets and media category.'},
  {title:'Wikimedia Commons — Hanuman Chalisa audio/media',url:'https://commons.wikimedia.org/wiki/File:Best_of_P.B._Sreenivas_Devotional_Hits_-_Sri_Krishna_Ashtaga_-_Sri_Hanuman_Chalisa_-_Carnatic_Music.webm',text:'Online devotional media file used for the media player.'},
  {title:'Britannica — Hanuman',url:'https://www.britannica.com/topic/Hanuman',text:'General reference for Hanuman in Hindu mythology and Ramayana context.'},
  {title:'Wikimedia Commons — LACMA Hanuman image',url:'https://commons.wikimedia.org/wiki/File:Hanuman,_The_Divine_Monkey_LACMA_M.91.181.jpg',text:'Public-domain Hanuman artwork source.'}
];
