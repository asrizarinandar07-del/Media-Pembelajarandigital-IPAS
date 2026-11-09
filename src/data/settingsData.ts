import { AppSettings } from '../types';

export const DEFAULT_SETTINGS: AppSettings = {
  teacherName: "Asriza Rinandar, S.Pd",
  teacherNip: "-",
  principalName: "[Nama Kepala Sekolah]",
  principalNip: "[NIP Kepala Sekolah]",
  schoolName: "UPT SPF SD Inpres 105285 Tandam Hilir I",
  kkm: 75,
  location: "Tandam Hilir I",
  reportDate: new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
};
