import mock from '../mock';

const itemDescriptionDB = {
  text: '',
  plain_text: 'CELUGADGETS - MERCADOLIDER PLATINUM\nHorarios: Lunes a Viernes de 10 a 19:30 hs y Sabados de 10 a 14 hs\nUbicacion: Las Cañitas - Palermo (CABA) cerca del Shopping Solar de la Abadia\n\n----------------------------\nAuriculares Inpods 12 \nDisponible en rosa, celeste y blanco.\nBluetooth 5.0\nSoporte HSP/HFP/A2DP/AVRCP/SPP\nControles de volumen y de temas tactiles \nFrecuencia de respuesta 40 hz - 20 khz\nDistancia 8- 15m\nTamaño 56 mm x 44 mm x 21 mm\nPeso 45 g\nTiempo de uso 2-3 horas\nTiempo de carga de la caja 1 h\nSensibilidad 106 db +- 3bb\nLa caja inlcuye los dos auriculares, caja cargadora y un cable lightning a usb para su carga\n----------------------------\n\nENVIOS\n- Hacemos envios a todo el pais a traves de mercadoenvios. Si queres por mercadoenvios podes calcular el costo en la publicación debajo del boton comprar con tu codigo postal.\n\n- Si deseas envio en moto en Capital o Gran Buenos Aires al ofertar poner que lo retiras en el local y nos llamas o mandas mail asi combinamos el envio.\n\nMEDIOS DE PAGO\n- En mercadolibre solo aceptamos como medio de pago Mercadopago con todas sus formas de pagos y promociones.\n\nCualquier consulta nos haces una pregunta por este medio.\n\nCELUGADGETS',
  last_updated: '2019-11-02T14:37:38.000Z',
  date_created: '2019-11-02T14:37:38.000Z',
  snapshot: {
    url: 'http://descriptions.mlstatic.com/D-MLA823207388.jpg?hash=8520c3b8559cb08aa7e782b8f5334ffe_0x0',
    width: 0,
    height: 0,
    status: '',
  },
};

mock
  .onGet('/mock/items/:id/description')
  .reply(() => [200, itemDescriptionDB]);
