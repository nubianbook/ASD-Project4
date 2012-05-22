function (doc) {
  if (doc._id.substr(0, 6) === "Family:") {
    emit(doc._id);
  }
};