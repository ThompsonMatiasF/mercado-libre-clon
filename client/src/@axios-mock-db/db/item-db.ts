import mock from '../mock';

const itemDB = {
  id: 'MLA844506827',
  site_id: 'MLA',
  title: 'Estéreo Para Auto Alpine Cde-hd149bt Negro',
  subtitle: null,
  seller_id: 9696552,
  category_id: 'MLA6867',
  official_store_id: null,
  price: 30000,
  base_price: 30000,
  original_price: 40000,
  currency_id: 'ARS',
  initial_quantity: 100,
  available_quantity: 50,
  sold_quantity: 0,
  sale_terms: [
    {
      id: 'INVOICE',
      name: 'Facturación',
      value_id: '6891885',
      value_name: 'Factura A',
      value_struct: null,
      values: [
        {
          id: '6891885',
          name: 'Factura A',
          struct: null,
        },
      ],
    },
    {
      id: 'WARRANTY_TYPE',
      name: 'Tipo de garantía',
      value_id: '2230279',
      value_name: 'Garantía de fábrica',
      value_struct: null,
      values: [
        {
          id: '2230279',
          name: 'Garantía de fábrica',
          struct: null,
        },
      ],
    },
    {
      id: 'WARRANTY_TIME',
      name: 'Tiempo de garantía',
      value_id: null,
      value_name: '365 días',
      value_struct: {
        number: 365,
        unit: 'días',
      },
      values: [
        {
          id: null,
          name: '365 días',
          struct: {
            number: 365,
            unit: 'días',
          },
        },
      ],
    },
  ],
  buying_mode: 'buy_it_now',
  listing_type_id: 'gold_pro',
  start_time: '2020-03-18T17:02:04.000Z',
  stop_time: '2040-03-13T04:00:00.000Z',
  condition: 'new',
  permalink: 'https://articulo.mercadolibre.com.ar/MLA-844506827-estereo-para-auto-alpine-cde-hd149bt-negro-_JM',
  thumbnail: 'http://mla-s2-p.mlstatic.com/901031-MLA40001059355_122019-I.jpg',
  secure_thumbnail: 'https://mla-s2-p.mlstatic.com/901031-MLA40001059355_122019-I.jpg',
  pictures: [
    {
      id: '901031-MLA40001059355_122019',
      url: 'http://mla-s2-p.mlstatic.com/901031-MLA40001059355_122019-O.jpg',
      secure_url: 'https://mla-s2-p.mlstatic.com/901031-MLA40001059355_122019-O.jpg',
      size: '500x242',
      max_size: '1328x643',
      quality: '',
    },
    {
      id: '974786-MLA33083174370_122019',
      url: 'http://mla-s2-p.mlstatic.com/974786-MLA33083174370_122019-O.jpg',
      secure_url: 'https://mla-s2-p.mlstatic.com/974786-MLA33083174370_122019-O.jpg',
      size: '500x243',
      max_size: '1321x643',
      quality: '',
    },
    {
      id: '814404-MLA33083174371_122019',
      url: 'http://mla-s2-p.mlstatic.com/814404-MLA33083174371_122019-O.jpg',
      secure_url: 'https://mla-s2-p.mlstatic.com/814404-MLA33083174371_122019-O.jpg',
      size: '500x444',
      max_size: '972x864',
      quality: '',
    },
    {
      id: '696915-MLA33083098460_122019',
      url: 'http://mla-s2-p.mlstatic.com/696915-MLA33083098460_122019-O.jpg',
      secure_url: 'https://mla-s2-p.mlstatic.com/696915-MLA33083098460_122019-O.jpg',
      size: '500x324',
      max_size: '1324x860',
      quality: '',
    },
  ],
  video_id: null,
  descriptions: [
    {
      id: 'MLA844506827-2573337041',
    },
  ],
  accepts_mercadopago: true,
  non_mercado_pago_payment_methods: [],
  shipping: {
    mode: 'me2',
    free_methods: [
      {
        id: 73328,
        rule: {
          default: true,
          free_mode: 'country',
          free_shipping_flag: true,
          value: null,
        },
      },
    ],
    tags: [
      'self_service_in',
      'mandatory_free_shipping',
    ],
    dimensions: null,
    local_pick_up: true,
    free_shipping: true,
    logistic_type: 'cross_docking',
    store_pick_up: false,
  },
  international_delivery_mode: 'none',
  seller_address: {
    city: {
      id: 'TUxBQkZMTzg5MjFa',
      name: 'Floresta',
    },
    state: {
      id: 'AR-C',
      name: 'Capital Federal',
    },
    country: {
      id: 'AR',
      name: 'Argentina',
    },
    search_location: {
      neighborhood: {
        id: 'TUxBQkZMTzg5MjFa',
        name: 'Floresta',
      },
      city: {
        id: 'TUxBQ0NBUGZlZG1sYQ',
        name: 'Capital Federal',
      },
      state: {
        id: 'TUxBUENBUGw3M2E1',
        name: 'Capital Federal',
      },
    },
    latitude: -34.619804,
    longitude: -58.486393,
    id: 189447698,
  },
  seller_contact: null,
  location: {},
  geolocation: {
    latitude: -34.619804,
    longitude: -58.486393,
  },
  coverage_areas: [],
  attributes: [
    {
      id: 'BRAND',
      name: 'Marca del stereo',
      value_id: '10343',
      value_name: 'Alpine',
      value_struct: null,
      values: [
        {
          id: '10343',
          name: 'Alpine',
          struct: null,
        },
      ],
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Otros',
    },
    {
      id: 'COLOR',
      name: 'Color',
      value_id: '52049',
      value_name: 'Negro',
      value_struct: null,
      values: [
        {
          id: '52049',
          name: 'Negro',
          struct: null,
        },
      ],
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Otros',
    },
    {
      id: 'DEPTH',
      name: 'Profundidad',
      value_id: '7720924',
      value_name: '161.5 mm',
      value_struct: {
        number: 161.5,
        unit: 'mm',
      },
      values: [
        {
          id: '7720924',
          name: '161.5 mm',
          struct: {
            number: 161.5,
            unit: 'mm',
          },
        },
      ],
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Otros',
    },
    {
      id: 'GTIN',
      name: 'Código universal de producto',
      value_id: '7845388',
      value_name: '793276012272',
      value_struct: null,
      values: [
        {
          id: '7845388',
          name: '793276012272',
          struct: null,
        },
      ],
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Otros',
    },
    {
      id: 'HEIGHT',
      name: 'Altura',
      value_id: '7677180',
      value_name: '50 mm',
      value_struct: {
        number: 50,
        unit: 'mm',
      },
      values: [
        {
          id: '7677180',
          name: '50 mm',
          struct: {
            number: 50,
            unit: 'mm',
          },
        },
      ],
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Otros',
    },
    {
      id: 'ITEM_CONDITION',
      name: 'Condición del ítem',
      value_id: '2230284',
      value_name: 'Nuevo',
      value_struct: null,
      values: [
        {
          id: '2230284',
          name: 'Nuevo',
          struct: null,
        },
      ],
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Otros',
    },
    {
      id: 'MAXIMUM_POWER_OUTPUT',
      name: 'Potencia máxima de salida',
      value_id: '114496',
      value_name: '50 W',
      value_struct: {
        number: 50,
        unit: 'W',
      },
      values: [
        {
          id: '114496',
          name: '50 W',
          struct: {
            number: 50,
            unit: 'W',
          },
        },
      ],
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Otros',
    },
    {
      id: 'MODEL',
      name: 'Modelo del stereo',
      value_id: '493142',
      value_name: 'CDE-HD149BT',
      value_struct: null,
      values: [
        {
          id: '493142',
          name: 'CDE-HD149BT',
          struct: null,
        },
      ],
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Otros',
    },
    {
      id: 'OEM',
      name: 'OEM',
      value_id: null,
      value_name: '149',
      value_struct: null,
      values: [
        {
          id: null,
          name: '149',
          struct: null,
        },
      ],
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Otros',
    },
    {
      id: 'POWER_OUTPUT_RMS',
      name: 'Potencia de salida (RMS)',
      value_id: '501844',
      value_name: '18 W',
      value_struct: {
        number: 18,
        unit: 'W',
      },
      values: [
        {
          id: '501844',
          name: '18 W',
          struct: {
            number: 18,
            unit: 'W',
          },
        },
      ],
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Otros',
    },
    {
      id: 'RADIO_TUNINGS',
      name: 'Sintonías de la radio',
      value_id: null,
      value_name: 'FM,AM',
      value_struct: null,
      values: [
        {
          id: '7877065',
          name: 'FM',
          struct: null,
        },
        {
          id: '7877066',
          name: 'AM',
          struct: null,
        },
      ],
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Otros',
    },
    {
      id: 'WIDTH',
      name: 'Ancho',
      value_id: '7677181',
      value_name: '178 mm',
      value_struct: {
        number: 178,
        unit: 'mm',
      },
      values: [
        {
          id: '7677181',
          name: '178 mm',
          struct: {
            number: 178,
            unit: 'mm',
          },
        },
      ],
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Otros',
    },
    {
      id: 'WITH_AUXILIARY_INPUT_ADAPTER',
      name: 'Con adaptador de entrada auxiliar',
      value_id: '242085',
      value_name: 'Sí',
      value_struct: null,
      values: [
        {
          id: '242085',
          name: 'Sí',
          struct: null,
        },
      ],
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Otros',
    },
    {
      id: 'WITH_BLUETOOTH',
      name: 'Con Bluetooth',
      value_id: '242085',
      value_name: 'Sí',
      value_struct: null,
      values: [
        {
          id: '242085',
          name: 'Sí',
          struct: null,
        },
      ],
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Otros',
    },
    {
      id: 'WITH_CD_PLAYER',
      name: 'Con reproductor de CD',
      value_id: '242085',
      value_name: 'Sí',
      value_struct: null,
      values: [
        {
          id: '242085',
          name: 'Sí',
          struct: null,
        },
      ],
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Otros',
    },
    {
      id: 'WITH_DETACHABLE_FRONT_PANEL',
      name: 'Con panel frontal desmontable',
      value_id: '242085',
      value_name: 'Sí',
      value_struct: null,
      values: [
        {
          id: '242085',
          name: 'Sí',
          struct: null,
        },
      ],
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Otros',
    },
    {
      id: 'WITH_RCA_OUTPUT',
      name: 'Con salida RCA',
      value_id: '242085',
      value_name: 'Sí',
      value_struct: null,
      values: [
        {
          id: '242085',
          name: 'Sí',
          struct: null,
        },
      ],
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Otros',
    },
    {
      id: 'WITH_SD_CARD_READER',
      name: 'Con lector de tarjeta SD',
      value_id: '242084',
      value_name: 'No',
      value_struct: null,
      values: [
        {
          id: '242084',
          name: 'No',
          struct: null,
        },
      ],
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Otros',
    },
    {
      id: 'WITH_USB',
      name: 'Con USB',
      value_id: '242085',
      value_name: 'Sí',
      value_struct: null,
      values: [
        {
          id: '242085',
          name: 'Sí',
          struct: null,
        },
      ],
      attribute_group_id: 'OTHERS',
      attribute_group_name: 'Otros',
    },
  ],
  warnings: [],
  listing_source: '',
  variations: [],
  status: 'active',
  sub_status: [],
  tags: [
    'brand_verified',
    'good_quality_picture',
    'good_quality_thumbnail',
    'loyalty_discount_eligible',
    'immediate_payment',
    'cart_eligible',
  ],
  warranty: 'Garantía de fábrica: 365 días',
  catalog_product_id: 'MLA6453306',
  domain_id: 'MLA-VEHICLE_STEREOS',
  parent_item_id: null,
  differential_pricing: null,
  deal_ids: [
    'MLA3883',
  ],
  automatic_relist: false,
  date_created: '2020-03-18T17:02:04.000Z',
  last_updated: '2020-04-18T04:54:15.150Z',
  health: null,
  catalog_listing: true,
};

const itemDescriptionDB = {
  text: '',
  plain_text: 'Ya sea en tramos cortos o largos, en la ruta, en la ciudad, yendo a trabajar o de vacaciones en ese lugar que tanto soñaste, el estéreo Alpine CDE-HD149BT va a ser tu mejor compañero para subir el volumen y disfrutar de cada camino. Siempre va a estar listo para que te sumerjas en la música que más te gusta y con el mejor sonido. ¡Hacé tus recorridos en auto más divertidos!\n\nSeguridad y autonomía\nPodrás quitar su panel desmontable cuando quieras y mantenerlo siempre protegido.\n\nPotencialo a tu medida\nSus conectores RCA te darán la posibilidad de incorporar otros componentes, como amplificadores y ecualizadores, y así mejorarás la calidad del sonido.',
  last_updated: '2020-03-18T17:02:04.000Z',
  date_created: '2020-03-18T17:02:04.000Z',
  snapshot: {
    url: 'http://descriptions.mlstatic.com/D-MLA844506827.jpg?hash=8520c3b8559cb08aa7e782b8f5334ffe_0x0',
    width: 0,
    height: 0,
    status: '',
  },
};

mock
  .onGet('/mock/items/test')
  .reply(() => {
    const response = {
      author: {
        name: 'Matias',
        lastname: 'Thompson',
      },
      item: {
        id: itemDB.id,
        title: itemDB.title,
        price: {
          currency: itemDB.currency_id,
          amount: itemDB.price,
          decimals: itemDB.price - Math.abs(itemDB.price),
        },
        picture: itemDB.pictures.length > 0 ? itemDB.pictures[0].url : itemDB.thumbnail,
        condition: itemDB.condition === 'new' ? 'Nuevo' : 'Usado',
        free_shipping: itemDB.shipping.free_shipping,
        address: itemDB.seller_address.state.name,
        sold_quantity: itemDB.sold_quantity,
        description: itemDescriptionDB.plain_text,
        categories: ["Mock category 4", "Mock category 5", "Mock category 6"],
      },
    };

    return [200, response];
  });
