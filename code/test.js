// ==q1
// import q1 from './q-1';
// test('q1返回数组内相加等于目标数字的项的索引', () => {
//   expect(q1([2, 7, 11, 15], 9)).toEqual([0, 1]);
// });

// ==q2
// import q2 from './q-2';
// let l1 = {
//   val: 2,
//   next: { val: 4, next: { val: 3, next: { val: 1, next: null } } }
// };
// let l2 = {
//   val: 5,
//   next: { val: 6, next: { val: 4, next: null } }
// };
// test('q2两数相加', () => {
//   expect(q2(l1, l2)).toEqual({
//     val: 7,
//     next: { val: 0, next: { val: 8, next: { val: 1, next: null } } }
//   });
// });

// ==q3
// import q3 from './q-3';

// describe('q3无重复字符的最长子串', () => {
//   test('abcabcdbb', () => {
//     expect(q3('abcabcdbb')).toBe(4);
//   });
//   test('d', () => {
//     expect(q3(' ')).toBe(1);
//   });
//   test('空白', () => {
//     expect(q3('')).toBe(0);
//   });
//   test('au', () => {
//     expect(q3('au')).toBe(2);
//   });
//   test('dvdf', () => {
//     expect(q3('dvdf')).toBe(3);
//   });
// });

// ==q5
// import q5 from './q-5';
// describe('q5最长回文子串', () => {
//   test('caba', () => {
//     expect(q5('caba')).toBe('aba');
//   });
//   test('babad', () => {
//     expect(q5('babad')).toBe('aba');
//   });
//   test('cbbd', () => {
//     expect(q5('cbbd')).toBe('bb');
//   });
// });

// ==q20
import q20 from './q-20';
describe('有效的括号', () => {
  // test('{({[]})}', () => {
  //   expect(q20('{({[]})}')).toBe(true);
  // });
  // test('{({})', () => {
  //   expect(q20('{({})')).toBe(false);
  // });
  // test('{({})]', () => {
  //   expect(q20('{({})')).toBe(false);
  // });
  // test('', () => {
  //   expect(q20('')).toBe(true);
  // });
  // test('(()(', () => {
  //   expect(q20('(()(')).toBe(false);
  // });
  // test('(()]', () => {
  //   expect(q20('(()]')).toBe(false);
  // });
  test("{{)}", () => {
    expect(q20("{{)}")).toBe(false);
  });
});
