import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateDynamicSize(aspectRatioType:string, targetSize: number) {
  let width, height;
  switch (aspectRatioType) {
    case 'vertical':
      width = targetSize;
      height = targetSize * (16 / 9);
      break;
    case 'square':
      width = targetSize;
      height = targetSize;
      break;
    case 'horizontal':
      height = targetSize;
      width = targetSize * (9 / 16);
      break;
    default:
      height = 500;
      width = 500;
  }

  return { width, height };
}

