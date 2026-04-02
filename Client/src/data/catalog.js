import heroImg from '../assets/hero.png'

export const laptopProducts = [
  {
    id: 'laptop-rog-g16',
    name: 'ROG Zephyrus G16 2025',
    price: 42990000,
    displayPrice: '42.990.000₫',
    specs: ['Intel Core Ultra 9', 'RTX 4070 8GB', '32GB DDR5', '1TB NVMe'],
    description: 'Laptop gaming siêu mỏng, cân bằng hiệu năng và di động, phù hợp đồ họa/gaming.',
    image: heroImg,
  },
  {
    id: 'laptop-mbp-m4',
    name: 'MacBook Pro 14" M4',
    price: 54990000,
    displayPrice: '54.990.000₫',
    specs: ['Apple M4 Pro', '14" Liquid Retina XDR', '18GB RAM', '512GB SSD'],
    description: 'Màn XDR siêu đẹp, pin trâu, tối ưu cho lập trình và sáng tạo nội dung.',
    image: heroImg,
  },
  {
    id: 'laptop-thinkpad-x1',
    name: 'ThinkPad X1 Carbon Gen 13',
    price: 36490000,
    displayPrice: '36.490.000₫',
    specs: ['Intel Core Ultra 7', '16GB LPDDR5X', '1TB SSD', 'Trọng lượng 1.1kg'],
    description: 'Doanh nhân siêu nhẹ, bàn phím xịn, độ bền MIL-STD, pin đủ một ngày.',
    image: heroImg,
  },
]

export const accessories = [
  {
    id: 'acc-logi-mx3s',
    name: 'Chuột Logitech MX Master 3S',
    price: 2290000,
    displayPrice: '2.290.000₫',
    desc: 'Chuột không dây cao cấp, phù hợp làm việc văn phòng và thiết kế.',
    details: ['Silent click', 'Kết nối 3 thiết bị', 'Cảm biến 8K DPI'],
    image: heroImg,
  },
  {
    id: 'acc-key-k8pro',
    name: 'Bàn phím Keychron K8 Pro',
    price: 2590000,
    displayPrice: '2.590.000₫',
    desc: 'Bàn phím cơ Bluetooth, hot-swap, pin lâu cho coder.',
    details: ['Layout TKL', 'Kết nối 3 chế độ', 'Hot-swap'],
    image: heroImg,
  },
  {
    id: 'acc-hub-ugreen',
    name: 'Hub USB-C UGREEN 7 in 1',
    price: 990000,
    displayPrice: '990.000₫',
    desc: 'Mở rộng cổng HDMI, USB, SD card cho laptop mỏng nhẹ.',
    details: ['HDMI 4K', 'USB 3.0 x 3', 'SD/TF'],
    image: heroImg,
  },
]

export const findLaptopById = (id) => laptopProducts.find((p) => p.id === id)
export const findAccessoryById = (id) => accessories.find((p) => p.id === id)
