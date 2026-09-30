import { budget } from '@/budget.json';

describe('budget list', () => {
  it('includes the 2026/2027 adopted budget link', () => {
    const entry = budget.find((item) => item.name === '2026/2027');

    expect(entry).toBeDefined();
    expect(entry?.link).toBe(
      'https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/Adopted%20Budget%2026-27%20electronic%20copy.pdf?alt=media&token=99ebc812-57ca-496d-a4b1-e3d9b2a96e13'
    );
  });
});
