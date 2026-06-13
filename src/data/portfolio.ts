export interface PortfolioPhoto {
  label: string  // teks placeholder — ganti src: string saat foto asli tersedia
  src?: string  // uncomment dan isi path foto asli nanti
  alt?: string
}

export interface PortfolioGroup {
  id:     string
  title:  string        // teks sebelum bold
  bold:   string        // bagian yang di-bold + gold
  photos: PortfolioPhoto[]
}

export const portfolioGroups: PortfolioGroup[] = [
  {
    id:     'pertamina',
    title:  'Pertamina Gas di Cambai,',
    bold:   'Prabumulih.',
    photos: [
      { label: 'FOTO PROYEK\nPERTAMINA 1', src: '/images/pertamina-1.png', alt: 'Proyek Pertamina Gas Cambai 1' },
      { label: 'FOTO PROYEK\nPERTAMINA 2', src: '/images/pertamina-2.png', alt: 'Proyek Pertamina Gas Cambai 1' },
    ],
  },
  {
    id:     'tol',
    title:  'Tol',
    bold:   'Palembang–Betung.',
    photos: [
      { label: 'FOTO PROYEK\nTOL 1', src: '/images/tol-1.png', alt: 'Proyek Pertamina Gas Cambai 1' },
      { label: 'FOTO PROYEK\nTOL 2', src: '/images/tol-2.png', alt: 'Proyek Pertamina Gas Cambai 1' },
    ],
  },
  {
    id:     'swasta',
    title:  'Berbagai Perusahaan Swasta di',
    bold:   'Sumatera Selatan.',
    photos: [
      { label: 'FOTO SWASTA 1', src: '/images/swasta-1.png', alt: 'Proyek Pertamina Gas Cambai 1' },
      { label: 'FOTO SWASTA 2', src: '/images/swasta-2.png', alt: 'Proyek Pertamina Gas Cambai 1' },
    ],
  },
  {
    id:     'stok-panel',
    title:  'Stok Panel PT. CPM —',
    bold:   '200 Papan & 40 Tiang/Hari',
    photos: [
      { label: 'FOTO STOK\nPANEL 1', src: '/images/stok-1.png', alt: 'Proyek Pertamina Gas Cambai 1' },
      { label: 'FOTO STOK\nPANEL 2', src: '/images/stok-2.png', alt: 'Proyek Pertamina Gas Cambai 1' },
    ],
  },
]

export const portfolioSidebar = {
  tag:         'Our Work',
  heading:     'Our\nPortfolio',
  description:
    'Portofolio kami mencerminkan pengalaman dan kepercayaan yang telah dibangun ' +
    'PT Catur Putra Manggala selama lebih dari 10 tahun dalam menangani berbagai proyek ' +
    'pagar panel beton. Setiap pekerjaan menunjukkan kualitas produk, profesionalisme tim, ' +
    'serta hasil pemasangan yang kuat, rapi, dan tepat waktu.',
  ctaLabel: 'SEE MORE ›',
} as const
