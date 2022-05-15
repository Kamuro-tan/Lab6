
// функция создания массива целей, отсортированного по тегам
function organizeByTags(toDoObjects) {
    var organizedByTag = [];

    toDoObjects.forEach(function(toDoObject) {
        toDoObject.tags.forEach(function(objectTag) {
            if (organizedByTag.length == 0) {
                organizedByTag.push({
                    name: objectTag,
                    toDos: [toDoObject.description]
                });
            } else {
                var i = false;  // существует ли уже такой тег в списке тегов?
                organizedByTag.forEach(function(organizedByTagObject) {
                    if (objectTag == organizedByTagObject.name) {
                        organizedByTagObject.toDos.push(toDoObject.description);
                        i = true;
                    }
                });
                if (i == false) {
                    organizedByTag.push({
                        name: objectTag,
                        toDos: [toDoObject.description]
                    });
                }
            }
        });
    });

    return organizedByTag;
}
