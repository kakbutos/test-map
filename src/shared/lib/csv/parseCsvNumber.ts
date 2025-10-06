export const parseCsvNumber = (value?: string): number =>
    Number.parseFloat(value?.trim().replace(',', '.') ?? '');
