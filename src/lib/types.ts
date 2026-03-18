export interface TimelineItem {
  id: string;
  title: string;
  place: string;
  year: string;
  type: string;
  category: 'education' | 'experience' | 'certification' | 'extracurricular';
  description?: string;
  spanClassName?: string; // e.g., "md:col-span-2 md:row-span-2"
  image?: string;
  link?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[]; // List of specifics (Notion style)
}
