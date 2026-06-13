export interface Service {
  id:          string
  title:       string
  description: string
  photoLabel:  string   // teks placeholder — ganti dengan path foto asli nanti
  iconPath:    string   // SVG path d=""
  imageUrl?:    string
}

export const services: Service[] = [
  {
    id:          'tanah',
    title:       'Jasa Pekerjaan Tanah dan Infrastruktur',
    description:
      'Menyediakan layanan pemerataan dan penimbunan tanah menggunakan berbagai material: ' +
      'tanah merah, humus, pasir urug, pasir kasar, batu anderla, batu bujang dan batu krokos.',
    photoLabel:  'FOTO PEKERJAAN\nTANAH',
    iconPath:    'M4 20h16v-2H4v2zm0-4h16v-2H4v2zm0-4h16V10H4v2zm0-8v2h16V4H4z',
    imageUrl:    '/images/tanah.png',
    
  },
  {
    id:          'pagar',
    title:       'Pemasangan Pagar Panel Beton',
    description:
      'Pengadaan material pagar panel beton dan jasa pemasangan pagar panel serta pondasi ' +
      'batu kali maupun batu-bata.',
    photoLabel:  'FOTO PAGAR\nPANEL BETON',
    iconPath:    'M3 3h18v2H3zm0 4h18v2H3zm0 4h18v2H3zm0 4h18v2H3zm0 4h18v2H3z',
    imageUrl:    '/images/pagarbeton.png',
  },
  {
    id:          'alat-berat',
    title:       'Penyewaan Alat Berat',
    description:
      'Menyewakan alat berat seperti excavator, loader, dan dump truck untuk kebutuhan proyek Anda.',
    photoLabel:  'FOTO ALAT\nBERAT',
    iconPath:
      'M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z' +
      'M6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z' +
      'M19.5 9.5l1.96 2.5H17V9.5h2.5z' +
      'M18 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
      imageUrl:    '/images/alatberat.png',
  },
  {
    id:          'konstruksi',
    title:       'Pengembangan dan Konstruksi',
    description:
      'Bertindak sebagai pengembang, perencana dan pelaksana pemborongan (general contractor) ' +
      'dalam berbagai proyek pembangunan.',
    photoLabel:  'FOTO PROYEK\nKONSTRUKSI',
    iconPath:    'M12 3L2 12h3v8h6v-5h2v5h6v-8h3L12 3z',
    imageUrl:    '/images/konstruksi.png',
  },
  {
    id:          'bengkel',
    title:       'Perbengkelan dan Perawatan Kendaraan',
    description:
    'Pemeliharaan dan perawatan berbagai jenis kendaraan bermotor serta alat berat lainnya.',
    photoLabel:  'FOTO\nBENGKEL',
    iconPath:
      'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61' +
      'l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54' +
      'c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94' +
      'l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58' +
      'c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32' +
      'c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84' +
      'c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22' +
      'l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58z' +
      'M12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z',
      imageUrl:    '/images/perbengkelan.png',
  },
]
