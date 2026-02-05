import { LucideIcon } from 'lucide-react';

export enum ViewState {
  HOME = 'HOME',
  SERVICES = 'SERVICES',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
  TERMS = 'TERMS',
  PRIVACY = 'PRIVACY'
}

export type ServiceCategory = 'WORKFLOWS' | 'WEB' | 'DOMOTICA';

export interface WorkflowCardProps {
  id: string;
  category: ServiceCategory;
  title: string;
  description: string;
  longDescription?: string;
  priceSetup?: number;
  priceMonthly?: number;
  customPricing?: boolean; // New flag for custom quotes
  icon: LucideIcon;
  comingSoon?: boolean;
}

export interface NavItem {
  id: ViewState;
  label: string;
}