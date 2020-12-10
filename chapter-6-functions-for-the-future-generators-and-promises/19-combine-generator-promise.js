// ! This is a rough sketch, a minimum amount of code needed to combine generators and promises, don't use this in production.
async(function* () {
  try {
    const ninjas = yield getJSON("data/ninjas.json");
    const missions = yield getJSON(ninjas[0].missionsUrl);
    const missionDescription = yield getJSON(missions[0].detailsUrl);
  } catch (e) {
    console.log(e);
  }
});

function async(generator) {
  var iterator = generator();

  function handle(iteratorResult) {
    if (iteratorResult.done) {
      return;
    }

    const iteratorValue = iteratorResult.value;

    if (iteratorValue instanceof Promise) {
      iteratorValue
        .then((res) => handle(iterator.next(res)))
        .catch((err) => iterator.throw(err));
    }
  }

  try {
    handle(iterator.next());
  } catch (e) {
    iterator.throw(e);
  }
}
