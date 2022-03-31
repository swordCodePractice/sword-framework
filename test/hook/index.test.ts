import { useApi, Get, Post } from '../../src/hooks';
import { describe, it, expect } from 'vitest';

describe('useApi', () => {
  it('传递单个指示器，不传入任何参数', () => {
    const res = useApi({
      instruct: Get(),
      handler: () => {
        return {
          hello: 'message'
        };
      }
    });
    expect(res.instruct.method).toEqual(['GET']);
  });
  // it('传递单个指示器，传入空字符串', () => {
  //   const res = useApi({
  //     instruct: Get(''),
  //     handler: () => {
  //       return {
  //         hello: 'message'
  //       };
  //     }
  //   });
  //   expect(res.instruct.method).toEqual(['GET']);
  // });
  // it('传递多个指示器，只传递空数组', () => {
  //   const res = useApi({
  //     instruct: [],
  //     handler: () => {
  //       return {
  //         hello: 'message'
  //       };
  //     }
  //   });
  //   expect(res.instruct.method).toEqual(['GET']);
  // });
  // it('传递多个指示器，首个传值，剩下的随机非法值', () => {
  //   const res = useApi({
  //     instruct: [Get('/'), Post('/detail'), Post()],
  //     handler: () => {
  //       return {
  //         hello: 'message'
  //       };
  //     }
  //   });
  //   expect(res.instruct).toEqual({
  //     method: ['GET', 'POST'],
  //     path: '/'
  //   });
  // });
  // it('传递多个指示器，首个非法值，剩下的随机值', () => {
  //   const res = useApi({
  //     instruct: [Get(''), Post('/detail'), Post()],
  //     handler: () => {
  //       return {
  //         hello: 'message'
  //       };
  //     }
  //   });
  //   expect(res.instruct).toEqual({
  //     method: ['POST'],
  //     path: '/detail'
  //   });
  // });
});