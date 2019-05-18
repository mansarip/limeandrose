export const data = [
  {
    id: 1,
    nama: "SRA JAIM AIR BAROK",
    guruBesar: "PN. SHARIFAH BT HJ. SUMAN",
    telSekolah: "06-5292267",
    telBimbit: "019-6874205",
    thumbnail: "https://loremflickr.com/80/80?lock=1"
  },
  {
    id: 2,
    nama: "SRA JAIM AYER MERBAU",
    guruBesar: "PN. NAJATI BINTI MOHD YUSOF",
    telSekolah: "06-5218255",
    telBimbit: "016-2751089",
    thumbnail: "https://loremflickr.com/80/80?lock=2"
  },
  {
    id: 3,
    nama: "SRA JAIM AYER PANAS",
    guruBesar: "NORYANI BINTI MAT SUHAT",
    telSekolah: "06-5218078 ",
    telBimbit: "19-6179469",
    thumbnail: "https://loremflickr.com/80/80?lock=3"
  },
  {
    id: 4,
    nama: "SRA JAIM AIR TAWAR",
    guruBesar: "PN. NORAISHAH BINTI MOHAMAD RAMLI",
    telSekolah: "06-2636513",
    telBimbit: "019-6552959",
    thumbnail: "https://loremflickr.com/80/80?lock=4"
  },
  {
    id: 5,
    nama: "SRA JAIM BATANG MELAKA",
    guruBesar: "SARIMAH BINTI SARING",
    telSekolah: "06-4462270",
    telBimbit: "013-6520097",
    thumbnail: "https://loremflickr.com/80/80?lock=9"
  },
  {
    id: 6,
    nama: "SRA JAIM BANDAR MERLIMAU",
    guruBesar: "PN. HAMIDAH BINTI HJ. FADZIL",
    telSekolah: "",
    telBimbit: "",
    thumbnail: "https://loremflickr.com/80/80?lock=6"
  },
  {
    id: 7,
    nama: "SRA JAIM BATU GAJAH",
    guruBesar: "PN. HJH.YUHANA BINTI ISMAIL",
    telSekolah: "06-2635324",
    telBimbit: "013-9221352",
    thumbnail: "https://loremflickr.com/80/80?lock=7"
  }
];

export const notes = `
## Props
| Key | Type | Required | Default | Description |
|---|
| \`items\` | Array | Yes | \`[]\` | Data dalam bentuk array, untuk dipaparkan pada senarai |
| \`showAvatar\` | Boolean | No | \`false\` | Jika \`true\`, gambar bulat di sebelah kiri setiap item akan dipaparkan |
| \`avatarKey\` | String | No | | Key untuk url gambar. Untuk menggunakan icon, boleh letak nama icon terus tanpa perlu letak url gambar |
| \`showSecondaryTitle\` | Boolean | No | \`false\` | |
| \`primaryTitleKey\` | String | Yes | | |
| \`secondaryTitleKey\` | String | No |  | |
| \`idKey\` | String or Number | Yes |  | |
| \`buttonMode\` | Boolean | No | \`false\` | Jika \`false\`, maka ia hanya akan dipaparkan sebagai list biasa |
| \`showDivider\` | Boolean | No |  \`true\`   |  Paparkan garisan selepas setiap item  |
| \`showRightArrow\` | Boolean | No |  \`false\`   |  Paparkan icon anak panah ke kanan  |

## Contoh Usage
~~~javascript
// import component
import ListOrganisasi from "./components/ListOrganisasi";

// usage
<ListOrganisasi
  items={data} // sila lihat data pada bahagian bawah
  showAvatar={true}
  showSecondaryTitle={true}
  primaryTitleKey="nama"
  secondaryTitleKey="tel"
  idKey="id"
  buttonMode={true}
  showDivider={true}
/>
~~~

## Contoh Data
~~~javascript
// sample data
const data = [
  {
    id: 1,
    nama: "SRA JAIM AIR BAROK",
    guruBesar: "PN. SHARIFAH BT HJ. SUMAN",
    telSekolah: "06-5292267",
    telBimbit: "019-6874205",
    thumbnail: "https://loremflickr.com/80/80?lock=1"
  },
  {
    id: 2,
    nama: "SRA JAIM AYER MERBAU",
    guruBesar: "PN. NAJATI BINTI MOHD YUSOF",
    telSekolah: "06-5218255",
    telBimbit: "016-2751089",
    thumbnail: "https://loremflickr.com/80/80?lock=2"
  },
  {
    id: 3,
    nama: "SRA JAIM AYER PANAS",
    guruBesar: "NORYANI BINTI MAT SUHAT",
    telSekolah: "06-5218078 ",
    telBimbit: "19-6179469",
    thumbnail: "https://loremflickr.com/80/80?lock=3"
  },
  {
    id: 4,
    nama: "SRA JAIM AIR TAWAR",
    guruBesar: "PN. NORAISHAH BINTI MOHAMAD RAMLI",
    telSekolah: "06-2636513",
    telBimbit: "019-6552959",
    thumbnail: "https://loremflickr.com/80/80?lock=4"
  },
  {
    id: 5,
    nama: "SRA JAIM BATANG MELAKA",
    guruBesar: "SARIMAH BINTI SARING",
    telSekolah: "06-4462270",
    telBimbit: "013-6520097",
    thumbnail: "https://loremflickr.com/80/80?lock=9"
  },
  {
    id: 6,
    nama: "SRA JAIM BANDAR MERLIMAU",
    guruBesar: "PN. HAMIDAH BINTI HJ. FADZIL",
    telSekolah: "",
    telBimbit: "",
    thumbnail: "https://loremflickr.com/80/80?lock=6"
  },
  {
    id: 7,
    nama: "SRA JAIM BATU GAJAH",
    guruBesar: "PN. HJH.YUHANA BINTI ISMAIL",
    telSekolah: "06-2635324",
    telBimbit: "013-9221352",
    thumbnail: "https://loremflickr.com/80/80?lock=7"
  }
];
~~~
`;
