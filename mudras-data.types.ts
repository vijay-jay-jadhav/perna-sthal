// Mudras comprehensive dataset transcribed directly from final Prerna Sthal source PDF
export interface MudraSymbol {
  icon: string;
  titleEn: string;
  titleMr: string;
  descEn: string;
  descMr: string;
}

export interface MudraItem {
  id: string;
  file: string;
  num: string;
  titleEn: string;
  titleEnFull: string;
  titleMr: string;
  taglineEn: string;
  taglineMr: string;
  iconType: string;
  image?: string | null;
  mrParas: string[];
  enParas: string[];
  symbols: MudraSymbol[];
  audioMr: string;
  audioEn: string;
}
