const data = [
  {
    name: "Room in house",
    id: 1,
    bathrooms: 1,
    bedrooms: 1,
    beds: 1,
    neighborhood: "Châtelet - Les Halles - Beaubourg",
    city: "Barcelona",
    images: [
      "https://fotos.hoteles.net/articulos/playa-barceloneta-barcelona-3153-1.jpg",
      "https://media.revistaad.es/photos/60c2285502ca0c0a1c056de4/master/w_1600%2Cc_limit/254668.jpg",
      "https://fotos.hoteles.net/articulos/guia-barcelona-ciudad-2400-1.jpg",
      "http://viaturi.com/wp-content/uploads/2017/03/Gaudis-Barcelona.jpg",
      "https://static.dw.com/image/37771263_303.jpg",
    ],
    isSuperhost: true,
    reviewsCount: 77,
    rating: 4.25,
    type: "Entire rental unit",
    previewAmenities: [
      {
        0: "Wifi",
        1: "Heating",
        2: "Kitchen",
        3: "Washer",
      },
    ],
    price: {
      currency: "USD",
      total: 45,
    },
  },
  {
    name: "Hotel in the ocean",
    id: 2,
    city: "Islas Maldivas",
    images: [
      "https://revistaelconocedor.com/wp-content/uploads/2018/02/maldivas7-1024x683.jpg",
      "https://trabajarporelmundo.org/wp-content/uploads/2013/07/maldives.jpg",
      "https://i0.wp.com/moovemag.com/wp-content/uploads/2019/05/maldivas-caba%C3%B1a-en-el-mar.jpg?fit=700%2C525&ssl=1",
      "https://ipparaguay.com.py/wp-content/uploads/2022/10/Islas-Maldivas-donde-queda.jpg",
    ],
    isSuperhost: false,
    rating: 4.74,
    type: "Entire rental unit",
    previewAmenities: [
      {
        0: "Wifi",
        1: "Heating",
      },
    ],
    price: {
      currency: "USD",
      total: 76,
    },
  },
  {
    name: "hotel room",
    id: 3,
    city: "Rio de janeiro",
    images: [
      "https://www.orangesmile.com/extreme/img/w600/copacabana-beach_1.jpg",
      "https://media.traveler.es/photos/61377892ccdecaa3de671da2/master/pass/100283.jpg",
      "https://photo620x400.mnstatic.com/087dfd415e06b0651f4528fea6642818/rio-de-janeiro.jpg?quality=70&format=pjpg",
      "https://www.cronista.com/files/image/302/302492/5ffe1e5aec0ab.webp?oe=jpg",
      "https://img.welt.de/img/reise/staedtereisen/mobile102068594/5862500327-ci102l-w1024/rio-copacabana-jpg-DW-Reise-Rio-de-Janeiro-jpg.jpg",
    ],
    isSuperhost: false,
    rating: 4.32,
    type: "Entire rental unit",
    previewAmenities: [
      {
        0: "Wifi",
        1: "Heating",
        2: "breakfast",
      },
    ],
    price: {
      currency: "USD",
      total: 46,
    },
  },
  {
    name: "Room house",
    id: 4,
    city: "Edimburgo",
    images: [
      "https://i0.wp.com/viajealpatrimonio.com/wp-content/uploads/2017/04/0265-ciudad-vieja-y-ciudad-nueva-de-edimburgo.jpg",
      "https://turismo.eurodicas.com.br/wp-content/uploads/2019/10/edimburgo.jpg",
      "https://101lugaresincreibles.com/wp-content/uploads/2021/01/razones-visitar-edimburgo.jpg",
      "https://i.pinimg.com/736x/6b/db/77/6bdb774eb716e643c2e48a5ef50700da.jpg",
      "https://academiaplay.es/wp-content/uploads/2019/09/Royal-Mile-Edimburgo.jpg",
    ],
    isSuperhost: true,
    rating: 4.58,
    type: "Entire rental unit",
    previewAmenities: [
      {
        0: "Wifi",
        1: "Heating",
        2: "Washer",
        3: "Heating",
      },
    ],
    price: {
      currency: "USD",
      total: 67,
    },
  },
  {
    name: "Studio apartment",
    id: 5,
    city: "Roma",
    images: [
      "https://historia.nationalgeographic.com.es/medio/2020/04/24/foro-romano_d37dd909_1200x630.jpg",
      "https://unapausaagradable.es/wp-content/uploads/2020/08/por-que-roma-es-la-ciudad-eterna-1160x711.jpg",
      "https://okdiario.com/img/2019/08/01/roma.jpg",
      "https://tourscanner.com/blog/wp-content/uploads/2021/03/Que-ver-en-Roma.jpg",
      "https://elviajerofeliz.com/wp-content/uploads/2022/01/Diseno-sin-titulo-2022-01-23T223321.964.jpg",
      "https://a0.muscache.com/im/pictures/2970ec03-e371-4f5f-bddf-030250f37cd4.jpg?im_w=720",
    ],
    isSuperhost: false,
    rating: 4.94,
    type: "Entire rental unit",
    previewAmenities: [
      {
        0: "Wifi",
        1: "Heating",
      },
    ],
    price: {
      currency: "USD",
      total: 77,
    },
  },
  {
    name: "Commerce - Dupleix",
    id: 6,
    city: "Rome",
    images: [
      "https://a0.muscache.com/im/pictures/c027a6cf-1a06-4228-9cdd-b39f95b0b4dc.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/121c58d3-f351-4b7f-aa76-9eeba23cdf30.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/08f9813e-d2c7-4d65-80f4-8c5a14692ab2.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31868079/original/4b415d12-69ad-4a6f-8d96-c4da19cd51dd.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31868079/original/639a87d5-ea0e-43b2-8f80-eeb6fa250e4c.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/83941d3c-8124-482f-a2e3-c9c20aaca937.jpg?im_w=720",
    ],
    isSuperhost: false,
    rating: 4.25,
    type: "Entire rental unit",
    previewAmenities: [
      {
        0: "Wifi",
        1: "Heating",
      },
    ],
    price: {
      currency: "USD",
      total: 76,
    },
  },
  {
    name: "Room in boutique hotel",
    id: 7,
    city: "Amsterdam",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-43449093/original/49a62f19-7135-45ae-9811-441891d5279d.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/4a07fe2a-8c53-47ff-9093-7e1732972f4d.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/e8e77ec9-966c-407e-9ff6-f75231b9fbb5.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/f37c0947-9f4e-409a-b98e-8db0f37d3e8f.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/daa9323f-e8be-4c3d-9068-f6331ad5316a.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/c3b8456c-4979-458e-a739-1528ac6672cc.jpg?im_w=720",
    ],
    isSuperhost: false,
    rating: 4.56,
    type: "Entire rental unit",
    previewAmenities: [
      {
        0: "Wifi",
        1: "Heating",
      },
    ],
    price: {
      currency: "USD",
      total: 49,
    },
  },
  {
    name: "MAGNIFICENT VIEW EIFFEL TOWER PRIVATE STUDIO AND BALCONY",
    id: 8,
    city: "Londres",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-19796151/original/e92d2f61-68b1-4977-ade9-e7bad78bd637.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-19796151/original/ac05b3bc-8c61-4043-8052-b6e5e4268a63.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-19796151/original/7f22b05c-92c0-4445-9fb1-fd4e43f8968e.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-19796151/original/b11b9c72-0b16-4ba3-8823-84a9050e8672.jpeg?im_w=720",
    ],
    isSuperhost: false,
    rating: 4.44,
    type: "Entire rental unit",
    previewAmenities: [
      {
        0: "Wifi",
        1: "Heating",
      },
    ],
    price: {
      currency: "USD",
      total: 63,
    },
  },
  {
    name: "Charm in Heart of Paris Vaugirard",
    id: 9,
    city: "Colmar",
    images: [
      "https://a0.muscache.com/im/pictures/21f05d85-1f77-481f-9156-c590f76ddd63.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/55368e1c-ecfa-43ec-8a87-e4695deca077.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/6b567724-cbba-488d-9fea-7a788476a38e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/816cd6b8-8fc9-4df2-a9c3-06799ebd2c42.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/b54ce644-5778-4f9b-b882-78e152e548e8.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/61d831c6-ddde-49f8-80a4-7a55d18df8f0.jpg?im_w=720",
    ],
    isSuperhost: false,
    rating: 4.94,
    type: "Entire rental unit",
    previewAmenities: [
      {
        0: "Wifi",
        1: "Heating",
      },
    ],
    price: {
      currency: "USD",
      total: 72,
    },
  },
  {
    name: "Room in the heart of Paris",
    id: 10,
    city: "Paris",
    images: [
      "https://a0.muscache.com/im/pictures/bfb3bdd5-22a6-4d02-8369-21d56660f34b.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/f65c5dd7-9235-4f14-a2dc-ebe670756bc3.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/c03fd951-8bf3-45bb-8d33-df93c4e75184.jpg?im_w=720",
    ],
    isSuperhost: false,
    rating: 4.74,
    type: "Entire rental unit",
    previewAmenities: [
      {
        0: "Wifi",
        1: "Heating",
      },
    ],
    price: {
      currency: "USD",
      total: 59,
    },
  },
  {
    name: "Room in the heart of Paris",
    id: 11,
    city: "Australia",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-53700221/original/a7799717-0751-4b7c-a6f1-59baff77a2ff.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-53700221/original/103581a3-4f7e-4ea6-9743-58c8012f04db.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-53700221/original/3c8cb4c1-3c57-4526-9fa5-cfb1be4ff6e6.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-53700221/original/3cd4cecb-6c22-4f6d-bd0f-2e86304643f9.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-53700221/original/10a39643-e7d5-4947-bacb-13c9fb2c6367.jpeg?im_w=720",
    ],
    isSuperhost: false,
    rating: 4.74,
    type: "Entire rental unit",
    previewAmenities: [
      {
        0: "Wifi",
        1: "Heating",
      },
    ],
    price: {
      currency: "USD",
      total: 62,
    },
  },
  {
    name: "Room in the heart of Paris",
    id: 12,
    city: "Brasil",
    images: [
      "https://a0.muscache.com/im/pictures/bfb3bdd5-22a6-4d02-8369-21d56660f34b.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/f65c5dd7-9235-4f14-a2dc-ebe670756bc3.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/c03fd951-8bf3-45bb-8d33-df93c4e75184.jpg?im_w=720",
    ],
    isSuperhost: false,
    rating: 4.74,
    type: "Entire rental unit",
    previewAmenities: [
      {
        0: "Wifi",
        1: "Heating",
      },
    ],
    price: {
      currency: "USD",
      total: 56,
    },
  },
  {
    name: "Room in the heart of Paris",
    id: 13,
    city: "Malaga",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-43449093/original/49a62f19-7135-45ae-9811-441891d5279d.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/4a07fe2a-8c53-47ff-9093-7e1732972f4d.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/e8e77ec9-966c-407e-9ff6-f75231b9fbb5.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/f37c0947-9f4e-409a-b98e-8db0f37d3e8f.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/daa9323f-e8be-4c3d-9068-f6331ad5316a.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/c3b8456c-4979-458e-a739-1528ac6672cc.jpg?im_w=720",
    ],
    isSuperhost: false,
    rating: 4.74,
    type: "Entire rental unit",
    previewAmenities: [
      {
        0: "Wifi",
        1: "Heating",
      },
    ],
    price: {
      currency: "USD",
      total: 43,
    },
  },
  {
    name: "Room in the heart of Paris",
    id: 15,
    city: "Paris",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-53700221/original/a7799717-0751-4b7c-a6f1-59baff77a2ff.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-53700221/original/103581a3-4f7e-4ea6-9743-58c8012f04db.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-53700221/original/3c8cb4c1-3c57-4526-9fa5-cfb1be4ff6e6.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-53700221/original/3cd4cecb-6c22-4f6d-bd0f-2e86304643f9.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-53700221/original/10a39643-e7d5-4947-bacb-13c9fb2c6367.jpeg?im_w=720",
    ],
    isSuperhost: false,
    rating: 4.74,
    type: "Entire rental unit",
    previewAmenities: [
      {
        0: "Wifi",
        1: "Heating",
      },
    ],
    price: {
      currency: "USD",
      total: 57,
    },
  },
  {
    name: "Room in the heart of Paris",
    id: 16,
    city: "Paris",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-43449093/original/49a62f19-7135-45ae-9811-441891d5279d.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/4a07fe2a-8c53-47ff-9093-7e1732972f4d.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/e8e77ec9-966c-407e-9ff6-f75231b9fbb5.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/f37c0947-9f4e-409a-b98e-8db0f37d3e8f.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/daa9323f-e8be-4c3d-9068-f6331ad5316a.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/c3b8456c-4979-458e-a739-1528ac6672cc.jpg?im_w=720",
    ],
    isSuperhost: false,
    rating: 4.74,
    type: "Entire rental unit",
    previewAmenities: [
      {
        0: "Wifi",
        1: "Heating",
      },
    ],
    price: {
      currency: "USD",
      total: 36,
    },
  },
];

export default data;
