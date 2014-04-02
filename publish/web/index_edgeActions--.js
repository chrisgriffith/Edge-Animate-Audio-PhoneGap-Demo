
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bird}","click",function(sym,e){sym.play("flying");playPGAudio(getPhoneGapPath()+'audio/tweet.mp3');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.stop(0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'bird'
(function(symbolName){})("bird");
//Edge symbol end:'bird'

//=========================================================

//Edge symbol: 'cloud'
(function(symbolName){})("cloud");
//Edge symbol end:'cloud'
})(jQuery,AdobeEdge,"EDGE-5327561");function playPGAudio(url){console.log('playPGAudio');var my_media=new Media(url,function(){console.log("playAudio():Audio Success");},function(err){console.log("playAudio():Audio Error: "+err);});my_media.play();}
function getPhoneGapPath(){var path=window.location.pathname;path=path.substr(path,path.length-10);return'file://'+path;};