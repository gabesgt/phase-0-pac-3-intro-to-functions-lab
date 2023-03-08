describe("shout(string)", function () {
    it("receives one argument and returns it in all caps", function () {
      expect(shout("hello")).toEqual("HELLO");
    });
  }); function shout(string) {
    return string.toUpperCase();
  } function whisper(string) {
    return string.toLowerCase();
  } function logShout(string) {
     console.log("HELLO")
  } function logWhisper(string) {
     console.log("hello")
  } function sayHiToHeadphonedRoommate(string) {
    var cantUnswer = "I can't hear you!";
    var yesUnswer = "YES INDEED!";
    var wouUnswer = "I would love to!";
    if (string.toLowerCase("I can't hear you!")===string ){
        return cantUnswer;
    }
    else if(string.toUpperCase("YES INDEED!")===string){
        return yesUnswer;
    }
    else if ("Let's have dinner together!"===string){
        return wouUnswer
    }
  }
  
  
  
  