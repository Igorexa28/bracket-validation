describe("Brackets balance verification, in tests number 88 means IllegalArgumentException", function() {

    it("Checking for balance of brackets: {[()]}", function() {
        assert.equal(balanced("{[()]}"), -1);
    });

    it("Checking for balance of brackets: {[(]}", function() {
        assert.equal(balanced("{[(]}"), 3);
    });

    it("Checking for balance of brackets: {{[[(())]]}}", function() {
        assert.equal(balanced("{{[[(())]]}}"), -1);
    });

    it("Checking for balance of brackets with symbol s", function() {
        assert.equal(balanced("s[]"), 88);
    });

    it("Checking for balance of brackets with symbol z", function() {
        assert.equal(balanced("{[z()]}"), 88);
    });

    it("Checking for balance of brackets: {[{([(())])}]}", function() {
        assert.equal(balanced("{[{([(())])}]}"), -1);
    });

    it("Checking for balance of brackets with symbol and without one bracket: {[[((z{)}))]]}", function() {
        assert.equal(balanced("{[[((z{)}))]]}"), 88);
    });
});