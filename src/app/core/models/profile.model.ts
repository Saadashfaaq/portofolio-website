export interface ProfileData {
  name: string;
  profilePicture: string;
  title: string;
  summary: string;
  address: string;
  phone: string;
  email: string;
  contactCards: ContactCard[];
}

export interface ContactCard {
  id: 'email' | 'linkedin' | 'github' | 'instagram' | 'cv' | 'whatsapp';
  label: string;
  value: string;
  subText: string;
  icon: string;
  url?: string;
  priority: number;
  isPrimary?: boolean;
}
