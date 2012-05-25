function (doc) {
  if (doc.program[1].substr(0,7) === "A") {
    emit(doc.program, {
    	"group": doc.group,
    	"title": doc.title,
    	"watched": doc.watched,
    	"acquired": doc.acquired,
    	"ratestars": doc.slider,
    	"notes": doc.notes
    });
  }
};