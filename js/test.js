describe("Brackets balance verification tests: ", function() {

    it("Checking for balance of brackets: {[()]}", function() {
        assert.equal(testFunction("{[()]}"), -1);
    });

    it("Checking for balance of brackets without one closing bracket: {[(]}", function() {
        assert.equal(testFunction("{[(]}"), 3);
    });

    it("Checking for balance of brackets: {{[[(())]]}}", function() {
        assert.equal(testFunction("{{[[(())]]}}"), -1);
    });

    it("Checking for balance of brackets with symbol s", function() {
        assert.equal(testFunction("s[]"), "IllegalArgumentException");
    });

    it("Checking for balance of brackets with symbol z", function() {
        assert.equal(testFunction("{[z()]}"), "IllegalArgumentException");
    });

    it("Checking for balance of brackets: {[{([(())])}]}", function() {
        assert.equal(testFunction("{[{([(())])}]}"), -1);
    });

    it("Checking for balance of brackets with one symbol - z and without one opening bracket: {[[((z{)}))]]}", function() {
        assert.equal(testFunction("{[[((z{)}))]]}"), "IllegalArgumentException");
    });

    it(`Checking for balance in empty input: ""`, function() {
        assert.equal(testFunction(""), "Empty input");
    });

    it(`Checking for balance of brackets, which begin with closing bracket: }()`, function() {
        assert.equal(testFunction("}()"), 1);
    });

    it(`Checking for balance of brackets: (){}`, function() {
        assert.equal(testFunction("(){}"), -1);
    });
    
    it(`Checking for balance of brackets: [{}([]{})]`, function() {
        assert.equal(testFunction("[{}([]{})]"), -1);
    });

    it(`Checking for balance of brackets: {([{}({[()]}{()})])}`, function() {
        assert.equal(testFunction("[{}([]{})]"), -1);
    });

    it(`Checking for balance of brackets without one closing bracket: ({([{}({[()]}{()})])}{([{}({[({)]}{()})])})`, function() {
        assert.equal(testFunction("({([{}({[()]}{()})])}{([{}({[({)]}{()})])})"), 31);
    });

    it(`Checking for balance of brackets, beginning with closing bracket: }[{}([]{})]`, function() {
        assert.equal(testFunction("}[{}([]{})]"), 1);
    });
});