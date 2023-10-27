const {ballCollector} = require("./ballCollector")

describe("ballCollector", ()=>{
    it("sum of balls weighing 58g", ()=>{
        expect(ballCollector([61, 58, 58, 58, 66, 78])).toBe(174)
    })
})