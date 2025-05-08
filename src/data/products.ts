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








export const categories: CategoryInfo[] = [
  {
    id: 'table',
    name: 'Masalar',
    description: 'Şık ve dayanıklı cafe masaları',
    image: 'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'chair',
    name: 'Sandalyeler',
    description: 'Konforlu ve estetik cafe sandalyeleri',
    image: 'https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'stool',
    name: 'Bar Tabureleri',
    description: 'Modern ve şık bar tabureleri',
    image: 'https://images.pexels.com/photos/7061071/pexels-photo-7061071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'set',
    name: 'Setler',
    description: 'Uyumlu ve ekonomik masa-sandalye setleri',
    image: 'https://images.pexels.com/photos/1024359/pexels-photo-1024359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
    dimensions: {
      width: 120,
      depth: 75,
      height: 75
    },
    price: 8200,
    images: [cafeTakim1, cafeTakim1_2]
  },

  {
    id: '2',
    name: 'Beyaz Gold Kare Masa Takımı',
    category: 'set',
    shortDescription: 'Minimalist tasarımlı 4 kişilik masa takımı',
    description: 'Beyaz Gold Kare Masa Takımı; sade ve şık tasarımıyla modern kafe ve iç mekan dekorasyonlarına zarafet katıyor. Parlak beyaz kare masa tablası, gold detaylı merkezi ayak yapısıyla dikkat çekerken, açık gri döşemeli sandalyeleriyle konforlu bir oturum sunar. Küçük alanlar için ideal, ferah bir masa çözümüdür.',
    material: 'MDF tabla, metal ayak (gold detaylı), kumaş döşeme',
    dimensions: {
      width: 80,
      depth: 80,
      height: 75
    },
    price: 8900,
    images: [cafeTakim2]
  },

  {
    id: '3',
    name: 'Yuvarlak Siyah Mermer Masa Takımı',
    category: 'set',
    shortDescription: 'Şık ve kompakt 2-4 kişilik masa takımı',
    description: 'Yuvarlak Siyah Mermer Masa Takımı, modern mekanlar için kompakt ve estetik bir çözüm sunar. Siyah mermer desenli yuvarlak masa tablası ve gold detaylı merkezi ayak yapısı ile dikkat çeker. Açık gri kumaş döşemeli sandalyeleri ile hem konfor hem de şıklık sağlar. Küçük alanlar, kafeler ve kahve köşeleri için idealdir.',
    material: 'MDF tabla, metal ayak (gold detaylı), kumaş döşeme',
    dimensions: {
      width: 80,
      depth: 80,
      height: 75
    },
    price: 7600,
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
    dimensions: {
      width: 120,
      depth: 75,
      height: 75
    },
    price: 7600,
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
    dimensions: {
      width: 120,
      depth: 75,
      height: 75
    },
    price: 7600,
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
    dimensions: {
      width: 120,
      depth: 75,
      height: 75
    },
    price: 7600,
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
    dimensions: {
      width: 90,
      depth: 90,
      height: 75
    },
    price: 7600,
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
    dimensions: {
      width: 90,
      depth: 90,
      height: 75
    },
    price: 7600,
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
    dimensions: {
      width: 90,
      depth: 90,
      height: 75
    },
    price: 7600,
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
    dimensions: {
      width: 90,
      depth: 90,
      height: 75
    },
    price: 7600,
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
    dimensions: {
      width: 90,
      depth: 90,
      height: 75
    },
    price: 7600,
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
    dimensions: {
      width: 90,
      depth: 90,
      height: 75
    },
    price: 7600,
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
    dimensions: {
      width: 140,
      depth: 75,
      height: 75
    },
    price: 7600,
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
    dimensions: {
      width: 140,
      depth: 75,
      height: 75
    },
    price: 7600,
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
    dimensions: {
      width: 140,
      depth: 75,
      height: 75
    },
    price: 7600,
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
      dimensions: {
        width: 45,
        depth: 50,
        height: 85
      },
      price: 7600,
      images: [sandalye1, sandalye1_2]
    },
    {
      id: '17',
      name: 'LoftLine Tel Sandalye',
      category: 'chair',
      shortDescription: 'Modern ve şık tekli sandalye',
      description: 'LoftLine Tel Sandalye – Endüstriyel tasarımı yumuşak yastık detayıyla birleştiren bu sandalye, hem rahat hem de şıktır. Metal tel sırt tasarımı sayesinde ferah bir görünüm sunar. Kafeler ve modern iç mekânlar için ideal seçimdir.',
      material: 'Metal gövde, kumaş minder, tel sırt ve kolçak tasarımı',
      dimensions: {
        width: 50,
        depth: 55,
        height: 85
      },
      price: 7600,
      images: [sandalye2, sandalye2_2]
    },
    {
      id: '18',
      name: 'GoldAura Kadife Sandalye',
      category: 'chair',
      shortDescription: 'Modern ve şık tekli sandalye',
      description: 'GoldAura Kadife Sandalye – Altın kaplama metal kolçak detayları ve kadife kumaşıyla zarif ve çağdaş bir görünüm sunar. Şık tasarımıyla restoran, otel lobi alanları veya ofis bekleme alanları için idealdir.',
      material: 'Kadife kumaş döşeme, metal ayak ve kolçak (altın kaplama)',
      dimensions: {
        width: 52,
        depth: 58,
        height: 85
      },
      price: 7600,
      images: [sandalye3]
    },
    {
      id: '19',
      name: 'RetroPop Turuncu Sandalye',
      category: 'chair',
      shortDescription: 'Modern ve şık tekli sandalye',
      description: 'RetroPop Turuncu Sandalye – Canlı rengiyle dikkat çeken, modern retro tasarıma sahip bu sandalye, kavisli sırt yapısı ve konforlu oturum yüzeyiyle öne çıkar. Kafeler, restoranlar ve yaratıcı çalışma alanları için hem estetik hem de ergonomik bir çözümdür.',
      material: 'Suni deri döşeme, metal ayaklar, ahşap kolçak detayları',
      dimensions: {
        width: 52,
        depth: 60,
        height: 85
      },
      price: 7600,
      images: [sandalye4]
    },
    {
      id: '20',
      name: 'NoirEdge Deri Kolçaklı Sandalye',
      category: 'chair',
      shortDescription: 'Modern ve şık tekli sandalye',
      description: 'NoirEdge Deri Kolçaklı Sandalye – Mat siyah suni deri döşemesi, koyu metal gövdesi ve doğal ahşap kolçaklarıyla hem zarif hem de dayanıklı bir tasarıma sahiptir. Kafeler ve ofisler için ideal bir seçimdir.',
      material: 'Suni deri döşeme, metal ayaklar, ahşap kolçaklar',
      dimensions: { width: 52, depth: 60, height: 85 },
      price: 7600,
      images: [sandalye5]
    },
    {
      id: '21',
      name: 'VerdeCraft Desenli Yeşil Sandalye',
      category: 'chair',
      shortDescription: 'Modern ve şık tekli sandalye',
      description: 'VerdeCraft Desenli Yeşil Sandalye – Parlak yeşil ve beyaz kare desenli dokusu ve beyaz çerçevesiyle taze ve enerjik bir atmosfer sunar. Renkli iç mekânlar ve yaratıcı alanlar için idealdir.',
      material: 'Kumaş döşeme, metal ayaklar, ahşap kolçaklar',
      dimensions: { width: 52, depth: 60, height: 85 },
      price: 7600,
      images: [sandalye6, sandalye6_2]
    },
    {
      id: '22',
      name: 'GraphiForm Kontrast Sandalye',
      category: 'chair',
      shortDescription: 'Modern ve şık tekli sandalye',
      description: 'GraphiForm Kontrast Sandalye – Siyah düz sırt döşemesi ve geometrik desenli oturma alanı ile kontrast tasarımı sevenler için güçlü bir tercih. Kafelerde fark yaratmak isteyenler için uygundur.',
      material: 'Kumaş döşeme, metal ayaklar, ahşap kolçaklar',
      dimensions: { width: 52, depth: 60, height: 85 },
      price: 7600,
      images: [sandalye7]
    },
    {
      id: '23',
      name: 'EmeraldEdge Yeşil Deri Sandalye',
      category: 'chair',
      shortDescription: 'Modern ve şık tekli sandalye',
      description: 'EmeraldEdge Yeşil Deri Sandalye – Zümrüt yeşili döşemesi, sade ve düz yapısıyla hem geleneksel hem modern dekorlara uyum sağlar. Metal iskeletiyle dayanıklı bir yapıya sahiptir.',
      material: 'Suni deri döşeme, metal ayaklar, ahşap kolçaklar',
      dimensions: { width: 52, depth: 60, height: 85 },
      price: 7600,
      images: [sandalye8]
    },
    {
      id: '24',
      name: 'MonoCheck Ekose Sandalye',
      category: 'chair',
      shortDescription: 'Modern ve şık tekli sandalye',
      description: 'MonoCheck Ekose Sandalye – Siyah-beyaz ekose döşemesi ve yuvarlatılmış sırt tasarımıyla nostaljiyle modernizmi harmanlar. Restoran, bar ve butik kafeler için dikkat çekici bir parça.',
      material: 'Kumaş döşeme, metal ayaklar, ahşap kolçaklar',
      dimensions: { width: 52, depth: 60, height: 85 },
      price: 7600,
      images: [sandalye9]
    },
    {
      id: '25',
      name: 'ComfyNest Berjer Takım',
      category: 'chair',
      shortDescription: 'Konforlu berjer tipi sandalye ve puf takımı',
      description: 'ComfyNest Berjer Takım – Geniş yapısı, kalın minderleri ve pufu ile konforu ön planda tutar. Oturma alanlarında, lobilerde ya da dinlenme köşelerinde rahatlıkla kullanılabilir.',
      material: 'Kumaş döşeme, metal ayaklar, sünger dolgulu iç yapı',
      dimensions: { width: 60, depth: 65, height: 85 },
      price: 7600,
      images: [sandalye10]
    },
    {
      id: '26',
      name: 'RetroPop Mor Sandalye',
      category: 'chair',
      shortDescription: 'Modern retro tarzda tekli sandalye',
      description: 'RetroPop Mor Sandalye – Canlı mor kadife döşemesi ve beyaz metal gövdesiyle dikkat çeken bu parça, özgün ve renkli mekanlar yaratmak isteyenlere hitap eder.',
      material: 'Kadife kumaş döşeme, metal ayaklar, metal kolçaklar',
      dimensions: { width: 52, depth: 60, height: 85 },
      price: 7600,
      images: [sandalye11]
    },
    {
      id: '27',
      name: 'UrbanGrey Antrasit Sandalye',
      category: 'chair',
      shortDescription: 'Sade ve çağdaş tekli sandalye',
      description: 'UrbanGrey Antrasit Sandalye – Düz antrasit rengiyle ofis ve yemek alanlarında sade şıklık sunar. İnce siyah metal iskeletiyle modern çizgiler taşır.',
      material: 'Kumaş döşeme, metal ayaklar, metal kolçaklar',
      dimensions: { width: 52, depth: 60, height: 85 },
      price: 7600,
      images: [sandalye12]
    }





];


export const getProductsByCategory = (category: ProductCategory | 'all'): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};