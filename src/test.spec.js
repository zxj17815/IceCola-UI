function sayHello(name, fn) {
    if (name == 'IceCola') {
        fn()
    }
}
test('测试加法', () => {
    expect(1 + 2).toBe(3)
})

test('测试函数', () => {
    const fn = jest.fn()
    sayHello('IceCola', fn)
    expect(fn).toHaveBeenCalled()
})

test('对象赋值', () => {
    const data = { one: 1 }
    data['two'] = 2
    expect(data).toEqual({ one: 1, two: 2 })
})

test('添加正数不为零', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0)
        }
    }
})