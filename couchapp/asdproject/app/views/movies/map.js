function (doc) {
  if (doc._id.substr(0,7) === "Family:") {
    emit(doc._id, {
    	"group": doc.group,
    	"title": doc.title,
    	"watched": doc.watched,
    	"acquired": doc.acquired,
    	"ratestars": doc.slider,
    	"notes": doc.notes
    });
  }
};