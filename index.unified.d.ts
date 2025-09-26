// Type definitions for unified code index
export interface MenuEntry {
  key: string;
  name?: Record<string,string>;
  description?: Record<string,string>;
  price?: number;
  category?: string;
  tags?: string[];
  image?: string;
}

export const MENU_INDEX: MenuEntry[];
export function get(key: string): MenuEntry | undefined;
export function tName(item: MenuEntry, prefLangs?: string[]): string;
export function tDesc(item: MenuEntry, prefLangs?: string[]): string;
export function imageUrl(item: MenuEntry, prefix?: string): string;
export function byCategory(category: string): MenuEntry[];
export function search(query: string, opts?: { lang?: string; category?: string; tags?: string[] }): MenuEntry[];
export const version: string;
