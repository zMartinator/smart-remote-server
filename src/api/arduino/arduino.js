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
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/PWR');

  respondWithResult(response)(5);
}

export function volumeUp(request, response) {
  console.log(request.params.value);
  console.log("Here");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/vUp');

  respondWithResult(response)(5);
}


export function volumeDown(request, response) {
  console.log(request.params.value);
  console.log("Here");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/vDown');

  respondWithResult(response)(5);
}

export function mute(request, response) {
  console.log(request.params.value);
  console.log("Here");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/MUTE');

  respondWithResult(response)(5);
}

export function channelUp(request, response) {
  console.log(request.params.value);
  console.log("Here");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/cUp');

  respondWithResult(response)(5);
}

export function channelDown(request, response) {
  console.log(request.params.value);
  console.log("Here");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/cDown');

  respondWithResult(response)(5);
}

export function up(request, response) {
  console.log(request.params.value);
  console.log("up");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/UP');

  respondWithResult(response)(5);
}

export function down(request, response) {
  console.log(request.params.value);
  console.log("down");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/DOWN');

  respondWithResult(response)(5);
}

export function left(request, response) {
  console.log(request.params.value);
  console.log("left");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/LEFT');

  respondWithResult(response)(5);
}

export function right(request, response) {
  console.log(request.params.value);
  console.log("right");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/RIGHT');

  respondWithResult(response)(5);
}

export function enter(request, response) {
  console.log(request.params.value);
  console.log("enter");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/ENTER');

  respondWithResult(response)(5);
}

export function menu(request, response) {
  console.log(request.params.value);
  console.log("menu");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/MENU');

  respondWithResult(response)(5);
}

export function input(request, response) {
  console.log(request.params.value);
  console.log("input");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/INPUT');

  respondWithResult(response)(5);
}

export function exit(request, response) {
  console.log(request.params.value);
  console.log("exit");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/EXIT');

  respondWithResult(response)(5);
}

export function last(request, response) {
  console.log(request.params.value);
  console.log("last");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/LAST');

  respondWithResult(response)(5);
}

export function one(request, response) {
  console.log(request.params.value);
  console.log("one");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/1');

  respondWithResult(response)(5);
}

export function two(request, response) {
  console.log(request.params.value);
  console.log("two");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/2');

  respondWithResult(response)(5);
}

export function three(request, response) {
  console.log(request.params.value);
  console.log("three");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/3');

  respondWithResult(response)(5);
}

export function four(request, response) {
  console.log(request.params.value);
  console.log("four");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/4');

  respondWithResult(response)(5);
}

export function five(request, response) {
  console.log(request.params.value);
  console.log("five");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/5');

  respondWithResult(response)(5);
}

export function six(request, response) {
  console.log(request.params.value);
  console.log("six");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/6');

  respondWithResult(response)(5);
}

export function seven(request, response) {
  console.log(request.params.value);
  console.log("seven");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/7');

  respondWithResult(response)(5);
}

export function eight(request, response) {
  console.log(request.params.value);
  console.log("eight");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/8');

  respondWithResult(response)(5);
}

export function nine(request, response) {
  console.log(request.params.value);
  console.log("nine");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/9');

  respondWithResult(response)(5);
}

export function zero(request, response) {
  console.log(request.params.value);
  console.log("zero");
  //ip address of arduino/arduino/volumeUp
  axios.get('http://192.168.0.20/arduino/'+request.params.value+'/0');

  respondWithResult(response)(5);
}
