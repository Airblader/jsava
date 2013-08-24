describe('LinkedList', function () {
    var LinkedList = jsava.util.LinkedList,
        list;

    beforeEach(function () {
        list = new LinkedList();
    });

    it('has the correct class name', function () {
        expect(list.getClassName()).toBe('jsava.util.LinkedList');
    });

    it('has size 0', function () {
        expect(list.size()).toBe(0);
        list.add(3);
        list.add(4);
        expect(list.size()).toBe(2)
    });

    it('has add works', function () {
        list.add(3);
        list.add(4);
        list.add(5);
        expect(list.getFirst()).toBe(3);
        expect(list.getLast()).toBe(5);
        expect(list.asArray()).toEqual([3, 4, 5])
    });

    it('has entries', function () {
        list.addAll([0, 1, 2, 3, 4, 5, 6, 7]);
        expect(list.size()).toBe(8);
        expect(list.entry(2).element).toBe(2);
        expect(list.entry(6).element).toBe(6);
    });
    it('has removing', function () {
        var l = [0, undefined, 1, 2, 3, 4, 5, 6];
        list.addAll(l);
        list.remove(1);
        expect(list.size()).toBe(l.length - 1);
        list.remove(4);
        expect(list.asArray()).toEqual([0, 1, 2, 3, 5, 6]);
        expect(list.size()).toBe(l.length - 2);
        list.remove();
        expect(list.asArray()).toEqual([1, 2, 3, 5, 6]);
    });
});