import _ from 'lodash';
import axios from 'axios';

function respondWithResult(res, statusCode = 200) {
  return function(entity) {
    if (entity)
      res.status(statusCode).json(entity);
  };
}

function arrayReplace(firstValue, secondValue) {
  if (_.isArray(firstValue)) return secondValue;
}

function saveUpdates(updates) {
  return function(entity) {
    const updated = _.merge(entity, updates, arrayReplace);
    return updated.save()
      .then(updated => updated);
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode = 500) {
  return function(err) {
    res.status(statusCode).send(err);
  };
}


export function power(request, response) {
  console.log(request.params.value);
  console.log("Here");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/power');

  respondWithResult(response)(5);
}

export function volumeUp(request, response) {
  console.log(request.params.value);
  console.log("Here");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/vUp');

  respondWithResult(response)(5);
}


export function volumeDown(request, response) {
  console.log(request.params.value);
  console.log("Here");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/vDown');

  respondWithResult(response)(5);
}

export function mute(request, response) {
  console.log(request.params.value);
  console.log("Here");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/mute');

  respondWithResult(response)(5);
}

export function channelUp(request, response) {
  console.log(request.params.value);
  console.log("Here");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/cUp');

  respondWithResult(response)(5);
}

export function channelDown(request, response) {
  console.log(request.params.value);
  console.log("Here");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/cDown');

  respondWithResult(response)(5);
}
