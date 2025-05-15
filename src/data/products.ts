import {Product, CategoryInfo, ProductCategory} from '../types';
// Yeni set ürünleri için .webp görselleri
import cafeTakim1 from '../images/cafe_takim_1.webp';
import cafeTakim1_2 from '../images/cafe_takim_1.2.webp';
import cafeTakim2 from '../images/cafe_takim_2.webp';
import cafeTakim3 from '../images/cafe_takim_3.webp';
import cafeTakim3_2 from '../images/cafe_takim_3.2.webp';
import cafeTakim4_2 from '../images/cafe_takim_4.2.webp';
import cafeTakim4 from '../images/cafe _takim_4.webp'
import cafeTakim5 from '../images/cafe_takim_5.webp';
import cafeTakim6 from '../images/cafe_takim_6.webp';
import cafeTakim7 from '../images/cafe_takim_7.webp';
import cafeTakim8 from '../images/cafe_takim_8.webp';
import cafeTakim9 from '../images/cafe_takim_9.webp';
import cafeTakim10 from '../images/cafe_takim_10.webp';
import cafeTakim11 from '../images/cafe_takim_11.webp';
import cafeTakim12 from '../images/cafe_takim_12.webp';
import cafeTakim13 from '../images/cafe_takim_13.webp';
import cafeTakim14 from '../images/cafe_takim_14.webp';
import cafeTakim15 from '../images/cafe_takim_15.webp';
import cafeTakim15_2 from '../images/cafe_takim_15.2.webp';
import cafeTakim16 from '../images/cafe_takim_16.webp';
import cafeTakim17 from '../images/cafe_takim_17.webp';
import cafeTakim18 from '../images/cafe_takim_18.webp';



import sandalye1 from '../images/sandalye_1.webp';
import sandalye1_2 from '../images/sandalye_1_2.webp';
import sandalye2 from '../images/sandalye_2.webp';
import sandalye2_2 from '../images/sandalye_2_2.webp';
import sandalye3 from '../images/sandalye_3.webp';
import sandalye4 from '../images/sandalye 4.webp';
import sandalye5 from '../images/sandalye_5.webp';
import sandalye6 from '../images/sandalye_6.webp';
import sandalye6_2 from '../images/sandalye_6.2.webp';
import sandalye7 from '../images/sandalye_7.webp';
import sandalye8 from '../images/sandalye_8.webp';
import sandalye9 from '../images/sandalye_9.webp';
import sandalye10 from '../images/sandalye_10.webp';
import sandalye11 from '../images/sandalye_11.webp';
import sandalye12 from '../images/sandalye_12.webp';
import sandalye13 from '../images/sandalye_13.webp';
import sandalye14 from '../images/sandalye_14.webp';
import sandalye15 from '../images/sandalye_15.webp';
import sandalye16 from '../images/sandalye_16.webp';
import sandalye17 from '../images/sandalye_17.webp';
import sandalye18 from '../images/sandalye_18.webp';
import sandalye19 from '../images/sandalye_19.webp';
import sandalye20 from '../images/sandalye_20.webp';
import sandalye21 from '../images/sandalye_21.webp';
import sandalye23 from '../images/sandalye_23.webp';
import sandalye25 from '../images/sandalye_25.webp';
import sandalye26 from '../images/sandalye_26.webp';
import sandalye27 from '../images/sandalye_27.webp';
import sandalye29 from '../images/sandalye_29.webp';
import sandalye30 from '../images/sandalye_30.webp';
import sandalye30_1 from '../images/sandalye_30.1.webp';
import sandalye33 from '../images/sandalye_33.webp';






import cekmeceli_okey_masa_takim_1 from  '../images/cekmeceli_okey_masa_takim_1.webp';
import cekmeceli_okey_masa_takim_2 from  '../images/cekmeceli_okey_takim_2.webp';
import cekmeceli_okey_masa_takim_3 from  '../images/cekmeceli_okey_takim_3.webp';
import cekmeceli_okey_masa_takim_4 from  '../images/cekmeceli_okey_takim_4.webp';
import cekmeceli_okey_masa_takim_4_1 from  '../images/cekmeceli_okey_takim_4_1.webp';
import cekmeceli_okey_masa_takim_5 from  '../images/cekmeceli_okey_takim_5.webp';



import cekmecesiz_okey_masa_takim_1 from  '../images/cekmecesiz_okey_masa_takim_1.webp';
import cekmecesiz_okey_masa_takim_2 from  '../images/cekmecesiz_okey_masa_takim_2.webp';
import cekmecesiz_okey_masa_takim_3 from  '../images/cekmecesiz_okey_masa_takim_3.webp';
import cekmecesiz_okey_masa_takim_4 from  '../images/cekmecesiz_okey_masa_takim_4.webp';
import cekmecesiz_okey_masa_takim_5 from  '../images/cekmecesiz_okey_masa_takim_5.webp';
import cekmecesiz_okey_masa_takim_6 from  '../images/cekmecesiz_okey_masa_takim_6.webp';






import header from '../images/header.webp'









export const categories: CategoryInfo[] = [
  {
    id: 'chair',
    name: 'Sandalyeler',
    description: 'Konf' +
        'orlu ve estetik cafe sandalyeleri',
    image: sandalye3
  },
  {
    id: 'cekmeceli_okeyset',
    name: "Çekmeceli Okey Masa Takımları",
    description: "Özel olarak tasarlanmış modern okey masa takımları.",
    image: cekmeceli_okey_masa_takim_1
  },
  {
    id: 'cekmecesiz_okeyset',
    name: "Çekmecesiz Okey Masa Takımları",
    description: "Özel olarak tasarlanmış modern okey masa takımları.",
    image: cekmecesiz_okey_masa_takim_1
  },

  {
    id: 'set',
    name: 'Setler',
    description: 'Uyumlu ve ekonomik masa-sandalye setleri',
    image: header
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Siyah Mermer X Masa Takımı',
    category: 'set',
    shortDescription: 'Modern çizgilerle tasarlanmış 4 kişilik masa-sandalye seti',
    description: 'Siyah Mermer X Masa Takımı; modern, zarif ve endüstriyel detayları bir araya getirir. Siyah mermer desenli masa tablası ve siyah metal X ayak yapısı ile dayanıklılığı ve şıklığı buluşturur. Ahşap kolçak detaylı, koyu gri döşemeli sandalyeleriyle iç ve yarı açık alan kullanımı için mükemmel bir tercihtir.',
    material: 'MDF tabla, metal ayak, kumaş döşeme, ahşap kolçak detay',
    images: [cafeTakim1, cafeTakim1_2]
  },

  {
    id: '2',
    name: 'Beyaz Gold Kare Masa Takımı',
    category: 'set',
    shortDescription: 'Minimalist tasarımlı 4 kişilik masa takımı',
    description: 'Beyaz Gold Kare Masa Takımı; sade ve şık tasarımıyla modern kafe ve iç mekan dekorasyonlarına zarafet katıyor. Parlak beyaz kare masa tablası, gold detaylı merkezi ayak yapısıyla dikkat çekerken, açık gri döşemeli sandalyeleriyle konforlu bir oturum sunar. Küçük alanlar için ideal, ferah bir masa çözümüdür.',
    material: 'MDF tabla, metal ayak (gold detaylı), kumaş döşeme',

    images: [cafeTakim2]
  },

  {
    id: '3',
    name: 'Yuvarlak Siyah Mermer Masa Takımı',
    category: 'set',
    shortDescription: 'Şık ve kompakt 2-4 kişilik masa takımı',
    description: 'Yuvarlak Siyah Mermer Masa Takımı, modern mekanlar için kompakt ve estetik bir çözüm sunar. Siyah mermer desenli yuvarlak masa tablası ve gold detaylı merkezi ayak yapısı ile dikkat çeker. Açık gri kumaş döşemeli sandalyeleri ile hem konfor hem de şıklık sağlar. Küçük alanlar, kafeler ve kahve köşeleri için idealdir.',
    material: 'MDF tabla, metal ayak (gold detaylı), kumaş döşeme',

    images: [cafeTakim3, cafeTakim3_2]
  }

  ,
  {
    id: '4',
    name: 'Doğal Ahşap X Masa Takımı',
    category: 'set',
    shortDescription: 'Rustik ve endüstriyel tarzda 4 kişilik masa takımı',
    description: 'Doğal Ahşap X Masa Takımı, sıcak ahşap tonları ve güçlü endüstriyel detaylarıyla öne çıkar. Meşe görünümlü masa tablası ile siyah metal X ayaklar uyum içinde bir bütün oluşturur. Antrasit kumaş döşemeli, ahşap kolçak detaylı sandalyeleri sayesinde uzun oturumlar için konfor sağlar. Kafeler, restoranlar ve modern yemek alanları için ideal tercihlerden biridir.',
    material: 'MDF tabla (meşe görünümlü), metal ayak, kumaş döşeme, ahşap kolçak',

    images: [cafeTakim4, cafeTakim4_2]
  }
  ,
  {
    id: '5',
    name: 'Beyaz Mermer X Masa Takımı',
    category: 'set',
    shortDescription: 'Modern ve zarif 4 kişilik masa takımı',
    description: 'Beyaz Mermer X Masa Takımı, şıklığı ve sağlamlığı bir arada sunan tasarımıyla dikkat çeker. Beyaz mermer desenli masa tablası ve siyah metal X ayak yapısıyla modern mekanlara sofistike bir dokunuş katar. Antrasit kumaş döşemeli, ahşap kolçak detaylı sandalyeleriyle hem konforlu hem de şık bir oturum sağlar. Kafeler, restoranlar ve iç mekan yemek alanları için mükemmel bir tercihtir.',
    material: 'MDF tabla (mermer desenli), metal ayak, kumaş döşeme, ahşap kolçak',

    images: [cafeTakim5]
  }
,
  {
    id: '6',
    name: 'Mat Beyaz X Masa Takımı',
    category: 'set',
    shortDescription: 'Minimalist ve modern 4 kişilik masa takımı',
    description: 'Mat Beyaz X Masa Takımı, sade ve çağdaş tasarımıyla öne çıkan bir masa-sandalye setidir. Mat beyaz yüzeyli dikdörtgen masa, siyah metal X ayak yapısı ile sağlamlık ve estetik sunar. Açık gri döşemeli, ahşap kolçaklı sandalyeleriyle hem hafiflik hem de konfor sağlar. Modern kafeler, restoranlar ve ofis yemek alanları için ideal bir tercihtir.',
    material: 'MDF tabla (mat beyaz kaplama), metal ayak, kumaş döşeme, ahşap kolçak',

    images: [cafeTakim6]
  }
,
  {
    id: '7',
    name: 'Yuvarlak Doğal Ahşap Masa Takımı',
    category: 'set',
    shortDescription: 'Sıcak ve samimi 4 kişilik yuvarlak masa takımı',
    description: 'Yuvarlak Doğal Ahşap Masa Takımı, doğal ahşap görünümü ve sade metal ayak yapısıyla sıcak, samimi ve modern bir ortam yaratır. Yuvarlak formu sayesinde hem alan tasarrufu sağlar hem de sosyal oturumlar için idealdir. Açık gri kumaş döşemeli sandalyeleriyle konforu estetikle birleştirir. Kafeler, kahve köşeleri ve ev içi kullanım için uygundur.',
    material: 'MDF tabla (doğal ahşap desenli), metal ayak, kumaş döşeme',

    images: [cafeTakim7]
  }
,
  {
    id: '8',
    name: 'Yuvarlak Siyah Mermer Masa Takımı – Palermo',
    category: 'set',
    shortDescription: 'Şık ve kompakt 4 kişilik masa takımı',
    description: 'Yuvarlak Siyah Mermer Masa Takımı – Palermo, siyah mermer desenli tablası ve sade metal ayak tasarımıyla modern ve sofistike bir görünüm sunar. Yuvarlak yapısıyla hem alan dostu hem de sosyal kullanım için idealdir. Koyu gri kumaş döşemeli sandalyeleri sade çizgileri ve rahat oturumu ile tamamlar. Kafeler, restoranlar ve modern ev ortamları için mükemmel bir seçenektir.',
    material: 'MDF tabla (siyah mermer desenli), metal ayak, kumaş döşeme',

    images: [cafeTakim8]
  }
,
  {
    id: '9',
    name: 'Yuvarlak Açık Ahşap Masa Takımı',
    category: 'set',
    shortDescription: 'Doğal ve sade tasarımlı 4 kişilik masa takımı',
    description: 'Yuvarlak Açık Ahşap Masa Takımı, doğal görünümlü tabla ve zarif metal ayak yapısıyla rustik-modern tarzı birleştirir. Koyu gri döşemeli, kolçaksız sandalyeleriyle hem yerden tasarruf sağlar hem de estetik bir duruş sunar. Kafeler, ev içi yemek alanları ve açık alanlar için uygundur.',
    material: 'MDF tabla (açık ahşap desenli), metal ayak, kumaş döşeme',

    images: [cafeTakim9]
  }
,
  {
    id: '10',
    name: 'Yuvarlak Mat Beyaz Masa Takımı',
    category: 'set',
    shortDescription: 'Aydınlık ve modern 4 kişilik masa takımı',
    description: 'Yuvarlak Mat Beyaz Masa Takımı, sade ve ferah tasarımıyla modern mekanlar için ideal bir seçimdir. Mat beyaz yuvarlak masa tablası ve siyah metal ayak yapısı ile minimal bir estetik sunar. Açık gri kumaş döşemeli, kolçaksız sandalyeleri sayesinde konforlu oturum ve hafif görünüm bir aradadır. Kafeler, mutfaklar ve iç mekan kullanımları için uygundur.',
    material: 'MDF tabla (mat beyaz), metal ayak, kumaş döşeme',

    images: [cafeTakim10]
  }
  ,
  {
    id: '11',
    name: 'Yuvarlak Beyaz Masa Takımı – Antrasit Sandalyeli',
    category: 'set',
    shortDescription: 'Kontrast renkli, modern 4 kişilik masa takımı',
    description: 'Yuvarlak Beyaz Masa Takımı – Antrasit Sandalyeli modeli, minimal beyaz masa tablası ile koyu tonlarda sandalyeleri buluşturarak çarpıcı bir kontrast sunar. Mat beyaz yuvarlak tabla, siyah metal ayaklarla desteklenirken, antrasit kumaş döşemeli kolçaksız sandalyeler modern mekânlar için sade ve şık bir çözüm sunar. Kafeler, ofis sosyal alanları ve mutfaklar için ideal tercihlerdendir.',
    material: 'MDF tabla (mat beyaz), metal ayak, kumaş döşeme',

    images: [cafeTakim11]
  }
  ,
  {
    id: '12',
    name: 'Yuvarlak Siyah Mermer Masa Takımı – Açık Gri Sandalyeli',
    category: 'set',
    shortDescription: 'Zarif ve dikkat çekici 4 kişilik masa takımı',
    description: 'Yuvarlak Siyah Mermer Masa Takımı – Açık Gri Sandalyeli modeli, siyah mermer desenli masa tablası ile zarafeti ön plana çıkarır. Siyah metal ayaklı masa, açık gri kumaş döşemeli kolçaksız sandalyelerle dengeli bir kontrast sunar. Modern kafe, restoran ve ev ortamlarına sofistike bir atmosfer kazandırmak için ideal tercihtir.',
    material: 'MDF tabla (siyah mermer desenli), metal ayak, kumaş döşeme',

    images: [cafeTakim12]
  }
  ,
  {
    id: '13',
    name: 'Beyaz Mermer Masa Takımı – Kolçaksız',
    category: 'set',
    shortDescription: 'Şık ve kompakt 4 kişilik masa takımı',
    description: 'Beyaz Mermer Masa Takımı – Kolçaksız modeli, beyaz mermer desenli masa tablası ve siyah metal ayak yapısıyla estetik ve modern bir görünüm sunar. Kolçaksız koyu gri kumaş döşemeli sandalyeleriyle yerden tasarruf sağlarken konforlu bir oturum sunar. Kafeler, restoranlar ve modern mutfaklar için şık ve işlevsel bir tercihtir.',
    material: 'MDF tabla (beyaz mermer desenli), metal ayak, kumaş döşeme',

    images: [cafeTakim13]
  }
  ,
  {
    id: '14',
    name: 'Doğal Ahşap Masa Takımı – Kolçaksız',
    category: 'set',
    shortDescription: 'Sıcak ve doğal görünümlü 4 kişilik masa takımı',
    description: 'Doğal Ahşap Masa Takımı – Kolçaksız modeli, rustik ve doğal dekorasyonu sevenler için ideal bir tercihtir. Ahşap desenli dikdörtgen masa tablası, sade siyah metal ayaklarla desteklenerek modernleştirilmiştir. Koyu gri kumaş döşemeli kolçaksız sandalyeler sayesinde alanı verimli kullanabilir, konforlu oturum sağlayabilirsiniz. Kafeler, yemek salonları ve sıcak tasarımlar için birebir.',
    material: 'MDF tabla (doğal ahşap desenli), metal ayak, kumaş döşeme',

    images: [cafeTakim14]
  }
  ,
  {
    id: '15',
    name: 'Siyah Mermer Masa Takımı – Kolçaksız',
    category: 'set',
    shortDescription: 'Modern ve sofistike 4 kişilik masa takımı',
    description: 'Siyah Mermer Masa Takımı – Kolçaksız, zarif siyah mermer desenli masa tablası ve güçlü siyah metal ayak yapısı ile modern dekorasyona kusursuz uyum sağlar. Koyu gri kumaş döşemeli, kolçaksız sandalyeleri sayesinde hem şık bir görünüm hem de yer tasarrufu sunar. Kafeler, restoranlar ve ofis yemek alanları için idealdir.',
    material: 'MDF tabla (siyah mermer desenli), metal ayak, kumaş döşeme',

    images: [cafeTakim15, cafeTakim15_2]
  }
,

    {
      id: '16',
      name: 'CafeVibe Metal Sandalye',
      category: 'chair',
      shortDescription: 'Modern ve şık tekli sandalye',
      description: 'CafeVibe Metal Sandalye – Modern bir kafeterya veya açık hava alanı için tasarlanmış, şık ve minimalist bir yapıya sahiptir. Sırt kısmındaki dekoratif detaylar, mekâna zarafet katar. Hafif yapısı sayesinde kolayca taşınabilir ve istiflenebilir. İç ve dış mekânlarda kullanıma uygundur.',
      material: 'Metal gövde, lazer kesim sırt tasarımı, statik boya',

      images: [sandalye1, sandalye1_2]
    },
    {
      id: '17',
      name: 'LoftLine Tel Sandalye',
      category: 'chair',
      shortDescription: 'Modern ve şık tekli sandalye',
      description: 'LoftLine Tel Sandalye – Endüstriyel tasarımı yumuşak yastık detayıyla birleştiren bu sandalye, hem rahat hem de şıktır. Metal tel sırt tasarımı sayesinde ferah bir görünüm sunar. Kafeler ve modern iç mekânlar için ideal seçimdir.',
      material: 'Metal gövde, kumaş minder, tel sırt ve kolçak tasarımı',

      images: [sandalye2, sandalye2_2]
    },
    {
      id: '18',
      name: 'GoldAura Kadife Sandalye',
      category: 'chair',
      shortDescription: 'Modern ve şık tekli sandalye',
      description: 'GoldAura Kadife Sandalye – Altın kaplama metal kolçak detayları ve kadife kumaşıyla zarif ve çağdaş bir görünüm sunar. Şık tasarımıyla restoran, otel lobi alanları veya ofis bekleme alanları için idealdir.',
      material: 'Kadife kumaş döşeme, metal ayak ve kolçak (altın kaplama)',

      images: [sandalye3]
    },
    {
      id: '19',
      name: 'RetroPop Turuncu Sandalye',
      category: 'chair',
      shortDescription: 'Modern ve şık tekli sandalye',
      description: 'RetroPop Turuncu Sandalye – Canlı rengiyle dikkat çeken, modern retro tasarıma sahip bu sandalye, kavisli sırt yapısı ve konforlu oturum yüzeyiyle öne çıkar. Kafeler, restoranlar ve yaratıcı çalışma alanları için hem estetik hem de ergonomik bir çözümdür.',
      material: 'Suni deri döşeme, metal ayaklar, ahşap kolçak detayları',

      images: [sandalye4]
    },
    {
      id: '20',
      name: 'NoirEdge Deri Kolçaklı Sandalye',
      category: 'chair',
      shortDescription: 'Modern ve şık tekli sandalye',
      description: 'NoirEdge Deri Kolçaklı Sandalye – Mat siyah suni deri döşemesi, koyu metal gövdesi ve doğal ahşap kolçaklarıyla hem zarif hem de dayanıklı bir tasarıma sahiptir. Kafeler ve ofisler için ideal bir seçimdir.',
      material: 'Suni deri döşeme, metal ayaklar, ahşap kolçaklar',

      images: [sandalye5]
    },
    {
      id: '21',
      name: 'VerdeCraft Desenli Yeşil Sandalye',
      category: 'chair',
      shortDescription: 'Modern ve şık tekli sandalye',
      description: 'VerdeCraft Desenli Yeşil Sandalye – Parlak yeşil ve beyaz kare desenli dokusu ve beyaz çerçevesiyle taze ve enerjik bir atmosfer sunar. Renkli iç mekânlar ve yaratıcı alanlar için idealdir.',
      material: 'Kumaş döşeme, metal ayaklar, ahşap kolçaklar',
      images: [sandalye6, sandalye6_2]
    },
    {
      id: '22',
      name: 'GraphiForm Kontrast Sandalye',
      category: 'chair',
      shortDescription: 'Modern ve şık tekli sandalye',
      description: 'GraphiForm Kontrast Sandalye – Siyah düz sırt döşemesi ve geometrik desenli oturma alanı ile kontrast tasarımı sevenler için güçlü bir tercih. Kafelerde fark yaratmak isteyenler için uygundur.',
      material: 'Kumaş döşeme, metal ayaklar, ahşap kolçaklar',
      images: [sandalye7]
    },
    {
      id: '23',
      name: 'EmeraldEdge Yeşil Deri Sandalye',
      category: 'chair',
      shortDescription: 'Modern ve şık tekli sandalye',
      description: 'EmeraldEdge Yeşil Deri Sandalye – Zümrüt yeşili döşemesi, sade ve düz yapısıyla hem geleneksel hem modern dekorlara uyum sağlar. Metal iskeletiyle dayanıklı bir yapıya sahiptir.',
      material: 'Suni deri döşeme, metal ayaklar, ahşap kolçaklar',
      images: [sandalye8]
    },
    {
      id: '24',
      name: 'MonoCheck Ekose Sandalye',
      category: 'chair',
      shortDescription: 'Modern ve şık tekli sandalye',
      description: 'MonoCheck Ekose Sandalye – Siyah-beyaz ekose döşemesi ve yuvarlatılmış sırt tasarımıyla nostaljiyle modernizmi harmanlar. Restoran, bar ve butik kafeler için dikkat çekici bir parça.',
      material: 'Kumaş döşeme, metal ayaklar, ahşap kolçaklar',
      images: [sandalye9]
    },
    {
      id: '25',
      name: 'ComfyNest Berjer Takım',
      category: 'chair',
      shortDescription: 'Konforlu berjer tipi sandalye ve puf takımı',
      description: 'ComfyNest Berjer Takım – Geniş yapısı, kalın minderleri ve pufu ile konforu ön planda tutar. Oturma alanlarında, lobilerde ya da dinlenme köşelerinde rahatlıkla kullanılabilir.',
      material: 'Kumaş döşeme, metal ayaklar, sünger dolgulu iç yapı',
      images: [sandalye10]
    },
    {
      id: '26',
      name: 'RetroPop Mor Sandalye',
      category: 'chair',
      shortDescription: 'Modern retro tarzda tekli sandalye',
      description: 'RetroPop Mor Sandalye – Canlı mor kadife döşemesi ve beyaz metal gövdesiyle dikkat çeken bu parça, özgün ve renkli mekanlar yaratmak isteyenlere hitap eder.',
      material: 'Kadife kumaş döşeme, metal ayaklar, metal kolçaklar',
      images: [sandalye11]
    },
  {
    id: '27',
    name: 'UrbanSteel Gri Sandalye',
    category: 'chair',
    shortDescription: 'Düz sırtlı ve ince çerçeveli modern sandalye',
    description: 'Mat siyah metal ayaklar ve kolçaklar üzerine oturan düz formda sırt yapısı, açık gri kumaş kaplama ile birleşerek sade ve hafif bir tasarım sunar. Kolçaklar metaldir ve ince formda olup sırtla tek çizgide birleşir.',
    material: 'Döşemeli kumaş oturum ve sırt, metal çerçeve ve kolçaklar',
    images: [sandalye12]
  },
  {
    id: '28',
    name: 'NoirLuxe Deri Sandalye',
    category: 'chair',
    shortDescription: 'Kalın yastıklı ve sırt eğimli deri sandalye',
    description: 'Yumuşak dolgulu oturumu ve geniş silindirik sırt desteği ile dikkat çeker. Tüm yüzey siyah suni deri kaplıdır. Düz, hafif açılı ayaklar onu sağlam ve modern kılar.',
    material: 'Suni deri döşeme, metal ayak',
    images: [sandalye13]
  }
  ,
  {
    id: '29',
    name: 'SoftWeave Kumaş Sandalye',
    category: 'chair',
    shortDescription: 'İnce sırtlı, kavisli kenarlı sandalyeler',
    description: 'Yumuşak antrasit döşemesi, ince sırt yapısı ve hafif arkaya doğru eğimli tasarımı ile zarif bir duruş sunar. Oturma kısmı ve sırt kısmı oval formdadır ve sandalyenin tüm yapısı minimal ve kompakt bir izlenim bırakır.',
    material: 'Dokulu kumaş döşeme, metal ayaklar',
    images: [sandalye14]
  }
  ,  {
    id: '30',
    name: 'MidWood Kollu Sandalye',
    category: 'chair',
    shortDescription: 'Ahşap kol detaylı dik sırtlı sandalye',
    description: 'Dik sırt formu, tok oturum yapısı ve siyah metal gövdesi ile birlikte doğal ahşap kolçaklarla desteklenmiştir. Ergonomik ama keskin hatlara sahiptir. Sandalyenin ayakları yere dik iner.',
    material: 'Kumaş döşeme, siyah metal iskelet, doğal ahşap kolçak',
    images: [sandalye15]
  }
  ,
  {
    id: '31',
    name: 'GridForm Gri Kollu Sandalye',
    category: 'chair',
    shortDescription: 'Kare dikişli sırt detaylı geniş sandalye',
    description: 'Hem sırt hem oturum kısmı kalın dolgulu ve kare dikiş desenlidir. Siyah metal çerçevesi düz ve sade hatlara sahiptir. Kolçaklar ince siyah metaldir. Sandalyenin genel görünümü maskülen ve doludur.',
    material: 'Fileli gri kumaş döşeme, metal iskelet ve kolçak',
    images: [sandalye16]
  }
  ,  {
    id: '32',
    name: 'RetroSoft Dikişli Sandalye',
    category: 'chair',
    shortDescription: 'Ahşap ayaklı, kadife görünümlü dikiş detaylı sandalye',
    description: 'RetroSoft Sandalye – Yumuşak dokulu kumaşı, sırt kısmındaki dikey dikiş detayları ve klasik ahşap ayak yapısı ile nostaljik ama modern bir görünüm sunar. Küçük alanlarda sıcaklık hissi yaratmak isteyenler için idealdir.',
    material: 'Kadifemsi kumaş döşeme, masif ahşap ayaklar',
    images: [sandalye17]
  }
  ,
  {
    id: '33',
    name: 'GoldenArm Deri Sandalye',
    category: 'chair',
    shortDescription: 'Altın renk metal kollu, kahverengi deri sandalye',
    description: 'GoldenArm Sandalye – Sıcak kahverengi suni deri döşemesi ve dikkat çekici altın renkli metal kolçaklarıyla sofistike bir görünüm sunar. Modern restoranlar, otel lobileri ve seçkin iç mekânlar için zarif bir tercihtir.',
    material: 'Suni deri döşeme, siyah metal ayak, altın renkli metal kolçak',
    images: [sandalye18]
  },

  {
    id: '34',
    name: 'CafeStack Metal Sandalye',
    category: 'chair',
    shortDescription: 'Dış mekan için istiflenebilir metal sandalye',
    description: 'CafeStack Sandalye – Kırmızı lake metal yüzeyi ve kompakt yapısıyla özellikle kafe ve açık alan kullanımı için uygundur. İstiflenebilir tasarımı ile pratik depolama imkânı sağlar.',
    material: 'Boyalı metal gövde, istiflenebilir tasarım',
    images: [sandalye19]
  }
,
  {
    id: '35',
    name: 'Olivetto Retro Kollu Sandalye',
    category: 'chair',
    shortDescription: 'Retro tarzda hasır sırtlı yeşil sandalye',
    description: 'Olivetto Sandalye – Hardal tonlarında metal ayak ve kolçaklarla bütünleşen hasır örgü sırt detayı ve yeşil oturum minderi ile retro estetik sunar.',
    material: 'Metal gövde, örgü sırt, kadife oturum',
    images: [sandalye20]
  }
  ,
  {
    id: '36',
    name: 'VerdeLine Kollu Sandalye',
    category: 'chair',
    shortDescription: 'Modern çizgili zeytin yeşili sandalye',
    description: 'VerdeLine Sandalye – Yüksek sırt destekli, ince metal iskeletli ve tok görünümlü yeşil döşemesiyle modern bir estetik sunar. Kavisli kolçakları ve tel ayak tasarımı dikkat çeker.',
    material: 'Kadife döşeme, metal ayak ve tel iskelet',
    images: [sandalye21]
  }
  ,

  {
    id: '38',
    name: 'GraphitDot Doku Sandalye',
    category: 'chair',
    shortDescription: 'Siyah-beyaz desenli kumaşlı sandalye',
    description: 'GraphitDot Sandalye – Siyah zeminde beyaz nokta desenli dokulu kumaşıyla dikkat çeken bu model, hafif yapısı ve minimal hatlarıyla modern mekanlarda öne çıkar.',
    material: 'Dokulu kumaş döşeme, siyah metal ayaklar',
    images: [sandalye23]
  }

  ,
  {
    id: '39',
    name: 'CreamShell Boucle Sandalye',
    category: 'chair',
    shortDescription: 'Modern tasarımlı açık renk boucle kumaş sandalye',
    description: 'CreamShell Sandalye – Açık renkli boucle kumaşı, yumuşak hatlı sırt yapısı ve siyah metal ayakları ile çağdaş iç mekanlar için zarif bir seçimdir. Kolçaklı yapısıyla konfor sunarken, açık tonları ferah bir atmosfer yaratır.',
    material: 'Boucle (döngülü) kumaş, metal ayak, metal kolçak',
    images: [sandalye25]
  }
  ,

  {
    id: '40',
    name: 'GoldLoop Bej Boucle Sandalye',
    category: 'chair',
    shortDescription: 'Altın detaylı boucle kumaş modern sandalye',
    description: 'GoldLoop Sandalye – Bej tonlardaki boucle kumaşı ve altın sarısı metal kolçak kaplaması ile lüks bir dokunuş sunar. İnce hatları ve modern yapısı ile hem otel hem de üst segment restoranlarda şıklık yaratır.',
    material: 'Boucle kumaş döşeme, metal ayak, altın detaylı metal kolçak',
    images: [sandalye26]
  }

  ,
  {
    id: '41',
    name: 'SnowLoop Boucle Sandalye',
    category: 'chair',
    shortDescription: 'Yuvarlak formlu boucle kumaşlı sandalye',
    description: 'SnowLoop Sandalye – Dairesel oturum ve sırt yapısıyla retro-modern estetiği bir araya getirir. Beyaz-gri boucle kumaşı sıcak bir dokunuş sunarken, sade metal ayaklarıyla minimal bir duruş sergiler.',
    material: 'Boucle döşeme kumaş, metal ayak',
    images: [sandalye27]
  }

  ,

  {
    id: '42',
    name: 'RubyLine Kadife Sandalye',
    category: 'chair',
    shortDescription: 'Canlı kırmızı kadife döşemeli şık sandalye',
    description: 'RubyLine Sandalye – Canlı kırmızı kadife kumaşı ve silindirik sırt desteği ile oturma alanlarında enerji ve cesaret sunar. Siyah ayak yapısı sayesinde dramatik bir kontrast oluşturur.',
    material: 'Kadife kumaş döşeme, siyah metal ayak',
    images: [sandalye29]
  }


  ,
  {
    id: '43',
    name: 'PetalBack ColorStack Sandalye',
    category: 'chair',
    shortDescription: 'Renkli sırt dikişli kadife sandalye (istiflenebilir)',
    description: 'PetalBack ColorStack Sandalye – Yelpaze formundaki sırt yapısı ve yumuşak dikey dikiş detayları ile öne çıkan bu model, bordo, petrol mavisi ve hardal sarısı gibi enerjik renk seçenekleriyle sunulur. Kadifemsi dokusu ve siyah ayakları modern iç mekanlarda hem estetik hem de işlevsellik sunar. Üst üste konulabilen yapısıyla restoran, kafe ve etkinlik alanları için idealdir.',
    material: 'Kadife kumaş döşeme, metal ayak (mat siyah boya), istiflenebilir yapı',
    images: [sandalye30, sandalye30_1]
  }
,
  {
    id: '55',
    name: 'Lux Velvet Bar Chair',
    category: 'chair',
    shortDescription: 'Lüks siyah kadife döşeme ve altın metal ayaklı bar sandalyesi.',
    description: 'Modern çizgilere sahip Lux Velvet Bar Chair, siyah kadife döşemesi ve parlak altın kaplamalı metal ayaklarıyla dikkat çeker. Yumuşak dolgu kollukları ve sırt desteğiyle üst düzey konfor sunan bu sandalye, şık mekanlar, oteller ve mutfak adaları için mükemmel bir seçimdir.',
    material: 'Kadife döşeme, altın kaplamalı metal ayaklar',
    images: [sandalye33]
  },



  {
    id: '45',
    name: 'Urban Deri Detaylı Okey Masa Takımı',
    category: 'cekmecesiz_okeyset',
    shortDescription: 'Modern çizgilere sahip, deri kayış detaylı sandalye kombinasyonu.',
    description: 'Modern kafeler ve sosyal alanlar için tasarlanmış, doğal ahşap masa ve deri kayış sırt destekli sandalyelerden oluşan dayanıklı ve estetik bir takımdır.',
    material: 'Laminat ahşap tabla, metal ayaklar, deri sırt kayışlı sandalye',
    images: [cekmecesiz_okey_masa_takim_1]
  },
  {
    id: '46',
    name: 'Verona Kadife Sandalyeli Okey Masa Takımı',
    category: 'cekmecesiz_okeyset',
    shortDescription: 'Yumuşak oturum sağlayan kadife kumaşlı sandalyelerle şık kombin.',
    description: 'Estetik ve konforu bir arada sunan bu takım, ahşap yüzeyli masa ve zarif yeşil kadife sandalyeleriyle iç mekânlarda şıklık arayan işletmeler için ideal tercihtir.',
    material: 'Laminat tabla, metal ayak, kadife döşeme sandalye',
    images: [cekmecesiz_okey_masa_takim_2]
  },
  {
    id: '47',
    name: 'Linea Metal Sırtlı Okey Masa Takımı',
    category: 'cekmecesiz_okeyset',
    shortDescription: 'Modern çizgiler taşıyan tel sırtlı sandalye tasarımı.',
    description: 'Minimal ve endüstriyel dekorasyonlara uygun, siyah metal sırtlı sandalyeler ve doğal görünümlü masa ile işlevselliği ve modernliği bir arada sunar.',
    material: 'Laminat tabla, elektrostatik boyalı metal ayak ve sandalye',
    images: [cekmecesiz_okey_masa_takim_3]
  },
  {
    id: '48',
    name: 'Natura Kolçaklı Okey Masa Takımı',
    category: 'cekmecesiz_okeyset',
    shortDescription: 'Geniş oturumlu kolçaklı sandalyelerle klasik kullanım.',
    description: 'Kolçaklı döşemeli sandalyeleriyle uzun oturumlar için konfor sağlayan bu takım, restoran ve oyun salonları gibi kalabalık kullanıma uygun alanlarda şıklık ve sağlamlığı bir araya getirir.',
    material: 'Ahşap tabla, kumaş kaplama kolçaklı sandalye, metal konstrüksiyon',
    images: [cekmecesiz_okey_masa_takim_4]
  },
  {
    id: '49',
    name: 'Armonia Kadife Detaylı Okey Masa Takımı',
    category: 'cekmecesiz_okeyset',
    shortDescription: 'Yumuşak hatlara sahip masa ve kadife oturumlu sandalyeler.',
    description: 'Organik hatlara sahip masa ve döşemeli kadife sandalyeleriyle zarafet ve konfor arayan işletmeler için tasarlanmıştır. Bekleme alanları, sosyal mekanlar ve premium kafelerde kullanıma uygundur.',
    material: 'Ahşap tabla, siyah metal ayak, kadife kumaş kaplama sandalye',
    images: [cekmecesiz_okey_masa_takim_5]
  },
  {
    id: '50',
    name: 'Elegan Yuvarlak Çekmeceli Okey Masa Takımı',
    category: 'cekmeceli_okeyset',
    shortDescription: 'Yuvarlak formda, çekmeceli ve döşemeli kolçaklı sandalye kombinasyonu.',
    description: 'Kompakt yapısı ve konforlu kolçaklı sandalyeleriyle dikkat çeken bu takım, koyu ahşap görünüm ve metal destekli ayaklarla tamamlanır. Oyun sırasında konfor ve düzeni ön planda tutar.',
    material: 'Yuvarlak kompakt laminat tabla, elektrostatik boyalı metal ayak, kumaş döşemeli kolçaklı sandalye, çekmece modülü',

    images: [cekmeceli_okey_masa_takim_1]
  },
  {
    id: '51',
    name: 'Milano Desenli Koltuklu Çekmeceli Okey Masa Takımı',
    category: 'cekmeceli_okeyset',
    shortDescription: 'Koltuk konforunda oturum sağlayan desenli sandalye yapısı.',
    description: 'Kalabalık ve yoğun kullanım alanları için üretilmiş, yüksek konfor düzeyi sağlayan döşemeli sandalyeleri ve merkezden açılan çekmeceleriyle hem estetik hem işlevsel bir tasarım sunar.',
    material: 'Kare laminat tabla, metal ayak, döşemeli koltuk tipi sandalye, içten çekmeceli mekanizma',

    images: [cekmeceli_okey_masa_takim_2]
  },
  {
    id: '52',
    name: 'Prestige Köşeli Mermer Desenli Okey Masa Takımı',
    category: 'cekmeceli_okeyset',
    shortDescription: 'Mermer desenli tabla ve ahşap kol detaylı koltuk yapısı.',
    description: 'Görsel bütünlüğü ön planda tutan, mermer desenli laminat tabla ve içe gömülü çekmeceli yapısıyla profesyonel ortamlara uygun şık bir masa takımıdır.',
    material: 'Köşeli mermer desenli tabla, metal ayak, döşemeli kolçaklı sandalye, ahşap kol detayları, entegre çekmece',

    images: [cekmeceli_okey_masa_takim_3]
  },
  {
    id: '53',
    name: 'Avantgarde Altıgen Çekmeceli Okey Masa Takımı',
    category: 'cekmeceli_okeyset',
    shortDescription: 'Altıgen formda, ahşap kollu ve çekmeceli fonksiyonel tasarım.',
    description: 'Altıgen yüzeyi sayesinde tüm oyunculara eşit alan sağlayan bu takım; sade, güçlü bir duruş ile birlikte yüksek konforlu oturum sunar. Profesyonel oyun salonlarına ve otel lobilerine önerilir.',
    material: 'Altıgen laminat tabla, siyah metal gövde, kol destekli döşemeli sandalye, çekmeceli mekanizma',

    images: [cekmeceli_okey_masa_takim_4_1, cekmeceli_okey_masa_takim_4]
  },
  {
    id: '54',
    name: 'Noble Lacivert Döşemeli Çekmeceli Okey Masa Takımı',
    category: 'cekmeceli_okeyset',
    shortDescription: 'Kontrast detaylarla tasarlanmış modern ve fonksiyonel set.',
    description: 'Lacivert oturum kumaşı, doğal ahşap kolçak geçişleri ve siyah metal ayak yapısıyla modern tasarımın işlevsellikle birleştiği bu takım, premium işletmeler için önerilir.',
    material: 'Mermer desenli tabla, siyah metal ayaklar, döşemeli sandalye, renk geçişli kolçaklar, entegre çekmece',

    images: [cekmeceli_okey_masa_takim_5]
  },
  {
    id: '56',
    name: 'Elegant Cafe Lounge Set',
    category: 'set',
    shortDescription: 'Zarif mermer desenli yuvarlak masa ve konforlu döşemeli sandalyelerden oluşan lounge set.',
    description: 'Elegant Cafe Lounge Set, zarif ve çağdaş tasarımıyla öne çıkan yuvarlak masa ve döşemeli sandalyelerden oluşur. Siyah metal detaylar ve doğal mermer görünümü sayesinde bulunduğu ortama sofistike bir hava katar. Şık kafeler, lobi alanları ve butik otellerde estetik ve konforu bir araya getirir.',
    material: 'Mermer görünümlü masa tablası, metal ayaklar, döşemeli kumaş sandalye',
    images: [cafeTakim16]
  },
  {
    id: '57',
    name: 'Nordic Wood Dining Set',
    category: 'set',
    shortDescription: 'Ahşap yuvarlak masa ve modern çizgilere sahip döşemeli sandalyelerden oluşan şık yemek takımı.',
    description: 'Nordic Wood Dining Set, doğallığı ve modern şıklığı bir araya getirir. Ahşap yuvarlak masa tablası ve siyah çizgili güçlü ayak tasarımıyla öne çıkar. Gri tonlarında döşemeli, metal iskeletli sandalyeleriyle hem estetik hem konforlu bir oturum sunar. Modern mutfaklar, yemek odaları ve şık cafe alanları için mükemmel bir tercihtir.',
    material: 'Ahşap masa tablası, siyah metal masa ayağı, kumaş döşemeli metal sandalye',
    images: [cafeTakim17]
  },
  {
    id: '58',
    name: 'Black Marble Dining Set',
    category: 'set',
    shortDescription: 'Siyah mermer desenli yuvarlak masa ve modern döşemeli sandalyelerden oluşan zarif yemek takımı.',
    description: 'Black Marble Dining Set, siyah mermer desenli yuvarlak masa tablası ve zarif çizgilere sahip döşemeli sandalyeleriyle modern mekanlara sofistike bir dokunuş katıyor. Siyah metal gövdeye sahip masa ve gri tonlarında konforlu sandalyeleri, şık mutfaklar, restoranlar ve cafe alanları için mükemmel bir tercih oluşturur.',
    material: 'Siyah mermer desenli masa tablası, siyah metal masa ayağı, kumaş döşemeli metal sandalye',
    images: [cafeTakim18]
  },
  {
    id: '59',
    name: 'Classic Okey Masa Takımı',
    category: 'cekmecesiz_okeyset',
    shortDescription: 'Ceviz desenli masa ve siyah döşemeli sandalyelerden oluşan klasik çekmecesiz okey masa takımı.',
    description: 'Classic Okey Masa Takımı, ceviz desenli kare masa ve siyah kumaş döşemeli sandalyeleriyle sıcak ve zarif bir ortam yaratır. Çekmecesiz tasarımıyla şık bir görünüm sunarken, dayanıklı masa tablası ve ergonomik sandalyeleriyle uzun süreli konfor sağlar. Cafe, oyun salonu ve sosyal alanlar için ideal bir tercihtir.',
    material: 'Ceviz desenli MDF masa tablası, metal ayaklı kumaş döşemeli sandalye',
    images: [cekmecesiz_okey_masa_takim_6]
  },










];


export const getProductsByCategory = (category: ProductCategory | 'all'): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};